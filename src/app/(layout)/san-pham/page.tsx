"use client";
import { Suspense, useState } from "react";
import ProductItem from "@/components/ProductItem";
import { configProduct } from "@/config/configApi";
import useFetchingApi from "@/hook/useFetchingApi";
import { apiDataProduct, paginationType } from "@/types";
import WapperPagination from "@/components/WapperPagination";
import LoadingProduct from "@/components/LoadingProduct";

const Products = () => {
  const [page, setPage] = useState(1);
  const { data: ProductData, isFetched } = useFetchingApi({
    ...configProduct,
    limit: 10,
    page,
  });

  const pagination: paginationType = ProductData?.data?.pagination;

  return (
    <>
      <div className="flex justify-between gap-5 flex-wrap">
        <h2 className="text-xl font-medium">Tất cả sản phẩm</h2>

        <div className="flex gap-3 flex-wrap [&>*]:w-72 max-sm:[&>*]:w-full max-sm:w-full">
          <input
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded block p-2"
            type="text"
            placeholder="Tìm kiếm sản phẩm theo tên"
          />

          <input
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded block p-2"
            type="text"
            placeholder="Tìm kiếm sản phẩm theo tên"
          />
        </div>
      </div>
      <Suspense fallback={<LoadingProduct />}>
        <WapperPagination
          isFetched={isFetched}
          pagination={pagination}
          setPage={setPage}
        >
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
        </WapperPagination>
      </Suspense>
    </>
  );
};

export default Products;
