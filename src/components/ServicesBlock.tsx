import { site } from "@/data/site";

function ServiceBrackets() {
  return (
    <>
      <svg
        className="pointer-events-none absolute inset-y-0 left-0 h-full w-8 blur-[0.4px] md:w-10"
        viewBox="0 0 40 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M32 10C6 46 6 154 32 190"
          stroke="white"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.92"
        />
      </svg>
      <svg
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-8 blur-[0.4px] md:w-10"
        viewBox="0 0 40 200"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 10C34 46 34 154 8 190"
          stroke="white"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0.92"
        />
      </svg>
    </>
  );
}

export type Testimonial = {
  quote: string;
  attribution: string;
};

type Props = {
  className?: string;
  title?: string;
  testimonials?: Testimonial[];
};

export function ServicesBlock({
  className = "",
  title = "我們的服務",
  testimonials,
}: Props) {
  return (
    <div className={className}>
      <h2 className="mb-12 text-center text-[30px] font-bold text-primary">
        {title}
      </h2>
      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {testimonials
          ? testimonials.map((item) => (
              <figure
                key={item.attribution}
                className="relative px-9 py-6 text-center md:px-11"
              >
                <ServiceBrackets />
                <blockquote className="relative leading-8 text-ink">
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className="relative mt-4 text-[15px] font-medium text-primary">
                  {item.attribution}
                </figcaption>
              </figure>
            ))
          : site.about.services.map((service) => (
              <article
                key={service.title}
                className="relative px-9 py-6 text-center md:px-11"
              >
                <ServiceBrackets />
                <h3 className="relative text-[23px] font-bold text-primary">
                  {service.title}
                </h3>
                <p className="relative mt-4 leading-8 text-ink">{service.body}</p>
              </article>
            ))}
      </div>
    </div>
  );
}
