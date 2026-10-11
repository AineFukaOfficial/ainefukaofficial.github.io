import VoiceSection from "../components/VoiceSection";
import { createPageMetadata } from "../seo";
import styles from "./voice.module.css";

export const metadata = createPageMetadata(
  "/voice",
  "声库下载与使用说明 | 爱音芙歌 AineFuka",
  "免费下载爱音芙歌的中文扩张整音、日文单独音与袅袅声库，查看音域 F3–C5、声库特点及使用说明，前往 BowlRoll 获取音源。",
);

export default function VoicePage() {
  return (
    <div>
      <VoiceSection />

      <section className={`page-shell ${styles.notes}`} aria-labelledby="voice-notes-title">
        <div>
          <h2 id="voice-notes-title" className="section-heading">使用说明</h2>
          <a
            href="https://bowlroll.net/file/346505"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-link ${styles.notesDownload}`}
          >
            前往 BowlRoll 下载
            <span className={styles.srOnly}>（在新窗口打开）</span>
          </a>
        </div>
        <dl className={styles.noteList}>
          <div>
            <dt>中文声库</dt>
            <dd>扩张整音录制，侧重中文咬字的完整与自然</dd>
          </div>
          <div>
            <dt>日文声库</dt>
            <dd>日文单独音，便于音节切分与调声</dd>
          </div>
          <div>
            <dt>袅袅声库</dt>
            <dd>由 Qiyiyin 制作，适配袅袅虚拟歌手软件</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
