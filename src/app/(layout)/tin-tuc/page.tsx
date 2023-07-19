"use client";
import { useState } from "react";
import BlogItem from "@/components/BlogItem";
import WapperPagination from "@/components/WapperPagination";
import { configBlog } from "@/config/configApi";
import useFetchingApi from "@/hook/useFetchingApi";
import { apiDataBlog, paginationType } from "@/types";

const Blog = () => {
  const [page, setPage] = useState(1);
  const { data: BlogData, isFetched } = useFetchingApi({
    ...configBlog,
    limit: 10,
    page,
  });
  const pagination: paginationType = BlogData?.data?.pagination;

  return (
    <WapperPagination
      isFetched={isFetched}
      pagination={pagination}
      setPage={setPage}
    >
      {BlogData?.data?.data &&
        BlogData?.data?.data?.map((blog: apiDataBlog, index: number) => (
          <BlogItem
            key={index}
            desc={blog?.short_content}
            title={blog?.title}
            src={blog?.thumb}
            date={blog?.created_at}
            link={blog?.alias}
          />
        ))}
    </WapperPagination>
  );
};

export default Blog;
