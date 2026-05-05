import FadeIn from "../components/FadeIn";
import ProfileCards from "../components/ProfileCards";

export default function ProfilePage() {
  return (
    <div className="pt-28 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
      <FadeIn direction="up">
        <h1 className="section-title mb-4">角色档案</h1>
      </FadeIn>
      <FadeIn direction="up" delay={0.1}>
        <p className="text-center text-text-light text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          来自虚拟歌姬爱音芙歌的完整角色档案，包括基本资料、外貌特征、性格喜好和配布历史。
        </p>
      </FadeIn>
      <ProfileCards compact={false} />
    </div>
  );
}
