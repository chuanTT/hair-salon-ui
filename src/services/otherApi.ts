import { joinUrl } from "@/common/function";
import HTTP, { BASE_URL } from "./axiosClient";
const tableOther = "other";
const tableSettings = "settings";

const getSettings = (url?: string) => {
  return HTTP.get(`${tableOther}${url}` ?? url);
};

const FetchSetting = async (revalidate: number = 60) => {
  const url = joinUrl(`${tableOther}/${tableSettings}`, BASE_URL);
  const res = await fetch(url, { next: { revalidate } });
  if (res?.ok) {
    const data = await res.json();
    return data;
  }
};

export { tableOther, tableSettings, getSettings, FetchSetting };
