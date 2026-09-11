"use client";

import { SiteImage } from "@/components/SiteImage";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategoryPills } from "@/components/CategoryPills";
import { SectionTitle } from "@/components/SectionTitle";
import { videoCategories } from "@/data/categories";
import { isVideoCategorySlug, listVideos } from "@/data/videos";

export function VideosCatalog() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const access = searchParams.get("access") ?? undefined;
  const active = isVideoCategorySlug(category) ? category : undefined;
  const accessFilter =
    access === "public" || access === "gated" ? access : undefined;
  const videos = listVideos(active, accessFilter);

  return (
    <div className="mx-auto max-w-[1200px]">
      <Breadcrumb
        items={[
          { href: "/", label: "主頁" },
          { label: "教學影片" },
        ]}
      />
      <SectionTitle as="h1" className="mt-10">
        教學影片
      </SectionTitle>
      <p className="mb-8 max-w-2xl leading-8">
        公開示範可直接播放；課堂影片需向畫室查詢觀看方式。
      </p>
      <CategoryPills
        items={videoCategories}
        allHref="/videos"
        activeSlug={active}
        makeHref={(slug) => `/videos?category=${slug}`}
      />
      <div className="mt-6 flex flex-wrap gap-3 text-[15px]">
        <Link
          href={active ? `/videos?category=${active}` : "/videos"}
          className={`rounded-pill px-3 py-1 ${
            !accessFilter ? "bg-primary text-white" : "bg-card text-primary"
          }`}
        >
          全部權限
        </Link>
        <Link
          href={
            active
              ? `/videos?category=${active}&access=public`
              : "/videos?access=public"
          }
          className={`rounded-pill px-3 py-1 ${
            accessFilter === "public"
              ? "bg-primary text-white"
              : "bg-card text-primary"
          }`}
        >
          公開
        </Link>
        <Link
          href={
            active
              ? `/videos?category=${active}&access=gated`
              : "/videos?access=gated"
          }
          className={`rounded-pill px-3 py-1 ${
            accessFilter === "gated"
              ? "bg-primary text-white"
              : "bg-card text-primary"
          }`}
        >
          需查詢
        </Link>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {videos.map((video) => (
          <article key={video.slug} className="overflow-hidden rounded-xl bg-card">
            <div className="relative aspect-video">
              {video.access === "public" ? (
                <iframe
                  title={video.title}
                  src={video.embedUrl}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative h-full w-full">
                  <SiteImage
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/55 px-6 text-center text-white">
                    請向機構查詢觀看方式
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <p className="text-[14px] text-primary">#{video.category.name}</p>
              <h2 className="mt-2 text-[23px] font-medium">{video.title}</h2>
              <p className="mt-3 leading-8">{video.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
