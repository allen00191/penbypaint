import { SiteImage } from "@/components/SiteImage";
import Link from "next/link";
import { SocialIcon } from "@/components/SocialIcon";
import { site } from "@/data/site";

const infoLinks = [
  { href: "/about", label: "關於我們" },
  { href: "/contact", label: "聯絡我們" },
  { href: "/blog", label: "專欄" },
];

const exploreLinks = [
  { href: "/courses", label: "課程" },
  { href: "/workshops", label: "工作坊" },
  { href: "/partnerships", label: "機構合作" },
  { href: "/videos", label: "教學影片" },
];

export function Footer() {
  return (
    <footer className="bg-white px-[6vw] py-20 text-ink md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
        <div>
          <Link href="/" className="inline-block hover:opacity-70">
            <SiteImage
              src="/photo/logo1.png"
              alt={site.name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-sm object-contain"
            />
            <p className="mt-4 text-[23px] font-bold tracking-[0.04em]">
              {site.name}
            </p>
            <p className="mt-1 text-[12px] tracking-[0.16em] text-muted">
              INTEREST CLASS & WORKSHOP
            </p>
          </Link>
        </div>

        <div className="max-w-[260px] text-[14px] leading-7">
          <p>{site.contact.address}</p>
          <p className="mt-2">{site.contact.hours}</p>
        </div>

        <nav className="flex flex-col gap-3 text-[14px]" aria-label="頁尾資訊">
          {infoLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-70">
              {item.label}
            </Link>
          ))}
        </nav>

        <div>
          <p className="mb-3 text-[12px] tracking-[0.08em] text-muted">
            課程與合作
          </p>
          <nav className="flex flex-col gap-3 text-[14px]" aria-label="課程與合作">
            {exploreLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:opacity-70">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="flex flex-wrap gap-3">
            {site.social.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center text-ink hover:opacity-70"
                aria-label={item.label}
              >
                <SocialIcon id={item.id} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-[12px] tracking-[0.12em] text-muted">
            © {new Date().getFullYear()} {site.name.toUpperCase()}
          </p>
        </div>
      </div>
    </footer>
  );
}
