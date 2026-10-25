import ProfileCards from "../../components/ProfileCards";
import { createPageMetadata } from "../../seo";
import { getDictionary } from "../../i18n";

export const metadata = createPageMetadata("zh", "/profile", "profile");

export default function ProfilePage() {
  const t = getDictionary("zh").profile;
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
        <ProfileCards locale="zh" />
      </div>
    </div>
  );
}
