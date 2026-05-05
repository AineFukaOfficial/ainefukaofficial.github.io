"use client";

import { useRef } from "react";
import FadeIn from "./FadeIn";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/日文.PNG",
    alt: "日文声库立绘",
    title: "日文声库立绘",
    description: "2026年3月21日公开配布",
  },
  {
    src: "/中文.PNG",
    alt: "中文声库立绘",
    title: "中文声库立绘",
    description: "2025年12月23日首次配布",
  },
  {
    src: "/Kei.PNG",
    alt: "KEI仿画风立绘",
    title: "KEI仿画风",
    description: "由莱星绘制",
  },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryItems.map((item, i) => (
        <TiltedGalleryItem key={item.src} item={item} index={i} />
      ))}
    </div>
  );
}

function TiltedGalleryItem({ item, index }: { item: GalleryItem; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = itemRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const el = itemRef.current;
    if (!el) return;
    el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  };

  return (
    <FadeIn direction="up" delay={index * 0.15}>
      <div
        ref={itemRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="gallery-item"
        style={{ transition: "transform 0.15s ease-out" }}
      >
        <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
        <div className="gallery-overlay">
          <h3 className="text-lg font-bold mb-1">{item.title}</h3>
          <p className="text-sm text-white/80">{item.description}</p>
        </div>
      </div>
    </FadeIn>
  );
}
