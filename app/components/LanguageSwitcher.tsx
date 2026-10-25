"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary, locales, localizedPath, type Locale } from "../i18n";

const names: Record<Locale, string> = { zh: "中文", en: "EN", ja: "日本語" };

export default function LanguageSwitcher({ locale, className = "" }: { locale: Locale; className?: string }) {
  const pathname = usePathname();
  const path = pathname.replace(/^\/(en|ja)(?=\/|$)/, "") || "/";

  return (
    <nav className={`language-switcher ${className}`} aria-label={getDictionary(locale).common.languageNav}>
      {locales.map((item) => (
        <Link
          key={item}
          href={localizedPath(item, path)}
          hrefLang={item === "zh" ? "zh-CN" : item}
          lang={item === "zh" ? "zh-CN" : item}
          aria-current={item === locale ? "page" : undefined}
          onClick={() => {
            document.cookie = `ainefuka-lang=${item}; path=/; max-age=31536000; samesite=lax`;
          }}
        >
          {names[item]}
        </Link>
      ))}
    </nav>
  );
}
