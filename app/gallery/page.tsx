import GalleryGrid from "../components/GalleryGrid";

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
