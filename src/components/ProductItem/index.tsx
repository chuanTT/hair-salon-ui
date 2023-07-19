import { FC } from "react";
import Link from "next/link";
import Images from "../Images";
import { BsFillCalendarFill } from "react-icons/bs";
import { formatDate, statusPrice } from "@/common/function";
import config from "@/config";
import Shimmer from "../Shimmer";

interface ProductItemProps {
  title?: string;
  desc?: string;
  src?: string;
  date?: string;
  name_cate?: string;
  link?: string;
  price?: number;
  isNegotiate?: number;
  isShimmer?: boolean;
}

const ProductItem: FC<ProductItemProps> = ({
  title,
  desc,
  src,
  date,
  name_cate,
  link,
  isNegotiate = 1,
  price = 0,
  isShimmer,
}) => {
  const linkProduct = `${config.router.product}/${link}`;

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden group relative border shadow-md">
        <Link href={linkProduct} className="relative">
          <Images
            className="group-hover:scale-105 transition-all duration-300"
            w={"100%"}
            h={"237px"}
            src={src}
            alt={title ?? "products"}
          />

          {isShimmer && <Shimmer />}
        </Link>

        <div
          className={`flex items-center absolute top-2 right-2 z-10 ${
            isShimmer ? "" : "bg-white space-x-2"
          } text-grayText px-2 py-1 overflow-hidden`}
        >
          <BsFillCalendarFill size={12} />
          <span className="text-xs">{formatDate(date)}</span>
          {isShimmer && <Shimmer />}
        </div>
      </div>

      <div className="relative mx-[10px] flex-1 bg-white shadow-blog p-5 overflow-hidden -mt-[30px] flex flex-col">
        <span
          className={`block mb-2 text-sm text-gray-400 ${
            isShimmer ? "relative min-h-[20px]" : ""
          }`}
        >
          {name_cate ?? "Danh mục"}
          {isShimmer && <Shimmer />}
        </span>
        <Link
          href={linkProduct}
          className={`text-lg text-grayText mb-[15px] font-medium ellipsis-2 ${
            isShimmer ? "relative min-h-[28px]" : ""
          }`}
        >
          {title}
          {isShimmer && <Shimmer />}
        </Link>
        <div
          className={`relative mt-auto ${
            isShimmer ? "min-h-[24px] overflow-hidden" : ""
          }`}
        >
          <p className="text-base text-grayText-300 ellipsis-2 mt-auto">
            {desc}
          </p>

          {isShimmer && <Shimmer />}
        </div>

        <span
          className={`block mt-2 text-base font-medium text-orange-400 ml-auto ${
            isShimmer ? "min-h-[24px] overflow-hidden" : ""
          }`}
        >
          {statusPrice(isNegotiate, price)}
          {isShimmer && <Shimmer />}
        </span>

        <div
          className={`pt-4 mt-auto ${
            isShimmer ? "min-h-[20px] w-fit relative overflow-hidden" : ""
          }`}
        >
          <Link
            href={linkProduct}
            className="text-sm uppercase text-grayText-300 font-medium transition-all duration-300 hover:underline hover:text-orange-500"
            style={{ lineHeight: "20px" }}
          >
            Xem thêm
          </Link>

          {isShimmer && <Shimmer />}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
