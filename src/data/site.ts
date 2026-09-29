import { courseCategories, workshopCategories } from "./categories";

export const site = {
  name: "PenbyPaint",
  tagline: "把創作帶進日常。",
  description:
    "PenbyPaint 是一間位於觀塘的興趣班與工作坊畫室，開設藝術、學術、語言與幼兒課程，以及節日手作、馬賽克與永生花工作坊。",
  about: {
    intro:
      "我們相信技巧可以慢慢長，但動手的機會不該等「準備好了」才開始。PenbyPaint 把八週興趣班與單日工作坊放在同一間畫室：你可以先完成一件帶得走的作品，再決定要不要留下來練習。",
    body:
      "畫室在觀塘。藝術、學術、語言與幼兒課程，以及節日手作、馬賽克與永生花工作坊，都在同一間工作室裡慢慢進行。",
    services: [
      {
        title: "興趣班",
        body: "藝術、學術、語言、幼兒四個系列，小班制，強調可帶走的作品與可重複的習慣。",
      },
      {
        title: "單日工作坊",
        body: "節日手作、馬賽克、永生花浮遊花。三小時內完成，適合想遇見材料的人。",
      },
      {
        title: "機構合作",
        body: "學校、企業與社區團體可預約包班、體驗日與師資到校。",
      },
    ],
  },
  partners: [
    { id: "kt-culture", name: "觀塘文創" },
    { id: "youth", name: "青年協會" },
    { id: "college", name: "社區書院" },
    { id: "schools", name: "學校聯盟" },
    { id: "library", name: "圖書館" },
    { id: "volunteer", name: "企業義工" },
    { id: "parents", name: "家長網絡" },
  ],
  partnerships: {
    intro:
      "我們期待與不同領域的機構攜手開拓更多可能，歡迎透過下方方式與我們聯繫，共同探討合作詳情。",
    plans: [
      { title: "學校/教育", english: "Student Wellness & SEN" },
      { title: "NGO/社區", english: "Community Healing" },
      { title: "企業/HR", english: "Corporate Wellness & Team Building" },
      { title: "品牌/商業", english: "Brand Events & VIP Workshop" },
      { title: "婚禮/個人", english: "Wedding & Personal Mindfulness" },
    ],
  },
  contact: {
    address: "九龍新蒲崗大有街2-4號旺景工業大廈2樓C室B35",
    addressEn:
      "Unit B35, Flat C, 2/F, Wong King Industrial Building, 2 Tai Yau Street, San Po Kong, KLN",
    phone: "+852 6196 7902",
    email: "penbypaint@gmail.com",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Unit%20B35%2C%20Flat%20C%2C%202%2FF%2C%20Wong%20King%20Industrial%20Building%2C%202%20Tai%20Yau%20Street%2C%20San%20Po%20Kong&hl=zh-TW&z=17&output=embed",
  },
  social: [
    { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/85261967902" },
    { id: "facebook", label: "Facebook", href: "https://www.facebook.com/penbypaint" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/penbypaint" },
    { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@penbypaint" },
    { id: "threads", label: "Threads", href: "https://www.threads.net/@penbypaint" },
  ],
};

export type NavChild = {
  href: string;
  label: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "主頁" },
  { href: "/about", label: "關於我們" },
  {
    href: "/courses",
    label: "課程分類",
    children: courseCategories.map((item) => ({
      href: `/courses?category=${item.slug}`,
      label: item.name,
    })),
  },
  {
    href: "/workshops",
    label: "工作坊",
    children: workshopCategories.map((item) => ({
      href: `/workshops?category=${item.slug}`,
      label: item.name,
    })),
  },
  { href: "/blog", label: "專欄" },
  { href: "/partnerships", label: "合作" },
  { href: "/videos", label: "教學影片" },
  { href: "/contact", label: "聯絡我們" },
];
