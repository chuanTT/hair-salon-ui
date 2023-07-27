import config from "@/config";
import { defaultProps } from "@/types";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = config.notFound;

const LayoutNotFound: FC<defaultProps> = ({ children }) => {
  return <>{children}</>;
};

export default LayoutNotFound;
