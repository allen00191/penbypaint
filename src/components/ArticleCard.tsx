import { SiteImage } from "@/components/SiteImage";
import Link from "next/link";
import type { ArticleWithCategory } from "@/data/categories";
import { formatDate } from "@/lib/format";

export function ArticleCard({ article }: { article: ArticleWithCategory }) {
  return (
    <article className="max-w-[600px]">
      <Link
        href={`/blog/${article.slug}`}
        className="grid gap-2 hover:opacity-70"
      >
        <div className="relative aspect-[334/222] overflow-hidden rounded-md">
          <SiteImage
            src={article.coverUrl}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 33vw, 100vw"
          />
        </div>
        <time className="leading-[1.3]">{formatDate(article.publishedAt)}</time>
        <h2 className="text-[1.4286rem] leading-[1.5] tracking-normal md:text-[23px]">
          {article.title}
        </h2>
        <p className="line-clamp-3 text-justify leading-8 tracking-normal">
          {article.excerpt}
        </p>
      </Link>
      <div className="mt-2.5 border-t border-hairline pt-[1.4rem] text-[14px]">
        <span className="rounded-pill bg-primary px-3 py-0.5 text-white">
          #{article.category.name}
        </span>
      </div>
    </article>
  );
}
