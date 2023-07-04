import { FC } from "react";
import Link from "next/link";
import Images from "../Images";

interface BlogItemProps {
  title?: string;
  desc?: string;
  src?: string;
}

const BlogItem: FC<BlogItemProps> = ({ title, desc, src }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden group">
        <Link href={"/"}>
          <Images
            className="group-hover:scale-105 transition-all duration-300"
            w={"100%"}
            h={"237px"}
            src={src}
            alt={title ?? ""}
          />
        </Link>
      </div>

      <div className="relative mx-[10px] flex-1 bg-white shadow-blog p-5 overflow-hidden -mt-[30px] flex flex-col">
        <Link href={"/"} className="text-lg text-grayText mb-[15px] font-medium ellipsis-2">
          {title}
        </Link>
        <p className="text-base text-grayText-300 ellipsis-2 mt-auto">{desc}</p>

        <div className="mt-4">
          <Link
            href={"/"}
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
