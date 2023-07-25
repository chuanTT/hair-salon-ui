"use client";
import { Suspense, useState } from "react";
import ProductItem from "@/components/ProductItem";
import { configProduct } from "@/config/configApi";
import useFetchingApi from "@/hook/useFetchingApi";
import { apiDataProduct, paginationType } from "@/types";
import WapperPagination from "@/components/WapperPagination";
import LoadingProduct from "@/components/LoadingProduct";
import FilterProduct from "@/partials/Products/FilterProduct";
import config from "@/config";

export interface typeFilterProduct {
  cate_id?: number;
  name?: string;
}

const Products = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<typeFilterProduct>({
    cate_id: -1,
    name: "",
  });
  const { data: ProductData, isFetched } = useFetchingApi({
    ...configProduct,
    limit: 10,
    page,
    customUrl({ query, nameTable, page, limit }) {
      const url = query?.for(nameTable).page(page).limit(limit);
      const obj = config.filter.product({ filter });
      url?.params(obj);
      return url?.url();
    },
  });

  const pagination: paginationType = ProductData?.data?.pagination;

  return (
    <>
      <div className="flex justify-between gap-5 flex-wrap">
        <h2 className="text-xl font-medium">Tất cả sản phẩm</h2>

        <FilterProduct filter={filter} setFilter={setFilter} setPage={setPage} />
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
