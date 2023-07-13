"use client";
import Banner from "@/components/Banner";
import BlogItem from "@/components/BlogItem";
import ProductItem from "@/components/ProductItem";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import WapperLayout from "@/components/WapperLayout";
import { configBlog, configProduct, configSection } from "@/config/configApi";
import useFetchingApi from "@/hook/useFetchingApi";
import { apiDataBlog, apiDataProduct, apiDataSection } from "@/types";

export default function Home() {
  const { data: ProductData } = useFetchingApi(configProduct);
  const { data: BlogData } = useFetchingApi(configBlog);
  const { data: SectionData } = useFetchingApi(configSection);

  return (
    <div className="mb-40">
      <Banner />

      <div className="mt-16">
        <SectionHeader title="Sản phẩm" desc="Cập nhật mới nhất" />
        <WapperLayout>
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
                    name_cate={product?.category?.name}
                    link={product?.alias}
                    isNegotiate={product?.isNegotiate ?? 0}
                    price={product?.price ?? 0}
                  />
                );
              }
            )}
        </WapperLayout>
      </div>

      {SectionData?.data?.data &&
        SectionData?.data?.data?.map(
          (section: apiDataSection, index: number) => {
            return (
              <Section
                key={index}
                isReverse={!(index % 2 === 0)}
                classSection="mt-16"
                title={section?.title}
                desc={section?.sub_title}
                descSection={section?.content}
                thumb={section?.thumb}
              />
            );
          }
        )}

      {BlogData?.data?.data && (
        <div className="mt-16">
          <SectionHeader title="Tin tức" desc="Thông tin cập nhật" />

          <WapperLayout>
            {BlogData?.data?.data?.map((blog: apiDataBlog, index: number) => {
              return (
                <BlogItem
                  key={index}
                  desc={blog?.short_content}
                  title={blog?.title}
                  src={blog?.thumb}
                  date={blog?.created_at}
                  link={blog?.alias}
                />
              );
            })}
          </WapperLayout>
        </div>
      )}
    </div>
  );
}
