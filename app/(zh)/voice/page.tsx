import VoiceSection from "../../components/VoiceSection";
import { createPageMetadata } from "../../seo";
import { getDictionary } from "../../i18n";
import styles from "../../voice/voice.module.css";

export const metadata = createPageMetadata("zh", "/voice", "voice");

export default function VoicePage() {
  const t = getDictionary("zh");
  return (
    <div>
      <VoiceSection locale="zh" />
      <section className={`page-shell ${styles.notes}`} aria-labelledby="voice-notes-title">
        <div>
          <h2 id="voice-notes-title" className="section-heading">{t.voice.notesTitle}</h2>
          <a href="https://bowlroll.net/file/346505" target="_blank" rel="noopener noreferrer" className={`text-link ${styles.notesDownload}`}>
            {t.voice.downloadNotes}<span className={styles.srOnly}>{t.common.newWindow}</span>
          </a>
        </div>
        <dl className={styles.noteList}>
          {t.voice.notes.map((note) => <div key={note.title}><dt>{note.title}</dt><dd>{note.description}</dd></div>)}
        </dl>
      </section>
    </div>
  );
}
