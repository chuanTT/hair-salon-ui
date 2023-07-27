import { joinUrl } from "@/common/function"
import HTTP, { BASE_URL } from "./axiosClient"

const tableProduct = "product"
const tableSliderProduct = "slider-product"
const tableRelatedProduct = "related_product"
const tableCategory = "category"

const getProduct = (url: string) => {
  return HTTP.get(url)
}

const getSliderProduct = (url: string) => {
  return HTTP.get(`/${tableProduct}${url}`)
}

const getCategory = (url: string) => {
  return HTTP.get(url)
}

const getRelatedProduct = (url: string) => {
  return HTTP.get(`${tableProduct}/${url}`)
}

const FetchProduct = async (revalidate: number = 60) => {
  const url = joinUrl(`${tableProduct}`, BASE_URL);
  const res = await fetch(url, { next: { revalidate } });
  if (res?.ok) {
    const data = await res.json();
    return data?.data;
  }
};



export {
  getProduct,
  tableProduct,
  getSliderProduct,
  tableSliderProduct,
  tableRelatedProduct,
  getRelatedProduct,
  getCategory,
  tableCategory,
  FetchProduct
}
