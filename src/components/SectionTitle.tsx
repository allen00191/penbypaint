type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionTitle({
  children,
  as: Tag = "h2",
  className = "",
}: Props) {
  return (
    <Tag
      className={`mb-[1.2em] text-[1.7857rem] font-bold leading-[1.5] tracking-[0.035em] md:text-[45px] ${className}`}
    >
      {children}
    </Tag>
  );
}
