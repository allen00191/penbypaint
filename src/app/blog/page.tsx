import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryPills } from "@/components/CategoryPills";
import { Pagination } from "@/components/Pagination";
import { SectionTitle } from "@/components/SectionTitle";
import {
  ARTICLES_PER_PAGE,
  isArticleCategorySlug,
  listArticles,
} from "@/data/articles";
import { articleCategories } from "@/data/categories";

export const metadata: Metadata = { title: "專欄｜分享" };

type Props = {
  searchParams: Promise<{ category?: string; page?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { category, page: pageParam } = await searchParams;
  const active = isArticleCategorySlug(category) ? category : undefined;
  const all = listArticles(active);
  const pageCount = Math.max(1, Math.ceil(all.length / ARTICLES_PER_PAGE));
  const page = Math.min(
    Math.max(Number.parseInt(pageParam ?? "1", 10) || 1, 1),
    pageCount,
  );
  const start = (page - 1) * ARTICLES_PER_PAGE;
  const articles = all.slice(start, start + ARTICLES_PER_PAGE);

  const query = (nextPage: number) => {
    const params = new URLSearchParams();
    if (active) params.set("category", active);
    if (nextPage > 1) params.set("page", String(nextPage));
    const qs = params.toString();
    return qs ? `/blog?${qs}` : "/blog";
  };

  return (
    <div className="mx-auto max-w-[1200px]">
      <Breadcrumb
        items={[
          { href: "/", label: "主頁" },
          { label: "專欄" },
        ]}
      />
      <SectionTitle as="h1" className="mt-10">
        所有文章
      </SectionTitle>
      <CategoryPills
        items={articleCategories}
        allHref="/blog"
        allLabel="全部"
        activeSlug={active}
        makeHref={(slug) => `/blog?category=${slug}`}
      />
      <div className="mt-12 grid gap-x-[58px] gap-y-14 xl:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      <Pagination page={page} pageCount={pageCount} makeHref={query} />
    </div>
  );
}
