import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InquiryForm } from "@/components/InquiryForm";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "聯絡我們" };

export default function ContactPage() {
  const { contact } = site;

  return (
    <div className="mx-auto max-w-[920px]">
      <Breadcrumb
        items={[
          { href: "/", label: "主頁" },
          { label: "聯絡我們" },
        ]}
      />
      <h1 className="mt-16 mb-16 text-center text-[2.2rem] font-bold tracking-[0.18em] text-ink md:mt-20 md:mb-24 md:text-[48px]">
        CONTACT
      </h1>

      <InquiryForm variant="contact" />

      <section className="mt-24 border-t border-hairline pt-12">
        <SocialLinks className="mb-10 justify-center" />
        <dl className="grid gap-8 text-[16px] leading-8 sm:grid-cols-2">
          <div>
            <dt className="text-[13px] tracking-[0.12em] text-muted">地址</dt>
            <dd className="mt-1">{contact.address}</dd>
          </div>
          <div>
            <dt className="text-[13px] tracking-[0.12em] text-muted">開放時間</dt>
            <dd className="mt-1">{contact.hours}</dd>
          </div>
          <div>
            <dt className="text-[13px] tracking-[0.12em] text-muted">電話</dt>
            <dd className="mt-1">
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {contact.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[13px] tracking-[0.12em] text-muted">電郵</dt>
            <dd className="mt-1">
              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                {contact.email}
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-10 overflow-hidden rounded-xl">
          <iframe
            title="畫室位置地圖"
            src={contact.mapEmbedUrl}
            className="h-[280px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
