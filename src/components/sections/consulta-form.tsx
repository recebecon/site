"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { submitConsulta } from "@/app/actions/consulta";
import { Button } from "@/design-system/ui/button";
import { consultaInitialState } from "@/lib/consulta";
import { documentError, documentFeedback, maskDocument } from "@/lib/documents";
import { cx } from "@/lib/cx";

export function ConsultaForm({ compact = false }: { compact?: boolean }) {
  const [state, action, pending] = useActionState(submitConsulta, consultaInitialState);
  const [documentValue, setDocumentValue] = useState("");
  const [attempted, setAttempted] = useState(false);
  const [response, setResponse] = useState(state);
  const [stale, setStale] = useState(false);

  if (state !== response) {
    setResponse(state);
    setStale(false);
  }

  const feedback = documentFeedback(documentValue);
  const fieldId = compact ? "consulta-document-home" : "consulta-document";
  const statusId = compact ? "consulta-status-home" : "consulta-status";
  const hintId = compact ? "consulta-hint-home" : "consulta-hint";
  const showError = attempted && !feedback.valid;
  const serverMessage = stale ? "" : state.message;

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    const error = documentError(documentValue);
    if (error) {
      event.preventDefault();
      setAttempted(true);
    }
  }

  const hintVisible = showError || feedback.tone !== "idle" || !compact;
  const hintText = showError
    ? documentError(documentValue)
    : compact && feedback.tone === "idle"
      ? ""
      : feedback.message;

  return (
    <div>
      <form action={action} className="grid gap-3" noValidate onSubmit={onSubmit} aria-busy={pending}>
        <label htmlFor={fieldId} className="text-sm font-semibold text-ink">
          CPF ou CNPJ
        </label>
        <input
          id={fieldId}
          name="document"
          inputMode="text"
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          required
          value={documentValue}
          placeholder="000.000.000-00"
          aria-invalid={
            showError || feedback.tone === "error" || (!stale && state.status === "error")
          }
          aria-describedby={`${hintId} ${statusId}`}
          onChange={(event) => {
            setDocumentValue(maskDocument(event.target.value));
            setStale(true);
          }}
          className={cx("field h-12 px-4 text-base", (showError || feedback.tone === "error") && "border-danger")}
        />
        <p
          id={hintId}
          className={cx(
            "text-sm leading-6",
            !hintVisible || !hintText ? "sr-only" : null,
            showError || feedback.tone === "error"
              ? "text-danger"
              : feedback.tone === "ok"
                ? "text-accent"
                : "text-muted",
          )}
        >
          {hintText || "Informe o CPF ou CNPJ do responsável."}
        </p>
        <Button type="submit" disabled={pending} className="w-full">
          {pending ? "Verificando…" : "Verificar pendências"}
        </Button>
        {compact ? (
          <p className="text-xs leading-5 text-muted">
            Não gravamos o documento.{" "}
            <Link href="/privacidade" className="font-semibold text-accent underline-offset-4 hover:underline">
              Privacidade
            </Link>
          </p>
        ) : (
          <p className="text-sm leading-6 text-muted">
            O documento serve só para verificar a unidade e não fica gravado no navegador.{" "}
            <Link href="/privacidade" className="font-semibold text-accent underline-offset-4 hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>
        )}
      </form>
      <div
        id={statusId}
        aria-live="polite"
        role={serverMessage && state.status === "error" ? "alert" : "status"}
        className={cx(
          "motion-rise mt-4 rounded-control border px-4 py-3 text-sm leading-6",
          statusClass(state.status),
          !serverMessage && "hidden",
        )}
      >
        <p>{serverMessage}</p>
        {state.documentLabel && !stale ? (
          <p className="mt-1">Documento consultado: {state.documentLabel}.</p>
        ) : null}
      </div>
      {state.status === "found" && !stale ? (
        <ul className="motion-rise mt-4 divide-y divide-line border-y border-line">
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

function statusClass(status: string) {
  if (status === "error") return "border-danger bg-accent-soft text-danger";
  if (status === "found") return "border-line bg-white text-ink";
  if (status === "empty") return "border-line bg-white text-ink";
  return "border-transparent";
}
