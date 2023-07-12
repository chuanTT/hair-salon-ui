import { statusPrice, statusProduct } from "@/common/function";
import Images from "@/components/Images";
import PreviewProducts from "@/components/PreviewProducts";
import ProductItem from "@/components/ProductItem";
import RelatedProduct from "@/components/RelatedProduct";
import { BASE_URL } from "@/services/axiosClient";
import { apiDataProduct } from "@/types";
import { use } from "react";

const getProductAlias = async (alias: string) => {
  const res = await fetch(`${BASE_URL}/product/${alias}`, {
    next: {
      revalidate: 60,
    },
  });

  if (res?.ok) {
    return res.json();
  }
};

const Details = ({ params }: { params: { alias: string } }) => {
  const data: { data?: apiDataProduct } = use(getProductAlias(params?.alias));

  return (
    <>
      <div className="flex gap-8">
        <div className="h-[600px] w-1/2">
          <PreviewProducts list_images={data?.data?.list_images} />
        </div>

        <div>
          <span className="text-sm text-grayText-300">
            {data?.data?.category?.name}
          </span>
          <h3 className="text-3xl text-grayText mt-2">{data?.data?.name}</h3>
          <span className="text-lg block mt-5">
            {statusPrice(data?.data?.isNegotiate ?? 1, data?.data?.price)}
          </span>
          <span className="block mt-4">
            Tình trạng:{" "}
            <span className="text-blue-600">
              {statusProduct(data?.data?.status)}
            </span>
          </span>
          <div className="mt-3">
            <h6>Mô tả ngắn</h6>
            <p>{data?.data?.short_content}</p>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="border border-b-0 w-fit">
          <span className="block px-5 py-2 text-base font-medium text-white bg-gray-800">
            Mô tả chi tiết
          </span>
        </div>

        <div
          className="border p-4"
          dangerouslySetInnerHTML={{ __html: data?.data?.description ?? "" }}
        />
      </div>

      <RelatedProduct
        alias={params?.alias}
        cate_id={data?.data?.category?.id}
      />
    </>
  );
};

export default Details;
