import type { Metadata } from "next";
import { SiteImage } from "@/components/SiteImage";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InquiryForm } from "@/components/InquiryForm";
import { SectionTitle } from "@/components/SectionTitle";
import { getWorkshop, workshops } from "@/data/workshops";
import { formatDateTime, workshopStatusLabel } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workshops.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getWorkshop(slug)?.title ?? "工作坊" };
}

export default async function WorkshopDetailPage({ params }: Props) {
  const { slug } = await params;
  const workshop = getWorkshop(slug);
  if (!workshop) notFound();

  const canInquire = workshop.status === "open" || workshop.status === "upcoming";

  return (
    <article className="mx-auto max-w-[928px]">
      <Breadcrumb
        items={[
          { href: "/", label: "主頁" },
          { href: "/workshops", label: "工作坊" },
          { label: workshop.title },
        ]}
      />
      <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-md">
        <SiteImage
          src={workshop.coverUrl}
          alt={workshop.title}
          fill
          className="object-cover"
          sizes="928px"
          priority
        />
      </div>
      <p className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-pill bg-primary px-3 py-0.5 text-[14px] text-white">
          #{workshop.category.name}
        </span>
        <span className="rounded-pill bg-card px-3 py-0.5 text-[14px] text-primary">
          {workshopStatusLabel[workshop.status]}
        </span>
      </p>
      <SectionTitle as="h1" className="mt-4">
        {workshop.title}
      </SectionTitle>
      <p className="text-[19px] font-bold leading-8">{workshop.excerpt}</p>
      <dl className="mt-8 space-y-2 text-[17px]">
        <div>
          <dt className="inline font-bold">時間：</dt>
          <dd className="inline">
            {formatDateTime(workshop.startsAt)} – {formatDateTime(workshop.endsAt)}
          </dd>
        </div>
        <div>
          <dt className="inline font-bold">地點：</dt>
          <dd className="inline">{workshop.location}</dd>
        </div>
        <div>
          <dt className="inline font-bold">名額：</dt>
          <dd className="inline">
            剩餘 {workshop.remainingSeats} / {workshop.capacity}
          </dd>
        </div>
      </dl>
      <p className="mt-10 leading-8 tracking-normal">{workshop.content}</p>
      {canInquire ? (
        <div className="mt-16 rounded-xl bg-card p-8">
          <InquiryForm variant="workshop" workshopTitle={workshop.title} />
        </div>
      ) : (
        <p className="mt-12 rounded-md bg-card p-6 text-primary">
          此場次目前無法提交報名意向。
        </p>
      )}
    </article>
  );
}
