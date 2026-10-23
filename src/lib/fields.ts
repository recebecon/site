import { segments } from "@/content/segments";
import type { ContactField } from "@/lib/contact";
import { emailError, messageError, nameError, phoneError } from "@/lib/documents";

const roles = ["sindico", "administradora", "conselho", "outro"] as const;

export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  role: string;
  segment: string;
  message: string;
};

export function validateContact(input: ContactInput) {
  const fieldErrors: Partial<Record<ContactField, string>> = {};
  const segmentValues = ["indefinido", ...segments.map((segment) => segment.slug)];

  const name = nameError(input.name);
  const email = emailError(input.email);
  const phone = phoneError(input.phone);
  const message = messageError(input.message);

  if (name) fieldErrors.name = name;
  if (email) fieldErrors.email = email;
  if (phone) fieldErrors.phone = phone;
  if (!roles.includes(input.role as (typeof roles)[number])) {
    fieldErrors.role = "Diga se você é síndico, administradora, conselho ou outro.";
  }
  if (!segmentValues.includes(input.segment)) {
    fieldErrors.segment = "Escolha o tipo de condomínio.";
  }
  if (message) fieldErrors.message = message;

  return fieldErrors;
}
