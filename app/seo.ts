import type { Metadata } from "next";
import { getDictionary, locales, localizedPath, type Locale } from "./i18n";

// 与 GitHub Pages 实际域名保持一致；迁移域名时同步更新部署与搜索平台属性。
export const siteUrl = "https://ainefukaofficial.github.io";

export function createPageMetadata(locale: Locale, path: string, page: "home" | "profile" | "voice" | "gallery"): Metadata {
  const t = getDictionary(locale);
  const { title, description, keywords } = t.metadata[page];
  const url = new URL(localizedPath(locale, path), siteUrl).href;
  const languages = Object.fromEntries(locales.map((item) => [item === "zh" ? "zh-CN" : item, new URL(localizedPath(item, path), siteUrl).href]));
  languages["x-default"] = new URL(path, siteUrl).href;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "AineFuka",
      locale: { zh: "zh_CN", en: "en_US", ja: "ja_JP" }[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => ({ zh: "zh_CN", en: "en_US", ja: "ja_JP" })[item]),
      images: [{ url: new URL("/新中文立绘 (1).webp", siteUrl).href, alt: t.voice.artworkAlt }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
