"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import VoiceSelector from "./VoiceSelector";
import ArtworkSelector from "./ArtworkSelector";
import styles from "./HomeExperience.module.css";

const scenes = [
  { id: "hello", label: "初次见面", english: "Hello, Fuka!" },
  { id: "character", label: "角色档案", english: "About Fuka" },
  { id: "voice", label: "声库一览", english: "Voicebanks" },
  { id: "artworks", label: "立绘", english: "Artworks" },
  { id: "together", label: "与你一起", english: "See you~" },
];

const profileNotes = [
  { label: "小档案", lines: [["姓名", "爱音芙歌 / 愛音フカ"], ["身高", "168 cm"], ["生日", "12 月 23 日"], ["持有物", "拐杖糖"]] },
  { label: "小秘密", lines: [["喜欢", "甜品、颜文字、三彩丸子"], ["不擅长", "给自己梳头发、暴力"], ["讨厌", "冷漠的语气"], ["口头禅", "诶嘿♡"]] },
  { label: "初次配布", lines: [["2025.12.23", "中文声库首次配布"], ["2026.03.21", "日语声库公开配布"], ["引擎", "UTAU / 袅袅"], ["价格", "免费配布"]] },
];

export default function HomeExperience() {
  const [active, setActive] = useState(0);
  const [profile, setProfile] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const menuRef = useRef<HTMLDialogElement>(null);

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
      if (index >= 0 && index !== currentRef.current) {
        currentRef.current = index;
        setActive(index);
      }
      const travel = deck.scrollHeight - deck.clientHeight;
      deck.parentElement?.style.setProperty("--journey", String(travel > 0 ? deck.scrollTop / travel : 0));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure); };
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY) || menuRef.current?.open) return;
      const panel = panels[currentRef.current];
      const down = event.deltaY > 0;
      // A scene may grow at zoom/short viewports. Let its own content scroll before advancing.
      if (panel.offsetHeight > deck.clientHeight + 2 && (
        (down && deck.scrollTop < panel.offsetTop + panel.offsetHeight - deck.clientHeight - 2) ||
        (!down && deck.scrollTop > panel.offsetTop + 2)
      )) return;
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
        const remaining = direction > 0
          ? panel.offsetTop + panel.offsetHeight - deck.clientHeight - deck.scrollTop
          : deck.scrollTop - panel.offsetTop;
        if (panel.offsetHeight > deck.clientHeight + 2 && remaining > 2) {
          deck.scrollBy({ top: direction * Math.min(remaining, deck.clientHeight * .7), behavior: reduced.matches ? "instant" : "smooth" });
        } else go(currentRef.current + direction);
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
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.colorPanel} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orbit} aria-hidden="true"><span /><span /><span /></div>
      <div className={styles.character} aria-hidden="true">
        <img src="/新中文立绘 (1).webp" alt="" width="4500" height="6000" fetchPriority="high" />
      </div>

      <header className={styles.header}>
        <button className={styles.wordmark} onClick={() => selectScene(0)} aria-label="返回初次见面">af<span>.</span></button>
        <span className={styles.identity}>愛音フカ<span>AineFuka</span></span>
        <nav className={styles.topNav} aria-label="首页内容">
          {scenes.slice(1, 4).map((scene, index) => (
            <button key={scene.id} onClick={() => selectScene(index + 1)} aria-current={active === index + 1 ? "location" : undefined}>{scene.label}</button>
          ))}
        </nav>
        <button className={styles.menuButton} onClick={() => menuRef.current?.showModal()} aria-haspopup="dialog" aria-label="打开网站导航"><span /><span /></button>
      </header>

      <div ref={deckRef} className={styles.viewport} role="region" aria-label="爱音芙歌全屏发布页" aria-describedby="scene-help" tabIndex={0}>
        <section id="hello" className={`${styles.scene} ${styles.hello}`} data-scene data-state={state(0)} inert={active !== 0} aria-labelledby="hello-title">
          <div className={styles.heroCopy}>
            <p className={styles.release} data-reveal><span /> UTAU / 袅袅虚拟歌姬 · 免费配布</p>
            <h1 id="hello-title" className={styles.heroTitle}>
              <span className={styles.titleClip}><span>Aine</span></span>
              <span className={styles.titleClip}><span>Fuka<span className={styles.period}>.</span></span></span>
            </h1>
            <div className={styles.heroIntro} data-reveal>
              <p className={styles.chineseName}>爱音芙歌 <span lang="ja">愛音フカ</span></p>
              <p>白发粉尾的双马尾歌姬，<br />声音像刚出炉的甜品</p>
              <button className={styles.primaryLink} onClick={() => selectScene(2)}>下载声库<span aria-hidden="true">↗</span></button>
            </div>
          </div>
          <p className={styles.heroJapanese} aria-hidden="true">きみと、<br /><span>歌いたい</span></p>
          <div className={styles.heroMeta} data-reveal><span>初次配布 <time dateTime="2025-12-23">2025.12.23</time></span><span>中文 / 日文 <i /> F3–C5</span></div>
        </section>

        <section id="character" className={`${styles.scene} ${styles.profileScene}`} data-scene data-state={state(1)} inert={active !== 1} aria-labelledby="character-title">
          <span className={styles.profileBackdrop} aria-hidden="true">Fuka</span>
          <div className={styles.profileCopy}>
            <p className={styles.sceneSubtitle} data-reveal>喜欢甜品，也喜欢颜文字</p>
            <h2 id="character-title" className={styles.sceneTitle}><span className={styles.titleClip}><span>先认识一下</span></span><span className={styles.titleClip}><span>再来调教</span></span></h2>
            <div data-reveal>
              <div className={styles.profileTabs} role="group" aria-label="角色资料分类">
                {profileNotes.map((note, index) => <button key={note.label} aria-pressed={profile === index} onClick={() => setProfile(index)}>{note.label}</button>)}
              </div>
              <dl className={styles.profileNotes} key={profile} aria-live="polite">
                {profileNotes[profile].lines.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
              </dl>
              <Link href="/profile" className={styles.inlineLink}>查看完整档案 <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <span className={styles.profileQuote} data-reveal>「诶嘿♡」</span>
        </section>

        <section id="voice" className={`${styles.scene} ${styles.voiceScene}`} data-scene data-state={state(2)} inert={active !== 2} aria-label="她的歌声">
          <VoiceSelector />
        </section>

        <section id="artworks" className={`${styles.scene} ${styles.artScene}`} data-scene data-state={state(3)} inert={active !== 3} aria-label="立绘收藏">
          <ArtworkSelector />
        </section>

        <section id="together" className={`${styles.scene} ${styles.outro}`} data-scene data-state={state(4)} inert={active !== 4} aria-labelledby="together-title">
          <div className={styles.outroCopy}>
            <p className={styles.sceneSubtitle} data-reveal>中文、日文、袅袅声库，都在等你调~</p>
            <h2 id="together-title"><span className={styles.titleClip}><span>诶嘿♡</span></span><span className={styles.titleClip}><span>欢迎来调教</span></span></h2>
            <div className={styles.outroLinks} data-reveal>
              <a href="https://bowlroll.net/file/346505" target="_blank" rel="noreferrer">下载声库<span aria-hidden="true">↗</span></a>
              <a href="https://space.bilibili.com/3690991053703575" target="_blank" rel="noreferrer">去 Bilibili 看看<span aria-hidden="true">↗</span></a>
              <a href="https://zh.moegirl.org.cn/爱音芙歌" target="_blank" rel="noreferrer">萌娘百科<span aria-hidden="true">↗</span></a>
            </div>
            <p className={styles.credits} data-reveal>声库制作 / Whien、重症<br />袅袅声库 / Qiyiyin<br /><span>© 2025–2026 爱音芙歌 Project</span></p>
          </div>
          <span className={styles.outroMark} aria-hidden="true">af.</span>
        </section>
      </div>

      <nav className={styles.sceneNav} aria-label="切换全屏场景">
        {scenes.map((scene, index) => (
          <button key={scene.id} onClick={() => selectScene(index)} aria-label={`第 ${index + 1} 幕：${scene.label}`} aria-current={active === index ? "step" : undefined}>
            <span className={styles.sceneNavLine} /><span className={styles.sceneNavName}>{scene.label}</span>
          </button>
        ))}
      </nav>
      <footer className={styles.deckFooter}>
        <div className={styles.sceneCount}><span key={active}>{String(active + 1).padStart(2, "0")}</span><span>/ 05</span></div>
        <p key={active} className={styles.sceneCaption}>{scenes[active].english}</p>
        <button className={styles.nextScene} aria-label={active === 4 ? "再看一遍" : "往下看看"} onClick={() => selectScene(active === 4 ? 0 : active + 1)}>
          <span>{active === 4 ? "再看一遍" : "往下看看"}</span><span aria-hidden="true">{active === 4 ? "↑" : "↓"}</span>
        </button>
      </footer>
      <p id="scene-help" className={styles.srOnly}>滚轮或上下滑动切换场景。也可使用上下方向键、Page Up、Page Down；Home 回到开场，End 前往结尾。右侧导航可直接选择场景。声库使用方向键选择版本，立绘使用左右方向键浏览。</p>
      <div className={styles.progress} aria-hidden="true" />
      <p className={styles.srOnly} role="status">第 {active + 1} 幕，共 5 幕：{scenes[active].label}</p>

      <dialog ref={menuRef} className={styles.menu} aria-labelledby="site-menu-title" onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <div className={styles.menuContent}>
          <div className={styles.menuTop}><h2 id="site-menu-title">去哪里？</h2><button onClick={() => menuRef.current?.close()}>关闭 <span aria-hidden="true">×</span></button></div>
          <nav aria-label="网站页面">
            {[{ href: "/profile", title: "关于芙歌", english: "Character" }, { href: "/voice", title: "声库下载", english: "Voicebanks" }, { href: "/gallery", title: "立绘收藏", english: "Artworks" }].map((item) => (
              <Link href={item.href} key={item.href}><span>{item.title}</span><span>{item.english}</span><span aria-hidden="true">↗</span></Link>
            ))}
          </nav>
          <p>愛音フカ / AineFuka</p>
        </div>
      </dialog>
    </div>
  );
}
