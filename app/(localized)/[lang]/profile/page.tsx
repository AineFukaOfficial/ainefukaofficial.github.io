import type { Metadata } from "next";
import ProfileCards from "../../../components/ProfileCards";
import { createPageMetadata } from "../../../seo";
import { getDictionary, type Locale } from "../../../i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  return createPageMetadata((await params).lang, "/profile", "profile");
}

export default async function ProfilePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const locale = (await params).lang;
  const t = getDictionary(locale).profile;
  return (
    <div className="page-shell profile-page">
      <header className="page-intro">
        <h1 className="page-title">{t.title}</h1>
        <p className="page-description">{t.descriptionLines[0]}<br />{t.descriptionLines[1]}</p>
      </header>
      <div className="profile-page-layout">
        <figure className="profile-portrait">
          <span className="profile-portrait-name" aria-hidden="true" lang="ja">愛音フカ</span>
          <img src="/Image_1785771149230_602.webp" alt={t.portraitAlt} width="4600" height="6000" />
          <figcaption>AineFuka</figcaption>
        </figure>
        <ProfileCards locale={locale} />
      </div>
    </div>
  );
}
