"use client";

import { useSyncExternalStore } from "react";
import { hasConsent, subscribeConsent, writeConsent } from "@/lib/consent";

export function CookieBanner() {
  const accepted = useSyncExternalStore(subscribeConsent, hasConsent, () => true);

  if (accepted) return null;

  return (
    <div
      role="region"
      aria-label="Aceite dos termos"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/70 bg-white/80 shadow-[0_-8px_30px_rgba(61,12,22,0.06)] backdrop-blur-sm supports-[backdrop-filter]:bg-white/70"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p id="aviso-cookies" className="max-w-3xl text-sm leading-6 text-ink">
          Ao aceitar, você concorda com a{" "}
          <a
            href="/privacidade"
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            Política de Privacidade
          </a>{" "}
          e com o cookie essencial que lembra esta escolha, nos termos da LGPD.
          Não há cookie de anúncio.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="/cookies"
            className="inline-flex h-11 items-center px-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Saiba mais
          </a>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center rounded-control bg-accent px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-strong"
            onClick={writeConsent}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
