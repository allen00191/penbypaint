export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-x-[58px] gap-y-14 xl:grid-cols-3 xl:gap-y-[88px]">
      {children}
    </div>
  );
}
