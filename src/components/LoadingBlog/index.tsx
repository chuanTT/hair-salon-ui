import { FC } from "react";
import BlogItem from "../BlogItem";
import WapperLayout from "../WapperLayout";

interface LoadingBlogProps {
  count?: number;
}

const LoadingBlog: FC<LoadingBlogProps> = ({ count = 30 }) => {
  return (
    <WapperLayout>
      {Array(count)
        .fill("")
        .map((_, index) => {
          return <BlogItem key={index} isShimmer />;
        })}
    </WapperLayout>
  );
};

export default LoadingBlog;
