import type { Locale } from "../i18n";

interface Voicebank {
  id: "chncv" | "expansion" | "cv" | "niaoniao";
  title: string;
  shortTitle: string;
  type: string;
  date: string | null;
  author: string;
  artwork: string;
  artworkAlt: string;
  description: string;
}

type BankText = Pick<Voicebank, "title" | "shortTitle" | "type" | "artworkAlt" | "description">;

const bankDetails: Omit<Voicebank, keyof BankText>[] = [
  { id: "chncv", date: "2026.09.01", author: "Whien、重症", artwork: "/新中文立绘 (1).webp" },
  { id: "expansion", date: "2025.12.23", author: "Whien、重症", artwork: "/中文.webp" },
  { id: "cv", date: "2026.03.21", author: "Whien、重症", artwork: "/日文.webp" },
  { id: "niaoniao", date: null, author: "Qiyiyin", artwork: "/新中文立绘 (1).webp" },
];

const translations: Record<Locale, [BankText, BankText, BankText, BankText]> = {
  zh: [
    { title: "中文声库", shortTitle: "CHNCV", type: "CHNCV", artworkAlt: "爱音芙歌白发粉尾双马尾的中文 CHNCV 声库立绘", description: "中文 CHNCV 声库，免费配布" },
    { title: "中文声库", shortTitle: "扩张整音", type: "扩张整音", artworkAlt: "爱音芙歌初版中文声库的角色立绘", description: "扩张整音录制，侧重中文咬字的完整与自然" },
    { title: "日文声库", shortTitle: "单独音", type: "单独音", artworkAlt: "爱音芙歌日文单独音声库的角色立绘", description: "日文单独音，便于音节切分与调声" },
    { title: "袅袅声库", shortTitle: "袅袅", type: "Qiyiyin 制作", artworkAlt: "白发粉尾双马尾的爱音芙歌角色立绘", description: "由 Qiyiyin 制作，适配袅袅虚拟歌手软件" },
  ],
  en: [
    { title: "Chinese voicebank", shortTitle: "CHNCV", type: "CHNCV", artworkAlt: "AineFuka's Chinese CHNCV voicebank artwork, with white twin tails and pink tips", description: "A Chinese CHNCV voicebank, free to download" },
    { title: "Chinese voicebank", shortTitle: "Extended", type: "Extended reclist", artworkAlt: "Character artwork for AineFuka's original Chinese voicebank", description: "An extended-reclist recording focused on complete, natural Chinese articulation" },
    { title: "Japanese voicebank", shortTitle: "CV", type: "CV (single-sound)", artworkAlt: "Character artwork for AineFuka's Japanese CV voicebank", description: "Japanese CV recordings for straightforward syllable editing and tuning" },
    { title: "NIAONiao voicebank", shortTitle: "NIAONiao", type: "Created by Qiyiyin", artworkAlt: "Character artwork of AineFuka with white twin tails and pink tips", description: "Created by Qiyiyin for the NIAONiao Virtual Singer software" },
  ],
  ja: [
    { title: "中国語音源", shortTitle: "CHNCV", type: "CHNCV", artworkAlt: "白髪にピンクの毛先のツインテールが特徴の、愛音フカ中国語 CHNCV 音源の立ち絵", description: "無料配布の中国語 CHNCV 音源" },
    { title: "中国語音源", shortTitle: "拡張音源", type: "拡張リスト音源", artworkAlt: "愛音フカの初版中国語音源のキャラクター立ち絵", description: "中国語の発音を自然かつ明瞭に表現することを重視した、拡張リストによる収録音源" },
    { title: "日本語音源", shortTitle: "単独音", type: "単独音", artworkAlt: "愛音フカの日本語単独音音源のキャラクター立ち絵", description: "音節の編集や調声がしやすい、日本語の単独音音源" },
    { title: "袅袅音源", shortTitle: "袅袅", type: "Qiyiyin 制作", artworkAlt: "白髪にピンクの毛先のツインテールが特徴の愛音フカの立ち絵", description: "Qiyiyin が制作した、袅袅バーチャルシンガーソフト対応音源" },
  ],
};

const banks: Record<Locale, Voicebank[]> = {
  zh: bankDetails.map((bank, index) => ({ ...bank, ...translations.zh[index] })),
  en: bankDetails.map((bank, index) => ({ ...bank, ...translations.en[index] })),
  ja: bankDetails.map((bank, index) => ({ ...bank, ...translations.ja[index] })),
};

export function getBanks(locale: Locale): Voicebank[] {
  return banks[locale];
}
