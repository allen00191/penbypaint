import Link from "next/link";

type Crumb = { href?: string; label: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="麵包屑"
      className="inline-flex w-fit flex-wrap rounded-pill bg-card px-4 py-1 text-[14px] text-muted md:text-[15px]"
    >
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center">
          {index > 0 ? (
            <span className="mx-3 text-ink" aria-hidden>
              |
            </span>
          ) : null}
          {item.href ? (
            <Link href={item.href} className="text-ink hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
