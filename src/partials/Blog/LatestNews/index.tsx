"use client";
import LatestNewsItem from "@/components/LatestNewsItem";
import { configBlog } from "@/config/configApi";
import useFetchingApi from "@/hook/useFetchingApi";
import { apiDataBlog } from "@/types";

const LatestNews = () => {
  const { data, isFetched } = useFetchingApi({
    ...configBlog,
    limit: 5,
  });
  return (
    <div>
      <h4 className="text-xl block mb-3">Tin mới nhất</h4>
      <div className="border p-4 space-y-4">
        {data?.data?.data?.map((blog: apiDataBlog, index: number) => {
          return (
            <LatestNewsItem
              date={blog?.created_at}
              title={blog?.title}
              link={blog?.alias}
              src={blog?.thumb}
              key={index}
              isShimmer={isFetched}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestNews;
