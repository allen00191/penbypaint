import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CardGrid } from "@/components/CardGrid";
import { CategoryPills } from "@/components/CategoryPills";
import { SectionTitle } from "@/components/SectionTitle";
import { WorkshopCard } from "@/components/WorkshopCard";
import { workshopCategories } from "@/data/categories";
import { isWorkshopCategorySlug, listWorkshops } from "@/data/workshops";

export const metadata: Metadata = { title: "工作坊" };

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function WorkshopsPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const active = isWorkshopCategorySlug(category) ? category : undefined;
  const workshops = listWorkshops(active);
  const activeName = workshopCategories.find((item) => item.slug === active)
    ?.name;

  return (
    <div className="mx-auto max-w-[1200px]">
      <Breadcrumb
        items={[
          { href: "/", label: "主頁" },
          { label: "工作坊" },
        ]}
      />
      <SectionTitle as="h1" className="mt-10">
        工作坊
      </SectionTitle>
      <p className="mb-8 max-w-2xl leading-8">
        節日系列、馬賽克藝術、永生花浮遊花。每場顯示日期、地點、剩餘名額與報名狀態。
      </p>
      <CategoryPills
        items={workshopCategories}
        allHref="/workshops"
        activeSlug={active}
        makeHref={(slug) => `/workshops?category=${slug}`}
      />
      {activeName ? (
        <p className="mt-8 text-[15px] text-primary">目前顯示：#{activeName}</p>
      ) : null}
      <div className="mt-10">
        <CardGrid>
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.slug} workshop={workshop} />
          ))}
        </CardGrid>
      </div>
    </div>
  );
}
