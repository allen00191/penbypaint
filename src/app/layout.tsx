import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const noto = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name}｜興趣班與工作坊`,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/photo/logo1.png",
    apple: "/photo/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${noto.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen overflow-x-clip px-4 pb-24 pt-[70px] md:px-8 md:pb-32 md:pt-[117px] lg:px-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
