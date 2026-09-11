import { PrimaryButton } from "@/components/PrimaryButton";
import { site } from "@/data/site";

export function HomeAbout() {
  return (
    <section
      className="relative mx-auto mt-[90px] max-w-[1200px] px-2 md:mt-[140px]"
      aria-labelledby="home-about-heading"
    >
      <h2
        id="home-about-heading"
        className="mx-auto max-w-[720px] text-center text-[24px] font-bold leading-[1.75] tracking-[0.04em] text-ink md:text-[32px]"
      >
        一間把
        <span className="text-primary">創作帶進日常</span>
        的畫室，讓動手的機會不必等
        <span className="text-primary">「準備好了」</span>
        才開始。
      </h2>

      <div
        aria-hidden
        className="mx-auto mt-8 flex h-14 w-2 flex-col items-center"
      >
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="h-full w-px border-l border-dashed border-primary/45" />
        <span className="h-2 w-2 rounded-full bg-primary" />
      </div>

      <div className="mx-auto max-w-[880px] rounded-[20px] border border-dashed border-primary/40 bg-white/70 px-6 py-9 text-center md:px-12 md:py-11">
        <p className="text-[15px] font-bold tracking-[0.16em] text-primary">
          （畫室理念）
        </p>
        <p className="mt-4 text-[16px] leading-8 text-ink md:text-[17px] md:leading-9">
          畫室不只是學技巧的地方，更是一種把日常變成
          <span className="font-bold text-primary">可帶走作品</span>
          的練習。{site.about.body}
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <PrimaryButton href="/about">認識畫室</PrimaryButton>
      </div>
    </section>
  );
}
