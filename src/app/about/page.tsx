import type { Metadata } from "next";
import { AboutNews } from "@/components/AboutNews";
import { Breadcrumb } from "@/components/Breadcrumb";
import Masonry from "@/components/Masonry";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionTitle } from "@/components/SectionTitle";
import { ServicesBlock } from "@/components/ServicesBlock";
import { aboutGalleryItems } from "@/data/aboutGallery";
import { latestArticles } from "@/data/articles";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "關於我們" };

export default function AboutPage() {
  const news = latestArticles(6);

  return (
    <div className="mx-auto max-w-[1200px]">
      <Breadcrumb
        items={[
          { href: "/", label: "主頁" },
          { label: "關於我們" },
        ]}
      />
      <SectionTitle as="h1" className="mt-10">
        關於 {site.name}
      </SectionTitle>
      <p className="max-w-[720px] text-[19px] font-bold leading-8">
        {site.about.intro}
      </p>

      <div className="mt-[90px] min-h-[480px]">
        <Masonry
          items={aboutGalleryItems}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>

      <ServicesBlock className="mt-[90px]" />

      <AboutNews articles={news} />
      <div className="mt-12 flex justify-center">
        <PrimaryButton href="/blog">所有新聞</PrimaryButton>
      </div>
    </div>
  );
}
