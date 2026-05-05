"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const img = el.querySelector("img") as HTMLImageElement;
    if (img) {
      img.style.transform = `translate(${x * 12}px, ${y * 12}px) scale(1.03)`;
    }
  };

  const handleMouseLeave = () => {
    const el = imageRef.current;
    if (!el) return;
    const img = el.querySelector("img") as HTMLImageElement;
    if (img) {
      img.style.transform = "translate(0, 0) scale(1)";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-12">
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left: Content */}
        <div className="order-2 md:order-1">
          <FadeIn direction="up">
            <span className="badge">UTAU 虚拟歌姬</span>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-6 mb-2 text-shimmer">
              爱音芙歌
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-text-light font-serif mb-6">
              愛音フカ / AineFuka
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-text-light leading-relaxed max-w-md mb-10 text-base md:text-lg">
              于2025年12月23日首次配布于Bilibili的免费歌声合成软件UTAU虚拟歌姬音源。
              拥有中文扩张整音与日文单独音声库，以及由Qiyiyin制作的袅袅虚拟歌手声库。
              白发双马尾的可爱少女，用甜品般甜美的声音为你歌唱。
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex gap-4 flex-wrap">
              <Link href="/voice" className="btn-primary px-8 py-4 rounded-full text-base inline-flex items-center gap-2">
                <span className="text-lg">♪</span> 下载声库
              </Link>
              <Link href="/profile" className="btn-secondary px-8 py-4 rounded-full text-base inline-flex items-center gap-2">
                <span className="text-lg">✦</span> 了解更多
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right: Image */}
        <div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="order-1 md:order-2 flex justify-center items-center relative"
        >
          {/* Glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.15, 0.4],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-gradient-radial from-primary-pink/40 to-transparent blur-[40px]"
          />

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.img
              src="/中文.PNG"
              alt="爱音芙歌中文立绘"
              className="max-h-[70vh] md:max-h-[85vh] w-auto object-contain drop-shadow-[0_20px_60px_rgba(232,168,184,0.3)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ transition: "transform 0.15s ease-out" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
