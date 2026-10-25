"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { localizedPath } from "../i18n";

export default function LanguageDetection() {
  const pathname = usePathname();

  useEffect(() => {
    const saved = document.cookie.match(/(?:^|;\s*)ainefuka-lang=(zh|en|ja)(?:;|$)/)?.[1];
    const browserLocale = navigator.languages.find((language) => /^(zh|en|ja)(?:-|$)/i.test(language))?.slice(0, 2).toLowerCase();
    const locale = saved || browserLocale;
    if (locale === "en" || locale === "ja") {
      window.location.replace(`${localizedPath(locale, pathname)}${window.location.search}${window.location.hash}`);
    }
  }, [pathname]);

  return null;
}
