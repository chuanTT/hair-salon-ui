"use client";
import { FC } from "react";
import useFetchingApi from "@/hook/useFetchingApi";
import ProductItem from "../ProductItem";
import { configRelatedProduct } from "@/config/configApi";
import { apiDataProduct } from "@/types";

interface RelatedProductProps {
  alias?: string;
  cate_id?: number;
}

const RelatedProduct: FC<RelatedProductProps> = ({ alias, cate_id }) => {
  const { data } = useFetchingApi(configRelatedProduct(alias, cate_id));

  return (
    <div className="mt-14">
      <h4 className="text-xl font-medium">Sản phẩm liên quan</h4>

      <div className="grid grid-cols-3 gap-5 mt-5">
        {data?.data &&
          data?.data?.map((product: apiDataProduct, index: number) => {
            return (
              <ProductItem
                key={index}
                desc={product?.short_content}
                title={product?.name}
                src={product?.list_images?.[0]?.thumb}
                date={product?.created_at}
                link={product?.alias}
                isNegotiate={product?.isNegotiate}
                price={product?.price}
                name_cate={product?.category?.name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RelatedProduct;
