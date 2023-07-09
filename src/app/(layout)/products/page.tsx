"use client";
import ProductItem from "@/components/ProductItem";
import { configProduct } from "@/config/configApi";
import useFetchingApi from "@/hook/useFetchingApi";
import { apiDataProduct, paginationType } from "@/types";
import { useState } from "react";
import Pagination from "@/components/Pagination";

const Products = () => {
  const [page, setPage] = useState(1);
  const { data: ProductData, isFetched } = useFetchingApi({
    ...configProduct,
    limit: 10,
    page
  });

  const pagination: paginationType = ProductData?.data?.pagination;

  return (
    <>
      <div className="flex justify-between mb-10">
        <h2 className="text-xl font-medium">Tất cả sản phẩm</h2>

        <div>
          <input
            className="form-input"
            type="text"
            placeholder="Tìm kiếm sản phẩm theo tên"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {ProductData?.data?.data &&
          ProductData?.data?.data?.map(
            (product: apiDataProduct, index: number) => {
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
            }
          )}
      </div>

      <div>
        {isFetched && pagination && (
          <div className="mt-8 flex justify-end">
            <Pagination
              perPages={pagination.page}
              limitPages={pagination.limit}
              totalPages={pagination.total}
              onPagesChanges={(pages: number) => {
                setPage(pages);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
