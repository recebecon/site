"use server";

import { documentError, formatDocument, isValidDocument, normalizeDocument } from "@/lib/documents";
import type { ConsultaState, Pendencia } from "@/lib/consulta";

export async function submitConsulta(
  _previous: ConsultaState,
  formData: FormData,
): Promise<ConsultaState> {
  const document = normalizeDocument(read(formData, "document"));
  const invalid = documentError(document);

  if (invalid || !isValidDocument(document)) {
    return {
      status: "error",
      message: invalid ?? "Informe um CPF ou CNPJ válido.",
      documentLabel: "",
      items: [],
    };
  }

  const endpoint = process.env.CONSULTA_API_URL;

  if (!endpoint) {
    return {
      status: "error",
      message:
        "A consulta ainda não está ligada ao sistema de pendências. Tente de novo mais tarde ou fale com a administração do condomínio.",
      documentLabel: formatDocument(document),
      items: [],
    };
  }

  try {
    const headers: Record<string, string> = { "content-type": "application/json" };
    if (process.env.CONSULTA_API_TOKEN) {
      headers.authorization = `Bearer ${process.env.CONSULTA_API_TOKEN}`;
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ document }),
      signal: AbortSignal.timeout(8000),
    });

    if (response.status === 404) {
      return empty(document);
    }

    if (!response.ok) {
      return failed();
    }

    const payload: unknown = await response.json();
    const items = parseItems(payload);

    if (items.length === 0) return empty(document);

    return {
      status: "found",
      message: "Pendências encontradas para este documento.",
      documentLabel: formatDocument(document),
      items,
    };
  } catch {
    return failed();
  }
}

function empty(digits: string): ConsultaState {
  return {
    status: "empty",
    message: "Não há pendências registradas na Recebecom para este documento.",
    documentLabel: formatDocument(digits),
    items: [],
  };
}

function failed(): ConsultaState {
  return {
    status: "error",
    message: "Não foi possível consultar agora. Tente de novo em instantes.",
    documentLabel: "",
    items: [],
  };
}

function parseItems(payload: unknown): Pendencia[] {
  const source = Array.isArray(payload)
    ? payload
    : payload && typeof payload === "object" && "items" in payload
      ? (payload as { items: unknown }).items
      : [];

  if (!Array.isArray(source)) return [];

  return source.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const record = item as Record<string, unknown>;
    const condominium = text(record.condominium);
    const description = text(record.description);
    if (!condominium && !description) return [];

    return [
      {
        condominium,
        unit: text(record.unit),
        description,
        amount: text(record.amount),
        dueDate: formatDate(text(record.dueDate)),
        status: text(record.status),
      },
    ];
  });
}

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function formatDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

function read(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}
