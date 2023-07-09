"use client";
import BlogItem from "@/components/BlogItem";
import { configProduct } from "@/config/configApi";
import useFetchingApi from "@/hook/useFetchingApi";
import { apiDataBlog } from "@/types";

const Blog = () => {
  const { data: BlogData } = useFetchingApi({
    ...configProduct,
    limit: 30,
  });
  return (
    <div className="grid grid-cols-3 gap-5">
      {BlogData?.data?.data &&
        BlogData?.data?.data?.map(
          (blog: apiDataBlog, index: number) => (
            <BlogItem
              key={index}
              desc={blog?.short_content}
              title={blog?.title}
              src={blog?.thumb}
            />
          )
        )}
    </div>
  );
};

export default Blog;
