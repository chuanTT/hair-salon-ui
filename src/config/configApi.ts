import { useFetchingApiParmeter } from "@/hook/useFetchingApi";
import { getBlog, tableBlog } from "@/services/blogApi";
import { getProduct, tableProduct } from "@/services/product";
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

export { configSection, configProduct, configBlog };
