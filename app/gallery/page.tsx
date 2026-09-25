import GalleryGrid from "../components/GalleryGrid";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "/gallery",
  "立绘展示 | 爱音芙歌 AineFuka",
  "浏览爱音芙歌（愛音フカ / AineFuka）的中文声库立绘、日文声库立绘与特别画风插画，欣赏白发粉尾双马尾虚拟歌姬的角色形象。",
);

export default function GalleryPage() {
  return (
    <div className="page-shell pb-14 pt-20 md:pb-20 md:pt-24">
      <p className="section-kicker">✦ Artworks</p>
      <h1 className="section-heading">立绘展示</h1>
      <p className="mt-3 max-w-2xl text-[1.02rem] leading-7 text-muted">
        中文声库、日文声库与特别画风插画，挑一张当封面也好看。
      </p>
      <div className="mt-8">
        <GalleryGrid />
      </div>
    </div>
  );
}
