import Link from "next/link";
import HeroSection from "./components/HeroSection";
import ProfileCards from "./components/ProfileCards";
import GalleryGrid from "./components/GalleryGrid";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="page-shell border-t border-line/70 py-12 md:py-16">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">♡ Profile</p>
            <h2 className="section-heading">角色档案</h2>
          </div>
          <Link href="/profile" className="hidden text-sm font-bold text-candy-deep md:inline">
            完整设定 →
          </Link>
        </div>
        <ProfileCards compact />
        <div className="mt-7 md:hidden">
          <Link href="/profile" className="btn btn-ghost">
            查看完整档案
          </Link>
        </div>
      </section>

      <section className="page-shell">
        <div className="soft-panel grid gap-6 px-5 py-8 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-8 md:py-10">
          <div>
            <p className="section-kicker">♪ Voice</p>
            <h2 className="section-heading">声库一览</h2>
            <p className="mt-3 max-w-xl text-[1.02rem] leading-7 text-muted">
              中文扩张整音 + 日文单独音，音域 F3–C5。免费下载，甜系流行直接上手。
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link href="/voice" className="btn btn-solid">
              查看声库详情
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell py-12 md:py-16">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">✦ Gallery</p>
            <h2 className="section-heading">立绘</h2>
          </div>
          <Link href="/gallery" className="hidden text-sm font-bold text-candy-deep md:inline">
            全部立绘 →
          </Link>
        </div>
        <GalleryGrid />
      </section>
    </>
  );
}
