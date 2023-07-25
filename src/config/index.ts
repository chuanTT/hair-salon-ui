
import { convertViToEn } from "@/common/function";
import { typeFilterProduct } from "@/types";

const config = {
  router: {
    home: "/",
    introduce: "/gioi-thieu",
    product: "/san-pham",
    news: "/tin-tuc",
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
  },
};

export default config;
