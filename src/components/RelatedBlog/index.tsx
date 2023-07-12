"use client";
import { FC, Suspense } from "react";
import useFetchingApi from "@/hook/useFetchingApi";
import BlogItem from "../BlogItem";
import { configRelatedBlog } from "@/config/configApi";
import { apiDataBlog } from "@/types";
import LoadingBlog from "../LoadingBlog";

interface RelatedBlogProps {
  alias?: string;
}

const RelatedBlog: FC<RelatedBlogProps> = ({ alias }) => {
  const { data } = useFetchingApi(configRelatedBlog(alias));

  return (
    <div className="mt-32">
      <h6 className="text-xl text-grayText mb-5">Tin tức liên quan</h6>

      <Suspense fallback={<LoadingBlog />}>
        <div className="grid grid-cols-3 gap-5">
          {data?.data?.map((blog: apiDataBlog, index: number) => (
            <BlogItem
              key={index}
              desc={blog?.short_content}
              title={blog?.title}
              src={blog?.thumb}
              date={blog?.created_at}
              link={blog?.alias}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default RelatedBlog;
