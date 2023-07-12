import { formatDate } from "@/common/function";
import Images from "@/components/Images";
import RelatedBlog from "@/components/RelatedBlog";
import LatestNews from "@/partials/Blog/LatestNews";
import { BASE_URL } from "@/services/axiosClient";
import { apiDataBlog } from "@/types";
import { use } from "react";

const getBlogAlias = async (alias: string) => {
  const res = await fetch(`${BASE_URL}/blog/${alias}`, {
    next: {
      revalidate: 60,
    },
  });

  if (res?.ok) {
    return res.json();
  }
};

const Details = ({ params }: { params: { alias: string } }) => {
  const data: { data?: apiDataBlog } = use(getBlogAlias(params?.alias));

  return (
    <>
      <div className="flex gap-5">
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
            className="mt-4"
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
