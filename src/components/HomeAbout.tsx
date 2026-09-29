import { MindfulSanctuary } from "@/components/MindfulSanctuary";
import { PartnershipImageBoxes } from "@/components/PartnershipImageBoxes";

export function HomeAbout() {
  return (
    <section className="relative mx-auto mt-[90px] max-w-[1720px] px-2 md:mt-[140px]">
      <div className="mx-auto rounded-[20px] border border-dashed border-primary/40 bg-white/70 px-6 py-9 text-center md:px-10 md:py-11">
        <PartnershipImageBoxes />
      </div>

      <MindfulSanctuary className="mt-16 md:mt-24" />
    </section>
  );
}
