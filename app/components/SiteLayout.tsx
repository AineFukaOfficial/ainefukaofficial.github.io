"use client";

import Nav from "./Nav";
import Footer from "./Footer";
import LanguageDetection from "./LanguageDetection";
import { getDictionary, type Locale } from "../i18n";

export default function SiteLayout({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getDictionary(locale).common;

  return (
    <>
      <a href="#main-content" className="skip-link">{t.skip}</a>
      <Nav locale={locale} />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer locale={locale} />
      {locale === "zh" && <LanguageDetection />}
    </>
  );
}
