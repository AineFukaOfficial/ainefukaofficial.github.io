const galleryItems = [
  {
    src: "/日文.webp",
    alt: "日文声库立绘",
    title: "日文声库",
    description: "2026.03.21 公开",
  },
  {
    src: "/中文.webp",
    alt: "中文声库立绘",
    title: "中文声库",
    description: "2025.12.23 首次配布",
  },
  {
    src: "/Kei.webp",
    alt: "KEI仿画风立绘",
    title: "KEI 仿画风",
    description: "莱星 绘制",
  },
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {galleryItems.map((item) => (
        <figure
          key={item.src}
          className="sheet overflow-hidden transition-transform duration-200 hover:-translate-y-1"
        >
          <div className="flex aspect-3/4 items-center justify-center bg-paper">
            <img src={item.src} alt={item.alt} className="max-h-full max-w-full object-contain" />
          </div>
          <figcaption className="border-t border-line/80 px-4 py-3">
            <div className="font-display font-extrabold">{item.title}</div>
            <div className="mt-1 text-sm text-muted">{item.description}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
