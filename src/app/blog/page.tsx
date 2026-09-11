import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogCatalog } from "@/components/BlogCatalog";

export const metadata: Metadata = { title: "專欄｜分享" };

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1200px]" />}>
      <BlogCatalog />
    </Suspense>
  );
}
