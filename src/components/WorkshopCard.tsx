import { SiteImage } from "@/components/SiteImage";
import Link from "next/link";
import type { WorkshopWithCategory } from "@/data/categories";
import { formatDateTime, workshopStatusLabel } from "@/lib/format";

export function WorkshopCard({
  workshop,
}: {
  workshop: WorkshopWithCategory;
}) {
  return (
    <article>
      <Link
        href={`/workshops/${workshop.slug}`}
        className="grid gap-2 hover:opacity-70"
      >
        <div className="relative aspect-[334/222] overflow-hidden rounded-md">
          <SiteImage
            src={workshop.coverUrl}
            alt={workshop.title}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 33vw, 100vw"
          />
        </div>
        <p className="text-[23px] font-medium leading-[1.5] tracking-normal">
          {workshop.title}
        </p>
        <p className="line-clamp-3 text-justify text-[17px] leading-8 tracking-normal">
          {workshop.excerpt}
        </p>
      </Link>
      <div className="mt-2.5 space-y-2 border-t border-hairline pt-[1.4rem] text-[14px]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-pill bg-primary px-3 py-0.5 text-white">
            #{workshop.category.name}
          </span>
          <span className="font-bold text-primary">
            {workshopStatusLabel[workshop.status]}
          </span>
        </div>
        <p className="leading-6 tracking-normal text-ink">
          {formatDateTime(workshop.startsAt)}
          <br />
          {workshop.location}・餘 {workshop.remainingSeats}/{workshop.capacity} 位
        </p>
      </div>
    </article>
  );
}
