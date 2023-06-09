import { FC } from "react";
import Link from "next/link";
import Images from "../Images";
import { BsFillCalendarFill } from "react-icons/bs";
import { formatDate, statusPrice } from "@/common/function";

interface ProductItemProps {
  title?: string;
  desc?: string;
  src?: string;
  date?: string;
  name_cate?: string;
  link?: string;
  price?: number;
  isNegotiate?: number;
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
}) => {
  const linkProduct = `/products/${link}`;

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden group relative">
        <Link href={linkProduct}>
          <Images
            className="group-hover:scale-105 transition-all duration-300"
            w={"100%"}
            h={"237px"}
            src={src}
            alt={title ?? "products"}
          />
        </Link>

        <div className="flex items-center absolute top-2 right-2 z-10 bg-white text-grayText px-2 py-1 space-x-2">
          <BsFillCalendarFill size={12} />
          <span className="text-xs">{formatDate(date)}</span>
        </div>
      </div>

      <div className="relative mx-[10px] flex-1 bg-white shadow-blog p-5 overflow-hidden -mt-[30px] flex flex-col">
        <span className="block mb-2 text-sm text-gray-400">
          {name_cate ?? "Danh mục"}
        </span>
        <Link
          href={linkProduct}
          className="text-lg text-grayText mb-[15px] font-medium ellipsis-2"
        >
          {title}
        </Link>
        <p className="text-base text-grayText-300 ellipsis-2 mt-auto">{desc}</p>

        <span className="block mt-2 text-base font-medium text-orange-400 ml-auto">
          {statusPrice(isNegotiate, price)}
        </span>

        <div className="mt-3">
          <Link
            href={linkProduct}
            className="text-sm uppercase text-grayText-300 font-medium transition-all duration-300 hover:underline hover:text-orange-500"
            style={{ lineHeight: "20px" }}
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
