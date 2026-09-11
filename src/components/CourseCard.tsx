import { SiteImage } from "@/components/SiteImage";
import Link from "next/link";
import type { CourseWithCategory } from "@/data/categories";
import { formatPrice } from "@/lib/format";

export function CourseCard({ course }: { course: CourseWithCategory }) {
  return (
    <article>
      <Link
        href={`/courses/${course.slug}`}
        className="grid gap-2 hover:opacity-70"
      >
        <div className="relative aspect-[334/222] overflow-hidden rounded-md">
          <SiteImage
            src={course.coverUrl}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 33vw, 100vw"
          />
        </div>
        <p className="text-[23px] font-medium leading-[1.5] tracking-normal">
          {course.title}
        </p>
        <p className="line-clamp-3 text-justify text-[17px] leading-8 tracking-normal">
          {course.excerpt}
        </p>
      </Link>
      <div className="mt-2.5 flex items-center justify-between border-t border-hairline pt-[1.4rem] text-[14px]">
        <span className="rounded-pill bg-primary px-3 py-0.5 text-white">
          #{course.category.name}
        </span>
        <span className="font-bold text-primary">{formatPrice(course.price)}</span>
      </div>
    </article>
  );
}
