import Image from "next/image";
import Link from "next/link";
import { cx } from "@/lib/cx";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" className={cx("inline-flex shrink-0", className)}>
      <Image
        src="/brand/logo.png"
        alt="Recebecom. Cobrança que gera resultados."
        width={1864}
        height={392}
        priority={priority}
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
