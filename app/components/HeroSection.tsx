import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="page-shell box-border grid h-[100dvh] grid-rows-[minmax(0,1fr)_auto] items-center gap-3 pb-5 pt-16 md:grid-cols-[1fr_1fr] md:grid-rows-1 md:gap-8 md:pb-6 md:pt-16">
      <div className="order-2 min-w-0 md:order-1">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="sticker sticker-pink">無料配布</span>
          <span className="sticker sticker-blue">UTAU / 袅袅</span>
          <span className="sticker sticker-lilac">F3–C5</span>
        </div>

        <h1 className="site-title title-art text-[2.35rem] leading-[1.05] sm:text-5xl md:text-[3.4rem]">
          爱音芙歌
        </h1>
        <p className="mt-1.5 font-serif text-base text-muted md:mt-2 md:text-xl">
          愛音フカ <span className="text-candy/80">/</span> AineFuka
        </p>

        <p className="mt-3 max-w-xl text-sm leading-6 text-muted md:mt-4 md:text-[1.02rem] md:leading-7">
          白发粉尾的双马尾歌姬，声音像刚出炉的甜品。
          2025.12.23 于 Bilibili 首次配布，中文扩张整音 · 日文单独音 · 袅袅声库都在等你调。
        </p>

        <dl className="mt-3 grid max-w-md grid-cols-2 gap-x-5 gap-y-2 text-sm md:mt-4">
          <div className="rounded-2xl border border-line bg-surface px-3 py-2">
            <dt className="text-xs font-bold text-candy-deep">音域</dt>
            <dd className="font-bold">F3 – C5</dd>
          </div>
          <div className="rounded-2xl border border-line bg-surface px-3 py-2">
            <dt className="text-xs font-bold text-[#4f74a8]">风格</dt>
            <dd className="font-bold">流行 / 可爱</dd>
          </div>
          <div className="rounded-2xl border border-line bg-surface px-3 py-2">
            <dt className="text-xs font-bold text-[#7a5ea0]">引擎</dt>
            <dd className="font-bold">UTAU · 袅袅</dd>
          </div>
          <div className="rounded-2xl border border-line bg-surface px-3 py-2">
            <dt className="text-xs font-bold text-candy-deep">价格</dt>
            <dd className="font-bold">免费 ♡</dd>
          </div>
        </dl>

        <div className="mt-4 flex flex-wrap gap-3 md:mt-5">
          <Link href="/voice" className="btn btn-solid">
            ♪ 下载声库
          </Link>
          <Link href="/profile" className="btn btn-ghost">
            角色设定
          </Link>
        </div>
      </div>

      <div className="order-1 flex min-h-0 min-w-0 items-center justify-center md:order-2 md:h-full">
        <img
          src="/中文.PNG"
          alt="爱音芙歌中文立绘"
          className="max-h-[36dvh] w-auto max-w-full object-contain md:max-h-[min(78dvh,680px)]"
        />
      </div>
    </section>
  );
}
