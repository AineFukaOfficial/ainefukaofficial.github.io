import styles from "../voice/voice.module.css";

import { banks } from "../voice/banks";

export default function VoiceSection() {
  return (
    <section className="page-shell" aria-labelledby="voice-title">
      <div className={`page-intro ${styles.intro}`}>
        <div className={styles.introCopy}>
          <h1 id="voice-title" className="page-title">声库下载</h1>
          <p className={`page-description ${styles.description}`}>
            中文 CHNCV、扩张整音、日文单独音与袅袅版本<br />
            擅长音域 F3–C5，按需下载就好
          </p>
          <dl className={styles.specs}>
            <div>
              <dt>擅长音域</dt>
              <dd className={styles.range}>F3–C5</dd>
            </div>
            <div>
              <dt>声库制作</dt>
              <dd>Whien、重症</dd>
            </div>
          </dl>
          <a
            href="https://bowlroll.net/file/346505"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-solid ${styles.download}`}
          >
            BowlRoll 下载
            <span className={styles.srOnly}>（在新窗口打开）</span>
          </a>
        </div>
        <div className={styles.artwork}>
          <img
            src="/新中文立绘 (1).webp"
            alt="爱音芙歌中文声库立绘"
            width={4500}
            height={6000}
            className={styles.portrait}
          />
        </div>
      </div>

      <div className={styles.catalog}>
        <div className={styles.catalogHeading}>
          <h2 className="section-heading">声库一览</h2>
          <p>声库类型与配布时间</p>
        </div>
        <ul className={styles.bankList}>
          {banks.map((bank) => (
            <li key={`${bank.title}-${bank.type}`} className={styles.bank}>
              <h3>{bank.title}</h3>
              <p className={styles.bankType}>{bank.type}</p>
              {bank.date ? (
                <time dateTime={bank.date.replaceAll(".", "-")} className={styles.bankDate}>
                  <span className={styles.srOnly}>发布日期：</span>
                  {bank.date}
                </time>
              ) : (
                <p className={styles.bankDate}>袅袅虚拟歌手</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
