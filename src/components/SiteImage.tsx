import Image, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/basePath";

export function SiteImage({ src, alt, ...rest }: ImageProps) {
  const resolved =
    typeof src === "string" && src.startsWith("/") && !src.startsWith("//")
      ? withBasePath(src)
      : src;
  return <Image alt={alt} src={resolved} {...rest} />;
}
