"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

export default function VoiceSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden bg-gradient-to-r from-primary-pink/5 via-primary-blue/5 to-primary-purple/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text Content */}
        <FadeIn direction="left">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-shimmer leading-tight">
              声库信息
            </h2>
            <p className="text-text-light leading-relaxed mb-6 text-base md:text-lg">
              爱音芙歌目前拥有UTAU中文扩张整音声库与日文单独音声库，
              以及由Qiyiyin制作的袅袅虚拟歌手声库。声库制作由Whien和重症负责，
              擅长音域为F3~C5，适合演唱流行、可爱风格的歌曲。
            </p>
            <p className="text-text-light leading-relaxed mb-8 text-base md:text-lg">
              中文声库采用扩张整音录制，保证了中文发音的准确性和自然度；
              日文声库为单独音形式，适合制作日系风格的音乐作品。
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="stat-box">
                <AnimatedCounter end={3} suffix="" />
                <span className="text-2xl font-black bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent block mb-1">
                  F3<span className="text-lg">~C5</span>
                </span>
                <span className="text-text-light text-sm">擅长音域</span>
              </div>
              <div className="stat-box">
                <span className="text-3xl font-black bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent block mb-1">
                  <AnimatedCounter end={2} suffix="" />
                </span>
                <span className="text-text-light text-sm">语言版本</span>
              </div>
              <div className="stat-box">
                <span className="text-3xl font-black bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent block mb-1">
                  <AnimatedCounter end={3} suffix="" />
                </span>
                <span className="text-text-light text-sm">引擎支持</span>
              </div>
              <div className="stat-box">
                <span className="text-3xl font-black bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent block mb-1">
                  <AnimatedCounter end={2} suffix="+" />
                </span>
                <span className="text-text-light text-sm">声库版本</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Visual: Wave Animation */}
        <FadeIn direction="right">
          <div className="flex items-center justify-center h-[350px] md:h-[400px] relative">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="wave-ring"
                  style={{
                    borderColor: i === 0 ? "#E8A8B8" : i === 1 ? "#A8C4E8" : "#B8A8E8",
                    animationDelay: `${i * 1}s`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl z-10"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                🎵
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
