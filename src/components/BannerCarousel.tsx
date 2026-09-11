import { SiteImage } from "@/components/SiteImage";
import { banners } from "@/data/banners";
import { site } from "@/data/site";

export function BannerCarousel() {
  const banner = banners[0];

  return (
    <section
      className="relative mb-16 w-full overflow-hidden md:mb-[88px]"
      aria-label="主視覺"
    >
      <h1 className="sr-only">{site.name}</h1>
      <div className="relative h-[404px] md:h-[570px]">
        <SiteImage
          src={banner.imageUrl}
          alt={banner.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
