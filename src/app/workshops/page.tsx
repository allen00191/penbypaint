import type { Metadata } from "next";
import { Suspense } from "react";
import { WorkshopsCatalog } from "@/components/WorkshopsCatalog";

export const metadata: Metadata = { title: "工作坊" };

export default function WorkshopsPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1200px]" />}>
      <WorkshopsCatalog />
    </Suspense>
  );
}
