import Link from "next/link";

type Props = {
  href?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
};

const classNameBase =
  "inline-flex max-w-full items-center justify-center gap-2 rounded-pill bg-card px-5 py-[1rem] text-[17px] font-medium text-primary shadow-[0_0_15px_rgba(0,0,0,0.05)] transition-colors hover:text-primary-active";

export function PrimaryButton({
  href,
  children,
  type = "button",
  className = "",
}: Props) {
  const classes = `${classNameBase} ${className}`;
  if (href) {
    return (
      <Link href={href} className={`${classes} min-w-[min(100%,220px)]`}>
        {children}
        <span aria-hidden className="text-sm">
          →
        </span>
      </Link>
    );
  }
  return (
    <button type={type} className={`${classes} w-full min-w-[min(100%,220px)] sm:w-[382px]`}>
      {children}
      <span aria-hidden className="text-sm">
        →
      </span>
    </button>
  );
}
