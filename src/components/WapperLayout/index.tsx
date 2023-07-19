import { defaultProps } from "@/types";
import { FC } from "react";

interface WapperLayout extends defaultProps {
  classNameDiv?: string
}

const WapperLayout: FC<WapperLayout> = ({ children, classNameDiv }) => {
  return (
    <div className={`mt-16 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 ${classNameDiv}`}>
      {children}
    </div>
  );
};

export default WapperLayout;
