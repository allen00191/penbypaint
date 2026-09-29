const columns = [
  {
    id: "schools",
    zh: "師生壓力爆表、無法專注？想找具深度的 SEN 或身心靈工作坊卻無從入手？",
    en: "Student Stress & Emotion Management?",
    audience: "學校 / 教育",
  },
  {
    id: "ngo",
    zh: "活動預算極度有限？想為情緒緊繃的服務對象尋找身心靈的療癒項目？",
    en: "Community Healing & Low-Barrier Mindfulness?",
    audience: "NGO / 社福機構",
  },
  {
    id: "corporate",
    zh: "員工職業倦怠、團隊零凝聚力？傳統 Team Building 枯燥又浪費預算？",
    en: "Employee Burnout & Team Cohesion?",
    audience: "企業 / HR",
  },
  {
    id: "brand",
    zh: "快閃活動缺乏質感與深度？無法給顧客留下獨一無二的品牌記憶？",
    en: "Lack of Deep Engagement in Brand Events?",
    audience: "品牌 / 商業合作",
  },
] as const;

export function PartnershipImageBoxes() {
  return (
    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-16 xl:grid-cols-4 xl:gap-x-24">
      {columns.map((column) => (
        <div key={column.id} className="text-center">
          <p className="text-balance text-[15px] font-medium leading-8 text-black md:text-[16px]">
            {column.zh}
          </p>
          <p className="mt-4 text-balance text-[13px] leading-6 text-primary">
            {column.en}
          </p>
          <p className="mt-4 text-[12px] tracking-[0.12em] text-black">
            {column.audience}
          </p>
        </div>
      ))}
    </div>
  );
}
