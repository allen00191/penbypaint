import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CourseCard } from "@/components/CourseCard";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionTitle } from "@/components/SectionTitle";
import { courses, getCourse, relatedCourses } from "@/data/courses";
import { formatPrice } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  return { title: course?.title ?? "課程" };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const moreCourses = relatedCourses(slug, 3);

  return (
    <div>
      <article className="mx-auto max-w-[928px]">
        <Breadcrumb
          items={[
            { href: "/", label: "主頁" },
            { href: "/courses", label: "課程" },
            { label: course.title },
          ]}
        />
        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-md">
          <Image
            src={course.coverUrl}
            alt={course.title}
            fill
            className="object-cover"
            sizes="928px"
            priority
          />
        </div>
        <p className="mt-6">
          <span className="rounded-pill bg-primary px-3 py-0.5 text-[14px] text-white">
            #{course.category.name}
          </span>
        </p>
        <SectionTitle as="h1" className="mt-4">
          {course.title}
        </SectionTitle>
        <p className="text-[19px] font-bold leading-8">{course.excerpt}</p>
        <p className="mt-6 text-[30px] font-bold text-primary">
          {formatPrice(course.price)}
        </p>
        <p className="mt-2 text-[15px]">
          {course.duration}・共 {course.lessons} 堂
        </p>
        <p className="mt-10 leading-8 tracking-normal">{course.content}</p>
        <div className="mt-12">
          <PrimaryButton href="/contact">查詢此課程</PrimaryButton>
        </div>
      </article>

      {moreCourses.length > 0 ? (
        <section className="mx-auto mt-[90px] max-w-[1200px] md:mt-[140px]">
          <SectionTitle>更多課程</SectionTitle>
          <div className="grid gap-x-[58px] gap-y-14 xl:grid-cols-3">
            {moreCourses.map((item) => (
              <CourseCard key={item.slug} course={item} />
            ))}
          </div>
          <div className="mt-[45px] flex justify-center">
            <PrimaryButton href="/courses">查看更多</PrimaryButton>
          </div>
        </section>
      ) : null}
    </div>
  );
}
