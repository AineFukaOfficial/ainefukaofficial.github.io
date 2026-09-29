import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { siteUrl } from "./seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "爱音芙歌 | 愛音フカ - UTAU虚拟歌姬",
  description:
    "爱音芙歌（AineFuka）- 于2025年12月23日首次配布于Bilibili的免费UTAU虚拟歌姬音源。拥有中文扩张整音与日文单独音声库。",
  keywords: ["爱音芙歌", "愛音フカ", "AineFuka", "UTAU", "虚拟歌姬", "歌声合成"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="msvalidate.01" content="7CC6B68853F5B1DCE781903F47941AEF" />
        <meta name="google-site-verification" content="UtVNLnYkEUV3XbwenG_8S-ctRXTS4I78xUa36Ke9LxM" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@600;700&family=Zen+Maru+Gothic:wght@500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
