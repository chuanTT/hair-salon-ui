import { FC } from "react";
import LatestNewsItem from "../LatestNewsItem";

interface LoadingLatestNewsProps {
  count?: number;
}

const LoadingLatestNews: FC<LoadingLatestNewsProps> = ({ count = 5 }) => {
  return (
    <div>
      <h4 className="text-xl block mb-3">Tin mới nhất</h4>
      <div className="border p-4 space-y-4">
        {Array(count)
          .fill("")
          .map((_, index) => {
            return <LatestNewsItem key={index} isShimmer />;
          })}
      </div>
    </div>
  );
};

export default LoadingLatestNews;
