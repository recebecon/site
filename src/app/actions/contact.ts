"use server";

import type { ContactState } from "@/lib/contact";
import { validateContact } from "@/lib/fields";

export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  if (read(formData, "company_website")) {
    return {
      status: "success",
      message: "Pedido registrado.",
      fieldErrors: {},
    };
  }

  const input = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    role: read(formData, "role"),
    segment: read(formData, "segment"),
    message: read(formData, "message"),
  };

  const fieldErrors = validateContact(input);

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Revise os campos destacados.",
      fieldErrors,
    };
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (!webhook) {
    return {
      status: "error",
      message:
        "O pedido está correto, mas o envio ainda não está disponível. Tente de novo mais tarde.",
      fieldErrors: {},
    };
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(input),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "Não foi possível enviar agora. Tente de novo em instantes.",
        fieldErrors: {},
      };
    }
  } catch {
    return {
      status: "error",
      message: "Não foi possível enviar agora. Tente de novo em instantes.",
      fieldErrors: {},
    };
  }

  return {
    status: "success",
    message: "Pedido recebido. A equipe retorna pelo e-mail ou telefone informados.",
    fieldErrors: {},
  };
}

function read(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}
