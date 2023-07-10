import { formatDate } from "@/common/function";
import BlogItem from "@/components/BlogItem";
import Images from "@/components/Images";
import LatestNewsItem from "@/components/LatestNewsItem";
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

      <div className="mt-32">
        <h6 className="text-xl text-grayText mb-5">Tin tức liên quan</h6>

        <div className="grid grid-cols-3 gap-5">
          {[1, 2, 3, 4].map((c, index) => (
            <BlogItem
              key={index}
              desc="Hè này, Lẩu Wang update menu khai vị mới: Buffet gà Hàn Quốc. Team mê gà thì chắc chắn không thể bỏ qua Buffet gà 9 món gọi thả ga này của Lẩu Wang được đâu! Gà vừa tươi, vừa mềm mọng juicy thì sao mà chịu nổi đây. "
              title="CHÀO SÂN HÈ NÀY – LẨU WANG UPDATE KHAI VỊ MỚI: KHAY GÀ 1 MÉT "
              src="https://lauwang.vn/wp-content/uploads/2023/06/1-1-1-1024x640.jpg"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
