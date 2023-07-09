// import { typeObject } from "@/types";
import HTTP from "./axiosClient";

const tableSection = "section";

const getSection = (url: string) => {
  return HTTP.get(url);
};

export { getSection, tableSection };
