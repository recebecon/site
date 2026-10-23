"use client";

import { useActionState, useState } from "react";
import { submitConsulta } from "@/app/actions/consulta";
import { Button } from "@/design-system/ui/button";
import { consultaInitialState } from "@/lib/consulta";
import { onlyDigits } from "@/lib/documents";
import { cx } from "@/lib/cx";

export function ConsultaForm({ compact = false }: { compact?: boolean }) {
  const [state, action, pending] = useActionState(submitConsulta, consultaInitialState);
  const [documentValue, setDocumentValue] = useState("");

  return (
    <div>
      <form action={action} className="grid gap-3">
        <label htmlFor={compact ? "consulta-document-home" : "consulta-document"} className="text-sm font-semibold text-ink">
          CPF ou CNPJ
        </label>
        <input
          id={compact ? "consulta-document-home" : "consulta-document"}
          name="document"
          inputMode="numeric"
          autoComplete="off"
          required
          value={documentValue}
          placeholder="Digite o documento"
          aria-invalid={state.status === "error"}
          aria-describedby={state.message ? "consulta-status" : undefined}
          onChange={(event) => setDocumentValue(maskDocument(event.target.value))}
          className="h-12 w-full rounded-control border border-line bg-white px-4 text-base text-ink"
        />
        <Button type="submit" disabled={pending} className="w-full">
          {pending ? "Consultando…" : "Consultar pendências"}
        </Button>
      </form>
      <p
        id="consulta-status"
        aria-live="polite"
        className={cx(
          "mt-4 text-sm leading-6",
          state.status === "error" ? "text-danger" : "text-ink",
          !state.message && "sr-only",
        )}
      >
        {state.message}
        {state.documentLabel ? ` Documento consultado: ${state.documentLabel}.` : ""}
      </p>
      {state.status === "found" ? (
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {state.items.map((item) => (
            <li key={`${item.condominium}-${item.unit}-${item.dueDate}-${item.amount}`} className="py-4">
              <p className="font-display text-xl font-semibold tracking-tight text-ink">
                {item.condominium || "Condomínio"}
              </p>
              {item.unit ? <p className="mt-1 text-sm text-muted">Unidade {item.unit}</p> : null}
              {item.description ? <p className="mt-2 leading-7 text-ink">{item.description}</p> : null}
              <p className="mt-2 text-sm text-muted">
                {[item.amount, item.dueDate && `vencimento ${item.dueDate}`, item.status]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function maskDocument(value: string) {
  const digits = onlyDigits(value).slice(0, 14);
  if (digits.length <= 11) return formatCpf(digits);

  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}

function formatCpf(digits: string) {
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
