import type { Metadata } from "next";

// 与 GitHub Pages 实际域名保持一致；迁移域名时同步更新部署与搜索平台属性。
export const siteUrl = "https://ainefukaofficial.github.io";

export function createPageMetadata(
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = new URL(path, siteUrl).href;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "爱音芙歌 AineFuka",
      locale: "zh_CN",
      images: [
        {
          url: "/新中文立绘 (1).webp",
          alt: "爱音芙歌（愛音フカ / AineFuka）中文声库立绘",
        },
      ],
    },
    twitter: { card: "summary_large_image" },
  };
}
