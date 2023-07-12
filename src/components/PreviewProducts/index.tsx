"use client";
import React, { useState } from "react";
import { type Swiper as SwiperRef } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./PreviewProducts.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Images from "../Images";
import CustomNavigate from "../Banner/CustomNavigate";
import { ImagesProduct, apiDataProduct } from "@/types";

interface PreviewProductsProps {
  list_images?: apiDataProduct["list_images"];
}

export default function PreviewProducts({ list_images }: PreviewProductsProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef | null>(null);

  return (
    <>
      <Swiper
        style={{
          height: "500px",
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 group"
      >
        {list_images?.map((image: ImagesProduct, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Images w={"100%"} h={"100%"} src={image?.thumb} />
            </SwiperSlide>
          );
        })}

        <CustomNavigate />
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{
          height: "95px",
          marginTop: 5,
        }}
      >
        {list_images?.map((image: ImagesProduct, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Images w={"100%"} h={"100%"} src={image?.thumb} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
