import Image from "next/image";
import Link from "next/link";
import type { ArticleWithCategory } from "@/data/categories";
import { formatDate } from "@/lib/format";

export function AboutNews({ articles }: { articles: ArticleWithCategory[] }) {
  return (
    <section className="mt-[90px]">
      <h2 className="mb-8 text-[30px] font-bold">最新消息</h2>

      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/blog/${article.slug}`}
              className="group flex items-center gap-5 border-b border-hairline py-6 md:gap-8"
            >
              <div className="relative h-[86px] w-[130px] shrink-0 overflow-hidden rounded-md md:h-[100px] md:w-[160px]">
                <Image
                  src={article.coverUrl}
                  alt=""
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  sizes="160px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <time className="text-[13px] tracking-[0.04em] text-primary">
                  {formatDate(article.publishedAt)}
                </time>
                <h3 className="mt-1 text-[17px] font-bold leading-7 md:text-[19px]">
                  {article.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-[14px] leading-7 text-ink/70 md:text-[15px]">
                  {article.excerpt}
                </p>
              </div>
              <span
                aria-hidden
                className="hidden shrink-0 text-primary transition group-hover:translate-x-0.5 sm:block"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
