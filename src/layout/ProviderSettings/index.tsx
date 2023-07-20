"use client";
import { FC, createContext, useContext } from "react";

import useFetchingApi from "@/hook/useFetchingApi";
import { getSettings, tableSettings } from "@/services/otherApi";
import { defaultProps } from "@/types";
import Loading from "@/components/Loading";

export interface dataSettingsApi {
  icon?: string;
  logo?: {
    settings?: {
      ["object-fit"]: string;
      ["object-position"]: string;
      [key: string]: string;
    };
    src?: string;
  };
  company: {
    company_name?: string;
    phone?: string;
    email?: string;
    fanpage_id?: string;
    address: {
      text?: string;
      link?: string;
    };
    link_page: {
      url?: string;
      is_show_page?: number;
    };
  };
  socials: {
    id?: number,
    name?: string
    url?: string
    thumb?: string
  }[]
}

interface valuesSettings {
  data?: dataSettingsApi;
}

const ContextProviderSettings = createContext({});

const ProviderSettings: FC<defaultProps> = ({ children }) => {
  const { data, isFetched } = useFetchingApi({
    nameTable: tableSettings,
    CallAPi: getSettings,
    customUrl({ query, nameTable }) {
      return query?.for(nameTable).params({ append: "socials" }).url();
    },
  });

  // useEffect(() => {
  //   if (data?.data) {
  //     if (document !== undefined) {
  //       const linkIcon = document.querySelector('link[rel="icon"]');
  //       if (linkIcon) {
  //         linkIcon.setAttribute("href", data?.data?.icon);
  //       }
  //     }
  //   }
  // }, [data?.data]);

  const values: valuesSettings = {
    data: data?.data,
  };
  return (
    <ContextProviderSettings.Provider value={values}>
      {!isFetched && <Loading isCenterScreen/>}
      {isFetched && children}
    </ContextProviderSettings.Provider>
  );
};

export const useSettings = (): valuesSettings => {
  return useContext(ContextProviderSettings);
};

export default ProviderSettings;
