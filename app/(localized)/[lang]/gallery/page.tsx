import type { Metadata } from "next";
import GalleryGrid from "../../../components/GalleryGrid";
import { createPageMetadata } from "../../../seo";
import { getDictionary, type Locale } from "../../../i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  return createPageMetadata((await params).lang, "/gallery", "gallery");
}

export default async function GalleryPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const locale = (await params).lang;
  const t = getDictionary(locale).gallery;
  return (
    <div className="page-shell pb-20 md:pb-28">
      <header className="page-intro">
        <h1 className="page-title">{t.title}</h1>
        <p className="page-description mt-6">{t.descriptionLines[0]}<br />{t.descriptionLines[1]}</p>
      </header>
      <GalleryGrid locale={locale} />
    </div>
  );
}
