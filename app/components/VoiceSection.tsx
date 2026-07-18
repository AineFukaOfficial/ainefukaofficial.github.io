import Link from "next/link";

const banks = [
  {
    title: "中文声库",
    type: "扩张整音",
    date: "2025.12.23",
    note: "中文发音更完整，适合流行与可爱向作品。",
    chip: "sticker-pink",
  },
  {
    title: "日文声库",
    type: "单独音",
    date: "2026.03.21",
    note: "单独音结构，适合日系编曲与调声实验。",
    chip: "sticker-blue",
  },
  {
    title: "袅袅声库",
    type: "Qiyiyin 制作",
    date: "袅袅虚拟歌手",
    note: "适配袅袅引擎，补充跨软件使用场景。",
    chip: "sticker-lilac",
  },
];

export default function VoiceSection() {
  return (
    <section className="page-shell pb-14 pt-20 md:pb-20 md:pt-24">
      <div className="max-w-2xl">
        <p className="section-kicker">♪ Voicebank</p>
        <h2 className="section-heading">声库信息</h2>
        <p className="mt-3 text-[1.02rem] leading-7 text-muted">
          声库制作：Whien、重症。擅长音域 F3–C5，甜系流行随手可上。
          中文扩张整音、日文单独音，外加袅袅版本，按需下载就好。
        </p>
      </div>

      <div className="mt-8 grid gap-3">
        {banks.map((bank) => (
          <article
            key={bank.title}
            className="sheet grid gap-3 p-4 transition-transform duration-200 hover:-translate-y-0.5 md:grid-cols-[1fr_auto] md:items-center md:p-5"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-lg font-extrabold">{bank.title}</h3>
                <span className={`sticker ${bank.chip}`}>
                  {bank.type} · {bank.date}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted md:text-base">{bank.note}</p>
            </div>
            <div className="text-sm font-bold text-candy-deep md:text-right">音域 F3–C5</div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://bowlroll.net/file/346505"
          target="_blank"
          rel="noreferrer"
          className="btn btn-solid"
        >
          BowlRoll 下载
        </a>
        <Link href="/voice" className="btn btn-ghost">
          查看详情
        </Link>
      </div>
    </section>
  );
}
