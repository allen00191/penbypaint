import { PrimaryButton } from "@/components/PrimaryButton";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-24 text-center">
      <h1 className="text-[45px] font-bold">找不到頁面</h1>
      <p className="mt-4 leading-8">這條路徑沒有對應內容，請從主頁再找一次。</p>
      <div className="mt-10 flex justify-center">
        <PrimaryButton href="/">回到主頁</PrimaryButton>
      </div>
    </div>
  );
}
