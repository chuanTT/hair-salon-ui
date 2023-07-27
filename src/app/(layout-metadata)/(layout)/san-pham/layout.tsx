import { defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Sản phẩm",
};

const LayoutProduct: FC<defaultProps> = ({ children }) => {
  return <>{children}</>;
};

export default LayoutProduct;
