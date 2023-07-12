import HTTP from "./axiosClient";

const tableBlog = "blog";
const tableRelatedNews = "related_news"

const getBlog = (url: string) => {
  return HTTP.get(url);
};

const getRelatedBlog = (url: string) => {
  return HTTP.get(`${tableBlog}/${url}`)
}

export { getBlog, tableBlog, getRelatedBlog, tableRelatedNews };
