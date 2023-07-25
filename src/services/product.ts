import HTTP from "./axiosClient"

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


export {
  getProduct,
  tableProduct,
  getSliderProduct,
  tableSliderProduct,
  tableRelatedProduct,
  getRelatedProduct,
  getCategory,
  tableCategory
}
