export type Locale = "zh" | "en" | "ja";

export const locales: Locale[] = ["zh", "en", "ja"];

type Lines = [string, string];
type InfoItem = { label: string; value: string };
type PageMetadata = { title: string; description: string; keywords: string[] };

export interface Dictionary {
  common: {
    skip: string; mainNav: string; homeAria: string; menuAria: string;
    languageNav: string; newWindow: string; footerTagline: string; wiki: string;
    download: string; design: string; voiceCredits: string; niaoniaoCredit: string; copyright: string;
  };
  nav: { home: string; profile: string; voice: string; gallery: string };
  metadata: { home: PageMetadata; profile: PageMetadata; voice: PageMetadata; gallery: PageMetadata };
  home: {
    scenes: { id: "hello" | "character" | "voice" | "artworks" | "together"; label: string; english: string }[];
    profileNotes: { label: string; lines: InfoItem[] }[];
    backToStart: string; contentNav: string; openMenu: string; deckLabel: string;
    release: string; introLines: Lines; download: string; firstRelease: string;
    languages: string; profileIntro: string; profileTitle: Lines; profileTabsLabel: string;
    fullProfile: string; quote: string; voiceLabel: string; artworkLabel: string;
    outroIntro: string; outroTitle: Lines; bilibili: string; replay: string; next: string;
    sceneNav: string; scene: (index: number, label: string) => string;
    sceneStatus: (index: number, label: string) => string; help: string; siteMenu: string;
    menuTitle: string; close: string; siteNav: string;
    menuLinks: { href: string; title: string; english: string }[];
    voiceCredits: string; niaoniaoCredit: string; design: string;
  };
  voice: {
    headingLines: Lines; intro: string; freeRelease: string; choose: string;
    creatorCredit: string; range: string; creator: string; releaseInfo: string;
    niaoniaoSinger: string; download: string; instructions: string; title: string;
    descriptionLines: Lines; catalogTitle: string; catalogDescription: string;
    artworkAlt: string; releaseDate: string; notesTitle: string; downloadNotes: string;
    notes: { title: string; description: string }[];
  };
  gallery: {
    headingLines: Lines; introLines: Lines; counter: (index: number, total: number) => string;
    previous: string; next: string; choose: string; openOriginal: string; all: string;
    title: string; descriptionLines: Lines;
    viewLarge: (title: string, description: string) => string;
    view: string; close: string; openOriginalNew: string; escape: string;
  };
  profile: {
    title: string; descriptionLines: Lines; portraitAlt: string;
    sheets: { title: string; items: InfoItem[] }[];
  };
}

