"use client";
import { useState } from "react";
import ProductItem from "@/components/ProductItem";
import { configProduct } from "@/config/configApi";
import useFetchingApi from "@/hook/useFetchingApi";
import { apiDataProduct, paginationType } from "@/types";
import WapperPagination from "@/components/WapperPagination";
import FilterProduct from "@/partials/Products/FilterProduct";
import config from "@/config";
import Images from "@/components/Images";
import StaticImages from "@/assets/img";

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

        <FilterProduct
          filter={filter}
          setFilter={setFilter}
          setPage={setPage}
        />
      </div>
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

        {isFetched &&
          (!ProductData?.data?.data ||
            ProductData?.data?.data?.length <= 0) && (
            <div className="col-span-3 max-lg:col-span-2 max-sm:col-span-1 text-center">
              <div className="flex justify-center mb-3">
                <Images w={300} h={250} src={StaticImages.noResult} />
              </div>

              <span className="text-base font-medium text-grayText">
                Không tìm thấy dữ liệu
              </span>
            </div>
          )}
      </WapperPagination>
    </>
  );
};

export default Products;
