import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-line/80 bg-white/80">
      <div className="page-shell py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="site-title title-art text-2xl">爱音芙歌</p>
            <p className="mt-2 text-muted">愛音フカ / AineFuka · 免费 UTAU 虚拟歌姬</p>
            <p className="mt-1 text-sm text-candy-deep">诶嘿♡ 欢迎来调教哦</p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-muted">
            <Link
              href="https://zh.moegirl.org.cn/爱音芙歌"
              target="_blank"
              rel="noreferrer"
              className="hover:text-candy-deep"
            >
              萌娘百科
            </Link>
            <Link
              href="https://space.bilibili.com/3690991053703575"
              target="_blank"
              rel="noreferrer"
              className="hover:text-candy-deep"
            >
              Bilibili
            </Link>
            <Link
              href="https://bowlroll.net/file/346505"
              target="_blank"
              rel="noreferrer"
              className="hover:text-candy-deep"
            >
              声库下载
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-dashed border-line pt-5 text-sm text-muted">
          <p>声库制作：Whien、重症 · 袅袅声库：Qiyiyin</p>
          <p className="mt-2">© 2025–2026 爱音芙歌 Project</p>
        </div>
      </div>
    </footer>
  );
}
