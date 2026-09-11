import { getWorkshopCategory, workshopCategories } from "./categories";
import type { Workshop, WorkshopCategorySlug } from "./types";

export const workshops: Workshop[] = [
  {
    slug: "mid-autumn-lantern",
    title: "中秋紙燈籠手作",
    excerpt: "用色紙與竹架做出可提走的小燈籠，適合家庭一起完成。",
    content:
      "午後工作坊，從骨架、糊紙到提手一次完成。現場提供 LED 蠟燭（不可明火）。完成後可帶走作品與簡易保養說明。",
    coverUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    startsAt: "2026-09-20T14:00:00+08:00",
    endsAt: "2026-09-20T16:30:00+08:00",
    location: "PenbyPaint 觀塘畫室",
    capacity: 16,
    remainingSeats: 5,
    status: "open",
    categorySlug: "festival",
  },
  {
    slug: "new-year-red-packet",
    title: "新春絹印利是封",
    excerpt: "設計一組屬於自己的圖案，絹印在空白利是封上。",
    content:
      "先在紙上起稿，再轉到絹網印製 10 個利是封。適合 12 歲以上，兒童需家長陪同。顏料可水洗，但建議穿深色衣服。",
    coverUrl:
      "https://images.unsplash.com/photo-1482515102474-aa5d8f181f0d?auto=format&fit=crop&w=1200&q=80",
    startsAt: "2027-01-18T10:30:00+08:00",
    endsAt: "2027-01-18T13:00:00+08:00",
    location: "PenbyPaint 觀塘畫室",
    capacity: 12,
    remainingSeats: 12,
    status: "upcoming",
    categorySlug: "festival",
  },
  {
    slug: "mosaic-coaster",
    title: "馬賽克杯墊雙入",
    excerpt: "切、排、嵌：做一對可實用的杯墊，認識馬賽克的基本節奏。",
    content:
      "使用玻璃馬賽克與環保膠。導師會示範安全切割。作品需隔夜風乾，可於一週內回畫室領取或加運費寄送。",
    coverUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
    startsAt: "2026-10-04T14:00:00+08:00",
    endsAt: "2026-10-04T17:00:00+08:00",
    location: "PenbyPaint 觀塘畫室",
    capacity: 10,
    remainingSeats: 2,
    status: "open",
    categorySlug: "mosaic",
  },
  {
    slug: "mosaic-mirror",
    title: "馬賽克小鏡框",
    excerpt: "為一面小圓鏡鑲上色塊邊框，練習曲線與留白。",
    content:
      "進階向工作坊，建議有杯墊課經驗。會處理弧邊與填縫。名額較少，方便一對一調整構圖。",
    coverUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80",
    startsAt: "2026-10-18T14:00:00+08:00",
    endsAt: "2026-10-18T17:30:00+08:00",
    location: "PenbyPaint 觀塘畫室",
    capacity: 8,
    remainingSeats: 0,
    status: "full",
    categorySlug: "mosaic",
  },
  {
    slug: "floating-flower-dome",
    title: "浮遊花玻璃盅",
    excerpt: "把永生花固定在透明盅裡，做成可放書桌的小風景。",
    content:
      "材料包含玻璃盅、永生花材與乾燥配草。導師會說明濕度與避光保養。完成後密封，可保存約 1–2 年。",
    coverUrl:
      "https://images.unsplash.com/photo-1487530811176-3780de880c43?auto=format&fit=crop&w=1200&q=80",
    startsAt: "2026-09-27T11:00:00+08:00",
    endsAt: "2026-09-27T13:30:00+08:00",
    location: "PenbyPaint 觀塘畫室",
    capacity: 12,
    remainingSeats: 4,
    status: "open",
    categorySlug: "preserved-flower",
  },
  {
    slug: "preserved-bouquet",
    title: "迷你永生花束",
    excerpt: "選色、綁束、包裝，做一束不凋的桌花。",
    content:
      "可選擇暖色或冷色花材包。課堂包含絲帶與包裝紙教學。作品輕巧，適合送給未送出的感謝。",
    coverUrl:
      "https://images.unsplash.com/photo-1457089328109-4b74abbf95d3?auto=format&fit=crop&w=1200&q=80",
    startsAt: "2026-08-16T14:00:00+08:00",
    endsAt: "2026-08-16T16:30:00+08:00",
    location: "PenbyPaint 觀塘畫室",
    capacity: 12,
    remainingSeats: 0,
    status: "closed",
    categorySlug: "preserved-flower",
  },
];

export function getWorkshop(slug: string) {
  const workshop = workshops.find((item) => item.slug === slug);
  if (!workshop) return undefined;
  return {
    ...workshop,
    category: getWorkshopCategory(workshop.categorySlug),
  };
}

export function listWorkshops(categorySlug?: string) {
  const list = categorySlug
    ? workshops.filter((item) => item.categorySlug === categorySlug)
    : workshops;
  return list.map((item) => ({
    ...item,
    category: getWorkshopCategory(item.categorySlug),
  }));
}

export function latestWorkshops(limit = 3) {
  return [...listWorkshops()]
    .sort(
      (a, b) =>
        new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime(),
    )
    .slice(0, limit);
}

export function isWorkshopCategorySlug(
  value: string | undefined,
): value is WorkshopCategorySlug {
  return workshopCategories.some((item) => item.slug === value);
}