const zh: Dictionary = {
  common: {
    skip: "跳转到主要内容", mainNav: "主导航", homeAria: "爱音芙歌首页", menuAria: "切换网站导航",
    languageNav: "选择语言", newWindow: "（在新窗口打开）", footerTagline: "诶嘿♡ 欢迎来调教哦",
    wiki: "萌娘百科", download: "BowlRoll 下载", design: "网站设计：Q78KG",
    voiceCredits: "声库制作：Whien、重症", niaoniaoCredit: "袅袅声库：Qiyiyin", copyright: "© 2025–2026 爱音芙歌 Project",
  },
  nav: { home: "首页", profile: "关于芙歌", voice: "声库下载", gallery: "立绘展示" },
  metadata: {
    home: {
      title: "爱音芙歌官网 | 愛音フカ AineFuka - UTAU・袅袅虚拟歌姬",
      description: "爱音芙歌（愛音フカ / AineFuka）官方网站。免费配布的 UTAU・袅袅虚拟歌姬，提供中文扩张整音、日文单独音与袅袅声库下载入口，以及角色档案、使用说明和立绘展示。",
      keywords: ["爱音芙歌", "愛音フカ", "AineFuka", "UTAU", "袅袅", "虚拟歌姬", "免费声库"],
    },
    profile: {
      title: "角色档案 | 爱音芙歌 AineFuka",
      description: "了解爱音芙歌（愛音フカ / AineFuka）的角色设定：基本资料、白发粉尾的双马尾外貌、性格、喜好，以及 UTAU・袅袅声库的配布时间线。",
      keywords: ["爱音芙歌", "愛音フカ", "AineFuka", "角色档案", "角色设定", "UTAU", "袅袅"],
    },
    voice: {
      title: "声库下载与使用说明 | 爱音芙歌 AineFuka",
      description: "免费下载爱音芙歌的中文扩张整音、日文单独音与袅袅声库，查看音域 F3–C5、声库特点及使用说明，前往 BowlRoll 获取音源。",
      keywords: ["爱音芙歌", "AineFuka", "声库下载", "中文声库", "日文单独音", "CHNCV", "UTAU", "袅袅", "BowlRoll"],
    },
    gallery: {
      title: "立绘展示 | 爱音芙歌 AineFuka",
      description: "浏览爱音芙歌（愛音フカ / AineFuka）的中文声库立绘、日文声库立绘与特别画风插画，欣赏白发粉尾双马尾虚拟歌姬的角色形象。",
      keywords: ["爱音芙歌", "愛音フカ", "AineFuka", "立绘", "插画", "角色形象"],
    },
  },
  home: {
    scenes: [
      { id: "hello", label: "初次见面", english: "Hello, Fuka!" },
      { id: "character", label: "角色档案", english: "About Fuka" },
      { id: "voice", label: "声库一览", english: "Voicebanks" },
      { id: "artworks", label: "立绘", english: "Artworks" },
      { id: "together", label: "与你一起", english: "See you~" },
    ],
    profileNotes: [
      { label: "小档案", lines: [{ label: "姓名", value: "爱音芙歌 / 愛音フカ" }, { label: "身高", value: "168 cm" }, { label: "生日", value: "12 月 23 日" }, { label: "持有物", value: "拐杖糖" }] },
      { label: "小秘密", lines: [{ label: "喜欢", value: "甜品、颜文字、三彩丸子" }, { label: "不擅长", value: "给自己梳头发、暴力" }, { label: "讨厌", value: "冷漠的语气" }, { label: "口头禅", value: "诶嘿♡" }] },
      { label: "初次配布", lines: [{ label: "2025.12.23", value: "中文声库首次配布" }, { label: "2026.03.21", value: "日语声库公开配布" }, { label: "引擎", value: "UTAU / 袅袅" }, { label: "价格", value: "免费配布" }] },
    ],
    backToStart: "返回初次见面", contentNav: "首页内容", openMenu: "打开网站导航", deckLabel: "爱音芙歌全屏发布页",
    release: "UTAU / 袅袅虚拟歌姬 · 免费配布", introLines: ["白发粉尾的双马尾歌姬，", "声音像刚出炉的甜品"],
    download: "下载声库", firstRelease: "初次配布", languages: "中文 / 日文", profileIntro: "喜欢甜品，也喜欢颜文字",
    profileTitle: ["先认识一下", "再来调教"], profileTabsLabel: "角色资料分类", fullProfile: "查看完整档案", quote: "「诶嘿♡」",
    voiceLabel: "她的歌声", artworkLabel: "立绘收藏", outroIntro: "中文、日文、袅袅声库，都在等你调~", outroTitle: ["诶嘿♡", "欢迎来调教"],
    bilibili: "去 Bilibili 看看", replay: "再看一遍", next: "往下看看", sceneNav: "切换全屏场景",
    scene: (index, label) => `第 ${index + 1} 幕：${label}`,
    sceneStatus: (index, label) => `第 ${index + 1} 幕，共 5 幕：${label}`,
    help: "滚轮或上下滑动切换场景。也可使用上下方向键、Page Up、Page Down；Home 回到开场，End 前往结尾。右侧导航可直接选择场景。声库使用方向键选择版本，立绘使用左右方向键浏览。",
    siteMenu: "网站导航", menuTitle: "去哪里？", close: "关闭", siteNav: "网站页面",
    menuLinks: [{ href: "/profile", title: "关于芙歌", english: "Character" }, { href: "/voice", title: "声库下载", english: "Voicebanks" }, { href: "/gallery", title: "立绘收藏", english: "Artworks" }],
    voiceCredits: "声库制作 / Whien、重症", niaoniaoCredit: "袅袅声库 / Qiyiyin", design: "网站设计：Q78KG",
  },
  voice: {
    headingLines: ["让她唱", "你的歌"], intro: "中文、日文、袅袅，按需下载就好", freeRelease: "免费配布", choose: "选择声库",
    creatorCredit: "Qiyiyin 制作", range: "擅长音域", creator: "声库制作", releaseInfo: "配布信息", niaoniaoSinger: "袅袅虚拟歌手",
    download: "BowlRoll 下载", instructions: "查看使用说明", title: "声库下载",
    descriptionLines: ["中文 CHNCV、扩张整音、日文单独音与袅袅版本", "擅长音域 F3–C5，按需下载就好"],
    catalogTitle: "声库一览", catalogDescription: "声库类型与配布时间", artworkAlt: "爱音芙歌白发粉尾双马尾的中文声库角色立绘",
    releaseDate: "发布日期：", notesTitle: "使用说明", downloadNotes: "前往 BowlRoll 下载",
    notes: [{ title: "中文声库", description: "扩张整音录制，侧重中文咬字的完整与自然" }, { title: "日文声库", description: "日文单独音，便于音节切分与调声" }, { title: "袅袅声库", description: "由 Qiyiyin 制作，适配袅袅虚拟歌手软件" }],
  },
  gallery: {
    headingLines: ["每一种", "芙歌"], introLines: ["中文、日文，还有特别画风的芙歌", "点选小图，看看你喜欢哪一张"],
    counter: (index, total) => `第 ${index + 1} 张，共 ${total} 张`, previous: "上一张立绘", next: "下一张立绘", choose: "选择立绘",
    openOriginal: "打开原图", all: "全部立绘", title: "立绘展示", descriptionLines: ["中文声库、日文声库与特别画风插画", "点击立绘查看大图"],
    viewLarge: (title, description) => `查看大图：${title}，${description}`, view: "查看大图", close: "关闭", openOriginalNew: "打开原图（新标签页）",
    escape: "按 Esc 关闭",
  },
  profile: {
    title: "关于芙歌", descriptionLines: ["喜欢甜品和三彩丸子，不太擅长给自己梳头发", "先认识一下，再开始调教~"], portraitAlt: "爱音芙歌白发粉尾双马尾的全身角色立绘",
    sheets: [
      { title: "基本资料", items: [{ label: "中文名", value: "爱音芙歌" }, { label: "日文名", value: "愛音フカ" }, { label: "英文名", value: "AineFuka" }, { label: "性别", value: "女" }, { label: "年龄", value: "是秘密哦 ♡" }, { label: "身高", value: "168cm" }, { label: "体重", value: "是秘密哦 ♡" }, { label: "生日", value: "12月23日" }] },
      { title: "外貌特征", items: [{ label: "发色", value: "白色披发，发尾粉色渐变，粉蓝双马尾" }, { label: "发型", value: "披发双马尾" }, { label: "瞳色", value: "蓝瞳，眼底粉色渐变" }, { label: "动作", value: "向前伸手" }, { label: "持有物", value: "拐杖糖" }] },
      { title: "性格喜好", items: [{ label: "喜欢", value: "甜品、颜文字、三彩丸子" }, { label: "讨厌", value: "冷漠的语气" }, { label: "擅长", value: "食用甜品" }, { label: "不擅长", value: "给自己梳头发、暴力" }, { label: "口头禅", value: "诶嘿♡" }] },
      { title: "配布历史", items: [{ label: "2025.12.23", value: "中文声库首次配布" }, { label: "2026.03.21", value: "日语声库公开配布" }, { label: "引擎", value: "UTAU / 袅袅" }, { label: "价格", value: "免费配布" }] },
    ],
  },
};

