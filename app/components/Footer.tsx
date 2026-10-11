import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <Link href="/" className="footer-wordmark" aria-label="爱音芙歌首页">AineFuka<span>.</span></Link>
          <p>愛音フカ / 爱音芙歌<br /><span>诶嘿♡ 欢迎来调教哦</span></p>
          <div className="footer-links">
            <a href="https://zh.moegirl.org.cn/爱音芙歌" target="_blank" rel="noreferrer">萌娘百科</a>
            <a href="https://space.bilibili.com/3690991053703575" target="_blank" rel="noreferrer">Bilibili</a>
            <a href="https://bowlroll.net/file/346505" target="_blank" rel="noreferrer">BowlRoll 下载</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025–2026 爱音芙歌 Project</p>
          <p>网站设计：Q78KG</p>
          <p>声库制作：Whien、重症 <span>/</span> 袅袅声库：Qiyiyin</p>
        </div>
      </div>
    </footer>
  );
}
