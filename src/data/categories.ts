import type {
  Article,
  ArticleCategorySlug,
  Category,
  Course,
  CourseCategorySlug,
  Video,
  VideoCategorySlug,
  Workshop,
  WorkshopCategorySlug,
} from "./types";

export const courseCategories: Category[] = [
  { slug: "art", name: "藝術系列", type: "course" },
  { slug: "academic", name: "學術系列", type: "course" },
  { slug: "language", name: "語言系列", type: "course" },
  { slug: "kids", name: "幼兒系列", type: "course" },
];

export const workshopCategories: Category[] = [
  { slug: "festival", name: "節日系列工作坊", type: "workshop" },
  { slug: "mosaic", name: "馬賽克藝術", type: "workshop" },
  { slug: "preserved-flower", name: "永生花浮遊花", type: "workshop" },
];

export const articleCategories: Category[] = [
  { slug: "share", name: "分享", type: "article" },
  { slug: "teaching", name: "教學", type: "article" },
];

export const videoCategories: Category[] = [
  { slug: "demo", name: "示範", type: "video" },
  { slug: "class", name: "課堂", type: "video" },
];

export function getCourseCategory(slug: CourseCategorySlug) {
  return courseCategories.find((item) => item.slug === slug)!;
}

export function getWorkshopCategory(slug: WorkshopCategorySlug) {
  return workshopCategories.find((item) => item.slug === slug)!;
}

export function getArticleCategory(slug: ArticleCategorySlug) {
  return articleCategories.find((item) => item.slug === slug)!;
}

export function getVideoCategory(slug: VideoCategorySlug) {
  return videoCategories.find((item) => item.slug === slug)!;
}

export type CourseWithCategory = Course & { category: Category };
export type WorkshopWithCategory = Workshop & { category: Category };
export type ArticleWithCategory = Article & { category: Category };
export type VideoWithCategory = Video & { category: Category };
