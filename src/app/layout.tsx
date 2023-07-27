import { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryClientProviderLayout from "@/layout/QueryClientProvider";
import { FetchSetting } from "@/services/otherApi";
import ProviderSettings from "@/layout/ProviderSettings";
import { joinUrl } from "@/common/function";
import { dataSettingsApi } from "@/types";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const generateMetadata = async (): Promise<Metadata> => {
  const dataSettings: { data: dataSettingsApi } = await FetchSetting(600);
  const result = dataSettings?.data;
  const company_name = result?.company?.company_name;
  const BASE_URL = joinUrl();

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: `Trang chủ ${company_name ? `| ${company_name}` : ""}`,
      template: `%s ${company_name ? `| ${company_name}` : ""}`,
    },
    alternates: {
      canonical: BASE_URL,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    verification: {
      google: "google",
      yandex: "yandex",
    },
    openGraph: {
      title: {
        default: `Trang chủ ${company_name ? `| ${company_name}` : ""}`,
        template: `%s ${company_name ? `| ${company_name}` : ""}`,
      },
    },
    description: result?.company?.description,
    icons: {
      icon: result?.icon,
      shortcut: result?.icon,
      apple: result?.icon,
      other: {
        rel: "icon",
        url: result?.icon ?? "",
      },
    },
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} cz-shortcut-listen="true">
        <QueryClientProviderLayout>
          <ProviderSettings>{children}</ProviderSettings>
        </QueryClientProviderLayout>
      </body>
    </html>
  );
}
