import Link from "next/link";

type Props = {
  page: number;
  pageCount: number;
  makeHref: (page: number) => string;
};

export function Pagination({ page, pageCount, makeHref }: Props) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav
      aria-label="分頁"
      className="mt-10 flex flex-col items-center gap-6 md:mt-[80px] md:grid md:grid-cols-[1fr_auto_1fr] md:items-center"
    >
      <div className="flex w-full justify-between md:contents">
        {page > 1 ? (
          <Link
            href={makeHref(page - 1)}
            className="text-ink hover:text-primary-active md:justify-self-end"
          >
            上一頁
          </Link>
        ) : (
          <span className="text-muted-soft md:justify-self-end">上一頁</span>
        )}
        {page < pageCount ? (
          <Link
            href={makeHref(page + 1)}
            className="text-ink hover:text-primary-active md:col-start-3 md:justify-self-start"
          >
            下一頁
          </Link>
        ) : (
          <span className="text-muted-soft md:col-start-3 md:justify-self-start">
            下一頁
          </span>
        )}
      </div>
      <div className="flex flex-wrap justify-center md:col-start-2 md:row-start-1">
        {pages.map((item) => (
          <Link
            key={item}
            href={makeHref(item)}
            className={`px-2 text-[1.2857rem] ${
              item === page
                ? "text-primary"
                : "text-muted-soft hover:text-primary-active"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
