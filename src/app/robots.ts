import { joinUrl } from "@/common/function";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const sitemap = joinUrl("sitemap.xml");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap,
  };
}
