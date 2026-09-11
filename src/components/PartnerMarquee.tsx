import type { ReactNode } from "react";
import { site } from "@/data/site";
import type { Partner } from "@/data/types";

const marks: Record<string, ReactNode> = {
  "kt-culture": (
    <path
      fill="currentColor"
      d="M4 4h6.5L14 7.5V20H4V4Zm8 2.8V8h2.2L12 6.8ZM6 9h6v1.6H6V9Zm0 3.2h8V14H6v-1.8Zm0 3.2h5V16H6v-.6Z"
    />
  ),
  youth: (
    <path
      fill="currentColor"
      d="M12 3.2 13.8 8H19l-4.2 3.2 1.6 4.8L12 13.2 7.6 16l1.6-4.8L5 8h5.2L12 3.2Z"
    />
  ),
  college: (
    <path
      fill="currentColor"
      d="M4 8.2 12 4l8 4.2v1.4h-1.4V18H17V9.8L12 7.2 7 9.8V18H5.4V9.6H4V8.2ZM8.8 11.2h6.4V13h-6.4v-1.8Zm0 3h6.4V16h-6.4v-1.8ZM3.2 19h17.6V20.6H3.2V19Z"
    />
  ),
  schools: (
    <path
      fill="currentColor"
      d="M7.2 4h9.6l3.2 5.6H4L7.2 4Zm-2 7h13.6v8.2H5.2V11Zm3 2.2v4h7.6v-4H8.2Z"
    />
  ),
  library: (
    <path
      fill="currentColor"
      d="M5 4h2.4v14.2H5V4Zm3.6 0H11v14.2H8.6V4Zm4.2 0h2.4v14.2h-2.4V4ZM17 5.4 20.6 7v11.2H17V5.4ZM4 19.2h16.4V21H4v-1.8Z"
    />
  ),
  volunteer: (
    <path
      fill="currentColor"
      d="M8.4 4.4c1.6 0 2.8 1 3.6 2.4.8-1.4 2-2.4 3.6-2.4 2.2 0 4 1.8 4 4.2 0 4.4-5.2 8-7.6 9.6-2.4-1.6-7.6-5.2-7.6-9.6 0-2.4 1.8-4.2 4-4.2Z"
    />
  ),
  parents: (
    <path
      fill="currentColor"
      d="M8 4.8a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4Zm8 0a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4ZM4.4 14.4c0-1.8 2-3 3.6-3h2.4c.6 1.4 1.6 2.4 2.6 3.2-.8 1-2.4 1.8-4.2 1.8-2.8 0-4.4-1.2-4.4-2Zm7.2 1.2c1.2-.8 2.2-2 2.6-3.4h2.2c1.6 0 3.6 1.2 3.6 3 0 1.8-1.6 3-4.4 3-1.8 0-3.4-.8-4-2.6Z"
    />
  ),
};

function Logo({ partner }: { partner: Partner }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 px-8 text-[15px] font-bold tracking-[0.02em] text-ink">
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden>
        {marks[partner.id] ?? (
          <circle cx="12" cy="12" r="7" fill="currentColor" />
        )}
      </svg>
      {partner.name}
    </span>
  );
}

export function PartnerMarquee() {
  const loop = [...site.partners, ...site.partners];

  return (
    <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul className="sr-only">
        {site.partners.map((partner) => (
          <li key={partner.id}>{partner.name}</li>
        ))}
      </ul>
      <div className="overflow-hidden" aria-hidden>
        <div className="animate-partner-marquee flex w-max hover:[animation-play-state:paused]">
          {loop.map((partner, index) => (
            <Logo key={`${partner.id}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
}
