const C = 2 * Math.PI * 88;

const segments = [
  { label: "很滿意", pct: 0.65, color: "var(--pp-primary)", display: "65%" },
  { label: "滿意", pct: 0.29, color: "#8ebcbc", display: "29%" },
  { label: "普通／其他", pct: 0.06, color: "#c5c5c5", display: "6%" },
];

export function SatisfactionSurvey() {
  let offset = 0;

  return (
    <section
      className="relative mx-auto w-[min(1120px,100%)] px-2 text-center"
      aria-labelledby="survey-heading"
    >
      <h2
        id="survey-heading"
        className="text-[26px] font-bold tracking-[0.08em] text-primary md:text-[32px]"
      >
        滿意度調查結果
      </h2>

      <div className="mx-auto mt-8 max-w-[760px] border-t border-dashed border-primary/30" />

      <div className="mt-8 rounded-[28px] bg-[color-mix(in_srgb,var(--pp-primary)_8%,white)] px-5 py-10 md:px-10 md:py-14">
        <div className="mx-auto grid max-w-[860px] items-center gap-x-6 md:grid-cols-[140px_minmax(240px,300px)_140px] md:justify-center">
          <div className="hidden h-full flex-col justify-between py-8 text-right md:flex">
            <p className="text-[13px] leading-5 text-ink">
              普通／其他
              <span className="mt-0.5 block text-[22px] font-bold text-muted">
                6%
              </span>
            </p>
            <p className="text-[13px] leading-5 text-ink">
              滿意
              <span className="mt-0.5 block text-[28px] font-bold text-primary">
                29%
              </span>
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-[min(100%,300px)]">
            <svg viewBox="0 0 240 240" className="h-full w-full" aria-hidden>
              <g transform="rotate(-90 120 120)">
                {segments.map((segment) => {
                  const dash = segment.pct * C;
                  const circle = (
                    <circle
                      key={segment.label}
                      cx="120"
                      cy="120"
                      r="88"
                      fill="none"
                      stroke={segment.color}
                      strokeWidth="36"
                      strokeDasharray={`${dash} ${C}`}
                      strokeDashoffset={-offset}
                    />
                  );
                  offset += dash;
                  return circle;
                })}
              </g>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[13px] tracking-[0.08em] text-ink">滿意度合計</p>
              <p className="text-[52px] font-bold leading-none text-primary md:text-[60px]">
                94%
              </p>
              <p className="mt-2 rounded-pill bg-primary px-3 py-0.5 text-[12px] text-white">
                很滿意＋滿意
              </p>
            </div>
          </div>

          <div className="hidden h-full items-center justify-start py-8 text-left md:flex">
            <p className="text-[13px] leading-5 text-ink">
              很滿意
              <span className="mt-0.5 block text-[32px] font-bold text-primary">
                65%
              </span>
            </p>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-6 text-[14px] md:hidden">
          {segments.map((segment) => (
            <li key={segment.label} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: segment.color }}
              />
              {segment.label}
              <span className="font-bold text-primary">{segment.display}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-[520px] text-[13px] leading-7 text-muted">
          根據畫室學員與家長問卷（示意數據）。
        </p>
        <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-8 text-ink">
          我們對參加興趣班與工作坊的學員、家長進行了滿意度調查，並
          <span className="font-bold whitespace-nowrap text-primary">
            收到許多正面回饋
          </span>
          。
        </p>
      </div>

      <p className="mx-auto mt-12 max-w-[760px] text-[17px] leading-9 font-bold md:text-[19px]">
        我們獲得了
        <span className="text-primary"> 94% 的高滿意度</span>
        ，是因為我們不僅在意當堂完成的作品，
        <br className="hidden md:inline" />
        也在意能帶走、可重複的
        <span className="text-primary">創作習慣</span>。
      </p>
      <p className="mt-4 text-[13px] tracking-[0.08em] text-muted">
        數據為網站示意，正式問卷將於後台接上後更新。
      </p>
    </section>
  );
}
