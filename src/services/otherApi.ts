import HTTP from "./axiosClient"
const tableOther = "other"
const tableSettings = "settings"

const getSettings = (url?: string) => {
  return HTTP.get(`${tableOther}/${url}` ?? url)
}

export {
  tableOther,
  tableSettings,
  getSettings
}
