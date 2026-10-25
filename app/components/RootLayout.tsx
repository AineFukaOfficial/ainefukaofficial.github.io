import type { Metadata } from "next";
import { getDictionary, type Locale } from "../i18n";
import { siteUrl } from "../seo";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: getDictionary("zh").metadata.home.title,
  description: getDictionary("zh").metadata.home.description,
  keywords: getDictionary("zh").metadata.home.keywords,
  verification: {
    google: "UtVNLnYkEUV3XbwenG_8S-ctRXTS4I78xUa36Ke9LxM",
    other: { "msvalidate.01": "7CC6B68853F5B1DCE781903F47941AEF" },
  },
};

export default function RootLayout({ children, locale }: { children: React.ReactNode; locale: Locale }) {
  return (
    <html lang={locale === "zh" ? "zh-CN" : locale}>
      <body>{children}</body>
    </html>
  );
}
