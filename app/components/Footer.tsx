import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#2D2D3A] to-[#3C3C50] text-white pt-16 pb-8 px-6 overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="relative block w-full h-[60px]">
          <path
            fill="#F8E8EE"
            d="M0,32L48,37.3C96,43,192,53,288,53.3C384,54,480,44,576,37.3C672,31,768,27,864,32C960,37,1056,51,1152,53.3C1248,56,1344,48,1392,44L1440,40L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
          爱音芙歌 | 愛音フカ
        </h2>
        <p className="text-white/70 mb-8 text-lg">
          用甜品般甜美的声音，为你唱响每一个音符 ♡
        </p>

        <div className="flex justify-center gap-6 md:gap-10 mb-10 flex-wrap">
          <Link
            href="https://zh.moegirl.org.cn/爱音芙歌"
            target="_blank"
            className="flex items-center gap-2 text-white/60 hover:text-primary-pink transition-colors duration-300 group"
          >
            <img
              src="/萌娘.jpg"
              alt="萌娘百科"
              className="w-5 h-5 rounded object-cover group-hover:scale-110 transition-transform"
            />
            萌娘百科
          </Link>
          <Link
            href="https://space.bilibili.com/3690991053703575"
            target="_blank"
            className="flex items-center gap-2 text-white/60 hover:text-primary-pink transition-colors duration-300 group"
          >
            <img
              src="/BiliBili.png"
              alt="Bilibili"
              className="w-5 h-5 rounded object-cover group-hover:scale-110 transition-transform"
            />
            Bilibili
          </Link>
          <Link
            href="https://bowlroll.net/file/346505"
            target="_blank"
            className="flex items-center gap-2 text-white/60 hover:text-primary-pink transition-colors duration-300"
          >
            <span className="text-lg">💾</span> 声库下载
          </Link>
        </div>

        <div className="border-t border-white/10 pt-6 text-white/40 text-sm space-y-2">
          <p>声库制作：Whien、重症 | 袅袅声库：Qiyiyin</p>
          <p>© 2025-2026 爱音芙歌 Project | 粉丝应援词：💈💈快给大理发灯筒让路💈💈</p>
        </div>
      </div>
    </footer>
  );
}
