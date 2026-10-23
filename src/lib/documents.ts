export type DocumentKind = "cpf" | "cnpj";

export type FieldTone = "idle" | "hint" | "ok" | "error";

export type FieldFeedback = {
  tone: FieldTone;
  valid: boolean;
  message: string;
};

const ddds = new Set([
  "11", "12", "13", "14", "15", "16", "17", "18", "19",
  "21", "22", "24", "27", "28",
  "31", "32", "33", "34", "35", "37", "38",
  "41", "42", "43", "44", "45", "46", "47", "48", "49",
  "51", "53", "54", "55",
  "61", "62", "63", "64", "65", "66", "67", "68", "69",
  "71", "73", "74", "75", "77", "79",
  "81", "82", "83", "84", "85", "86", "87", "88", "89",
  "91", "92", "93", "94", "95", "96", "97", "98", "99",
]);

export function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function normalizeDocument(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 14);
}

export function maskDocument(value: string) {
  const normalized = normalizeDocument(value);
  const asCnpj = /[A-Z]/.test(normalized) || normalized.length > 11;
  return asCnpj ? maskCnpj(normalized) : maskCpf(normalized);
}

export function maskPhone(value: string) {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;

  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);
  if (rest.length <= 4) return `(${ddd}) ${rest}`;
  if (digits.length <= 10) return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`;
  return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`;
}

export function documentKind(value: string): DocumentKind | null {
  const normalized = normalizeDocument(value);
  if (/^\d{11}$/.test(normalized)) return "cpf";
  if (/^[A-Z0-9]{12}\d{2}$/.test(normalized)) return "cnpj";
  return null;
}

export function isValidDocument(value: string) {
  const normalized = normalizeDocument(value);
  const kind = documentKind(normalized);
  if (kind === "cpf") return isValidCpf(normalized);
  if (kind === "cnpj") return isValidCnpj(normalized);
  return false;
}

export function formatDocument(value: string) {
  const normalized = normalizeDocument(value);
  if (/^\d{11}$/.test(normalized)) return maskCpf(normalized);
  if (/^[A-Z0-9]{14}$/.test(normalized)) return maskCnpj(normalized);
  return normalized;
}

export function documentFeedback(value: string): FieldFeedback {
  const normalized = normalizeDocument(value);

  if (!normalized) {
    return {
      tone: "idle",
      valid: false,
      message: "CPF com 11 números, ou CNPJ com 14 caracteres.",
    };
  }

  const cnpj = /[A-Z]/.test(normalized) || normalized.length > 11;

  if (!cnpj) {
    const missing = 11 - normalized.length;
    if (missing > 0) {
      return {
        tone: "hint",
        valid: false,
        message: `CPF: ${missingLabel(missing, "número")}.`,
      };
    }
    if (!isValidCpf(normalized)) {
      return {
        tone: "error",
        valid: false,
        message: "Esse CPF não confere. Revise os números.",
      };
    }
    return { tone: "ok", valid: true, message: "CPF válido." };
  }

  const missing = 14 - normalized.length;
  if (missing > 0) {
    return {
      tone: "hint",
      valid: false,
      message: `CNPJ: ${missingLabel(missing, "caractere")}.`,
    };
  }
  if (!isValidCnpj(normalized)) {
    return {
      tone: "error",
      valid: false,
      message: "Esse CNPJ não confere. Revise os caracteres.",
    };
  }
  return { tone: "ok", valid: true, message: "CNPJ válido." };
}

export function documentError(value: string) {
  if (!normalizeDocument(value)) return "Informe o CPF ou o CNPJ.";
  const feedback = documentFeedback(value);
  return feedback.valid ? undefined : feedback.message;
}

export function phoneFeedback(value: string): FieldFeedback {
  const digits = onlyDigits(value);

  if (!digits) {
    return {
      tone: "idle",
      valid: false,
      message: "Com DDD. Celular: (11) 98888-7777. Fixo: (11) 3333-4444.",
    };
  }

  if (digits.length >= 2 && !ddds.has(digits.slice(0, 2))) {
    return {
      tone: "error",
      valid: false,
      message: "Esse DDD não existe. Confira os dois primeiros números.",
    };
  }

  if (digits.length < 10) {
    return {
      tone: "hint",
      valid: false,
      message: "Continue o número. Fixo tem 10 dígitos e celular tem 11.",
    };
  }

  if (digits.length === 10) {
    if (digits[2] === "9") {
      return {
        tone: "error",
        valid: false,
        message: "Celular precisa de mais um número. O formato é (11) 98888-7777.",
      };
    }
    if (!/[2-5]/.test(digits[2])) {
      return {
        tone: "error",
        valid: false,
        message: "Telefone fixo começa com 2, 3, 4 ou 5. Celular tem 11 números e começa com 9.",
      };
    }
    return { tone: "ok", valid: true, message: "Telefone fixo válido." };
  }

  if (digits[2] !== "9") {
    return {
      tone: "error",
      valid: false,
      message: "Depois do DDD, o celular começa com 9.",
    };
  }

  return { tone: "ok", valid: true, message: "Celular válido." };
}

