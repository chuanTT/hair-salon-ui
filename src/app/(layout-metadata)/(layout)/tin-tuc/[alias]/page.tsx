import { use } from "react";
import { formatDate } from "@/common/function";
import Images from "@/components/Images";
import RelatedBlog from "@/components/RelatedBlog";
import LatestNews from "@/partials/Blog/LatestNews";
import { getBlog, tableBlog } from "@/services/blogApi";
import { apiDataBlog } from "@/types";
import { notFound } from "next/navigation";

const Details = ({ params }: { params: { alias: string } }) => {
  const data: { data?: apiDataBlog } = use(getBlog(`/${tableBlog}/${params?.alias}`));

  if(!data?.data) {
    notFound()
  }

  return (
    <>
      <div className="flex gap-5 max-lg:flex-col max-lg:[&>*]:!w-full max-lg:!gap-10">
        <div className="w-3/4">
          <h1 className="text-2xl">{data?.data?.title}</h1>

          <span className="mt-2 block text-sm">
            by {data?.data?.user?.full_name} /{" "}
            {formatDate(data?.data?.created_at)}
          </span>

          <p className="mt-3">{data?.data?.short_content}</p>

          <div className="mt-3">
            <Images
              w={"100%"}
              className="min-h-[500px]"
              src={data?.data?.thumb}
              alt={data?.data?.title}
            />
          </div>

          <div
            className="mt-4 content_wapper"
            dangerouslySetInnerHTML={{ __html: data?.data?.description ?? "" }}
          />
        </div>
        <div className="w-3/12">
          <LatestNews />
        </div>
      </div>

      <RelatedBlog alias={params?.alias}/>
    </>
  );
};

export default Details;
