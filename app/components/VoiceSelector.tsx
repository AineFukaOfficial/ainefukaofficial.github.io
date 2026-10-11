"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { banks } from "../voice/banks";
import styles from "./VoiceSelector.module.css";

export default function VoiceSelector() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasSelected, setHasSelected] = useState(false);
  const selectorId = useId();
  const selected = banks[selectedIndex];

  return (
    <div className={styles.scene}>
      <header className={styles.heading} data-reveal>
        <h2>让她唱<br />你的歌</h2>
        <p>中文、日文、袅袅，按需下载就好</p>
      </header>

      <figure className={styles.release} data-reveal>
        <div
          key={selected.type}
          className={`${styles.record} ${hasSelected ? styles.recordChanged : ""}`}
        >
          <div className={styles.artwork}>
            <img src={selected.artwork} alt={selected.artworkAlt} width={450} height={600} />
          </div>
          <div className={styles.recordLabel}>
            <span>愛音フカ</span>
            <strong>{selected.title === "袅袅声库" ? "袅袅" : selected.type}</strong>
          </div>
          <span className={styles.spindle} aria-hidden="true" />
        </div>
        <figcaption>爱音芙歌 / {selected.title} / 免费配布</figcaption>
      </figure>

      <div className={styles.catalog} data-reveal>
        <fieldset className={styles.selector}>
          <legend>选择声库</legend>
          {banks.map((bank, index) => (
            <label className={styles.bank} key={bank.type}>
              <input
                type="radio"
                name={selectorId}
                value={bank.type}
                checked={index === selectedIndex}
                onChange={() => {
                  setSelectedIndex(index);
                  setHasSelected(true);
                }}
              />
              <span className={styles.choice} aria-hidden="true" />
              <span className={styles.bankName}>
                <strong>{bank.title === "袅袅声库" ? "袅袅" : bank.type}</strong>
                <span>{bank.title}</span>
              </span>
              {bank.date ? (
                <time dateTime={bank.date.replaceAll(".", "-")}>{bank.date}</time>
              ) : (
                <span className={styles.undated}>Qiyiyin 制作</span>
              )}
            </label>
          ))}
        </fieldset>

        <div className={styles.linerNotes} aria-live="polite" aria-atomic="true">
          <p className={styles.description}>{selected.description}</p>
          <dl className={styles.specs}>
            <div><dt>擅长音域</dt><dd>F3–C5</dd></div>
            <div><dt>声库制作</dt><dd>{selected.author}</dd></div>
            <div>
              <dt>配布信息</dt>
              <dd>{selected.date ? <time dateTime={selected.date.replaceAll(".", "-")}>{selected.date}</time> : "袅袅虚拟歌手"}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.actions}>
          <a href="https://bowlroll.net/file/346505" target="_blank" rel="noopener noreferrer" className={styles.download}>
            BowlRoll 下载 <span aria-hidden="true">↗</span>
            <span className={styles.srOnly}>（在新窗口打开）</span>
          </a>
          <Link href="/voice" className={styles.notesLink}>查看使用说明</Link>
        </div>
      </div>
    </div>
  );
}
