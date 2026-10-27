"use client";

import { useEffect } from "react";

export function HeaderScroll() {
  useEffect(() => {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 8) header.setAttribute("data-scrolled", "");
      else header.removeAttribute("data-scrolled");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
