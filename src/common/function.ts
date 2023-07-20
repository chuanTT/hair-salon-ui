import moment from "moment";
import { dataSettingsApi } from "@/layout/ProviderSettings";
import { typeObject } from "@/types";

const isObject = (obj: any) => {
  let isCheck = false;

  if (typeof obj === "object" && !Array.isArray(obj)) {
    isCheck = true;
  }

  return isCheck;
};

const isEmptyObj = (obj: typeObject) => {
  let emty = true;
  if (obj) {
    emty = Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  return emty;
};

const fucFirtsChart = (str?: string) => {
  let newStr = "";
  if (str) {
    newStr = str.charAt(0).toUpperCase() + str.slice(1);
  }
  return newStr;
};

const fucStyleCovert = (str?: string) => {
  let strKey = "";
  if (str) {
    const keyNew = str?.split("-");
    if (keyNew?.length > 1) {
      keyNew?.forEach((newK, index) => {
        if (index > 0) {
          strKey += fucFirtsChart(newK);
        } else {
          strKey += newK;
        }
      });
    } else if (keyNew?.length === 0) {
      strKey = keyNew?.[0] ?? "";
    }
  }

  return strKey;
};

interface setStyleImageSettingsPar {
  logo?: dataSettingsApi["logo"];
  callback?: (src?: string) => void;
  callLoop?: (key: string, value?: string) => void;
}

const setStyleImageSettings = ({
  logo,
  callback,
  callLoop,
}: setStyleImageSettingsPar) => {
  let settingsStyle = {};
  if (logo) {
    const { src, settings } = logo;

    if (settings && isObject(settings)) {
      const arrKey = Object.keys(settings);

      arrKey.forEach((key) => {
        callLoop && callLoop(key, settings?.[key]);
        if (key && settings) {
          const strKey = fucStyleCovert(key);
          settingsStyle = { ...settingsStyle, [strKey]: settings?.[key] };
        }
      });
    }

    callback && callback(src);
  }

  return settingsStyle;
};

const formatDate = (date?: string, strFormat: string = "DD-MM-YYYY") => {
  let d = moment();
  if (date) {
    d = moment(date);
  }
  return d.format(strFormat);
};

const numberMoneyVND = (num: string | number) => {
  let t = "0";
  if (num) {
    t = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return t;
};

const statusPrice = (isNegotiate: number, price: number = 0) => {
  const isCheck = isNegotiate === 1;
  let str = isCheck ? "Thỏa thuận" : "0";

  if (!isCheck) str = numberMoneyVND(price);

  return str;
};

const statusProduct = (status?: number) => {
  return status === 1 ? "Còn hàng" : "Hết hàng";
};

const joinUrl = (
  dir?: string,
  BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL ?? "/",
  link = "/"
) => {
  const maxlength = BASE_URL.length;
  const str = BASE_URL.substring(maxlength - 1, maxlength);
  if (str !== link ) {
    BASE_URL += link;
  }

  if (dir) {
    dir = dir.replace(/^[\/]{1,}/, "")
    return `${BASE_URL}${dir}`;
  } else {
    return BASE_URL;
  }
};

export {
  isObject,
  isEmptyObj,
  setStyleImageSettings,
  fucStyleCovert,
  fucFirtsChart,
  formatDate,
  statusPrice,
  statusProduct,
  joinUrl,
};
