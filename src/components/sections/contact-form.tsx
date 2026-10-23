"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";
import { segments } from "@/content/segments";
import { Button } from "@/design-system/ui/button";
import { contactInitialState } from "@/lib/contact";
import { cx } from "@/lib/cx";

const roles = [
  { value: "sindico", label: "Síndico" },
  { value: "administradora", label: "Administradora" },
  { value: "conselho", label: "Conselho" },
  { value: "outro", label: "Outro" },
] as const;

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, contactInitialState);

  if (state.status === "success") {
    return (
      <div className="rounded-card border border-line bg-accent-soft p-6" role="status">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
          Pedido registrado
        </h2>
        <p className="mt-3 leading-7 text-ink">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-5" noValidate>
        <p aria-live="polite" className="text-sm font-medium text-danger">
          {state.message}
        </p>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <Field
        label="Nome"
        name="name"
        autoComplete="name"
        error={state.fieldErrors?.name}
        required
      />
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="E-mail"
          name="email"
          type="email"
          autoComplete="email"
          error={state.fieldErrors?.email}
          required
        />
        <Field
          label="Telefone"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={state.fieldErrors?.phone}
          required
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Select
          label="Quem pede o diagnóstico"
          name="role"
          error={state.fieldErrors?.role}
          options={roles}
          placeholder="Selecione"
        />
        <Select
          label="Tipo de condomínio"
          name="segment"
          error={state.fieldErrors?.segment}
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
      <Field
        label="O que está em aberto"
        name="message"
        as="textarea"
        error={state.fieldErrors?.message}
        required
      />
      <Button type="submit" disabled={pending} className="w-full sm:w-fit">
        {pending ? "Enviando…" : "Enviar pedido"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  as = "input",
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  error?: string;
  as?: "input" | "textarea";
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  const className = cx(
    "w-full rounded-control border bg-white px-4 py-3 text-base text-ink",
    error ? "border-danger" : "border-line",
  );

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
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={className}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={className}
        />
      )}
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Select({
  label,
  name,
  error,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  error?: string;
  placeholder: string;
  options: readonly { value: string; label: string }[];
}) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cx(
          "h-12 w-full rounded-control border bg-white px-4 text-base text-ink",
          error ? "border-danger" : "border-line",
        )}
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
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
