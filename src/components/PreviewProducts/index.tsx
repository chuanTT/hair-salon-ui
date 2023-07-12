"use client";
import React, { useState } from "react";
import { type Swiper as SwiperRef } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./PreviewProducts.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Images from "../Images";
import CustomNavigate from "../Banner/CustomNavigate";

export default function PreviewProducts() {
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
        {Array(10)
          .fill("")
          .map((_, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Images
                  w={"100%"}
                  h={"100%"}
                  src={`https://swiperjs.com/demos/images/nature-${
                    index + 1
                  }.jpg`}
                />
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
        {Array(10)
          .fill("")
          .map((_, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Images
                  w={"100%"}
                  h={"100%"}
                  src={`https://swiperjs.com/demos/images/nature-${
                    index + 1
                  }.jpg`}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
