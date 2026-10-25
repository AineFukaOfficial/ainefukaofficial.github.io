"use client";

import { useEffect, useId, useRef, useState } from "react";
import { getGalleryItems } from "../gallery/artworks";
import { getDictionary, type Locale } from "../i18n";
import styles from "./GalleryGrid.module.css";

export default function GalleryGrid({ locale }: { locale: Locale }) {
  const galleryItems = getGalleryItems(locale);
  const t = getDictionary(locale).gallery;
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (selected && !dialogRef.current?.open) dialogRef.current?.showModal();
  }, [selected]);

  return (
    <>
      <div className={styles.collection}>
        {galleryItems.map((item) => (
          <figure key={item.src} className={styles.artwork}>
            <button type="button" className={styles.frame} aria-label={t.viewLarge(item.title, item.description)} aria-haspopup="dialog" onClick={() => setSelected(item)}>
              <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" className={styles.image} />
              <span className={styles.viewLabel} aria-hidden="true">{t.view}</span>
            </button>
            <figcaption className={styles.caption}><strong>{item.title}</strong><span>{item.description}</span></figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby={titleId} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        {selected && <div className={styles.viewer}>
          <div className={styles.viewerHeader}><div><h2 id={titleId}>{selected.title}</h2><p>{selected.description}</p></div><button type="button" className={styles.close} onClick={() => dialogRef.current?.close()}>{t.close}</button></div>
          <div className={styles.viewerImage}><img src={selected.src} alt={selected.alt} width={selected.width} height={selected.height} decoding="async" /></div>
          <div className={styles.viewerFooter}><a className="text-link" href={selected.src} target="_blank" rel="noopener noreferrer">{t.openOriginalNew}</a><span>{t.escape}</span></div>
        </div>}
      </dialog>
    </>
  );
}
