import { FC } from "react";
import Link from "next/link";
import Images from "../Images";
import { BsFillCalendarFill } from "react-icons/bs";
import { formatDate } from "@/common/function";
import Shimmer from "../Shimmer";
import config from "@/config";

export interface BlogItemProps {
  title?: string;
  desc?: string;
  src?: string;
  date?: string;
  link?: string;
  isShimmer?: boolean;
}

const BlogItem: FC<BlogItemProps> = ({
  title,
  desc,
  src,
  date,
  link,
  isShimmer,
}) => {
  const linkBlog = `${config.router.news}/${link}`;

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden group relative border shadow-md">
        <Link href={linkBlog} className="relative">
          <Images
            className="group-hover:scale-105 transition-all duration-300"
            w={"100%"}
            h={"237px"}
            src={src}
            alt={title ?? ""}
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
        <Link
          href={linkBlog}
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

        <div className={`pt-4 mt-auto`}>
          <div
            className={`${
              isShimmer ? "min-h-[20px] w-fit relative overflow-hidden" : ""
            }`}
          >
            <Link
              href={linkBlog}
              className="text-sm uppercase  text-grayText-300 font-medium transition-all duration-300 hover:underline hover:text-orange-500"
              style={{ lineHeight: "20px" }}
            >
              Xem thêm
            </Link>
            {isShimmer && <Shimmer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
