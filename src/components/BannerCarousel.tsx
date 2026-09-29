import { SiteImage } from "@/components/SiteImage";
import { banners } from "@/data/banners";

export function BannerCarousel() {
  const banner = banners[0];

  return (
    <section
      className="relative mb-16 w-full overflow-hidden md:mb-[88px]"
      aria-label="主視覺"
    >
      <div className="relative h-[460px] md:h-[570px]">
        <SiteImage
          src={banner.imageUrl}
          alt={banner.title}
          fill
          priority
          className="object-cover object-[18%_center] md:object-center"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(250,248,245,0.96)_0%,rgba(250,248,245,0.72)_46%,rgba(250,248,245,0)_74%)] md:bg-[linear-gradient(to_right,rgba(250,248,245,0.92)_0%,rgba(250,248,245,0.7)_38%,rgba(250,248,245,0)_70%)]"
        />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-7 md:inset-y-0 md:right-auto md:flex md:w-[min(54%,760px)] md:items-center md:pb-0 md:pl-16 md:pr-10 lg:pl-28 xl:pl-36">
          <div className="max-w-[640px] text-left">
            <h1 className="text-[26px] font-bold leading-snug tracking-[0.04em] text-ink md:text-[36px] lg:text-[42px]">
              「創作即療癒，當下即覺察」
            </h1>
            <p className="mt-3 text-[15px] font-bold leading-7 tracking-[0.04em] text-primary md:text-[18px]">
              以藝術接納當下，用創作連結心靈｜Art, Mindfulness & Beyond
            </p>
            <p className="mt-3 text-[13px] leading-7 tracking-[0.03em] text-ink md:text-[15px] md:leading-8">
              -融合 ACT（接納承諾價值）與藝術創作，
              <br />
              為學校、企業、品牌及個人量身打造的身心靈工作坊與沉浸式體驗。-
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
