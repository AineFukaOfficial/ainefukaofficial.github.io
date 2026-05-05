import FadeIn from "../components/FadeIn";
import VoiceSection from "../components/VoiceSection";

export default function VoicePage() {
  return (
    <div className="pt-28">
      <VoiceSection />

      {/* Additional Voice Details */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-4xl mx-auto">
        <FadeIn direction="up">
          <h2 className="section-title mb-16">声库详情</h2>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 text-primary-pink flex items-center gap-3">
                <span className="text-2xl">🇨🇳</span> 中文声库
              </h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex gap-3">
                  <span className="text-primary-pink">•</span>
                  <span><strong>类型：</strong>扩张整音</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-pink">•</span>
                  <span><strong>配布日期：</strong>2025年12月23日</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-pink">•</span>
                  <span>采用扩张整音录制，保证中文发音准确自然</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 text-primary-blue flex items-center gap-3">
                <span className="text-2xl">🇯🇵</span> 日文声库
              </h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex gap-3">
                  <span className="text-primary-blue">•</span>
                  <span><strong>类型：</strong>单独音</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-blue">•</span>
                  <span><strong>配布日期：</strong>2026年3月21日</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-blue">•</span>
                  <span>单独音形式，适合日系风格音乐作品</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4 text-primary-purple flex items-center gap-3">
                <span className="text-2xl">🎤</span> 袅袅声库
              </h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex gap-3">
                  <span className="text-primary-purple">•</span>
                  <span><strong>制作：</strong>Qiyiyin</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary-purple">•</span>
                  <span>适用于袅袅虚拟歌手软件</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <a
              href="https://bowlroll.net/file/346505"
              target="_blank"
              className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-full text-base"
            >
              <span className="text-lg">💾</span> 下载声库
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
