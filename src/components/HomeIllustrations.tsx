import Image from "next/image";

export function HomeIllustrations() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(1600px,220vw)] overflow-hidden"
    >
      <Image
        src="/photo/Frame3.png"
        alt=""
        width={1024}
        height={595}
        priority
        className="absolute left-1/2 top-[220px] w-[min(1500px,145%)] max-w-none -translate-x-[46%] mix-blend-screen md:top-[300px]"
      />
    </div>
  );
}
