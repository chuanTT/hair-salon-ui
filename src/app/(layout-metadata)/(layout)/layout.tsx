import { defaultProps } from "@/types";
import { FC } from "react";

const LayoutUi: FC<defaultProps> = ({ children }) => {
  return <div className="mt-8 mb-40">{children}</div>;
};

export default LayoutUi;
