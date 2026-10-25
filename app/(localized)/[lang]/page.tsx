import type { Metadata } from "next";
import HomeExperience from "../../components/HomeExperience";
import { createPageMetadata } from "../../seo";
import type { Locale } from "../../i18n";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  return createPageMetadata((await params).lang, "/", "home");
}

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  return <HomeExperience locale={(await params).lang} />;
}
