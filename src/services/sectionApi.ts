// import { typeObject } from "@/types";
import { joinUrl } from "@/common/function";
import HTTP, { BASE_URL } from "./axiosClient";

const tableSection = "section";

const getSection = (url: string) => {
  return HTTP.get(url);
};

const FetchSection = async (revalidate: number = 60) => {
  const url = joinUrl(`${tableSection}?is_show=1&append=content`, BASE_URL);
  const res = await fetch(url, { next: { revalidate } });
  if (res?.ok) {
    const data = await res.json();
    return data?.data;
  }
};
export { getSection, tableSection, FetchSection };
