import { joinUrl } from "@/common/function";
import config from "@/config";
import { getBlog, tableBlog } from "@/services/blogApi";
import { FetchSetting } from "@/services/otherApi";
import { apiDataBlog, dataSettingsApi, defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { alias: string };
}): Promise<Metadata> => {
  const dataBlogDetail: { data?: apiDataBlog } = await getBlog(
    `/${tableBlog}/${params?.alias}`
  );
  const dataSettings: { data: dataSettingsApi } = await FetchSetting();
  const resultSettings = dataSettings?.data;
  const result = dataBlogDetail?.data;
  const title = `${result?.title} ${
    resultSettings?.company?.company_name
      ? `| ${resultSettings?.company?.company_name}`
      : ""
  }`;
  const alias = `${config.router.news}/${result?.alias}`;

  if (!result) {
    return config.notFound;
  }

  return {
    title,
    description: result?.short_content,
    alternates: {
      canonical: alias,
    },
    openGraph: {
      title,
      description: result?.short_content,
      url: joinUrl(alias),
      images: [
        {
          url: result?.thumb || "",
        },
      ],
      type: "article",
      locale: "vi_VN",
      authors: [result?.user?.full_name ?? ""],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: result?.short_content,
      images: [
        {
          url: result?.thumb || "",
        },
      ],
      creator: result?.user?.full_name,
      creatorId: result?.user?.user_name,
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};

const LayoutBlogDetail: FC<defaultProps> = ({ children }) => {
  return <>{children}</>;
};

export default LayoutBlogDetail;
