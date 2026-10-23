import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cx } from "@/lib/cx";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-strong",
  secondary:
    "border border-line bg-white text-ink hover:bg-paper",
  ghost: "text-ink hover:bg-paper",
} as const;

const base =
  "inline-flex h-12 items-center justify-center rounded-control px-5 text-base font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

type Variant = keyof typeof variants;

type Common = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = Common & {
  href: string;
  onClick?: () => void;
};
type ButtonProps = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: LinkProps | ButtonProps) {
  const className = cx(base, variants[props.variant ?? "primary"], props.className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={className} onClick={props.onClick}>
        {props.children}
      </Link>
    );
  }

  const domProps = { ...props };
  delete domProps.variant;
  delete domProps.className;

  return <button className={className} {...domProps} />;
}