const en: Dictionary = {
  common: {
    skip: "Skip to main content", mainNav: "Main navigation", homeAria: "AineFuka home", menuAria: "Toggle site navigation",
    languageNav: "Choose language", newWindow: " (opens in a new window)", footerTagline: "Ehe♡ Come make music with me!",
    wiki: "Moegirlpedia", download: "Download on BowlRoll", design: "Website design: Q78KG",
    voiceCredits: "Voicebanks: Whien, 重症", niaoniaoCredit: "NIAONiao voicebank: Qiyiyin", copyright: "© 2025–2026 AineFuka Project",
  },
  nav: { home: "Home", profile: "About Fuka", voice: "Voicebanks", gallery: "Artwork" },
  metadata: {
    home: {
      title: "AineFuka Official Website | 愛音フカ - UTAU & NIAONiao Virtual Singer",
      description: "The official website of AineFuka (愛音フカ / 爱音芙歌), a free UTAU and NIAONiao virtual singer. Download her Chinese extended-reclist, Japanese CV and NIAONiao voicebanks, explore her profile, read usage notes and browse character artwork.",
      keywords: ["AineFuka", "愛音フカ", "爱音芙歌", "UTAU", "NIAONiao", "virtual singer", "free voicebanks"],
    },
    profile: {
      title: "Character Profile | AineFuka 愛音フカ",
      description: "Meet AineFuka (愛音フカ / 爱音芙歌): her profile, white twin tails with pink tips, personality and favorite things, plus the release history of her UTAU and NIAONiao voicebanks.",
      keywords: ["AineFuka", "愛音フカ", "爱音芙歌", "character profile", "character design", "UTAU", "NIAONiao"],
    },
    voice: {
      title: "Voicebank Downloads & Usage Notes | AineFuka 愛音フカ",
      description: "Download AineFuka's free Chinese extended-reclist, Japanese CV and NIAONiao voicebanks. Explore her F3–C5 vocal range, voicebank features and usage notes, and get the files on BowlRoll.",
      keywords: ["AineFuka", "愛音フカ", "voicebank download", "Chinese voicebank", "Japanese CV", "CHNCV", "UTAU", "NIAONiao", "BowlRoll"],
    },
    gallery: {
      title: "Character Artwork | AineFuka 愛音フカ",
      description: "Browse AineFuka's Chinese and Japanese voicebank artwork and special-style illustrations, featuring the virtual singer's white twin tails with pink tips.",
      keywords: ["AineFuka", "愛音フカ", "爱音芙歌", "character artwork", "illustrations", "character design"],
    },
  },
  home: {
    scenes: [
      { id: "hello", label: "Hello, Fuka!", english: "Hello, Fuka!" },
      { id: "character", label: "About Fuka", english: "About Fuka" },
      { id: "voice", label: "Voicebanks", english: "Voicebanks" },
      { id: "artworks", label: "Artwork", english: "Artworks" },
      { id: "together", label: "Together with you", english: "See you~" },
    ],
    profileNotes: [
      { label: "At a glance", lines: [{ label: "Name", value: "AineFuka / 愛音フカ" }, { label: "Height", value: "168 cm" }, { label: "Birthday", value: "December 23" }, { label: "Signature item", value: "Candy cane" }] },
      { label: "Little secrets", lines: [{ label: "Likes", value: "Desserts, kaomoji, three-color dango" }, { label: "Not good at", value: "Doing her own hair, violence" }, { label: "Dislikes", value: "A cold tone of voice" }, { label: "Catchphrase", value: "Ehe♡" }] },
      { label: "First releases", lines: [{ label: "2025.12.23", value: "Chinese voicebank first released" }, { label: "2026.03.21", value: "Japanese voicebank publicly released" }, { label: "Engines", value: "UTAU / NIAONiao" }, { label: "Price", value: "Free to download" }] },
    ],
    backToStart: "Back to Hello, Fuka!", contentNav: "Homepage sections", openMenu: "Open site navigation", deckLabel: "AineFuka full-screen release page",
    release: "UTAU / NIAONiao virtual singer · Free to download", introLines: ["White twin tails, pink tips,", "and a voice as sweet as a freshly baked treat"],
    download: "Download voicebanks", firstRelease: "First release", languages: "Chinese / Japanese", profileIntro: "A fan of desserts and kaomoji",
    profileTitle: ["Get to know her", "Then bring her voice to life"], profileTabsLabel: "Character profile categories", fullProfile: "Read her full profile", quote: "“Ehe♡”",
    voiceLabel: "Her singing voice", artworkLabel: "Character artwork", outroIntro: "Chinese, Japanese and NIAONiao voicebanks—all ready for your tuning~", outroTitle: ["Ehe♡", "Let's make music together"],
    bilibili: "Visit Bilibili", replay: "Watch again", next: "Keep exploring", sceneNav: "Switch full-screen scenes",
    scene: (index, label) => `Scene ${index + 1}: ${label}`,
    sceneStatus: (index, label) => `Scene ${index + 1} of 5: ${label}`,
    help: "Use the mouse wheel or swipe up and down to switch scenes. You can also use the Up and Down arrow keys, Page Up and Page Down. Home returns to the opening; End goes to the final scene. Use the navigation on the right to choose a scene directly. Use the arrow keys to select a voicebank version, and the Left and Right arrow keys to browse artwork.",
    siteMenu: "Site navigation", menuTitle: "Where to?", close: "Close", siteNav: "Site pages",
    menuLinks: [{ href: "/profile", title: "About Fuka", english: "Character" }, { href: "/voice", title: "Voicebank downloads", english: "Voicebanks" }, { href: "/gallery", title: "Character artwork", english: "Artworks" }],
    voiceCredits: "Voicebanks / Whien, 重症", niaoniaoCredit: "NIAONiao voicebank / Qiyiyin", design: "Website design: Q78KG",
  },
  voice: {
    headingLines: ["Let her sing", "your song"], intro: "Chinese, Japanese or NIAONiao—pick the voicebank you need", freeRelease: "Free to download", choose: "Choose a voicebank",
    creatorCredit: "Created by Qiyiyin", range: "Recommended range", creator: "Voicebank creators", releaseInfo: "Release information", niaoniaoSinger: "NIAONiao Virtual Singer",
    download: "Download on BowlRoll", instructions: "Read usage notes", title: "Voicebank downloads",
    descriptionLines: ["Chinese CHNCV, Chinese extended-reclist, Japanese CV and NIAONiao versions", "Recommended range: F3–C5. Pick the voicebank you need."],
    catalogTitle: "Voicebank catalog", catalogDescription: "Voicebank formats and release dates", artworkAlt: "AineFuka's Chinese voicebank character artwork, with white twin tails and pink tips",
    releaseDate: "Release date: ", notesTitle: "Usage notes", downloadNotes: "Get the voicebanks on BowlRoll",
    notes: [{ title: "Chinese voicebank", description: "An extended-reclist recording focused on complete, natural Chinese articulation" }, { title: "Japanese voicebank", description: "Japanese CV (single-sound) recordings for straightforward syllable editing and tuning" }, { title: "NIAONiao voicebank", description: "Created by Qiyiyin for the NIAONiao Virtual Singer software" }],
  },
  gallery: {
    headingLines: ["Every side", "of Fuka"], introLines: ["Chinese, Japanese and special-style illustrations of Fuka", "Choose a thumbnail and find your favorite"],
    counter: (index, total) => `Artwork ${index + 1} of ${total}`, previous: "Previous artwork", next: "Next artwork", choose: "Choose artwork",
    openOriginal: "Open original", all: "All artwork", title: "Character artwork", descriptionLines: ["Chinese and Japanese voicebank artwork, plus special-style illustrations", "Select an artwork to see it larger"],
    viewLarge: (title, description) => `View larger: ${title}, ${description}`, view: "View larger", close: "Close", openOriginalNew: "Open original (new tab)",
    escape: "Press Esc to close",
  },
  profile: {
    title: "About Fuka", descriptionLines: ["She loves desserts and three-color dango, but doing her own hair isn't her strong suit", "Get to know her, then bring her voice to life~"], portraitAlt: "Full-body character artwork of AineFuka with white twin tails and pink tips",
    sheets: [
      { title: "Basic profile", items: [{ label: "Chinese name", value: "爱音芙歌" }, { label: "Japanese name", value: "愛音フカ" }, { label: "English name", value: "AineFuka" }, { label: "Gender", value: "Female" }, { label: "Age", value: "It's a secret ♡" }, { label: "Height", value: "168cm" }, { label: "Weight", value: "It's a secret ♡" }, { label: "Birthday", value: "December 23" }] },
      { title: "Appearance", items: [{ label: "Hair color", value: "Loose white hair fading to pink at the tips, with pink-and-blue twin tails" }, { label: "Hairstyle", value: "Twin tails with loose hair" }, { label: "Eye color", value: "Blue eyes fading to pink at the bottom" }, { label: "Pose", value: "Reaching forward" }, { label: "Signature item", value: "Candy cane" }] },
      { title: "Personality & favorites", items: [{ label: "Likes", value: "Desserts, kaomoji, three-color dango" }, { label: "Dislikes", value: "A cold tone of voice" }, { label: "Good at", value: "Eating desserts" }, { label: "Not good at", value: "Doing her own hair, violence" }, { label: "Catchphrase", value: "Ehe♡" }] },
      { title: "Release history", items: [{ label: "2025.12.23", value: "Chinese voicebank first released" }, { label: "2026.03.21", value: "Japanese voicebank publicly released" }, { label: "Engines", value: "UTAU / NIAONiao" }, { label: "Price", value: "Free to download" }] },
    ],
  },
};

