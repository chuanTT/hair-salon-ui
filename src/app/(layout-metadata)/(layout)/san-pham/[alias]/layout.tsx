import { joinUrl } from "@/common/function";
import config from "@/config";
import { FetchSetting } from "@/services/otherApi";
import { getProduct, tableProduct } from "@/services/product";
import { apiDataProduct, dataSettingsApi, defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { alias: string };
}): Promise<Metadata> => {
  const dataProductDetail: { data?: apiDataProduct } = await getProduct(
    `/${tableProduct}/${params?.alias}`
  );
  const dataSettings: { data: dataSettingsApi } = await FetchSetting();
  const resultSettings = dataSettings?.data;
  const result = dataProductDetail?.data;

  if (!result) {
    return config.notFound;
  }

  return {
    title: `${result?.name} ${
      resultSettings?.company?.company_name
        ? `| ${resultSettings?.company?.company_name}`
        : ""
    }`,
    description: result?.short_content,
    alternates: {
      canonical: `${config.router.product}/${result?.alias}`,
    },
    openGraph: {
      title: result?.name,
      description: result?.short_content,
      url: joinUrl(`${config.router.product}/${result?.alias}`),
      images: [
        {
          url: result?.list_images?.[0]?.thumb || "",
        },
      ],
      type: "article",
      locale: "vi_VN",
      authors: ["chuantt", "Nguyễn Đình Chuân"],
    },
    twitter: {
      card: "summary_large_image",
      title: result?.name,
      description: result?.short_content,
      images: [
        {
          url: result?.list_images?.[0]?.thumb || "",
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

const LayoutProductDetail: FC<defaultProps> = ({ children }) => {
  return <>{children}</>;
};

export default LayoutProductDetail;
