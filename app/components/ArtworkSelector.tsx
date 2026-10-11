"use client";

import { useId, useState } from "react";
import { galleryItems } from "../gallery/artworks";
import styles from "./ArtworkSelector.module.css";

export default function ArtworkSelector() {
  const headingId = useId();
  const [selection, setSelection] = useState({ index: 0, direction: "next", revision: 0 });
  const selected = galleryItems[selection.index];

  function select(index: number, direction: string) {
    setSelection((current) => {
      const nextIndex = (index + galleryItems.length) % galleryItems.length;
      return nextIndex === current.index
        ? current
        : { index: nextIndex, direction, revision: current.revision + 1 };
    });
  }

  return (
    <div
      className={styles.selector}
      role="region"
      aria-labelledby={headingId}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          event.stopPropagation();
          const previous = event.key === "ArrowLeft";
          select(selection.index + (previous ? -1 : 1), previous ? "previous" : "next");
        }
      }}
    >
      <div className={styles.copy} data-reveal>
        <h2 id={headingId} className={styles.heading}>每一种<br />芙歌</h2>
        <p className={styles.introduction}>中文、日文，还有特别画风的芙歌<br />点选小图，看看你喜欢哪一张</p>
      </div>

      <figure className={styles.stage} data-reveal>
        <div className={styles.orbit} aria-hidden="true" />
        <div className={styles.artWindow}>
          <img
            key={selection.revision}
            className={`${styles.art} ${selection.revision > 0 ? styles.entering : ""}`}
            data-direction={selection.direction}
            src={selected.src}
            alt={selected.alt}
            width={selected.width}
            height={selected.height}
            decoding="async"
          />
        </div>
        <figcaption className={styles.caption} aria-live="polite" aria-atomic="true">
          <strong>{selected.title}</strong>
          <span>{selected.description}</span>
        </figcaption>
      </figure>

      <div className={styles.selection} data-reveal>
        <div className={styles.navigation}>
          <span className={styles.counter} aria-label={`第 ${selection.index + 1} 张，共 ${galleryItems.length} 张`}>
            <strong>{String(selection.index + 1).padStart(2, "0")}</strong>
            <span>/ {String(galleryItems.length).padStart(2, "0")}</span>
          </span>
          <div className={styles.arrows}>
            <button type="button" className={styles.arrow} aria-label="上一张立绘" onClick={() => select(selection.index - 1, "previous")}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 12H4m7-7-7 7 7 7" /></svg>
            </button>
            <button type="button" className={styles.arrow} aria-label="下一张立绘" onClick={() => select(selection.index + 1, "next")}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className={styles.filmstrip} aria-label="选择立绘">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={styles.thumbnail}
              aria-label={`第 ${index + 1} 张：${item.title}，${item.description}`}
              aria-pressed={index === selection.index}
              aria-current={index === selection.index ? "true" : undefined}
              onClick={() => select(index, index < selection.index ? "previous" : "next")}
            >
              <img src={item.src} alt="" width={item.width} height={item.height} loading="lazy" decoding="async" />
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>

        <div className={styles.links}>
          <a href={selected.src} target="_blank" rel="noopener noreferrer">打开原图<span className={styles.srOnly}>（新标签页）</span><span aria-hidden="true">↗</span></a>
          <a href="/gallery">全部立绘<span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
  );
}
