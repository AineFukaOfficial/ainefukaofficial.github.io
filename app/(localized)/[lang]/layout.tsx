import type { Metadata } from "next";
import { getDictionary, type Locale } from "../../i18n";
import RootLayout from "../../components/RootLayout";
import SiteLayout from "../../components/SiteLayout";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ja" }];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const t = getDictionary((await params).lang as Locale).metadata.home;
  return { title: t.title, description: t.description, keywords: t.keywords };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const locale = (await params).lang as Locale;
  return <RootLayout locale={locale}><SiteLayout locale={locale}>{children}</SiteLayout></RootLayout>;
}
