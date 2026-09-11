import Image from "next/image";
import { BannerCarousel } from "@/components/BannerCarousel";
import { CourseCard } from "@/components/CourseCard";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeIllustrations } from "@/components/HomeIllustrations";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionTitle } from "@/components/SectionTitle";
import { ServicesBlock } from "@/components/ServicesBlock";
import { SatisfactionSurvey } from "@/components/SatisfactionSurvey";
import { WorkshopCard } from "@/components/WorkshopCard";
import { WaveVideo } from "@/components/WaveVideo";
import { featuredCourses } from "@/data/courses";
import { latestWorkshops } from "@/data/workshops";

export default function HomePage() {
  const courses = featuredCourses().slice(0, 6);
  const workshops = latestWorkshops(6);

  return (
    <div className="relative z-0 -mx-4 w-[calc(100%+2rem)] md:-mx-8 md:w-[calc(100%+4rem)] lg:-mx-10 lg:w-[calc(100%+5rem)]">
      <HomeIllustrations />
      <div className="relative z-[1]">
      <BannerCarousel />

      <section className="mx-auto mt-[90px] max-w-[1200px] px-4 md:mt-[140px] md:px-8 lg:px-10">
        <SectionTitle className="text-center">機構合作</SectionTitle>
        <PartnerMarquee />
      </section>

      <div className="px-4 md:px-8 lg:px-10">
        <HomeAbout />
      </div>

      <section className="relative mx-auto mt-[90px] max-w-[1200px] px-4 md:mt-[140px] md:px-8 lg:px-10">
        <Image
          src="/photo/Frame1.png"
          alt=""
          width={700}
          height={407}
          aria-hidden
          className="pointer-events-none absolute top-4 left-0 z-0 w-[min(420px,55vw)] max-w-none -translate-x-[62%] mix-blend-screen md:top-10"
        />
        <div className="relative z-[1]">
          <SectionTitle>熱門課程推薦</SectionTitle>
          <div className="grid gap-x-[58px] gap-y-14 xl:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="mt-[45px] flex justify-center">
            <PrimaryButton href="/courses">所有課程</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-[90px] max-w-[1200px] px-4 md:mt-[140px] md:px-8 lg:px-10">
        <Image
          src="/photoFrame1.png"
          alt=""
          width={700}
          height={407}
          aria-hidden
          className="pointer-events-none absolute top-4 right-0 z-0 w-[min(420px,55vw)] max-w-none translate-x-[110%] mix-blend-screen md:top-10 md:translate-x-[125%]"
        />
        <div className="relative z-[1]">
          <SectionTitle>最新工作坊亮點</SectionTitle>
          <div className="grid gap-x-[58px] gap-y-14 xl:grid-cols-3">
            {workshops.map((workshop) => (
              <WorkshopCard key={workshop.slug} workshop={workshop} />
            ))}
          </div>
          <div className="mt-[45px] flex justify-center">
            <PrimaryButton href="/workshops">所有工作坊</PrimaryButton>
          </div>
        </div>
      </section>

      <div className="relative mt-[90px] w-full bg-white md:mt-[140px]">
        <WaveVideo />

        <div className="relative -mt-px overflow-hidden bg-white px-4 pb-16 md:px-8 md:pb-20 lg:px-10">
          <div className="relative z-[1]">
            <Image
              src="/photoFrame2.png"
              alt=""
              width={700}
              height={700}
              aria-hidden
              className="pointer-events-none absolute top-40 right-0 z-0 w-[min(280px,20vw)] max-w-none translate-x-[12%] mix-blend-screen md:top-52 md:translate-x-[16%]"
            />
            <div className="relative z-[1]">
              <ServicesBlock className="mx-auto mt-[90px] max-w-[1200px] md:mt-[140px]" />

              <div className="mt-[90px] md:mt-[140px]">
                <SatisfactionSurvey />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div aria-hidden className="relative h-0">
        <div className="absolute inset-x-0 top-0 h-24 bg-[#FFFFFF] md:h-32" />
      </div>
    </div>
  );
}
