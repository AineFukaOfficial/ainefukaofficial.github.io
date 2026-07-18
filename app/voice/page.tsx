import VoiceSection from "../components/VoiceSection";

export default function VoicePage() {
  return (
    <div>
      <VoiceSection />

      <section className="page-shell border-t border-line/70 py-12 md:py-16">
        <p className="section-kicker">♪ Notes</p>
        <h2 className="section-heading">使用说明</h2>
        <div className="mt-7 grid gap-3 md:grid-cols-3">
          <article className="sheet p-5">
            <h3 className="font-display text-lg font-extrabold">中文声库</h3>
            <p className="mt-2 leading-7 text-muted">
              扩张整音录制，优先保证中文咬字完整度与自然感。
            </p>
          </article>
          <article className="sheet p-5">
            <h3 className="font-display text-lg font-extrabold">日文声库</h3>
            <p className="mt-2 leading-7 text-muted">
              单独音形式，便于日系曲风的音节切分与调声。
            </p>
          </article>
          <article className="sheet p-5">
            <h3 className="font-display text-lg font-extrabold">袅袅声库</h3>
            <p className="mt-2 leading-7 text-muted">
              由 Qiyiyin 制作，适配袅袅虚拟歌手软件。
            </p>
          </article>
        </div>

        <div className="mt-8">
          <a
            href="https://bowlroll.net/file/346505"
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid"
          >
            前往下载
          </a>
        </div>
      </section>
    </div>
  );
}
