import { LinkDefaultProps } from "@/types";
import config from ".";

const HeaderLink: LinkDefaultProps[] = [
  {
    title: "Trang chủ",
    path: config.router.home,
  },
  {
    title: "Giới thiệu",
    path: config.router.introduce,
  },

  {
    title: "Sản phẩm",
    path: config.router.product,
  },

  {
    title: "Tin tức",
    path: config.router.news,
  },
];

export {
    HeaderLink
}
