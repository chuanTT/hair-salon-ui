import { joinUrl } from "@/common/function";
import config from "@/config";
import { defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Sản phẩm",
  alternates: {
    canonical: joinUrl(config.router.product)
  }
};

const LayoutProduct: FC<defaultProps> = ({ children }) => {
  return <>{children}</>;
};

export default LayoutProduct;
