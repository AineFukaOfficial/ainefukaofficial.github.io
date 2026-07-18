import ProfileCards from "../components/ProfileCards";

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
