import type { Metadata } from "next";
import VoiceSection from "../../../components/VoiceSection";
import { createPageMetadata } from "../../../seo";
import { getDictionary, type Locale } from "../../../i18n";
import styles from "../../../voice/voice.module.css";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  return createPageMetadata((await params).lang, "/voice", "voice");
}

export default async function VoicePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const locale = (await params).lang;
  const t = getDictionary(locale);
  return (
    <div>
      <VoiceSection locale={locale} />
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
