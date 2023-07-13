"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Images from "../Images";
import CustomNavigate from "./CustomNavigate";
import useFetchingApi from "@/hook/useFetchingApi";
import { getSliderProduct, tableSliderProduct } from "@/services/product";
import { apiSildeProduct } from "@/types";

const Banner = () => {
  const { data } = useFetchingApi({
    nameTable: tableSliderProduct,
    CallAPi: getSliderProduct,
    customUrl({ query, nameTable }) {
      return query
        ?.for(nameTable)
        ?.params({
          is_show: 1,
        })
        ?.url();
    },
  });

  return (
    <div className="banner max-lg:h-[300px] h-[500px] bg-slate-500 relative [&>*]:h-full group">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          dynamicBullets: true,
        }}
        loop
        autoplay={{
          delay: 2000,
        }}
      >
        {data?.data?.data &&
          data?.data?.data?.map((item: apiSildeProduct, index: number) => {
 
            return (
              <SwiperSlide key={index}>
                <Link href={`/products/${item?.product?.alias}`}>
                  <Images
                    w={"100%"}
                    h={"100%"}
                    alt={""}
                    src={item?.big_thumb}
                  />
                </Link>
              </SwiperSlide>
            );
          })}

        <CustomNavigate />
      </Swiper>
    </div>
  );
};

export default Banner;
