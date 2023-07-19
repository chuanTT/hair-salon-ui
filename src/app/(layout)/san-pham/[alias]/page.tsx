import { use } from "react";
import { statusPrice, statusProduct } from "@/common/function";
import PreviewProducts from "@/components/PreviewProducts";
import RelatedProduct from "@/components/RelatedProduct";
import { getProduct, tableProduct } from "@/services/product";
import { apiDataProduct } from "@/types";


const Details = ({ params }: { params: { alias: string } }) => {
  const data: { data?: apiDataProduct } = use(getProduct(`/${tableProduct}/${params?.alias}`));

  return (
    <>
      <div className="flex gap-8 lg:[&>*]:w-1/2 max-lg:flex-col">
        <div className="h-[600px]">
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
          className="border p-4 content_wapper"
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
