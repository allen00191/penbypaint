import { SiteImage } from "@/components/SiteImage";

const features = [
  {
    title: "靈活跨界合作",
    en: "Flexible B2B & B2C Solutions",
    detail: "學校｜NGO｜企業 HR｜品牌快閃｜婚禮個人",
    icon: "partners",
  },
  {
    title: "量身客製方案",
    en: "Tailor-Made Programs",
    detail: "全港到校服務、企業專屬 Wellness、品牌 VIP 體驗",
    icon: "plan",
  },
  {
    title: "ACT 專業導引",
    en: "ACT-Guided Practice",
    detail: "融入接納與承諾療法，提升心理韌性與覺察力",
    icon: "guide",
  },
  {
    title: "沉浸體驗",
    en: "Full-Sensory Immersive Arts",
    detail: "提供全套高品質畫材、正念靜心氛圍與舒壓空間",
    icon: "arts",
  },
] as const;

function FeatureIcon({ name }: { name: (typeof features)[number]["icon"] }) {
  const paths = {
    partners: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M8 14.5c-1.6.8-3 2.2-3 4h6m5-4c1.6.8 3 2.2 3 4h-6M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.2-1.2a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm10.4 0a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z"
      />
    ),
    plan: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 4.5h8l2 2.2V19.5H6V6.7L8 4.5Zm2 6.5h6M10 14h6"
      />
    ),
    guide: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M12 19.5s-5.5-3.2-5.5-7.4a3.1 3.1 0 0 1 5.5-2 3.1 3.1 0 0 1 5.5 2c0 4.2-5.5 7.4-5.5 7.4Z"
      />
    ),
    arts: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 16.5 15.2 9.3a2.2 2.2 0 0 1 3.1 3.1L11.1 19.6a3.4 3.4 0 0 1-4.8-4.8L12 9M7.2 17.2l.6.6"
      />
    ),
  };

  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-primary ring-1 ring-primary/35">
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        {paths[name]}
      </svg>
    </span>
  );
}

export function MindfulSanctuary({ className = "" }: { className?: string }) {
  return (
    <div className={`grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16 ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] lg:aspect-auto">
        <SiteImage
          src="/photo/mindful-sanctuary.jpg"
          alt="孩子在光影裝置前抬頭張望"
          fill
          className="object-cover object-[72%_center]"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>

      <div>
        <h2 className="text-[28px] font-medium leading-tight tracking-[0.02em] md:text-[36px]">
          <span className="text-primary">Your Mindful</span>{" "}
          <span className="text-[#8d8d8d]">Sanctuary</span>
        </h2>
        <p className="mt-3 text-[18px] font-medium tracking-[0.06em] text-ink md:text-[20px]">
          屬於每個人的 靈魂・藝術驛站
        </p>
        <p className="mt-4 text-[14px] leading-7 text-[#9a9a9a]">
          結合 ACT 理論與視覺創作的身心靈工作坊
        </p>
        <p className="text-[14px] leading-7 text-[#9a9a9a]">
          Hong Kong’s Leading Art & ACT Mindfulness Experience Platform
        </p>

        <ul className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature.en} className="flex gap-3.5">
              <FeatureIcon name={feature.icon} />
              <div className="min-w-0">
                <p className="text-[15px] font-bold leading-6 text-ink">{feature.title}</p>
                <p className="text-[13px] leading-6 text-[#8d8d8d]">{feature.en}</p>
                <p className="mt-1 text-[13px] leading-6 text-[#9a9a9a]">（{feature.detail}）</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
