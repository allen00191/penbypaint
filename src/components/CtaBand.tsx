import { PrimaryButton } from "./PrimaryButton";

type Props = {
  title: string;
  body: string;
  href: string;
  cta: string;
};

export function CtaBand({ title, body, href, cta }: Props) {
  return (
    <section className="mx-auto w-[min(1120px,100%)] rounded-xl bg-primary px-[30px] py-[30px] text-white md:grid md:grid-cols-[1fr_min(382px,40%)] md:items-center md:px-[min(90px,5.74vw)] md:py-[60px]">
      <div>
        <h2 className="mb-3 text-[clamp(1.2857rem,2.93vw,30px)] font-bold leading-[1.65] tracking-normal">
          {title}
        </h2>
        <p className="text-[clamp(1rem,1.37vw,17px)] text-white/90">{body}</p>
      </div>
      <div className="mt-8 md:mt-0 md:justify-self-end">
        <PrimaryButton href={href}>{cta}</PrimaryButton>
      </div>
    </section>
  );
}
