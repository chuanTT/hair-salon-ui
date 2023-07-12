import { useFetchingApiParmeter } from "@/hook/useFetchingApi";
import {
  getBlog,
  getRelatedBlog,
  tableBlog,
  tableRelatedNews,
} from "@/services/blogApi";
import {
  getProduct,
  getRelatedProduct,
  tableProduct,
  tableRelatedProduct,
} from "@/services/product";
import { getSection, tableSection } from "@/services/sectionApi";

const configSection: useFetchingApiParmeter = {
  nameTable: tableSection,
  CallAPi: getSection,
  customUrl: ({ query, nameTable }) => {
    return query
      ?.for(nameTable)
      .params({
        show_index: 1,
        append: "content",
      })
      .url();
  },
};

const configProduct: useFetchingApiParmeter = {
  nameTable: tableProduct,
  CallAPi: getProduct,
  limit: 3,
};

const configBlog: useFetchingApiParmeter = {
  nameTable: tableBlog,
  CallAPi: getBlog,
  limit: 3,
};

const configRelatedBlog = (alias?: string): useFetchingApiParmeter => {
  return {
    nameTable: tableRelatedNews,
    CallAPi: getRelatedBlog,
    customUrl: ({ query, nameTable }) => {
      return query?.for(`${nameTable}/${alias}`).url();
    },
  };
};

const configRelatedProduct = (
  alias?: string,
  cate_id?: number
): useFetchingApiParmeter => {
  return {
    nameTable: tableRelatedProduct,
    CallAPi: getRelatedProduct,
    customUrl: ({ query, nameTable }) => {
      let url = query?.for(`${nameTable}/${alias}`);
      if (cate_id) {
        url = url?.params({
          cate_id,
        });
      }
      return url?.url();
    },
  };
};

export { configSection, configProduct, configBlog, configRelatedBlog, configRelatedProduct };
