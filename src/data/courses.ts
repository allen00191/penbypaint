import { courseCategories, getCourseCategory } from "./categories";
import type { Course, CourseCategorySlug } from "./types";

export const courses: Course[] = [
  {
    slug: "watercolor-sketch",
    title: "生活水彩速寫",
    excerpt: "用透明層次記錄日常街角、植物與窗邊光影，適合零基礎開始。",
    content:
      "課程從握筆、水分控制到簡單構圖，帶你完成 8 張可帶走的生活速寫。每堂課會示範一種常見場景：杯子、綠植、雨天街道與黃昏天空。無需經驗，材料清單會在開課前寄出。",
    coverUrl: "/photo/watercolor-sketch.png",
    price: 2880,
    lessons: 8,
    duration: "8 週・每堂 2 小時",
    isFeatured: true,
    categorySlug: "art",
  },
  {
    slug: "acrylic-still-life",
    title: "壓克力靜物入門",
    excerpt: "學習疊色、筆觸與光影，把桌上的日常物件畫成有溫度的靜物。",
    content:
      "從調色盤配置開始，練習灰階關係與補色對比。學員會完成兩件小幅靜物，並認識如何為作品上光保存。教室備有畫架與基本顏料，可先體驗再添購自己的工具。",
    coverUrl:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
    price: 3200,
    lessons: 6,
    duration: "6 週・每堂 2.5 小時",
    isFeatured: true,
    categorySlug: "art",
  },
  {
    slug: "art-history-weekend",
    title: "週末藝術史散步",
    excerpt: "從印象派到香港本地創作，用故事把畫作放回它誕生的時代。",
    content:
      "四個週末下午，各走一段主題：光與戶外寫生、城市與現代主義、女性藝術家、香港視覺文化。課堂以投影片與討論為主，並附延伸閱讀清單，適合想建立觀看作品方法的學員。",
    coverUrl:
      "https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?auto=format&fit=crop&w=1200&q=80",
    price: 1680,
    lessons: 4,
    duration: "4 週・每堂 1.5 小時",
    isFeatured: true,
    categorySlug: "academic",
  },
  {
    slug: "creative-journal",
    title: "觀察筆記與創作日記",
    excerpt: "把看到的、想到的寫下來，訓練觀察力與持續創作的節奏。",
    content:
      "結合短寫作與速寫練習，建立一週三次的創作習慣。課程會提供提示卡與互評方式，重點不是文采，而是把生活變成可反覆使用的素材庫。",
    coverUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    price: 1980,
    lessons: 6,
    duration: "6 週・每堂 1.5 小時",
    isFeatured: true,
    categorySlug: "academic",
  },
  {
    slug: "art-english",
    title: "畫室英語 Art English",
    excerpt: "在調色與講評中練習色彩、材料與作品描述的日常英語。",
    content:
      "每堂課對應一個畫室情境：介紹作品、詢問材料、給回饋、寫短 artist statement。程度約 CEFR A2–B1，強調能說出口多於文法講義。",
    coverUrl:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    price: 2400,
    lessons: 8,
    duration: "8 週・每堂 1.5 小時",
    isFeatured: true,
    categorySlug: "language",
  },
  {
    slug: "jp-workshop-phrases",
    title: "手作課日語小句",
    excerpt: "為喜歡日本手作文化的學員準備：材料、步驟與禮貌用語。",
    content:
      "從「請再示範一次」到完成後的感謝句，課堂會配合真實工作坊流程演練。適合即將參加日語手作體驗，或想在畫室裡用日語交流的同學。",
    coverUrl:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80",
    price: 2200,
    lessons: 6,
    duration: "6 週・每堂 1.5 小時",
    isFeatured: false,
    categorySlug: "language",
  },
  {
    slug: "toddler-sensory-art",
    title: "幼兒感官藝術（2–4 歲）",
    excerpt: "手指、海綿與自然素材，讓小朋友用身體認識顏色與質感。",
    content:
      "家長陪同課堂。每週一個主題：泥土、水、葉子、毛線。重點是探索而非成品，教室使用可水洗顏料。請穿舊衣或圍裙。",
    coverUrl:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    price: 1860,
    lessons: 6,
    duration: "6 週・每堂 1 小時",
    isFeatured: false,
    categorySlug: "kids",
  },
  {
    slug: "kids-story-drawing",
    title: "故事畫畫班（5–7 歲）",
    excerpt: "聽完短故事後把角色畫下來，練習線條、表情與想像力。",
    content:
      "每堂課一個故事主題，引導孩子決定角色、場景與一句對白。作品會做成迷你小書帶回家。小班制 8 人，鼓勵分享但不強迫。",
    coverUrl:
      "https://images.unsplash.com/photo-1588072432836-e10032774343?auto=format&fit=crop&w=1200&q=80",
    price: 2160,
    lessons: 8,
    duration: "8 週・每堂 1.25 小時",
    isFeatured: true,
    categorySlug: "kids",
  },
];

export function getCourse(slug: string) {
  const course = courses.find((item) => item.slug === slug);
  if (!course) return undefined;
  return { ...course, category: getCourseCategory(course.categorySlug) };
}

export function listCourses(categorySlug?: string) {
  const list = categorySlug
    ? courses.filter((item) => item.categorySlug === categorySlug)
    : courses;
  return list.map((item) => ({
    ...item,
    category: getCourseCategory(item.categorySlug),
  }));
}

export function featuredCourses() {
  return listCourses().filter((item) => item.isFeatured);
}

export function relatedCourses(slug: string, limit = 3) {
  const current = getCourse(slug);
  const others = listCourses().filter((item) => item.slug !== slug);
  if (!current) return others.slice(0, limit);

  const sameCategory = others.filter(
    (item) => item.categorySlug === current.categorySlug,
  );
  const remaining = others.filter(
    (item) => item.categorySlug !== current.categorySlug,
  );
  return [...sameCategory, ...remaining].slice(0, limit);
}

export function isCourseCategorySlug(
  value: string | undefined,
): value is CourseCategorySlug {
  return courseCategories.some((item) => item.slug === value);
}
