import type { Metadata } from "next";
import { Suspense } from "react";
import { CoursesCatalog } from "@/components/CoursesCatalog";

export const metadata: Metadata = { title: "課程分類" };

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1200px]" />}>
      <CoursesCatalog />
    </Suspense>
  );
}
