import { site } from "@/data/site";
import { SocialIcon } from "@/components/SocialIcon";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
      {site.social.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition hover:border-primary hover:text-primary"
          aria-label={item.label}
        >
          <SocialIcon id={item.id} />
        </a>
      ))}
    </div>
  );
}
