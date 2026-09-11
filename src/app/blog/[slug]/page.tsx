import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionTitle } from "@/components/SectionTitle";
import { articles, getArticle } from "@/data/articles";
import { formatDate } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getArticle(slug)?.title ?? "專欄" };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-[928px]">
      <Breadcrumb
        items={[
          { href: "/", label: "主頁" },
          { href: "/blog", label: "專欄" },
          { label: article.title },
        ]}
      />
      <div className="mt-8 flex items-center justify-between border-b border-black/20 pb-3">
        <time>{formatDate(article.publishedAt)}</time>
        <span className="rounded-pill bg-primary px-3 py-0.5 text-[14px] text-white">
          #{article.category.name}
        </span>
      </div>
      <SectionTitle as="h1" className="mt-8">
        {article.title}
      </SectionTitle>
      <div className="relative aspect-[3/2] overflow-hidden rounded-md">
        <Image
          src={article.coverUrl}
          alt={article.title}
          fill
          className="object-cover"
          sizes="928px"
          priority
        />
      </div>
      <p className="mt-10 text-[19px] font-bold leading-8">{article.excerpt}</p>
      <p className="mt-8 leading-8 tracking-normal">{article.content}</p>
      <div className="mt-12">
        <PrimaryButton href="/blog">回到專欄</PrimaryButton>
      </div>
    </article>
  );
}
