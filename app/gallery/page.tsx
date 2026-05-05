import FadeIn from "../components/FadeIn";
import GalleryGrid from "../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <FadeIn direction="up">
        <h1 className="section-title mb-4">立绘展示</h1>
      </FadeIn>
      <FadeIn direction="up" delay={0.1}>
        <p className="text-center text-text-light text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          爱音芙歌的各类立绘作品展示，包含中文声库、日文声库及特别绘制的插画。
        </p>
      </FadeIn>
      <GalleryGrid />

      <FadeIn direction="up" delay={0.4}>
        <div className="mt-16 glass-card p-8 text-center">
          <p className="text-text-light leading-relaxed text-lg">
            立绘由多位画师协力完成，展示爱音芙歌在不同风格下的魅力！
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
