"use client";
import StaticImages from "@/assets/img";
import Image, { ImageProps } from "next/legacy/image";
import { FC, SyntheticEvent, useState } from "react";
import Shimmer from "../Shimmer";
interface removeSrcImage {
  src: ImageProps["src"];
}

export type KeysAfterRemoval = Omit<ImageProps, keyof removeSrcImage>;
interface ImagesCustomProps {
  w?: number | string;
  h?: number | string;
  src?: string;
  defaultSrc?: string;
  isRounded?: boolean;
  alt?: string;
  className?: string;
  classNameImg?: string;
  innerPropsImages?: KeysAfterRemoval;
  zIndex?: number;
}

const Images: FC<ImagesCustomProps> = ({
  w = 50,
  h = 50,
  src = "",
  defaultSrc = StaticImages.defaultImage,
  isRounded = false,
  alt = "",
  className = "",
  classNameImg = "",
  innerPropsImages = {},
  zIndex = 0,
}) => {
  const [srcImage, setSrcImage] = useState(src || defaultSrc);
  const [isPeding, setIsPending] = useState(true);
  const propsImages = (innerPropsImages && { ...innerPropsImages }) ?? {};

  return (
    <div
      className={`overflow-hidden relative ${
        isRounded ? "rounded-full" : ""
      } ${className}`}
      style={{ width: w, height: h, zIndex: zIndex }}
    >
      <Image
        layout="fill"
        objectFit="cover"
        {...propsImages}
        className={`w-full h-full object-cover relative z-[1] ${classNameImg}`}
        src={srcImage}
        alt={alt}
        onLoadingComplete={() => {
          setIsPending(false);
        }}
        onError={() => {
          setSrcImage(defaultSrc);
        }}
      />

      {isPeding && <Shimmer />}
    </div>
  );
};

export default Images;
