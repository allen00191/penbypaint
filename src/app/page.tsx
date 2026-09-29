import { SiteImage } from "@/components/SiteImage";
import { BannerCarousel } from "@/components/BannerCarousel";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeIllustrations } from "@/components/HomeIllustrations";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SectionTitle } from "@/components/SectionTitle";
import { ServicesBlock } from "@/components/ServicesBlock";
import { SatisfactionSurvey } from "@/components/SatisfactionSurvey";
import { WorkshopCard } from "@/components/WorkshopCard";
import { WaveVideo } from "@/components/WaveVideo";
import { latestWorkshops } from "@/data/workshops";

const homeTestimonials = [
  {
    quote:
      "「學生在創作過程中展現了平時罕見的專注與坦誠，對情緒健康有顯著的正面影響。」",
    attribution: "（陳主任｜沙田區小學輔導組）",
  },
  {
    quote:
      "「現場氣氛非常沉靜優雅，客戶參與度極高。顧客反映這種『邊創作邊回到當下』讓人放鬆。」",
    attribution: "（Michelle L.｜CRM Manager）",
  },
  {
    quote:
      "「第一次學會在焦慮中『接納』不完美，創作中找回初心的感動，簡單而療癒。」",
    attribution: "（Sandy ｜家長）",
  },
];

const focusCourses = [
  {
    title: "ACT 情緒覺察藝術工作坊｜SEN 靜心視覺藝術課",
    audience: "學校 / 教育",
    image: "/photo/mindful-sanctuary.jpg",
  },
  {
    title: "接納與承諾（ACT）藝術療癒體驗｜社區心靈包容工作坊",
    audience: "NGO / 社福機構",
    image: "/banner/Image_ps8ux5ps8ux5ps8u.jpg",
  },
  {
    title: "企業 Wellness 減壓藝作｜ACT 價值導向團隊靜心體驗",
    audience: "企業 / HR",
    image: "/photo/steam-class.jpg",
  },
  {
    title: "客製化沉浸式藝術工作坊｜五感身心靈品牌VIP體驗",
    audience: "品牌 / 商業合作",
    image: "/photo/watercolor-sketch.png",
  },
];

export default function HomePage() {
  const workshops = latestWorkshops(8);

  return (
    <div className="relative z-0 -mx-4 w-[calc(100%+2rem)] md:-mx-8 md:w-[calc(100%+4rem)] lg:-mx-10 lg:w-[calc(100%+5rem)]">
      <HomeIllustrations />
      <div className="relative z-[1]">
      <BannerCarousel />

      <div className="px-4 md:px-8 lg:px-10">
        <HomeAbout />
      </div>

      <section className="relative mx-auto mt-[90px] max-w-[1784px] px-4 md:mt-[140px] md:px-8 lg:px-10">
        <SiteImage
          src="/photo/Frame1.png"
          alt=""
          width={700}
          height={407}
          aria-hidden
          className="pointer-events-none absolute top-4 left-0 z-0 w-[min(420px,55vw)] max-w-none -translate-x-[62%] mix-blend-screen md:top-10"
        />
        <div className="relative z-[1]">
          <SectionTitle>重點課程</SectionTitle>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
            {focusCourses.map((course) => (
              <article key={course.title} className="flex h-full flex-col">
                <div className="relative aspect-[334/222] overflow-hidden rounded-md">
                  <SiteImage
                    src={course.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 25vw, 50vw"
                  />
                </div>
                <p className="mt-2 flex-1 text-[18px] font-medium leading-[1.5] tracking-normal">
                  {course.title}
                </p>
                <div className="mt-2.5 border-t border-hairline pt-[1.4rem] text-[14px]">
                  <span className="rounded-pill bg-primary px-3 py-0.5 text-white">
                    #{course.audience}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-[45px] flex justify-center">
            <PrimaryButton href="/courses">所有課程</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-[90px] max-w-[1784px] px-4 md:mt-[140px] md:px-8 lg:px-10">
        <SiteImage
          src="/photoFrame1.png"
          alt=""
          width={700}
          height={407}
          aria-hidden
          className="pointer-events-none absolute top-4 right-0 z-0 w-[min(420px,55vw)] max-w-none translate-x-[110%] mix-blend-screen md:top-10 md:translate-x-[125%]"
        />
        <div className="relative z-[1]">
          <SectionTitle>最新工作坊亮點</SectionTitle>
          <div className="grid gap-x-[58px] gap-y-14 xl:grid-cols-4">
            {workshops.map((workshop) => (
              <WorkshopCard key={workshop.slug} workshop={workshop} compact />
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
            <SiteImage
              src="/photoFrame2.png"
              alt=""
              width={700}
              height={700}
              aria-hidden
              className="pointer-events-none absolute top-40 right-0 z-0 w-[min(280px,20vw)] max-w-none translate-x-[12%] mix-blend-screen md:top-52 md:translate-x-[16%]"
            />
            <div className="relative z-[1]">
              <ServicesBlock
                title="客戶感言"
                testimonials={homeTestimonials}
                className="mx-auto mt-[90px] max-w-[1200px] md:mt-[140px]"
              />

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
