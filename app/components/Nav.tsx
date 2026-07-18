"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/profile", label: "角色" },
  { href: "/voice", label: "声库" },
  { href: "/gallery", label: "立绘" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        scrolled || open
          ? "border-b border-line/80 bg-white/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="page-shell flex h-16 items-center justify-between">
        <Link href="/" className="site-title title-art text-lg">
          愛音フカ
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    active
                      ? "bg-candy/20 text-candy-deep"
                      : "text-muted hover:bg-white/70 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="rounded-full border border-line bg-white/80 px-3 py-1.5 text-sm font-bold text-muted md:hidden"
          aria-expanded={open}
          aria-label="菜单"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "关闭" : "菜单"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line/80 bg-white/95 backdrop-blur-md md:hidden">
          <ul className="page-shell flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-xl px-3 py-2.5 text-base font-bold ${
                    pathname === item.href ? "bg-candy/15 text-candy-deep" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
