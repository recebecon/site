import Link from "next/link";

export function Breadcrumb({
  items,
}: {
  items: { name: string; path?: string }[];
}) {
  return (
    <nav aria-label="Trilha">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;

          return (
            <li key={item.name} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {item.path && !last ? (
                <Link href={item.path} className="hover:text-ink">
                  {item.name}
                </Link>
              ) : (
                <span className={last ? "text-ink" : undefined} aria-current={last ? "page" : undefined}>
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
