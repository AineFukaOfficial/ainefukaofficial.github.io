import HeroSection from "./components/HeroSection";
import ProfileCards from "./components/ProfileCards";
import FadeIn from "./components/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Profile Overview */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
        <FadeIn direction="up">
          <h2 className="section-title mb-16">角色档案</h2>
        </FadeIn>
        <ProfileCards compact />
        <FadeIn direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="/profile"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base"
            >
              查看完整档案 <span className="text-lg">→</span>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Voice Preview */}
      <section className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden bg-gradient-to-r from-primary-pink/5 via-primary-blue/5 to-primary-purple/5">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="section-title mb-8">声库信息</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-text-light text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              爱音芙歌拥有UTAU中文扩张整音声库与日文单独音声库，擅长音域F3~C5。
              适合演唱流行、可爱风格的歌曲。
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <a
              href="/voice"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base"
            >
              查看详细信息 <span className="text-lg">→</span>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-6xl mx-auto">
        <FadeIn direction="up">
          <h2 className="section-title mb-16">立绘展示</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["/日文.PNG", "/中文.PNG", "/Kei.PNG"].map((src, i) => (
            <FadeIn key={src} direction="up" delay={i * 0.1}>
              <div className="gallery-item">
                <img
                  src={src}
                  alt={i === 0 ? "日文声库立绘" : i === 1 ? "中文声库立绘" : "KEI仿画风立绘"}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full text-base"
            >
              查看全部立绘 <span className="text-lg">→</span>
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
