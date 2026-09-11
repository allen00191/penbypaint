"use client";

import { useState, type ReactNode } from "react";
import { PrimaryButton } from "./PrimaryButton";

type Variant = "contact" | "partnership" | "workshop";

const titles: Record<Variant, string> = {
  contact: "線上留言",
  partnership: "合作諮詢",
  workshop: "報名意向",
};

const fieldClass =
  "w-full rounded-[12px] border-0 bg-white px-5 py-4 text-[16px] text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.04)] outline-none transition focus:shadow-[0_0_0_2px_var(--pp-primary-active)]";
const stackedFieldClass =
  "w-full border border-ink bg-card px-4 py-3 text-[16px] outline-none focus:outline-2 focus:outline-offset-0 focus:outline-primary-active";

function RequiredMark() {
  return <span className="ml-1 text-[14px] font-medium text-ink">（必須）</span>;
}

export function InquiryForm({
  variant,
  workshopTitle,
}: {
  variant: Variant;
  workshopTitle?: string;
}) {
  const [sent, setSent] = useState(false);
  const isContact = variant === "contact";

  return (
    <form
      className={isContact ? "mx-auto max-w-[860px]" : "space-y-8"}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      {isContact ? null : (
        <h2 className="text-[30px] font-bold leading-[1.5]">{titles[variant]}</h2>
      )}
      {workshopTitle ? (
        <p className="text-[15px] text-ink">
          工作坊：<strong>{workshopTitle}</strong>
        </p>
      ) : null}

      {isContact ? (
        <div className="space-y-7">
          <FieldRow label="公司／團體名稱" required>
            <input required name="organization" className={fieldClass} />
          </FieldRow>
          <FieldRow label="聯絡人姓名" required>
            <input required name="name" autoComplete="name" className={fieldClass} />
          </FieldRow>
          <FieldRow label="電郵" required>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className={fieldClass}
            />
          </FieldRow>
          <FieldRow label="電話" required>
            <input
              required
              type="tel"
              name="phone"
              autoComplete="tel"
              className={fieldClass}
            />
          </FieldRow>
          <FieldRow label="詢問內容" required align="start">
            <textarea
              required
              name="message"
              rows={8}
              className={`${fieldClass} min-h-[200px] resize-y`}
            />
          </FieldRow>
        </div>
      ) : (
        <>
          <label className="block">
            <span className="mb-2 inline-block text-[17px] font-bold">
              姓名
              <span className="ml-2 text-[16px] font-medium text-error">【必須】</span>
            </span>
            <input required name="name" className={stackedFieldClass} />
          </label>
          <label className="block">
            <span className="mb-2 inline-block text-[17px] font-bold">
              電郵
              <span className="ml-2 text-[16px] font-medium text-error">【必須】</span>
            </span>
            <input required type="email" name="email" className={stackedFieldClass} />
          </label>
          <label className="block">
            <span className="mb-2 inline-block text-[17px] font-bold">電話</span>
            <input type="tel" name="phone" className={stackedFieldClass} />
          </label>
          {variant === "workshop" ? (
            <label className="block">
              <span className="mb-2 inline-block text-[17px] font-bold">人數</span>
              <input
                type="number"
                min={1}
                defaultValue={1}
                name="seats"
                className={stackedFieldClass}
              />
            </label>
          ) : null}
          <label className="block">
            <span className="mb-2 inline-block text-[17px] font-bold">
              需求說明
              <span className="ml-2 text-[16px] font-medium text-error">【必須】</span>
            </span>
            <textarea required name="message" className={`h-[199px] ${stackedFieldClass}`} />
          </label>
        </>
      )}

      <div className={isContact ? "mt-14 flex justify-center" : ""}>
        {isContact ? (
          <button
            type="submit"
            className="inline-flex items-center gap-8 rounded-pill border border-ink bg-transparent py-2.5 pr-2.5 pl-12 text-[17px] font-medium tracking-[0.12em] text-ink transition hover:bg-white"
          >
            送出
            <span
              aria-hidden
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-ink text-xl"
            >
              →
            </span>
          </button>
        ) : (
          <PrimaryButton type="submit">送出</PrimaryButton>
        )}
      </div>
      {sent ? (
        <p className="mt-8 rounded-md bg-white p-4 text-center text-[15px] leading-7 text-primary">
          已收到你的填寫（第一期僅示意，尚未寫入資料庫）。我們會在第二期接上後台後再正式處理。
        </p>
      ) : null}
    </form>
  );
}

function FieldRow({
  label,
  required,
  align = "center",
  children,
}: {
  label: string;
  required?: boolean;
  align?: "center" | "start";
  children: ReactNode;
}) {
  return (
    <label
      className={`grid gap-3 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10 ${
        align === "start" ? "md:items-start" : "md:items-center"
      }`}
    >
      <span
        className={`text-[15px] tracking-[0.04em] text-ink ${
          align === "start" ? "md:pt-4" : ""
        }`}
      >
        {label}
        {required ? <RequiredMark /> : null}
      </span>
      {children}
    </label>
  );
}
