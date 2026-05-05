import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ParticleBg from "./components/ParticleBg";
import PageTransition from "./components/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ainefuka.com"),
  title: "爱音芙歌 | 愛音フカ - UTAU虚拟歌姬",
  description: "爱音芙歌（AineFuka）- 于2025年12月23日首次配布于Bilibili的免费UTAU虚拟歌姬音源。拥有中文扩张整音与日文单独音声库。",
  keywords: ["爱音芙歌", "愛音フカ", "AineFuka", "UTAU", "虚拟歌姬", "歌声合成"],
  openGraph: {
    title: "爱音芙歌 | 愛音フカ - UTAU虚拟歌姬",
    description: "用甜品般甜美的声音，为你唱响每一个音符 ♡",
    images: ["/中文.PNG"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&family=Noto+Serif+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ParticleBg />
        <Nav />
        <main className="relative z-10 min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
