import type { Locale } from "../i18n";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

type ArtworkText = Pick<GalleryItem, "alt" | "title" | "description">;

const artworks: Omit<GalleryItem, keyof ArtworkText>[] = [
  { src: "/Image_1785771149230_602.webp", width: 4600, height: 6000 },
  { src: "/新中文立绘 (1).webp", width: 4500, height: 6000 },
  { src: "/日文.webp", width: 1641, height: 1599 },
  { src: "/中文.webp", width: 1599, height: 2136 },
  { src: "/Kei.webp", width: 1080, height: 1495 },
];

const translations: Record<Locale, [ArtworkText, ArtworkText, ArtworkText, ArtworkText, ArtworkText]> = {
  zh: [
    { alt: "爱音芙歌白发粉尾双马尾的全身角色立绘", title: "立绘", description: "2026.08.03" },
    { alt: "爱音芙歌白发粉尾双马尾的新版中文声库立绘", title: "中文声库", description: "2026.07.20" },
    { alt: "爱音芙歌日文声库的角色立绘", title: "日文声库", description: "2026.03.21" },
    { alt: "爱音芙歌初版中文声库的角色立绘", title: "中文声库", description: "2025.12.23" },
    { alt: "莱星绘制的爱音芙歌 KEI 仿画风角色立绘", title: "KEI 仿画风", description: "莱星 绘制" },
  ],
  en: [
    { alt: "Full-body character artwork of AineFuka with white twin tails and pink tips", title: "Character artwork", description: "2026.08.03" },
    { alt: "AineFuka's updated Chinese voicebank artwork, with white twin tails and pink tips", title: "Chinese voicebank", description: "2026.07.20" },
    { alt: "Character artwork for AineFuka's Japanese voicebank", title: "Japanese voicebank", description: "2026.03.21" },
    { alt: "Character artwork for AineFuka's original Chinese voicebank", title: "Chinese voicebank", description: "2025.12.23" },
    { alt: "AineFuka character artwork by 莱星 in a style inspired by KEI", title: "KEI-inspired style", description: "Illustrated by 莱星" },
  ],
  ja: [
    { alt: "白髪にピンクの毛先のツインテールが特徴の、愛音フカの全身立ち絵", title: "立ち絵", description: "2026.08.03" },
    { alt: "白髪にピンクの毛先のツインテールが特徴の、愛音フカの新版中国語音源の立ち絵", title: "中国語音源", description: "2026.07.20" },
    { alt: "愛音フカの日本語音源のキャラクター立ち絵", title: "日本語音源", description: "2026.03.21" },
    { alt: "愛音フカの初版中国語音源のキャラクター立ち絵", title: "中国語音源", description: "2025.12.23" },
    { alt: "莱星が描いた、KEI 風の愛音フカのキャラクター立ち絵", title: "KEI 風", description: "イラスト：莱星" },
  ],
};

const galleryItems: Record<Locale, GalleryItem[]> = {
  zh: artworks.map((artwork, index) => ({ ...artwork, ...translations.zh[index] })),
  en: artworks.map((artwork, index) => ({ ...artwork, ...translations.en[index] })),
  ja: artworks.map((artwork, index) => ({ ...artwork, ...translations.ja[index] })),
};

export function getGalleryItems(locale: Locale): GalleryItem[] {
  return galleryItems[locale];
}
