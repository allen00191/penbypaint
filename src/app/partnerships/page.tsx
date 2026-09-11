import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionTitle } from "@/components/SectionTitle";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "機構合作" };

export default function PartnershipsPage() {
  return (
    <div className="mx-auto max-w-[992px]">
      <Breadcrumb
        items={[
          { href: "/", label: "主頁" },
          { label: "機構合作" },
        ]}
      />
      <SectionTitle as="h1" className="mt-10">
        機構合作
      </SectionTitle>
      <p className="max-w-[720px] text-[19px] font-bold leading-8">
        {site.partnerships.intro}
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {site.partnerships.plans.map((plan) => (
          <article
            key={plan.title}
            className="rounded-xl bg-card p-8 shadow-[0_0_15px_rgba(0,0,0,0.05)]"
          >
            <h2 className="text-[23px] font-medium">{plan.title}</h2>
            <p className="mt-4 leading-8">{plan.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 rounded-xl bg-card p-8 md:p-12">
        <InquiryForm variant="partnership" />
      </div>
    </div>
  );
}
