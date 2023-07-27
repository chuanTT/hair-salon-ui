"use client";
import { FC, createContext, useContext } from "react";

import useFetchingApi from "@/hook/useFetchingApi";
import { getSettings, tableSettings } from "@/services/otherApi";
import { dataSettingsApi, defaultProps } from "@/types";
import Loading from "@/components/Loading";

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

  const values: valuesSettings = {
    data: data?.data,
  };
  return (
    <ContextProviderSettings.Provider value={values}>
      {!isFetched && <Loading isCenterScreen />}
      {isFetched && children}
    </ContextProviderSettings.Provider>
  );
};

export const useSettings = (): valuesSettings => {
  return useContext(ContextProviderSettings);
};

export default ProviderSettings;
