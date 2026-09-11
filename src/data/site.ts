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
      "把畫室的節奏帶到你們的空間，或把團體帶到觀塘。以下是常見合作方式，細節可再一起調整。",
    plans: [
      {
        title: "學校 / 課外活動",
        body: "45–90 分鐘體驗、學期課、開放日攤位。可配合視覺藝術科學習重點。",
      },
      {
        title: "企業 / 團隊日",
        body: "半日馬賽克或浮遊花，強調一起完成而非競賽。可提供品牌色花材或包裝。",
      },
      {
        title: "社區 / 團體",
        body: "節日工作坊外判、家長工作坊、圖書館活動。名額與場地需求請先來訊。",
      },
    ],
  },
  contact: {
    address: "香港觀塘成業街 19–27 號成業工業大廈 8 樓 B 室（示意地址）",
    phone: "+852 5555 1212",
    email: "hello@penbypaint.example",
    hours: "星期二至日 10:00–18:30（星期一休息）",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.2!2d114.226!3d22.312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzQzLjIiTiAxMTTCsDEzJzMzLjYiRQ!5e0!3m2!1szh-TW!2shk!4v1",
  },
  social: [
    { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/85255551212" },
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
  { href: "/partnerships", label: "品牌/企業合作" },
  { href: "/videos", label: "教學影片" },
  { href: "/contact", label: "聯絡我們" },
];
