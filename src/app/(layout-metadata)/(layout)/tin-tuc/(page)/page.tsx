"use client";
import { useState } from "react";
import BlogItem from "@/components/BlogItem";
import WapperPagination from "@/components/WapperPagination";
import { configBlog } from "@/config/configApi";
import useFetchingApi from "@/hook/useFetchingApi";
import { apiDataBlog, paginationType, typeFilterBlog } from "@/types";
import Images from "@/components/Images";
import StaticImages from "@/assets/img";
import FilterBlog from "@/partials/Blog/FilterBlog";
import config from "@/config";

const Blog = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<typeFilterBlog>({
    title: "",
  });
  const { data: BlogData, isFetched } = useFetchingApi({
    ...configBlog,
    limit: 10,
    page,
    customUrl({ query, nameTable, page, limit }) {
      const url = query?.for(nameTable).page(page).limit(limit);
      const obj = config.filter.blog({ filter });
      url?.params(obj);
      return url?.url();
    },
  });
  const pagination: paginationType = BlogData?.data?.pagination;

  return (
    <>
      <div className="flex justify-between gap-5 flex-wrap">
        <h2 className="text-xl font-medium">Tất cả tin tức</h2>

        <FilterBlog filter={filter} setFilter={setFilter} setPage={setPage} />
      </div>
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

        {isFetched &&(!BlogData?.data?.data || BlogData?.data?.data?.length <= 0) && (
          <div className="col-span-3 max-lg:col-span-2 max-sm:col-span-1 text-center">
            <div className="flex justify-center mb-3">
              <Images w={300} h={250} src={StaticImages.noResult} />
            </div>

            <span className="text-base font-medium text-grayText">
              Không tìm thấy dữ liệu...
            </span>
          </div>
        )}
      </WapperPagination>
    </>
  );
};

export default Blog;
