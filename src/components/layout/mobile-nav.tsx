"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { contactHref, contactLabel, primaryNav } from "@/content/navigation";
import { Button } from "@/design-system/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previous;
    };
  }, [open]);

  function navigate(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-11 items-center rounded-control px-3 text-sm font-semibold"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Fechar" : "Menu"}
      </button>
      {open ? (
        <div
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 top-20 bottom-0 z-40 bg-white"
        >
          <nav className="flex h-full flex-col gap-2 px-5 py-6">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-control px-3 py-3 font-display text-2xl font-semibold tracking-tight"
                onClick={(event) => {
                  event.preventDefault();
                  navigate(item.href);
                }}
              >
                {item.label}
              </Link>
            ))}
            <Button href={contactHref} className="mt-4" onClick={() => navigate(contactHref)}>
              {contactLabel}
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
