import Link from "next/link";
import { primaryNav } from "@/content/navigation";
import { segments } from "@/content/segments";
import { services } from "@/content/services";
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
      <Container className="border-t border-line py-6">
        <p className="text-sm text-muted">
          Recebecom. Cobrança para condomínios.
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
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

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted hover:text-accent">
        {children}
      </Link>
    </li>
  );
}
