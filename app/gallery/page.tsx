import GalleryGrid from "../components/GalleryGrid";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "/gallery",
  "立绘展示 | 爱音芙歌 AineFuka",
  "浏览爱音芙歌（愛音フカ / AineFuka）的中文声库立绘、日文声库立绘与特别画风插画，欣赏白发粉尾双马尾虚拟歌姬的角色形象。",
);

export default function GalleryPage() {
  return (
    <div className="page-shell pb-20 md:pb-28">
      <header className="page-intro">
        <h1 className="page-title">立绘展示</h1>
        <p className="page-description mt-6">
          中文声库、日文声库与特别画风插画<br />
          点击立绘查看大图
        </p>
      </header>
      <GalleryGrid />
    </div>
  );
}
