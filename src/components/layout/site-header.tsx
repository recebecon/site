import Link from "next/link";
import { Suspense } from "react";
import { contactHref, contactLabel, primaryNav } from "@/content/navigation";
import { Button } from "@/design-system/ui/button";
import { Logo } from "@/design-system/ui/logo";
import { HeaderScroll } from "@/components/layout/header-scroll";
import { MobileNav, MobileNavFallback } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 px-3 pt-3 sm:px-5 sm:pt-4 md:px-8">
      <HeaderScroll />
      <div
        data-site-header=""
        className="mx-auto flex h-[3.75rem] w-full max-w-6xl items-center gap-4 rounded-[100px] border border-transparent bg-white px-4 shadow-[0_6px_24px_rgba(61,12,22,0.1)] sm:h-[4.25rem] sm:gap-6 sm:px-5 lg:gap-8 lg:px-8 lg:pr-3"
      >
        <Logo priority />
        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[15px] font-medium text-ink/80 transition-colors duration-200 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:block">
            <Button
              href={contactHref}
              className="h-11 !rounded-[100px] px-6 text-[15px]"
            >
              {contactLabel}
            </Button>
          </div>
          <Suspense fallback={<MobileNavFallback />}>
            <MobileNav />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
