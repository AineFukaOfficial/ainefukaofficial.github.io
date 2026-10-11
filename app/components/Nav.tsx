"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/profile", label: "角色档案" },
  { href: "/voice", label: "声库下载" },
  { href: "/gallery", label: "立绘收藏" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="page-shell nav-layout" aria-label="主导航">
        <Link href="/" className="brand" aria-label="爱音芙歌首页">
          <span className="brand-mark" aria-hidden="true">af.</span>
          <span lang="ja">愛音フカ<span className="brand-subtitle">AineFuka</span></span>
        </Link>
        <ul className="desktop-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <a className="nav-social" href="https://space.bilibili.com/3690991053703575" target="_blank" rel="noreferrer">
          Bilibili <span aria-hidden="true">↗</span>
        </a>
        <details
          key={pathname}
          className="mobile-menu"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.currentTarget.open = false;
              event.currentTarget.querySelector("summary")?.focus();
            }
          }}
        >
          <summary aria-label="导航菜单"><span /><span /></summary>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
