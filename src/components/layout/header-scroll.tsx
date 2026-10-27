"use client";

import { useEffect } from "react";

const SCROLLED_CLASS = "is-scrolled";

export function HeaderScroll() {
  useEffect(() => {
    const header = document.querySelector("[data-site-header]");
    if (!(header instanceof HTMLElement)) return;

    const onScroll = () => {
      header.classList.toggle(SCROLLED_CLASS, window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
