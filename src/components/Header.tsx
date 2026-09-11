"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navItems, site, type NavItem } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!dropdown) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setDropdown(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDropdown(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdown]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled ? "bg-canvas/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1500px] items-center justify-between px-4 py-4 md:px-8 lg:px-[53px] ${
          scrolled ? "lg:py-3" : "lg:py-[30px]"
        }`}
      >
        <Link
          href="/"
          className="relative z-20 flex items-center gap-3 text-lg font-bold tracking-[0.04em] text-ink"
        >
          <Image
            src="/photo/logo1.png"
            alt={site.name}
            width={48}
            height={48}
            className="h-11 w-11 rounded-sm object-contain"
            priority
          />
          <span>
            {site.name}
            <span className="mt-0.5 block text-[11px] font-medium tracking-[0.08em] text-primary">
              {site.tagline}
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="relative z-20 flex h-5 w-[30px] flex-col justify-between lg:hidden"
          aria-expanded={open}
          aria-label="開啟選單"
          onClick={() => {
            setOpen((value) => !value);
            setDropdown(null);
          }}
        >
          <span
            className={`h-[2px] w-full rounded-full bg-primary transition ${
              open ? "translate-y-[9px] rotate-[30deg]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-full rounded-full bg-primary transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-full rounded-full bg-primary transition ${
              open ? "-translate-y-[9px] -rotate-[30deg]" : ""
            }`}
          />
        </button>

        <nav
          ref={navRef}
          className={`fixed inset-0 z-10 overflow-y-auto bg-canvas px-[7.7vw] pt-28 transition-transform duration-700 lg:static lg:flex lg:translate-x-0 lg:flex-col lg:items-end lg:overflow-visible lg:bg-transparent lg:px-0 lg:pt-0 ${
            open ? "translate-x-0" : "pointer-events-none -translate-x-full lg:pointer-events-auto"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-end lg:gap-[18px]">
            {navItems.map((item) => (
              <NavEntry
                key={item.href}
                item={item}
                pathname={pathname}
                dropdown={dropdown}
                setDropdown={setDropdown}
                onNavigate={() => {
                  setDropdown(null);
                  setOpen(false);
                }}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavEntry({
  item,
  pathname,
  dropdown,
  setDropdown,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  dropdown: string | null;
  setDropdown: (value: string | null) => void;
  onNavigate: () => void;
}) {
  const panelId = useId();
  const active =
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  const expanded = dropdown === item.href;
  const linkClass = `block py-[15px] text-[1.0714rem] font-bold lg:py-0 lg:text-[16px] ${
    active ? "text-primary" : "text-ink hover:opacity-70"
  }`;

  if (!item.children?.length) {
    return (
      <li className="border-b border-hairline lg:border-none">
        <Link href={item.href} className={linkClass}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="relative border-b border-hairline lg:border-none">
      <button
        type="button"
        className={`${linkClass} w-full text-left lg:w-auto`}
        aria-expanded={expanded}
        aria-haspopup="true"
        aria-controls={panelId}
        onClick={() => setDropdown(expanded ? null : item.href)}
      >
        {item.label}
      </button>
      <div
        id={panelId}
        aria-hidden={!expanded}
        className={`pb-3 lg:absolute lg:top-full lg:right-0 lg:z-30 lg:mt-2 lg:min-w-[200px] lg:rounded-lg lg:border lg:border-hairline lg:bg-white lg:py-2 ${
          expanded ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block py-2.5 text-[15px] text-ink hover:text-primary lg:px-4"
                onClick={onNavigate}
              >
                #{child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
