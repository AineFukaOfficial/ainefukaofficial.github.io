import ProfileCards from "../components/ProfileCards";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "/profile",
  "角色档案 | 爱音芙歌 AineFuka",
  "了解爱音芙歌（愛音フカ / AineFuka）的角色设定：基本资料、白发粉尾的双马尾外貌、性格、喜好，以及 UTAU・袅袅声库的配布时间线。",
);

export default function ProfilePage() {
  return (
    <div className="page-shell profile-page">
      <header className="page-intro">
        <h1 className="page-title">关于芙歌</h1>
        <p className="page-description">喜欢甜品和三彩丸子，不太擅长给自己梳头发<br />先认识一下，再开始调教~</p>
      </header>
      <div className="profile-page-layout">
        <figure className="profile-portrait">
          <span className="profile-portrait-name" aria-hidden="true" lang="ja">愛音フカ</span>
          <img src="/Image_1785771149230_602.webp" alt="爱音芙歌的全身角色立绘" width="4600" height="6000" />
          <figcaption>爱音芙歌 / AineFuka</figcaption>
        </figure>
        <ProfileCards />
      </div>
    </div>
  );
}
