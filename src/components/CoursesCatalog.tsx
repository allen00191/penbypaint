"use client";

import { useSearchParams } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CardGrid } from "@/components/CardGrid";
import { CategoryPills } from "@/components/CategoryPills";
import { CourseCard } from "@/components/CourseCard";
import { SectionTitle } from "@/components/SectionTitle";
import { courseCategories } from "@/data/categories";
import { isCourseCategorySlug, listCourses } from "@/data/courses";

export function CoursesCatalog() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const active = isCourseCategorySlug(category) ? category : undefined;
  const courses = listCourses(active);
  const activeName = courseCategories.find((item) => item.slug === active)?.name;

  return (
    <div className="mx-auto max-w-[1200px]">
      <Breadcrumb
        items={[
          { href: "/", label: "主頁" },
          { label: "課程" },
        ]}
      />
      <SectionTitle as="h1" className="mt-10">
        課程分類
      </SectionTitle>
      <p className="mb-8 max-w-2xl leading-8">
        藝術、學術、語言、幼兒四個系列。點選分類查看該系列課程（縮圖、名稱、定價與簡介）。
      </p>
      <CategoryPills
        items={courseCategories}
        allHref="/courses"
        activeSlug={active}
        makeHref={(slug) => `/courses?category=${slug}`}
      />
      {activeName ? (
        <p className="mt-8 text-[15px] text-primary">目前顯示：#{activeName}</p>
      ) : null}
      <div className="mt-10">
        <CardGrid>
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </CardGrid>
      </div>
    </div>
  );
}
