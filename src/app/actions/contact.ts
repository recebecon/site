"use server";

import { segments } from "@/content/segments";
import type { ContactState } from "@/lib/contact";

const roles = ["sindico", "administradora", "conselho", "outro"] as const;

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

  const fieldErrors: ContactState["fieldErrors"] = {};

  if (input.name.length < 2) fieldErrors.name = "Informe o nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    fieldErrors.email = "Informe um e-mail válido.";
  }
  if (input.phone.replace(/\D/g, "").length < 10) {
    fieldErrors.phone = "Informe um telefone com DDD.";
  }
  if (!roles.includes(input.role as (typeof roles)[number])) {
    fieldErrors.role = "Escolha quem está pedindo o diagnóstico.";
  }
  if (!["indefinido", ...segments.map((segment) => segment.slug)].includes(input.segment)) {
    fieldErrors.segment = "Escolha o tipo de condomínio.";
  }
  if (input.message.length < 12) {
    fieldErrors.message = "Descreva a carteira em pelo menos uma frase.";
  }

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
        "O pedido foi validado, mas o envio ainda não está ligado a um canal. Configure CONTACT_WEBHOOK_URL para receber os diagnósticos.",
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
