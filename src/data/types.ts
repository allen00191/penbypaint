export type CourseCategorySlug = "art" | "academic" | "language" | "kids";
export type WorkshopCategorySlug =
  | "festival"
  | "mosaic"
  | "preserved-flower";
export type ArticleCategorySlug = "share" | "teaching";
export type VideoCategorySlug = "demo" | "class";
export type WorkshopStatus = "open" | "full" | "closed" | "upcoming";
export type VideoAccess = "public" | "gated";
export type VideoProvider = "youtube" | "vimeo";

export type CategoryType = "course" | "workshop" | "article" | "video";

export type Category = {
  slug: string;
  name: string;
  type: CategoryType;
};

export type Course = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverUrl: string;
  price: number;
  lessons: number;
  duration: string;
  isFeatured: boolean;
  categorySlug: CourseCategorySlug;
};

export type Workshop = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverUrl: string;
  startsAt: string;
  endsAt: string;
  location: string;
  capacity: number;
  remainingSeats: number;
  status: WorkshopStatus;
  categorySlug: WorkshopCategorySlug;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverUrl: string;
  publishedAt: string;
  categorySlug: ArticleCategorySlug;
};

export type Video = {
  slug: string;
  title: string;
  excerpt: string;
  thumbnailUrl: string;
  provider: VideoProvider;
  embedUrl: string;
  access: VideoAccess;
  categorySlug: VideoCategorySlug;
};

export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
};

export type Partner = {
  id: string;
  name: string;
};