export function phoneError(value: string) {
  if (!onlyDigits(value)) return "Informe o telefone com DDD.";
  const feedback = phoneFeedback(value);
  return feedback.valid ? undefined : feedback.message;
}

export function nameFeedback(value: string): FieldFeedback {
  const name = value.trim().replace(/\s+/g, " ");

  if (!name) {
    return { tone: "idle", valid: false, message: "Nome e sobrenome de quem pede o diagnóstico." };
  }
  if (/\d/.test(name)) {
    return { tone: "error", valid: false, message: "O nome não leva números." };
  }
  if (!/^[\p{L}\s'.-]+$/u.test(name)) {
    return { tone: "error", valid: false, message: "Use letras no nome." };
  }

  const parts = name.split(" ").filter((part) => part.replace(/[^\p{L}]/gu, "").length > 1);
  if (parts.length < 2) {
    return { tone: "hint", valid: false, message: "Inclua o sobrenome." };
  }

  return { tone: "ok", valid: true, message: "Nome válido." };
}

export function nameError(value: string) {
  const feedback = nameFeedback(value);
  if (!value.trim()) return "Informe nome e sobrenome.";
  return feedback.valid ? undefined : feedback.message;
}

export function emailFeedback(value: string): FieldFeedback {
  const email = value.trim();

  if (!email) {
    return { tone: "idle", valid: false, message: "Exemplo: nome@empresa.com.br" };
  }
  if (/\s/.test(email) || !email.includes("@")) {
    return { tone: "hint", valid: false, message: "Inclua o @. Exemplo: nome@empresa.com.br" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return {
      tone: "error",
      valid: false,
      message: "Esse e-mail não está completo. Exemplo: nome@empresa.com.br",
    };
  }

  return { tone: "ok", valid: true, message: "E-mail válido." };
}

export function emailError(value: string) {
  if (!value.trim()) return "Informe o e-mail.";
  const feedback = emailFeedback(value);
  return feedback.valid ? undefined : feedback.message;
}

export function messageFeedback(value: string): FieldFeedback {
  const text = value.trim();

  if (!text) {
    return {
      tone: "idle",
      valid: false,
      message: "Uma frase sobre a carteira: atraso, volume ou o que já foi tentado.",
    };
  }
  if (text.length < 12) {
    return { tone: "hint", valid: false, message: "Falta um pouco mais de contexto." };
  }

  return { tone: "ok", valid: true, message: "Descrição suficiente." };
}

export function messageError(value: string) {
  if (!value.trim()) return "Conte o que está em aberto na carteira.";
  const feedback = messageFeedback(value);
  return feedback.valid ? undefined : feedback.message;
}

function missingLabel(count: number, noun: string) {
  return `falta${count === 1 ? "" : "m"} ${count} ${noun}${count === 1 ? "" : "s"}`;
}

function maskCpf(digits: string) {
  let out = "";
  for (let index = 0; index < digits.length; index += 1) {
    if (index === 3 || index === 6) out += ".";
    if (index === 9) out += "-";
    out += digits[index];
  }
  return out;
}

function maskCnpj(chars: string) {
  let out = "";
  for (let index = 0; index < chars.length; index += 1) {
    if (index === 2 || index === 5) out += ".";
    if (index === 8) out += "/";
    if (index === 12) out += "-";
    out += chars[index];
  }
  return out;
}

function isValidCpf(digits: string) {
  if (!/^\d{11}$/.test(digits) || /^(\d)\1{10}$/.test(digits)) return false;

  const first = cpfDigit(digits.slice(0, 9), 10);
  const second = cpfDigit(digits.slice(0, 10), 11);
  return first === Number(digits[9]) && second === Number(digits[10]);
}

function cpfDigit(base: string, factorStart: number) {
  let factor = factorStart;
  const total = base.split("").reduce((sum, digit) => sum + Number(digit) * factor--, 0);
  const rest = (total * 10) % 11;
  return rest === 10 ? 0 : rest;
}

function isValidCnpj(value: string) {
  if (!/^[A-Z0-9]{12}\d{2}$/.test(value) || /^([A-Z0-9])\1{13}$/.test(value)) return false;

  const first = cnpjDigit(value.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const second = cnpjDigit(value.slice(0, 13), [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  return first === Number(value[12]) && second === Number(value[13]);
}

function cnpjDigit(base: string, weights: number[]) {
  const total = base.split("").reduce((sum, char, index) => {
    return sum + (char.charCodeAt(0) - 48) * weights[index];
  }, 0);
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}
