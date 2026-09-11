import Link from "next/link";
import type { Category } from "@/data/types";

type Props = {
  items: Category[];
  allHref: string;
  allLabel?: string;
  activeSlug?: string;
  makeHref: (slug: string) => string;
};

export function CategoryPills({
  items,
  allHref,
  allLabel = "全部",
  activeSlug,
  makeHref,
}: Props) {
  const pill =
    "rounded-pill px-3 py-1 text-[15px] tracking-normal transition-colors";

  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href={allHref}
        className={`${pill} ${
          !activeSlug
            ? "bg-primary text-white"
            : "bg-card text-primary hover:bg-primary-active hover:text-white"
        }`}
      >
        {allLabel}
      </Link>
      {items.map((item) => {
        const active = activeSlug === item.slug;
        return (
          <Link
            key={item.slug}
            href={makeHref(item.slug)}
            className={`${pill} ${
              active
                ? "bg-primary text-white"
                : "bg-card text-primary hover:bg-primary-active hover:text-white"
            }`}
          >
            #{item.name}
          </Link>
        );
      })}
    </div>
  );
}
