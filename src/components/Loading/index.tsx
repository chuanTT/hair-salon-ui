import { FC } from "react";
import "./Loading.css";

interface LoadingProps {
  isCenterScreen?: boolean;
  classNameDiv?: string;
}

const Loading: FC<LoadingProps> = ({ isCenterScreen, classNameDiv }) => {
  return (
    <div
      className={`${
        isCenterScreen
          ? "flex justify-center items-center [&>*]:scale-50 fixed inset-0"
          : ""
      } ${classNameDiv ?? ""}`}
    >
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
