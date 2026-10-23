import type { ReactNode } from "react";
import Link from "next/link";
import { primaryNav } from "@/content/navigation";
import { segments } from "@/content/segments";
import { services } from "@/content/services";
import { site, socialLinks } from "@/content/site";
import { Container } from "@/design-system/ui/container";
import { Logo } from "@/design-system/ui/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper text-ink">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:py-16">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Cobrança recorrente e judicial para condomínios. A conversa é com
            síndico, administradora e conselho.
          </p>
        </div>
        <FooterColumn title="Serviços">
          {services.map((service) => (
            <FooterLink key={service.href} href={service.href}>
              {service.title}
            </FooterLink>
          ))}
          <FooterLink href="/servicos">Todos os serviços</FooterLink>
        </FooterColumn>
        <FooterColumn title="Segmentos">
          {segments.map((segment) => (
            <FooterLink key={segment.href} href={segment.href}>
              {segment.title}
            </FooterLink>
          ))}
        </FooterColumn>
        <FooterColumn title="Empresa">
          {primaryNav.map((item) => (
            <FooterLink key={item.href} href={item.href}>
              {item.label}
            </FooterLink>
          ))}
          <FooterLink href="/contato">Contato</FooterLink>
          <FooterLink href="/privacidade">Privacidade</FooterLink>
        </FooterColumn>
      </Container>
      <Container className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
        <p className="text-sm text-muted">
          © {site.copyrightYear} Recebecom. Cobrança para condomínios.
        </p>
        <ul className="ml-auto flex items-center gap-1">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-control text-ink transition-colors duration-200 hover:bg-white hover:text-accent"
              >
                <SocialIcon name={item.name} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["name"] }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  if (name === "Instagram") {
    return (
      <svg {...common}>
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zm4.35-2.95a.95.95 0 1 1-.95.95.95.95 0 0 1 .95-.95z" />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg {...common}>
        <path d="M5.7 8.7H2.9V21h2.8V8.7zM4.3 3A1.65 1.65 0 1 0 4.32 6.3 1.65 1.65 0 0 0 4.3 3zM21 21h-2.8v-6.1c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.58-2.34 3.22V21H11V8.7h2.68v1.68h.04c.37-.7 1.28-1.45 2.64-1.45 2.82 0 3.34 1.86 3.34 4.27V21z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M14.2 21v-7.2h2.4l.36-2.8h-2.76V9.2c0-.8.22-1.35 1.38-1.35H17V5.34A18.4 18.4 0 0 0 14.9 5.2c-2.08 0-3.5 1.27-3.5 3.6v2.2H8.8v2.8h2.6V21h2.8z" />
    </svg>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-[0.12em] text-ink uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted transition-colors duration-200 hover:text-accent"
      >
        {children}
      </Link>
    </li>
  );
}
