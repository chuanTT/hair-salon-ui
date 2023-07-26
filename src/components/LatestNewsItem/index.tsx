import { FC } from "react";
import Images from "../Images";
import { BlogItemProps } from "../BlogItem";
import { formatDate } from "@/common/function";
import Link from "next/link";
import Shimmer from "../Shimmer";
import config from "@/config";

interface LatestNewsItemProps extends BlogItemProps {
    isShimmer?: boolean
}

const LatestNewsItem: FC<LatestNewsItemProps> = ({ date, link, src, title, isShimmer }) => {
  const LinkBlogLatest = `${config.router.news}/${link}`;
  return (
    <div className="flex gap-2">
      <div className="overflow-hidden rounded flex-shrink-0">
        <Link href={LinkBlogLatest}>
          <Images w={"100px"} h={"71px"} src={src} alt={title} />
        </Link>
      </div>
      <div className="flex flex-col flex-1">
        <h6 className="text-base pb-1 ellipsis-2 relative min-h-[24px] overflow-hidden">
          <Link href={LinkBlogLatest}>{title}</Link>
          {!isShimmer && <Shimmer />}
        </h6>
        <span className="text-sm block mt-auto text-grayText-300 relative overflow-hidden">
          {formatDate(date)}
          {!isShimmer && <Shimmer />}
        </span>
      </div>
    </div>
  );
};

export default LatestNewsItem;
