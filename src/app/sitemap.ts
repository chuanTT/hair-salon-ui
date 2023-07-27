import { joinUrl } from "@/common/function";
import config from "@/config";
import { HeaderLink } from "@/config/configStatic";
import { FetchBlog } from "@/services/blogApi";
import { FetchProduct } from "@/services/product";
import { apiDataBlog, apiDataProduct } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  let sitemap: MetadataRoute.Sitemap = [];
  const dataProducts: { data: apiDataProduct[] } = await FetchProduct();
  const dataBlog: { data: apiDataBlog[] } = await FetchBlog();

  HeaderLink.forEach((header) => {
    sitemap = [
      ...sitemap,
      {
        url: joinUrl(header.path),
        lastModified,
      },
    ];
  });

  dataProducts?.data?.forEach((product) => {
    sitemap = [
      ...sitemap,
      {
        url: joinUrl(`${config.router.product}/${product?.alias}`),
        lastModified: new Date(product?.updated_at || ""),
      },
    ];
  });

  dataBlog?.data?.forEach((blog) => {
    sitemap = [
      ...sitemap,
      {
        url: joinUrl(`${config.router.news}/${blog?.alias}`),
        lastModified: new Date(blog?.updated_at || ""),
      },
    ];
  });

  return sitemap;
}
