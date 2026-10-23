"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { submitContact } from "@/app/actions/contact";
import { segments } from "@/content/segments";
import { Button } from "@/design-system/ui/button";
import type { ContactField } from "@/lib/contact";
import { contactInitialState } from "@/lib/contact";
import {
  emailFeedback,
  maskPhone,
  messageFeedback,
  nameFeedback,
  phoneFeedback,
  type FieldFeedback,
} from "@/lib/documents";
import { validateContact, type ContactInput } from "@/lib/fields";
import { cx } from "@/lib/cx";

const roles = [
  { value: "sindico", label: "Síndico" },
  { value: "administradora", label: "Administradora" },
  { value: "conselho", label: "Conselho" },
  { value: "outro", label: "Outro" },
] as const;

const emptyInput: ContactInput = {
  name: "",
  email: "",
  phone: "",
  role: "",
  segment: "",
  message: "",
};

export function ContactForm() {
  const [session, setSession] = useState(0);
  return <ContactFormSession key={session} onAnother={() => setSession((value) => value + 1)} />;
}

function ContactFormSession({ onAnother }: { onAnother: () => void }) {
  const [state, action, pending] = useActionState(submitContact, contactInitialState);
  const [values, setValues] = useState<ContactInput>(emptyInput);
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
  const [banner, setBanner] = useState("");
  const [response, setResponse] = useState(state);

  if (state !== response) {
    setResponse(state);
    if (state.status === "error") {
      setErrors(state.fieldErrors);
      setBanner(state.message);
    }
  }

  if (state.status === "success") {
    return (
      <div className="motion-rise rounded-card border border-line bg-accent-soft p-6" role="status">
        <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">Pedido recebido</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
          Vamos retornar pelo contato informado
        </h2>
        <p className="mt-3 leading-7 text-ink">{state.message}</p>
        <Button type="button" variant="secondary" className="mt-6" onClick={onAnother}>
          Enviar outro pedido
        </Button>
      </div>
    );
  }

  function update(field: ContactField, value: string) {
    const next = { ...values, [field]: field === "phone" ? maskPhone(value) : value };
    setValues(next);
    setErrors((current) => {
      if (!current[field]) return current;
      const refreshed = validateContact(next);
      const copy = { ...current };
      if (refreshed[field]) copy[field] = refreshed[field];
      else delete copy[field];
      return copy;
    });
    if (Object.keys(validateContact(next)).length === 0) setBanner("");
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    const nextErrors = validateContact(values);
    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setErrors(nextErrors);
      setBanner("Revise os campos destacados antes de enviar.");
      const first = (Object.keys(nextErrors) as ContactField[])[0];
      document.getElementById(`contact-${first}`)?.focus();
    }
  }

  return (
    <form action={action} className="grid gap-5" noValidate onSubmit={onSubmit} aria-busy={pending}>
      {banner ? (
        <p role="alert" className="text-sm font-medium text-danger">
          {banner}
        </p>
      ) : null}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <TextField
        label="Nome"
        name="name"
        autoComplete="name"
        value={values.name}
        error={errors.name}
        feedback={nameFeedback(values.name)}
        onChange={(value) => update("name", value)}
      />
      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          label="E-mail"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          error={errors.email}
          feedback={emailFeedback(values.email)}
          onChange={(value) => update("email", value)}
        />
        <TextField
          label="Telefone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={values.phone}
          error={errors.phone}
          feedback={phoneFeedback(values.phone)}
          onChange={(value) => update("phone", value)}
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Select
          label="Quem pede o diagnóstico"
          name="role"
          error={errors.role}
          value={values.role}
          onChange={(value) => update("role", value)}
          options={roles}
          placeholder="Selecione"
        />
        <Select
          label="Tipo de condomínio"
          name="segment"
          error={errors.segment}
          value={values.segment}
          onChange={(value) => update("segment", value)}
          placeholder="Selecione"
          options={[
            { value: "indefinido", label: "Ainda não definido" },
            ...segments.map((segment) => ({
              value: segment.slug,
              label: segment.title,
            })),
          ]}
        />
      </div>
      <TextField
        label="O que está em aberto"
        name="message"
        as="textarea"
        value={values.message}
        error={errors.message}
        feedback={messageFeedback(values.message)}
        onChange={(value) => update("message", value)}
      />
      <Button type="submit" disabled={pending} className="w-full sm:w-fit">
        {pending ? "Enviando…" : "Enviar pedido"}
      </Button>
      <p className="text-sm leading-6 text-muted">
        Ao enviar, a Recebecom trata estes dados para responder o diagnóstico,
        conforme a{" "}
        <Link href="/privacidade" className="font-semibold text-accent underline-offset-4 hover:underline">
          Política de Privacidade
        </Link>
        .
      </p>
    </form>
  );
}

function TextField({
  label,
  name,
  error,
  feedback,
  value,
  onChange,
  as = "input",
  type = "text",
  autoComplete,
  inputMode,
}: {
  label: string;
  name: ContactField;
  error?: string;
  feedback: FieldFeedback;
  value: string;
  onChange: (value: string) => void;
  as?: "input" | "textarea";
  type?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "text";
}) {
  const id = `contact-${name}`;
  const hintId = `${id}-hint`;
  const tone = error ? "error" : feedback.tone;
  const message = error ?? feedback.message;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          value={value}
          aria-invalid={tone === "error"}
          aria-describedby={hintId}
          onChange={(event) => onChange(event.target.value)}
          className="field px-4 py-3 text-base"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          inputMode={inputMode}
          autoComplete={autoComplete}
          spellCheck={type === "email" ? false : undefined}
          value={value}
          aria-invalid={tone === "error"}
          aria-describedby={hintId}
          onChange={(event) => onChange(event.target.value)}
          className="field h-12 px-4 text-base"
        />
      )}
      <p id={hintId} className={cx("mt-2 text-sm leading-6", toneClass(tone))}>
        {message}
      </p>
    </div>
  );
}

function Select({
  label,
  name,
  error,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  name: ContactField;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: readonly { value: string; label: string }[];
}) {
  const id = `contact-${name}`;
  const hintId = `${id}-hint`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={hintId}
        onChange={(event) => onChange(event.target.value)}
        className="field h-12 appearance-none bg-[length:1rem] bg-[position:right_0.9rem_center] bg-no-repeat px-4 pr-11 text-base"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%233d0c16' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 6l5 5 5-5'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p id={hintId} className={cx("mt-2 text-sm leading-6", error ? "text-danger" : "text-muted")}>
        {error ?? (value ? "Selecionado." : "Escolha uma opção.")}
      </p>
    </div>
  );
}

function toneClass(tone: FieldFeedback["tone"]) {
  if (tone === "error") return "text-danger";
  if (tone === "ok") return "text-accent";
  return "text-muted";
}
