import ProfileCards from "../components/ProfileCards";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "/profile",
  "角色档案 | 爱音芙歌 AineFuka",
  "了解爱音芙歌（愛音フカ / AineFuka）的角色设定：基本资料、白发粉尾的双马尾外貌、性格、喜好，以及 UTAU・袅袅声库的配布时间线。",
);

export default function ProfilePage() {
  return (
    <div className="page-shell pb-14 pt-20 md:pb-20 md:pt-24">
      <p className="section-kicker">♡ Character</p>
      <h1 className="section-heading">角色档案</h1>
      <p className="mt-3 max-w-2xl text-[1.02rem] leading-7 text-muted">
        基本资料、外貌、性格与配布时间线——先认识她，再开始调教。
      </p>
      <div className="mt-8">
        <ProfileCards />
      </div>
    </div>
  );
}
