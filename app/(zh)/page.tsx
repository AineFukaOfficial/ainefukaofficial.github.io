import type { Metadata } from "next";
import HomeExperience from "../components/HomeExperience";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata("zh", "/", "home");

export default function HomePage() {
  return <HomeExperience locale="zh" />;
}
