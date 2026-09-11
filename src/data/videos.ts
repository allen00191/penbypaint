import { getVideoCategory, videoCategories } from "./categories";
import type { Video, VideoCategorySlug } from "./types";

export const videos: Video[] = [
  {
    slug: "watercolor-wash",
    title: "平塗與漸層：水彩第一課",
    excerpt: "三分鐘看懂水分與紙面角度，公開示範可重播。",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1513364780884-0d3d3f929fb0?auto=format&fit=crop&w=1200&q=80",
    provider: "youtube",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    access: "public",
    categorySlug: "demo",
  },
  {
    slug: "mosaic-cut",
    title: "馬賽克安全切割示範",
    excerpt: "鉗子怎麼拿、碎片怎麼放，上課前可先看一遍。",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
    provider: "youtube",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    access: "public",
    categorySlug: "demo",
  },
  {
    slug: "still-life-block-in",
    title: "靜物起稿（學員專用）",
    excerpt: "壓克力課第二週課堂錄影，需向畫室查詢觀看方式。",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    provider: "vimeo",
    embedUrl: "https://player.vimeo.com/video/76979871",
    access: "gated",
    categorySlug: "class",
  },
  {
    slug: "story-drawing-week3",
    title: "故事畫畫班・角色表情",
    excerpt: "幼兒課堂內部複習影片，僅開放在學家庭。",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1588072432836-e10032774343?auto=format&fit=crop&w=1200&q=80",
    provider: "youtube",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    access: "gated",
    categorySlug: "class",
  },
];

export function getVideo(slug: string) {
  const video = videos.find((item) => item.slug === slug);
  if (!video) return undefined;
  return { ...video, category: getVideoCategory(video.categorySlug) };
}

export function listVideos(categorySlug?: string, access?: string) {
  return videos
    .filter((item) => (categorySlug ? item.categorySlug === categorySlug : true))
    .filter((item) => (access ? item.access === access : true))
    .map((item) => ({
      ...item,
      category: getVideoCategory(item.categorySlug),
    }));
}

export function isVideoCategorySlug(
  value: string | undefined,
): value is VideoCategorySlug {
  return videoCategories.some((item) => item.slug === value);
}
