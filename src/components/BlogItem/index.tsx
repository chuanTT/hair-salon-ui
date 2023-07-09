import { FC } from "react";
import Link from "next/link";
import Images from "../Images";
import { BsFillCalendarFill } from "react-icons/bs";
import { formatDate } from "@/common/function";

interface BlogItemProps {
  title?: string;
  desc?: string;
  src?: string;
  date?: string;
  link?: string
}

const BlogItem: FC<BlogItemProps> = ({ title, desc, src, date, link }) => {
  const linkBlog = `/blog/${link}`

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden group relative">
        <Link href={linkBlog}>
          <Images
            className="group-hover:scale-105 transition-all duration-300"
            w={"100%"}
            h={"237px"}
            src={src}
            alt={title ?? ""}
          />
        </Link>

        <div className="flex items-center absolute top-2 right-2 z-10 bg-white text-grayText px-2 py-1 space-x-2">
          <BsFillCalendarFill size={12} />
          <span className="text-xs">{formatDate(date)}</span>
        </div>
      </div>

      <div className="relative mx-[10px] flex-1 bg-white shadow-blog p-5 overflow-hidden -mt-[30px] flex flex-col">
        <Link
          href={linkBlog}
          className="text-lg text-grayText mb-[15px] font-medium ellipsis-2"
        >
          {title}
        </Link>
        <p className="text-base text-grayText-300 ellipsis-2 mt-auto">{desc}</p>

        <div className="mt-4">
          <Link
            href={linkBlog}
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

export default BlogItem;
