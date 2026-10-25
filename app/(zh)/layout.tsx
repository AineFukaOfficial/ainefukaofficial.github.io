import RootLayout from "../components/RootLayout";
import SiteLayout from "../components/SiteLayout";

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return <RootLayout locale="zh"><SiteLayout locale="zh">{children}</SiteLayout></RootLayout>;
}
