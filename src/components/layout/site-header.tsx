import Link from "next/link";
import { Suspense } from "react";
import { contactHref, contactLabel, primaryNav } from "@/content/navigation";
import { Button } from "@/design-system/ui/button";
import { Container } from "@/design-system/ui/container";
import { Logo } from "@/design-system/ui/logo";
import { HeaderScroll } from "@/components/layout/header-scroll";
import { MobileNav, MobileNavFallback } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header
      data-site-header
      className="sticky top-0 z-30 border-b border-transparent bg-transparent transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 data-scrolled:border-line data-scrolled:bg-white/80 data-scrolled:shadow-[0_12px_32px_rgba(61,12,22,0.08)] data-scrolled:backdrop-blur-sm supports-[backdrop-filter]:data-scrolled:bg-white/70"
    >
      <HeaderScroll />
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo priority />
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors duration-200 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href={contactHref}>{contactLabel}</Button>
        </div>
        <Suspense fallback={<MobileNavFallback />}>
          <MobileNav />
        </Suspense>
      </Container>
    </header>
  );
}
