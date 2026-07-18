interface InfoItem {
  label: string;
  value: string;
}

interface SheetBlock {
  title: string;
  accent: string;
  items: InfoItem[];
}

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
  { label: "瞳色", value: "蓝瞳，眼底粉色渐变" },
  { label: "动作", value: "向前伸手" },
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

function Sheet({ title, accent, items }: SheetBlock) {
  return (
    <section className="sheet p-5 md:p-6">
      <div className="mb-2 flex items-center gap-2">
        <span className={`inline-block h-2.5 w-2.5 rounded-full ${accent}`} />
        <h3 className="font-display text-lg font-extrabold md:text-xl">{title}</h3>
      </div>
      <dl>
        {items.map((item) => (
          <div key={item.label} className="meta-row">
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

interface ProfileCardsProps {
  compact?: boolean;
}

export default function ProfileCards({ compact = false }: ProfileCardsProps) {
  const blocks: SheetBlock[] = compact
    ? [
        { title: "基本资料", accent: "bg-candy", items: basicInfo.slice(0, 5) },
        { title: "外貌", accent: "bg-twin", items: appearance.slice(0, 3) },
        { title: "性格", accent: "bg-lilac", items: personality.slice(0, 3) },
        { title: "配布", accent: "bg-mint", items: history },
      ]
    : [
        { title: "基本资料", accent: "bg-candy", items: basicInfo },
        { title: "外貌特征", accent: "bg-twin", items: appearance },
        { title: "性格喜好", accent: "bg-lilac", items: personality },
        { title: "配布历史", accent: "bg-mint", items: history },
      ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {blocks.map((block) => (
        <Sheet key={block.title} {...block} />
      ))}
    </div>
  );
}
