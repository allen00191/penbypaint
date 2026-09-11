import type { Metadata } from "next";
import { Suspense } from "react";
import { VideosCatalog } from "@/components/VideosCatalog";

export const metadata: Metadata = { title: "教學影片" };

export default function VideosPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1200px]" />}>
      <VideosCatalog />
    </Suspense>
  );
}
