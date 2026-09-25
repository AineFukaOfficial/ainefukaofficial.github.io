import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/profile", "/voice", "/gallery"].map((path) => ({
    url: new URL(path, siteUrl).href,
  }));
}
