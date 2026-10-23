export type DocumentKind = "cpf" | "cnpj";

export function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function documentKind(digits: string): DocumentKind | null {
  if (digits.length === 11) return "cpf";
  if (digits.length === 14) return "cnpj";
  return null;
}

export function isValidDocument(digits: string) {
  const kind = documentKind(digits);
  if (kind === "cpf") return isValidCpf(digits);
  if (kind === "cnpj") return isValidCnpj(digits);
  return false;
}

export function formatDocument(digits: string) {
  if (digits.length === 11) {
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  if (digits.length === 14) {
    return digits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  }
  return digits;
}

function isValidCpf(digits: string) {
  if (/^(\d)\1{10}$/.test(digits)) return false;

  const first = checkDigit(digits.slice(0, 9), 10);
  const second = checkDigit(digits.slice(0, 10), 11);
  return first === Number(digits[9]) && second === Number(digits[10]);
}

function checkDigit(base: string, factorStart: number) {
  let factor = factorStart;
  const total = base.split("").reduce((sum, digit) => sum + Number(digit) * factor--, 0);
  const rest = (total * 10) % 11;
  return rest === 10 ? 0 : rest;
}

function isValidCnpj(digits: string) {
  if (/^(\d)\1{13}$/.test(digits)) return false;

  const first = cnpjDigit(digits.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const second = cnpjDigit(digits.slice(0, 13), [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  return first === Number(digits[12]) && second === Number(digits[13]);
}

function cnpjDigit(base: string, weights: number[]) {
  const total = base.split("").reduce((sum, digit, index) => sum + Number(digit) * weights[index], 0);
  const rest = total % 11;
  return rest < 2 ? 0 : 11 - rest;
}
