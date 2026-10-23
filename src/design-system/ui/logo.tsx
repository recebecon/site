import Image from "next/image";
import Link from "next/link";
import { cx } from "@/lib/cx";

export function Logo({
  className,
  priority = false,
  onClick,
}: {
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      className={cx("inline-flex shrink-0", className)}
      onClick={
        onClick
          ? (event) => {
              event.preventDefault();
              onClick();
            }
          : undefined
      }
    >
      <Image
        src="/brand/logo.png"
        alt="Recebecom. Cobrança que gera resultados."
        width={932}
        height={196}
        sizes="240px"
        priority={priority}
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
