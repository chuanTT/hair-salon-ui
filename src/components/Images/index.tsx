"use client";
import Image, { ImageProps } from "next/legacy/image";
import { FC, SyntheticEvent, useState } from "react";
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
  defaultSrc = "",
  isRounded = false,
  alt = "",
  className = "",
  classNameImg = "",
  innerPropsImages = {},
  zIndex = 0,
}) => {
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
        src={src || defaultSrc}
        alt={alt}
        onLoadingComplete={() => {
          setIsPending(false);
        }}
        onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget && e?.currentTarget?.setAttribute("src", defaultSrc);
        }}
      />

      {isPeding && (
        <div
          className="absolute inset-0 z-2"
          style={{ backgroundColor: "#f2f3f3" }}
        >
          <div
            className="w-full h-full absolute top-0 left-0"
            style={{
              transform: "translateX(0) scaleX(0)",
              transformOrigin: "left center",
              backgroundImage:
                "linear-gradient(to left, rgba(219, 219, 219, 0), #dbdbdb 40%, #dbdbdb 60%, rgba(219, 219, 219, 0))",
              animation: "skelSwoosh 1.1s infinite ease-in",
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Images;