const ja: Dictionary = {
  common: {
    skip: "メインコンテンツへスキップ", mainNav: "メインナビゲーション", homeAria: "愛音フカのホーム", menuAria: "サイトメニューを開閉",
    languageNav: "言語を選択", newWindow: "（新しいウィンドウで開きます）", footerTagline: "えへ♡ 調声してくれるとうれしいな",
    wiki: "萌娘百科", download: "BowlRoll でダウンロード", design: "サイトデザイン：Q78KG",
    voiceCredits: "音源制作：Whien、重症", niaoniaoCredit: "袅袅音源：Qiyiyin", copyright: "© 2025–2026 愛音フカ Project",
  },
  nav: { home: "ホーム", profile: "フカについて", voice: "音源ダウンロード", gallery: "立ち絵" },
  metadata: {
    home: {
      title: "愛音フカ公式サイト | AineFuka - UTAU・袅袅バーチャルシンガー",
      description: "愛音フカ（爱音芙歌 / AineFuka）の公式サイト。UTAU・袅袅向けの無料配布バーチャルシンガーです。中国語拡張音源、日本語単独音、袅袅音源のダウンロード、プロフィール、使い方、立ち絵をご紹介。",
      keywords: ["愛音フカ", "爱音芙歌", "AineFuka", "UTAU", "袅袅", "バーチャルシンガー", "無料音源"],
    },
    profile: {
      title: "キャラクタープロフィール | 愛音フカ AineFuka",
      description: "愛音フカ（爱音芙歌 / AineFuka）のキャラクター設定をご紹介。基本プロフィール、毛先がピンクの白いツインテール、性格や好み、UTAU・袅袅音源の配布履歴をまとめています。",
      keywords: ["愛音フカ", "爱音芙歌", "AineFuka", "プロフィール", "キャラクター設定", "UTAU", "袅袅"],
    },
    voice: {
      title: "音源ダウンロード・使い方 | 愛音フカ AineFuka",
      description: "愛音フカの中国語拡張音源、日本語単独音、袅袅音源を無料ダウンロード。得意音域 F3–C5、各音源の特徴や使い方をご確認のうえ、BowlRoll から音源を入手できます。",
      keywords: ["愛音フカ", "AineFuka", "音源ダウンロード", "中国語音源", "日本語単独音", "CHNCV", "UTAU", "袅袅", "BowlRoll"],
    },
    gallery: {
      title: "立ち絵ギャラリー | 愛音フカ AineFuka",
      description: "愛音フカ（爱音芙歌 / AineFuka）の中国語音源・日本語音源の立ち絵や、特別な画風のイラストをご覧いただけます。白髪にピンクの毛先、ツインテールが特徴のバーチャルシンガーです。",
      keywords: ["愛音フカ", "爱音芙歌", "AineFuka", "立ち絵", "イラスト", "キャラクターデザイン"],
    },
  },
  home: {
    scenes: [
      { id: "hello", label: "はじめまして", english: "Hello, Fuka!" },
      { id: "character", label: "プロフィール", english: "About Fuka" },
      { id: "voice", label: "音源一覧", english: "Voicebanks" },
      { id: "artworks", label: "立ち絵", english: "Artworks" },
      { id: "together", label: "きみと一緒に", english: "See you~" },
    ],
    profileNotes: [
      { label: "ミニプロフィール", lines: [{ label: "名前", value: "愛音フカ / 爱音芙歌" }, { label: "身長", value: "168 cm" }, { label: "誕生日", value: "12月23日" }, { label: "持ち物", value: "キャンディケイン" }] },
      { label: "小さな秘密", lines: [{ label: "好き", value: "スイーツ、顔文字、三色団子" }, { label: "苦手", value: "自分の髪を整えること、暴力" }, { label: "嫌い", value: "冷たい口調" }, { label: "口癖", value: "えへ♡" }] },
      { label: "初配布", lines: [{ label: "2025.12.23", value: "中国語音源の初配布" }, { label: "2026.03.21", value: "日本語音源の一般配布開始" }, { label: "エンジン", value: "UTAU / 袅袅" }, { label: "価格", value: "無料配布" }] },
    ],
    backToStart: "はじめましてのシーンへ戻る", contentNav: "ホームのコンテンツ", openMenu: "サイトメニューを開く", deckLabel: "愛音フカの全画面リリースページ",
    release: "UTAU / 袅袅バーチャルシンガー · 無料配布", introLines: ["白髪にピンクの毛先、ツインテールの歌姫", "焼きたてのスイーツみたいな歌声です"],
    download: "音源をダウンロード", firstRelease: "初配布", languages: "中国語 / 日本語", profileIntro: "スイーツも、顔文字も大好き",
    profileTitle: ["まずは自己紹介", "それから調声しよう"], profileTabsLabel: "プロフィールのカテゴリー", fullProfile: "詳しいプロフィールを見る", quote: "「えへ♡」",
    voiceLabel: "フカの歌声", artworkLabel: "立ち絵コレクション", outroIntro: "中国語・日本語・袅袅音源、きみの調声を待ってるよ~", outroTitle: ["えへ♡", "一緒に歌おう"],
    bilibili: "Bilibili を見に行く", replay: "もう一度見る", next: "続きを見る", sceneNav: "全画面シーンの切り替え",
    scene: (index, label) => `シーン ${index + 1}：${label}`,
    sceneStatus: (index, label) => `全5シーン中 ${index + 1}：${label}`,
    help: "マウスホイール、または上下のスワイプでシーンを切り替えられます。上下矢印キー、Page Up、Page Down も使えます。Home で最初、End で最後のシーンへ移動します。右側のナビゲーションからシーンを直接選べます。音源のバージョンは矢印キーで選択でき、立ち絵は左右矢印キーで閲覧できます。",
    siteMenu: "サイトメニュー", menuTitle: "どこへ行く？", close: "閉じる", siteNav: "サイト内ページ",
    menuLinks: [{ href: "/profile", title: "フカについて", english: "Character" }, { href: "/voice", title: "音源ダウンロード", english: "Voicebanks" }, { href: "/gallery", title: "立ち絵コレクション", english: "Artworks" }],
    voiceCredits: "音源制作 / Whien、重症", niaoniaoCredit: "袅袅音源 / Qiyiyin", design: "サイトデザイン：Q78KG",
  },
  voice: {
    headingLines: ["きみの歌を", "フカの声で"], intro: "中国語・日本語・袅袅、お好きな音源をどうぞ", freeRelease: "無料配布", choose: "音源を選択",
    creatorCredit: "Qiyiyin 制作", range: "得意音域", creator: "音源制作", releaseInfo: "配布情報", niaoniaoSinger: "袅袅バーチャルシンガー",
    download: "BowlRoll でダウンロード", instructions: "使い方を見る", title: "音源ダウンロード",
    descriptionLines: ["中国語 CHNCV・拡張音源、日本語単独音、袅袅版", "得意音域は F3–C5。お好きな音源をどうぞ"],
    catalogTitle: "音源一覧", catalogDescription: "音源形式と配布日", artworkAlt: "白髪にピンクの毛先のツインテールが特徴の、愛音フカ中国語音源の立ち絵",
    releaseDate: "配布日：", notesTitle: "使い方", downloadNotes: "BowlRoll からダウンロード",
    notes: [{ title: "中国語音源", description: "中国語の発音を自然かつ明瞭に表現することを重視した、拡張リストによる収録音源" }, { title: "日本語音源", description: "音節の編集や調声がしやすい、日本語の単独音音源" }, { title: "袅袅音源", description: "Qiyiyin が制作した、袅袅バーチャルシンガーソフト対応音源" }],
  },
  gallery: {
    headingLines: ["いろんな", "フカ"], introLines: ["中国語・日本語音源、特別な画風のフカも", "サムネイルを選んで、お気に入りを見つけてね"],
    counter: (index, total) => `全${total}枚中${index + 1}枚目`, previous: "前の立ち絵", next: "次の立ち絵", choose: "立ち絵を選択",
    openOriginal: "原寸画像を開く", all: "すべての立ち絵", title: "立ち絵ギャラリー", descriptionLines: ["中国語・日本語音源の立ち絵と、特別な画風のイラスト", "立ち絵を選ぶと大きく表示できます"],
    viewLarge: (title, description) => `大きく表示：${title}、${description}`, view: "大きく見る", close: "閉じる", openOriginalNew: "原寸画像を開く（新しいタブ）",
    escape: "Esc キーで閉じる",
  },
  profile: {
    title: "フカについて", descriptionLines: ["スイーツと三色団子が大好き。自分の髪を整えるのはちょっと苦手", "まずはフカを知ってから、調声してみてね~"], portraitAlt: "白髪にピンクの毛先のツインテールが特徴の、愛音フカの全身立ち絵",
    sheets: [
      { title: "基本プロフィール", items: [{ label: "中国語名", value: "爱音芙歌" }, { label: "日本語名", value: "愛音フカ" }, { label: "英語名", value: "AineFuka" }, { label: "性別", value: "女の子" }, { label: "年齢", value: "秘密だよ ♡" }, { label: "身長", value: "168cm" }, { label: "体重", value: "秘密だよ ♡" }, { label: "誕生日", value: "12月23日" }] },
      { title: "外見", items: [{ label: "髪色", value: "下ろした白髪にピンクのグラデーションの毛先、ピンクとブルーのツインテール" }, { label: "髪型", value: "髪を下ろしたツインテール" }, { label: "瞳の色", value: "青い瞳に、下部はピンクのグラデーション" }, { label: "ポーズ", value: "前に手を伸ばしている" }, { label: "持ち物", value: "キャンディケイン" }] },
      { title: "性格と好み", items: [{ label: "好き", value: "スイーツ、顔文字、三色団子" }, { label: "嫌い", value: "冷たい口調" }, { label: "得意", value: "スイーツを食べること" }, { label: "苦手", value: "自分の髪を整えること、暴力" }, { label: "口癖", value: "えへ♡" }] },
      { title: "配布履歴", items: [{ label: "2025.12.23", value: "中国語音源の初配布" }, { label: "2026.03.21", value: "日本語音源の一般配布開始" }, { label: "エンジン", value: "UTAU / 袅袅" }, { label: "価格", value: "無料配布" }] },
    ],
  },
};

const dictionaries: Record<Locale, Dictionary> = { zh, en, ja };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localizedPath(locale: Locale, path: string): string {
  return locale === "zh" ? path : `/${locale}${path === "/" ? "" : path}`;
}
