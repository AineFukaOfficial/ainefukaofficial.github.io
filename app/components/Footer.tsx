import Link from "next/link";
import { getDictionary, localizedPath, type Locale } from "../i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).common;
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-main">
          <Link href={localizedPath(locale, "/")} className="footer-wordmark" aria-label={t.homeAria}>AineFuka<span>.</span></Link>
          <p><span lang="ja">愛音フカ</span> / AineFuka<br /><span>{t.footerTagline}</span></p>
          <div className="footer-links">
            <a href="https://zh.moegirl.org.cn/爱音芙歌" target="_blank" rel="noreferrer">{t.wiki}</a>
            <a href="https://space.bilibili.com/3690991053703575" target="_blank" rel="noreferrer">Bilibili</a>
            <a href="https://bowlroll.net/file/346505" target="_blank" rel="noreferrer">{t.download}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.copyright}</p>
          <p>{t.design}</p>
          <p>{t.voiceCredits}<span>/</span>{t.niaoniaoCredit}</p>
        </div>
      </div>
    </footer>
  );
}
