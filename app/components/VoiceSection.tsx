import styles from "../voice/voice.module.css";
import { getBanks } from "../voice/banks";
import { getDictionary, type Locale } from "../i18n";

export default function VoiceSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const banks = getBanks(locale);
  return (
    <section className="page-shell" aria-labelledby="voice-title">
      <div className={`page-intro ${styles.intro}`}>
        <div className={styles.introCopy}>
          <h1 id="voice-title" className="page-title">{t.voice.title}</h1>
          <p className={`page-description ${styles.description}`}>{t.voice.descriptionLines[0]}<br />{t.voice.descriptionLines[1]}</p>
          <dl className={styles.specs}>
            <div><dt>{t.voice.range}</dt><dd className={styles.range}>F3–C5</dd></div>
            <div><dt>{t.voice.creator}</dt><dd>Whien、重症</dd></div>
          </dl>
          <a href="https://bowlroll.net/file/346505" target="_blank" rel="noopener noreferrer" className={`btn btn-solid ${styles.download}`}>
            {t.voice.download}<span className={styles.srOnly}>{t.common.newWindow}</span>
          </a>
        </div>
        <div className={styles.artwork}>
          <img src="/新中文立绘 (1).webp" alt={t.voice.artworkAlt} width={4500} height={6000} className={styles.portrait} />
        </div>
      </div>
      <div className={styles.catalog}>
        <div className={styles.catalogHeading}><h2 className="section-heading">{t.voice.catalogTitle}</h2><p>{t.voice.catalogDescription}</p></div>
        <ul className={styles.bankList}>
          {banks.map((bank) => (
            <li key={bank.id} className={styles.bank}>
              <h3>{bank.title}</h3><p className={styles.bankType}>{bank.type}</p>
              {bank.date ? <time dateTime={bank.date.replaceAll(".", "-")} className={styles.bankDate}><span className={styles.srOnly}>{t.voice.releaseDate}</span>{bank.date}</time> : <p className={styles.bankDate}>{t.voice.niaoniaoSinger}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
