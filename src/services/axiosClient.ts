import axios from "axios"

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_API

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json"
  }
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: any) {
    return config
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: any) {
    return response.data
  },
  function (error: any) {
    return Promise.reject(error)
  }
)

export default axiosClient
