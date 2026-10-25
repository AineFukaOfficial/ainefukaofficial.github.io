"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getDictionary, locales, localizedPath, type Locale } from "../i18n";

const names: Record<Locale, string> = { zh: "中文", en: "English", ja: "日本語" };

export default function LanguageSwitcher({ locale, className = "" }: { locale: Locale; className?: string }) {
  const pathname = usePathname();
  const path = pathname.replace(/^\/(en|ja)(?=\/|$)/, "") || "/";
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      const menu = menuRef.current;
      if (menu && event.target instanceof Node && !menu.contains(event.target)) menu.open = false;
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  return (
    <details
      key={pathname}
      ref={menuRef}
      className={`language-switcher ${className}`}
      onToggle={(event) => setOpen(event.currentTarget.open)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
      }}
      onKeyDown={(event) => {
        // Keep the home deck's keyboard shortcuts out of this control.
        event.stopPropagation();
        if (event.key === "Escape") {
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label={getDictionary(locale).common.languageNav}>
        <span className="language-icon" aria-hidden="true">文<span>/</span>A</span>
        <svg className="language-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
      </summary>
      <nav className="language-options" aria-label={getDictionary(locale).common.languageNav}>
        {locales.map((item) => (
          <Link
            key={item}
            href={localizedPath(item, path)}
            hrefLang={item === "zh" ? "zh-CN" : item}
            lang={item === "zh" ? "zh-CN" : item}
            aria-current={item === locale ? "page" : undefined}
            onClick={() => {
              document.cookie = `ainefuka-lang=${item}; path=/; max-age=31536000; samesite=lax`;
              if (menuRef.current) menuRef.current.open = false;
            }}
          >
            {names[item]}
            {item === locale && <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m3 8 3 3 7-7" /></svg>}
          </Link>
        ))}
      </nav>
    </details>
  );
}
