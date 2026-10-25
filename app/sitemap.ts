import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";
import { locales, localizedPath } from "./i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/profile", "/voice", "/gallery"].flatMap((path) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale === "zh" ? "zh-CN" : locale, new URL(localizedPath(locale, path), siteUrl).href]));
    languages["x-default"] = new URL(path, siteUrl).href;
    return locales.map((locale) => ({ url: new URL(localizedPath(locale, path), siteUrl).href, alternates: { languages } }));
  });
}
