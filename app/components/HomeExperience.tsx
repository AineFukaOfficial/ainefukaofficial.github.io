"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import VoiceSelector from "./VoiceSelector";
import ArtworkSelector from "./ArtworkSelector";
import LanguageSwitcher from "./LanguageSwitcher";
import { getDictionary, localizedPath, type Locale } from "../i18n";
import styles from "./HomeExperience.module.css";

export default function HomeExperience({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const [profile, setProfile] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const menuRef = useRef<HTMLDialogElement>(null);
  const t = getDictionary(locale);
  const { home: h, common } = t;
  const scenes = h.scenes;

  function selectScene(index: number) {
    const deck = deckRef.current;
    const target = deck?.querySelector<HTMLElement>(`#${scenes[index]?.id}`);
    if (!deck || !target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    deck.scrollTo({ top: target.offsetTop, behavior: reduce ? "instant" : "smooth" });
    menuRef.current?.close();
  }

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const panels = Array.from(deck.querySelectorAll<HTMLElement>("[data-scene]"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let wheelTotal = 0;
    let lastWheel = 0;
    let wheelLatched = false;
    let lockedUntil = 0;
    const go = (index: number, instant = false) => {
      const panel = panels[Math.max(0, Math.min(panels.length - 1, index))];
      deck.scrollTo({ top: panel.offsetTop, behavior: reduced.matches || instant ? "instant" : "smooth" });
    };
    const measure = () => {
      frame = 0;
      const middle = deck.scrollTop + deck.clientHeight * 0.5;
      const index = panels.findIndex((panel) => middle >= panel.offsetTop && middle < panel.offsetTop + panel.offsetHeight);
      if (index >= 0 && index !== currentRef.current) { currentRef.current = index; setActive(index); }
      const travel = deck.scrollHeight - deck.clientHeight;
      deck.parentElement?.style.setProperty("--journey", String(travel > 0 ? deck.scrollTop / travel : 0));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure); };
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY) || menuRef.current?.open) return;
      const panel = panels[currentRef.current];
      const down = event.deltaY > 0;
      if (panel.offsetHeight > deck.clientHeight + 2 && ((down && deck.scrollTop < panel.offsetTop + panel.offsetHeight - deck.clientHeight - 2) || (!down && deck.scrollTop > panel.offsetTop + 2))) return;
      event.preventDefault();
      const now = performance.now();
      if (now - lastWheel > 180) { wheelLatched = false; wheelTotal = 0; }
      lastWheel = now;
      if (wheelLatched || now < lockedUntil) return;
      wheelTotal += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? deck.clientHeight : 1);
      if (Math.abs(wheelTotal) < 36) return;
      go(currentRef.current + Math.sign(wheelTotal));
      wheelLatched = true;
      lockedUntil = now + 800;
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.ctrlKey || event.altKey || event.metaKey || menuRef.current?.open) return;
      if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
      if (event.key === " " && event.target instanceof Element && event.target.closest("button, a")) return;
      const keys: Record<string, number> = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1, " ": event.shiftKey ? -1 : 1 };
      if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        go(event.key === "Home" ? 0 : panels.length - 1);
      } else if (event.key in keys) {
        event.preventDefault();
        const panel = panels[currentRef.current];
        const direction = keys[event.key];
        const remaining = direction > 0 ? panel.offsetTop + panel.offsetHeight - deck.clientHeight - deck.scrollTop : deck.scrollTop - panel.offsetTop;
        if (panel.offsetHeight > deck.clientHeight + 2 && remaining > 2) deck.scrollBy({ top: direction * Math.min(remaining, deck.clientHeight * .7), behavior: reduced.matches ? "instant" : "smooth" });
        else go(currentRef.current + direction);
      }
    };
    const fromHash = () => {
      const index = scenes.findIndex((scene) => `#${scene.id}` === location.hash);
      if (index >= 0) go(index, true);
    };
    const resize = new ResizeObserver(onScroll);
    resize.observe(deck);
    panels.forEach((panel) => resize.observe(panel));
    deck.addEventListener("scroll", onScroll, { passive: true });
    deck.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", fromHash);
    fromHash();
    measure();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      deck.removeEventListener("scroll", onScroll);
      deck.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("hashchange", fromHash);
    };
  }, []);

  const state = (index: number) => index === active ? "active" : index < active ? "past" : "future";

  return (
    <div className={styles.experience} data-home-deck data-active={active}>
      <div className={styles.backdrop} aria-hidden="true" /><div className={styles.colorPanel} aria-hidden="true" /><div className={styles.grid} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true"><span /><span /><span /></div>
      {/* React also emits this URL in HTTP Link headers, which need URI-encoded filenames. */}
      <div className={styles.character} aria-hidden="true"><img src={encodeURI("/新中文立绘 (1).webp")} alt="" width="4500" height="6000" fetchPriority="high" /></div>
      <header className={styles.header}>
        <button className={styles.wordmark} onClick={() => selectScene(0)} aria-label={h.backToStart}>af<span>.</span></button>
        <span className={styles.identity} lang="ja">愛音フカ<span>AineFuka</span></span>
        <nav className={styles.topNav} aria-label={h.contentNav}>{scenes.slice(1, 4).map((scene, index) => <button key={scene.id} onClick={() => selectScene(index + 1)} aria-current={active === index + 1 ? "location" : undefined}>{scene.label}</button>)}</nav>
        <LanguageSwitcher locale={locale} className={styles.homeLanguage} />
        <button className={styles.menuButton} onClick={() => menuRef.current?.showModal()} aria-haspopup="dialog" aria-label={h.openMenu}><span /><span /></button>
      </header>
      <div ref={deckRef} className={styles.viewport} role="region" aria-label={h.deckLabel} aria-describedby="scene-help" tabIndex={0}>
        <section id="hello" className={`${styles.scene} ${styles.hello}`} data-scene data-state={state(0)} inert={active !== 0} aria-labelledby="hello-title">
          <div className={styles.heroCopy}>
            <p className={styles.release} data-reveal><span />{h.release}</p>
            <h1 id="hello-title" className={styles.heroTitle}><span className={styles.titleClip}><span>Aine</span></span><span className={styles.titleClip}><span>Fuka<span className={styles.period}>.</span></span></span></h1>
            <div className={styles.heroIntro} data-reveal>
              <p className={styles.chineseName}>AineFuka <span lang="ja">愛音フカ</span></p>
              <p>{h.introLines[0]}<br />{h.introLines[1]}</p>
              <button className={styles.primaryLink} onClick={() => selectScene(2)}>{h.download}<span aria-hidden="true">↗</span></button>
            </div>
          </div>
          <p className={styles.heroJapanese} aria-hidden="true">きみと、<br /><span>歌いたい</span></p>
          <div className={styles.heroMeta} data-reveal><span>{h.firstRelease}<time dateTime="2025-12-23">2025.12.23</time></span><span>{h.languages}<i />F3–C5</span></div>
        </section>
        <section id="character" className={`${styles.scene} ${styles.profileScene}`} data-scene data-state={state(1)} inert={active !== 1} aria-labelledby="character-title">
          <span className={styles.profileBackdrop} aria-hidden="true">Fuka</span>
          <div className={styles.profileCopy}>
            <p className={styles.sceneSubtitle} data-reveal>{h.profileIntro}</p>
            <h2 id="character-title" className={styles.sceneTitle}><span className={styles.titleClip}><span>{h.profileTitle[0]}</span></span><span className={styles.titleClip}><span>{h.profileTitle[1]}</span></span></h2>
            <div data-reveal>
              <div className={styles.profileTabs} role="group" aria-label={h.profileTabsLabel}>{h.profileNotes.map((note, index) => <button key={note.label} aria-pressed={profile === index} onClick={() => setProfile(index)}>{note.label}</button>)}</div>
              <dl className={styles.profileNotes} key={profile} aria-live="polite">{h.profileNotes[profile].lines.map((line) => <div key={line.label}><dt>{line.label}</dt><dd>{line.value}</dd></div>)}</dl>
              <Link href={localizedPath(locale, "/profile")} className={styles.inlineLink}>{h.fullProfile}<span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <span className={styles.profileQuote} data-reveal>{h.quote}</span>
        </section>
        <section id="voice" className={`${styles.scene} ${styles.voiceScene}`} data-scene data-state={state(2)} inert={active !== 2} aria-label={h.voiceLabel}><VoiceSelector locale={locale} /></section>
        <section id="artworks" className={`${styles.scene} ${styles.artScene}`} data-scene data-state={state(3)} inert={active !== 3} aria-label={h.artworkLabel}><ArtworkSelector locale={locale} /></section>
        <section id="together" className={`${styles.scene} ${styles.outro}`} data-scene data-state={state(4)} inert={active !== 4} aria-labelledby="together-title">
          <div className={styles.outroCopy}>
            <p className={styles.sceneSubtitle} data-reveal>{h.outroIntro}</p>
            <h2 id="together-title"><span className={styles.titleClip}><span>{h.outroTitle[0]}</span></span><span className={styles.titleClip}><span>{h.outroTitle[1]}</span></span></h2>
            <div className={styles.outroLinks} data-reveal>
              <a href="https://bowlroll.net/file/346505" target="_blank" rel="noreferrer">{common.download}<span aria-hidden="true">↗</span></a>
              <a href="https://space.bilibili.com/3690991053703575" target="_blank" rel="noreferrer">{h.bilibili}<span aria-hidden="true">↗</span></a>
              <a href="https://zh.moegirl.org.cn/爱音芙歌" target="_blank" rel="noreferrer">{common.wiki}<span aria-hidden="true">↗</span></a>
            </div>
            <p className={styles.credits} data-reveal>{h.voiceCredits}<br />{h.niaoniaoCredit}<br /><span>{h.design}</span><br /><span>{common.copyright}</span></p>
          </div>
          <span className={styles.outroMark} aria-hidden="true">af.</span>
        </section>
      </div>
      <nav className={styles.sceneNav} aria-label={h.sceneNav}>{scenes.map((scene, index) => <button key={scene.id} onClick={() => selectScene(index)} aria-label={h.scene(index, scene.label)} aria-current={active === index ? "step" : undefined}><span className={styles.sceneNavLine} /><span className={styles.sceneNavName}>{scene.label}</span></button>)}</nav>
      <footer className={styles.deckFooter}>
        <div className={styles.sceneCount}><span key={active}>{String(active + 1).padStart(2, "0")}</span><span>/ 05</span></div>
        <p key={active} className={styles.sceneCaption}>{scenes[active].english}</p>
        <button className={styles.nextScene} aria-label={active === 4 ? h.replay : h.next} onClick={() => selectScene(active === 4 ? 0 : active + 1)}><span>{active === 4 ? h.replay : h.next}</span><span aria-hidden="true">{active === 4 ? "↑" : "↓"}</span></button>
      </footer>
      <p id="scene-help" className={styles.srOnly}>{h.help}</p>
      <div className={styles.progress} aria-hidden="true" /><p className={styles.srOnly} role="status">{h.sceneStatus(active, scenes[active].label)}</p>
      <dialog ref={menuRef} className={styles.menu} aria-label={h.siteMenu} aria-labelledby="site-menu-title" onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <div className={styles.menuContent}>
          <div className={styles.menuTop}><h2 id="site-menu-title">{h.menuTitle}</h2><button onClick={() => menuRef.current?.close()}>{h.close}<span aria-hidden="true">×</span></button></div>
          <nav aria-label={h.siteNav}>{h.menuLinks.map((item) => <Link href={localizedPath(locale, item.href)} key={item.href}><span>{item.title}</span><span>{item.english}</span><span aria-hidden="true">↗</span></Link>)}</nav>
          <p><span lang="ja">愛音フカ</span> / AineFuka</p>
        </div>
      </dialog>
    </div>
  );
}
