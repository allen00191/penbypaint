import { articleCategories, getArticleCategory } from "./categories";
import type { Article, ArticleCategorySlug } from "./types";

export const articles: Article[] = [
  {
    slug: "studio-light",
    title: "畫室窗邊的光，為什麼總是讓人想坐下？",
    excerpt:
      "觀塘畫室的北向窗其實沒有想像中柔，但午後兩點的反射，剛好夠讓水彩停在紙上。",
    content:
      "我們把桌面離窗 1.2 公尺，是為了讓右手不擋光。學員常問要不要買燈箱，其實先觀察自己作畫的時段更重要。這篇分享畫室佈光的三個小決定，以及為什麼我們堅持不裝過亮的白光。",
    coverUrl:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-20",
    categorySlug: "share",
  },
  {
    slug: "watercolor-water",
    title: "水彩的水，比顏色更先決定畫面",
    excerpt:
      "杯子裡的水髒了也不必立刻換。髒水有時是灰色的朋友，換早了畫面會過跳。",
    content:
      "示範課最常被問的是「要加多少水」。沒有標準答案，但有三個可練習的停頓：筆尖、紙面、等待。本文整理給初學者的水分節奏，可搭配生活水彩速寫課程一起看。",
    coverUrl:
      "https://images.unsplash.com/photo-1513364780884-0d3d3f929fb0?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-07-09",
    categorySlug: "teaching",
  },
  {
    slug: "mosaic-patience",
    title: "馬賽克不是拼圖，是把碎的東西放回秩序",
    excerpt:
      "切第一片時會緊張，排到第三十片才發現手自己找到節奏。",
    content:
      "工作坊裡我們不追求對稱。先選一個主色，再允許兩塊「不聽話」的碎片存在。那兩塊往往是作品後來最被記得的地方。",
    coverUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-07-01",
    categorySlug: "share",
  },
  {
    slug: "kids-mess",
    title: "幼兒課的「髒」，其實是課程設計的一部分",
    excerpt:
      "圍裙、地板膠紙、洗手歌：三件小事讓探索可以發生，而不只是善後。",
    content:
      "家長最擔心帶回家的是一身顏料。我們把髒設計進流程裡：先玩、再命名顏色、最後一起收拾。收拾也是課，不是課後的懲罰。",
    coverUrl:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-06-25",
    categorySlug: "teaching",
  },
  {
    slug: "preserved-flower-care",
    title: "永生花怕什麼？不是時間，是浴室的蒸氣",
    excerpt:
      "浮遊花盅做好的當下最美，一週後會不會塌，多半取決於你放它的地方。",
    content:
      "避光、避濕、不要噴香水在旁邊。玻璃盅不是完全密封的魔法，只是幫花材慢一點與空氣說話。保養卡也會在工作坊結束時交給你。",
    coverUrl:
      "https://images.unsplash.com/photo-1487530811176-3780de880c43?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-06-15",
    categorySlug: "teaching",
  },
  {
    slug: "why-workshops",
    title: "為什麼我們同時開興趣班，也開單日工作坊？",
    excerpt:
      "八週課程是關係，三小時工作坊是相遇。兩者需要的教室節奏完全不同。",
    content:
      "興趣班讓技巧有時間長出來；工作坊則讓沒有檔期的人也能完成一件帶得走的東西。PenbyPaint 把兩者放在同一間畫室，是希望你先遇見材料，再決定要不要留下來。",
    coverUrl:
      "https://images.unsplash.com/photo-1460661419201-a2aa25d1d4c5?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-06-01",
    categorySlug: "share",
  },
  {
    slug: "festival-making",
    title: "節日手作不是應景，是把時間做進手上",
    excerpt:
      "中秋燈籠課報名總是最快額滿。大家要的也許不是燈，是一起把九月過完。",
    content:
      "節日系列工作坊會提前兩個月公開時段。若你帶小孩來，請預留收拾與拍照的十分鐘——那十分鐘往往比作品本身更像節日。",
    coverUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-05-20",
    categorySlug: "share",
  },
  {
    slug: "looking-together",
    title: "週末藝術史：我們怎麼一起看一幅畫",
    excerpt:
      "不背年份。先問「你的眼睛停在哪裡」，再把歷史輕輕放進去。",
    content:
      "學術系列不是考試課。投影片只放三張細節，討論比講述長。如果你曾經覺得美術館很累，可以從這門課重新練習觀看。",
    coverUrl:
      "https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-05-08",
    categorySlug: "teaching",
  },
];

export const ARTICLES_PER_PAGE = 6;

export function getArticle(slug: string) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return undefined;
  return { ...article, category: getArticleCategory(article.categorySlug) };
}

export function listArticles(categorySlug?: string) {
  const list = categorySlug
    ? articles.filter((item) => item.categorySlug === categorySlug)
    : articles;
  return list
    .slice()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .map((item) => ({
      ...item,
      category: getArticleCategory(item.categorySlug),
    }));
}

export function latestArticles(limit = 3) {
  return listArticles().slice(0, limit);
}

export function isArticleCategorySlug(
  value: string | undefined,
): value is ArticleCategorySlug {
  return articleCategories.some((item) => item.slug === value);
}
