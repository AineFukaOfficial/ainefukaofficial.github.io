import type { Metadata } from "next";
import HomeExperience from "./components/HomeExperience";
import { createPageMetadata } from "./seo";

export const metadata: Metadata = createPageMetadata(
  "/",
  "爱音芙歌官网 | 愛音フカ AineFuka - UTAU・袅袅虚拟歌姬",
  "爱音芙歌（愛音フカ / AineFuka）官方网站。免费配布的 UTAU・袅袅虚拟歌姬，提供中文扩张整音、日文单独音与袅袅声库下载入口，以及角色档案、使用说明和立绘展示。",
);

export default function HomePage() {
  return <HomeExperience />;
}
