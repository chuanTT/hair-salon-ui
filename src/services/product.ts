import HTTP from "./axiosClient"

const tableProduct = "product"
const tableSliderProduct = "slider-product"

const getProduct = (url: string) => {
  return HTTP.get(url)
}

const getSliderProduct = (url: string) => {
  return HTTP.get(`/${tableProduct}${url}`)
}


export {
  getProduct,
  tableProduct,
  getSliderProduct,
  tableSliderProduct,
}
