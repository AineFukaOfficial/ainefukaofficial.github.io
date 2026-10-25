"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary, localizedPath, type Locale } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const t = getDictionary(locale);
  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/profile", label: t.nav.profile },
    { href: "/voice", label: t.nav.voice },
    { href: "/gallery", label: t.nav.gallery },
  ];

  return (
    <header className="site-header">
      <nav className="page-shell nav-layout" aria-label={t.common.mainNav}>
        <Link href={localizedPath(locale, "/")} className="brand" aria-label={t.common.homeAria}>
          <span className="brand-mark" aria-hidden="true">af.</span>
          <span lang="ja">愛音フカ<span className="brand-subtitle">AineFuka</span></span>
        </Link>
        <ul className="desktop-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={localizedPath(locale, item.href)} aria-current={pathname === localizedPath(locale, item.href) ? "page" : undefined}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher locale={locale} />
        <a className="nav-social" href="https://space.bilibili.com/3690991053703575" target="_blank" rel="noreferrer">Bilibili <span aria-hidden="true">↗</span></a>
        <details key={pathname} className="mobile-menu" onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.currentTarget.open = false;
            event.currentTarget.querySelector("summary")?.focus();
          }
        }}>
          <summary aria-label={t.common.menuAria}><span /><span /></summary>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={localizedPath(locale, item.href)} aria-current={pathname === localizedPath(locale, item.href) ? "page" : undefined} onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
