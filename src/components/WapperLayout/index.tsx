import { defaultProps } from "@/types";
import { FC } from "react";

const WapperLayout: FC<defaultProps> = ({ children }) => {
  return (
    <div className="mt-16 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
      {children}
    </div>
  );
};

export default WapperLayout;
