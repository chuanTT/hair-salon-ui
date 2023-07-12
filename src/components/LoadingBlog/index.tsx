import { FC } from "react";
import BlogItem from "../BlogItem";

interface LoadingBlogProps {
  count?: number;
}

const LoadingBlog: FC<LoadingBlogProps> = ({ count = 30 }) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {Array(count)
        .fill("")
        .map((_, index) => {
          return <BlogItem key={index} isShimmer />;
        })}
    </div>
  );
};

export default LoadingBlog;
