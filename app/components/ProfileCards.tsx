"use client";

import { useRef, type ReactNode } from "react";
import FadeIn from "./FadeIn";

interface InfoItem {
  label: string;
  value: string;
}

interface CardProps {
  icon: string;
  title: string;
  children: ReactNode;
  index: number;
}

function TiltCard({ icon, title, children, index }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-5px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)";
  };

  return (
    <FadeIn direction="up" delay={index * 0.1}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card p-8 relative overflow-hidden cursor-default"
        style={{ transition: "transform 0.2s ease-out" }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-pink to-primary-blue opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-4xl block mb-5">{icon}</span>
        <h3 className="text-xl font-bold mb-4 text-text-dark">{title}</h3>
        <div className="space-y-0">{children}</div>
      </div>
    </FadeIn>
  );
}

function InfoRow({ label, value }: InfoItem) {
  return (
    <div className="flex justify-between py-3 border-b border-black/5 last:border-b-0 gap-4">
      <span className="font-bold text-primary-pink shrink-0">{label}</span>
      <span className="text-text-dark font-medium text-right max-w-[60%]">{value}</span>
    </div>
  );
}

interface ProfileCardsProps {
  compact?: boolean;
}

export default function ProfileCards({ compact = false }: ProfileCardsProps) {
  const basicInfo: InfoItem[] = [
    { label: "中文名", value: "爱音芙歌" },
    { label: "日文名", value: "愛音フカ" },
    { label: "英文名", value: "AineFuka" },
    { label: "性别", value: "女" },
    { label: "年龄", value: "是秘密哦 ♡" },
    { label: "身高", value: "168cm" },
    { label: "体重", value: "是秘密哦 ♡" },
    { label: "生日", value: "12月23日" },
  ];

  const appearance: InfoItem[] = [
    { label: "发色", value: "白色披发，发尾粉色渐变，粉蓝双马尾" },
    { label: "发型", value: "披发双马尾" },
    { label: "瞳色", value: "蓝瞳，眼底有粉色渐变" },
    { label: "标牌动作", value: "向前伸手" },
    { label: "持有物", value: "拐杖糖" },
  ];

  const personality: InfoItem[] = [
    { label: "喜欢", value: "甜品、颜文字、三彩丸子" },
    { label: "讨厌", value: "冷漠的语气" },
    { label: "擅长", value: "食用甜品" },
    { label: "不擅长", value: "给自己梳头发、暴力" },
    { label: "口头禅", value: "诶嘿♡" },
  ];

  const history: InfoItem[] = [
    { label: "2025.12.23", value: "中文声库首次配布" },
    { label: "2026.03.21", value: "日语声库公开配布" },
    { label: "引擎", value: "UTAU / 袅袅" },
    { label: "价格", value: "免费配布" },
  ];

  const cards = compact
    ? [
        { icon: "🎀", title: "基本资料", items: basicInfo.slice(0, 4) },
        { icon: "🎨", title: "外貌特征", items: appearance.slice(0, 3) },
        { icon: "💕", title: "性格喜好", items: personality.slice(0, 3) },
        { icon: "📅", title: "配布历史", items: history },
      ]
    : [
        { icon: "🎀", title: "基本资料", items: basicInfo },
        { icon: "🎨", title: "外貌特征", items: appearance },
        { icon: "💕", title: "性格喜好", items: personality },
        { icon: "📅", title: "配布历史", items: history },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <TiltCard key={card.title} icon={card.icon} title={card.title} index={i}>
          {card.items.map((item) => (
            <InfoRow key={item.label} label={item.label} value={item.value} />
          ))}
        </TiltCard>
      ))}
    </div>
  );
}
