import GalleryGrid from "../../components/GalleryGrid";
import { createPageMetadata } from "../../seo";
import { getDictionary } from "../../i18n";

export const metadata = createPageMetadata("zh", "/gallery", "gallery");

export default function GalleryPage() {
  const t = getDictionary("zh").gallery;
  return (
    <div className="page-shell pb-20 md:pb-28">
      <header className="page-intro">
        <h1 className="page-title">{t.title}</h1>
        <p className="page-description mt-6">{t.descriptionLines[0]}<br />{t.descriptionLines[1]}</p>
      </header>
      <GalleryGrid locale="zh" />
    </div>
  );
}
