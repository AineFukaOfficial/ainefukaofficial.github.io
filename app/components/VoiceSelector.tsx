"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { getBanks } from "../voice/banks";
import { getDictionary, localizedPath, type Locale } from "../i18n";
import styles from "./VoiceSelector.module.css";

export default function VoiceSelector({ locale }: { locale: Locale }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasSelected, setHasSelected] = useState(false);
  const selectorId = useId();
  const t = getDictionary(locale);
  const banks = getBanks(locale);
  const selected = banks[selectedIndex];

  return (
    <div className={styles.scene}>
      <header className={styles.heading} data-reveal><h2>{t.voice.headingLines[0]}<br />{t.voice.headingLines[1]}</h2><p>{t.voice.intro}</p></header>
      <figure className={styles.release} data-reveal>
        <div key={selected.id} className={`${styles.record} ${hasSelected ? styles.recordChanged : ""}`}>
          <div className={styles.artwork}><img src={selected.artwork} alt={selected.artworkAlt} width={450} height={600} /></div>
          <div className={styles.recordLabel}><span lang="ja">愛音フカ</span><strong>{selected.shortTitle}</strong></div>
          <span className={styles.spindle} aria-hidden="true" />
        </div>
        <figcaption>AineFuka / {selected.title} / {t.voice.freeRelease}</figcaption>
      </figure>
      <div className={styles.catalog} data-reveal>
        <fieldset className={styles.selector}>
          <legend>{t.voice.choose}</legend>
          {banks.map((bank, index) => (
            <label className={styles.bank} key={bank.id}>
              <input type="radio" name={selectorId} value={bank.type} checked={index === selectedIndex} onChange={() => { setSelectedIndex(index); setHasSelected(true); }} />
              <span className={styles.choice} aria-hidden="true" />
              <span className={styles.bankName}><strong>{bank.shortTitle}</strong><span>{bank.title}</span></span>
              {bank.date ? <time dateTime={bank.date.replaceAll(".", "-")}>{bank.date}</time> : <span className={styles.undated}>{t.voice.creatorCredit}</span>}
            </label>
          ))}
        </fieldset>
        <div className={styles.linerNotes} aria-live="polite" aria-atomic="true">
          <p className={styles.description}>{selected.description}</p>
          <dl className={styles.specs}>
            <div><dt>{t.voice.range}</dt><dd>F3–C5</dd></div>
            <div><dt>{t.voice.creator}</dt><dd>{selected.author}</dd></div>
            <div><dt>{t.voice.releaseInfo}</dt><dd>{selected.date ? <time dateTime={selected.date.replaceAll(".", "-")}>{selected.date}</time> : t.voice.niaoniaoSinger}</dd></div>
          </dl>
        </div>
        <div className={styles.actions}>
          <a href="https://bowlroll.net/file/346505" target="_blank" rel="noopener noreferrer" className={styles.download}>{t.voice.download}<span aria-hidden="true">↗</span><span className={styles.srOnly}>{t.common.newWindow}</span></a>
          <Link href={localizedPath(locale, "/voice")} className={styles.notesLink}>{t.voice.instructions}</Link>
        </div>
      </div>
    </div>
  );
}
