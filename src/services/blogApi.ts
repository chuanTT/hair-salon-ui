import HTTP from "./axiosClient";

const tableBlog = "blog";

const getBlog = (url: string) => {
  return HTTP.get(url);
};

export { getBlog, tableBlog };
