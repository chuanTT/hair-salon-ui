import { convertViToEn } from "@/common/function";
import { typeFilterBlog, typeFilterProduct } from "@/types";

const config = {
  router: {
    home: "/",
    introduce: "/gioi-thieu",
    product: "/san-pham",
    news: "/tin-tuc",
  },
  notFound: {
    title: "Không tìm thấy trang",
    description: "Oops! 😖 Không tìm thấy URL được yêu cầu trên máy chủ này.",
    openGraph: {
      title: "Không tìm thấy trang",
    },
  },
  filter: {
    product: ({ filter }: { filter: typeFilterProduct }) => {
      let obj = {};

      if (filter?.cate_id && filter?.cate_id !== -1) {
        obj = { ...obj, cate_id: filter?.cate_id };
      }

      if (filter?.name) {
        obj = { ...obj, name: convertViToEn(filter?.name) };
      }

      return obj;
    },

    blog: ({ filter }: { filter: typeFilterBlog }) => {
      let obj = {};

      if (filter?.title) {
        obj = { ...obj, title: convertViToEn(filter?.title) };
      }

      return obj;
    },
  },
};

export default config;
