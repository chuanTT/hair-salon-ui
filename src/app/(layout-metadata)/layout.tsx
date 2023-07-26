import DefaultLayout from "@/layout/DefaultLayout";
import { defaultProps } from "@/types";
import { FC } from "react";
const LayoutMetadata: FC<defaultProps> = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default LayoutMetadata;
