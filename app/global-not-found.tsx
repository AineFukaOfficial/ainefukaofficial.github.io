import type { Metadata } from "next";
import Link from "next/link";
import RootLayout from "./components/RootLayout";

export const metadata: Metadata = { title: "页面不存在 | AineFuka" };

export default function GlobalNotFound() {
  return (
    <RootLayout locale="zh">
      <main className="page-shell page-intro">
        <h1 className="page-title">404</h1>
        <p className="page-description">页面不存在。</p>
        <Link href="/" className="btn btn-solid">返回首页</Link>
      </main>
    </RootLayout>
  );
}
