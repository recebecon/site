"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { contactHref, contactLabel, primaryNav } from "@/content/navigation";
import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";
import { Logo } from "@/design-system/ui/logo";
import { cx } from "@/lib/cx";

export function MobileNavFallback() {
  return (
    <div className="lg:hidden">
      <span className="inline-flex h-11 w-11 items-center justify-center text-ink" aria-hidden="true">
        <MenuIcon open={false} />
      </span>
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    returnFocus.current = true;
    const inerted: HTMLElement[] = [];
    for (const node of document.body.children) {
      if (!(node instanceof HTMLElement) || node === panel || node.hasAttribute("inert")) continue;
      node.setAttribute("inert", "");
      inerted.push(node);
    }

    const toggle = toggleRef.current;
    const frame = window.requestAnimationFrame(() => {
      panel?.querySelector<HTMLElement>("[data-menu-close]")?.focus();
    });

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panel) return;

      const items = Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      inerted.forEach((node) => node.removeAttribute("inert"));
      if (returnFocus.current) toggle?.focus();
    };
  }, [open]);

  function navigate(href: string) {
    returnFocus.current = false;
    setOpen(false);
    router.push(href);
  }

  const panel = (
    <div
      id="menu-mobile"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      inert={!open}
      className={cx(
        "fixed inset-0 z-50 flex flex-col bg-white transition-transform duration-300 ease-out motion-reduce:transition-none",
        open ? "translate-x-0" : "pointer-events-none translate-x-full",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo onClick={() => navigate("/")} />
        <button
          type="button"
          data-menu-close=""
          className="inline-flex h-11 w-11 items-center justify-center rounded-control text-ink transition-colors hover:bg-paper"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
        >
          <MenuIcon open />
        </button>
      </Container>
      <nav className="flex flex-1 flex-col overflow-y-auto px-5 pb-[max(2rem,env(safe-area-inset-bottom))] md:px-8">
        <p className="pt-2 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          Dois caminhos
        </p>
        <ul className="mt-4">
          {primaryNav.map((item, index) => {
            const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li
                key={item.href}
                className={cx(
                  "border-b border-line transition duration-300 ease-out motion-reduce:transition-none",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
                style={{ transitionDelay: open ? `${80 + index * 45}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className="flex min-h-16 flex-col justify-center py-3"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(item.href);
                  }}
                >
                  <span className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {item.label}
                  </span>
                  <span className="text-sm text-muted">{item.description}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div
          className={cx(
            "mt-8 transition duration-300 ease-out motion-reduce:transition-none",
            open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
          )}
          style={{ transitionDelay: open ? "320ms" : "0ms" }}
        >
          <p className="text-sm leading-6 text-muted">
            Síndico, administradora ou conselho: o diagnóstico começa por aqui.
          </p>
          <Button
            href={contactHref}
            className="mt-4 w-full"
            onClick={(event) => {
              event.preventDefault();
              navigate(contactHref);
            }}
          >
            {contactLabel}
          </Button>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-control text-ink transition-colors hover:bg-paper active:scale-95 motion-reduce:transform-none"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon open={false} />
      </button>
      {mounted ? createPortal(panel, document.body) : null}
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative block h-4 w-6">
      <span
        className={cx(
          "absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300 ease-out motion-reduce:transition-none",
          open && "translate-y-[7px] rotate-45",
        )}
      />
      <span
        className={cx(
          "absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity duration-200 motion-reduce:transition-none",
          open && "opacity-0",
        )}
      />
      <span
        className={cx(
          "absolute left-0 bottom-0 h-0.5 w-6 bg-current transition-transform duration-300 ease-out motion-reduce:transition-none",
          open && "-translate-y-[7px] -rotate-45",
        )}
      />
    </span>
  );
}
