import { joinUrl } from "@/common/function";
import HTTP, { BASE_URL } from "./axiosClient";

const tableBlog = "blog";
const tableRelatedNews = "related_news"


const getBlog = (url: string) => {
  return HTTP.get(url);
};

const getRelatedBlog = (url: string) => {
  return HTTP.get(`${tableBlog}/${url}`)
}

const FetchBlog = async (revalidate: number = 60) => {
  const url = joinUrl(`${tableBlog}`, BASE_URL);
  const res = await fetch(url, { next: { revalidate } });
  if (res?.ok) {
    const data = await res.json();
    return data?.data;
  }
};

export { getBlog, tableBlog, getRelatedBlog, tableRelatedNews, FetchBlog };
