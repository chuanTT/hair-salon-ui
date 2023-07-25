import { useEffect, useState } from "react"
import useFetchingApi, { customUrlProps, useFetchingApiParmeter } from "./useFetchingApi"
import { LIMIT_SELECT, funcKey, optionAddAll } from "@/common/ConfigSelectOption"
import QueryRequest from "@/services/builder/QueryRequest"
import { SelectDefault } from "@/types"
import _ from "lodash"

export interface useFetchingOptionApiProps extends useFetchingApiParmeter {
  isSearching?: boolean
  keySearching?: string
  isOptionAll?: boolean
  customOptionAll?: (obj: { data: [] }) => [] | { [key: string]: number | string }[]
  customFucKey?: (arr: []) => SelectDefault[]
  keyUnine?: string
  limit?: number
  customUrlOption?: (props: customUrlProps) => QueryRequest | void
}

const useFethingOptionApi = ({
  isSearching = false,
  keySearching = "name",
  isOptionAll = false,
  customOptionAll = () => [],
  customFucKey = funcKey,
  keyUnine = "value",
  nameTable,
  CallAPi,
  limit = LIMIT_SELECT,
  retry = 1,
  customUrlOption = () => {}
}: useFetchingOptionApiProps) => {
  const [search, setSearch] = useState<string | number>("")
  const [option, setOption] = useState<SelectDefault[]>([])

  const { data, ...rest } = useFetchingApi({
    nameTable,
    CallAPi,
    limit,
    retry,
    customUrl: ({ query, nameTable, limit, page, ...rest }) => {
      let url =
        customUrlOption({ query, nameTable, limit, page, ...rest }) || query?.for(nameTable).limit(limit).page(page)

      if (isSearching && search) {
        if ((isOptionAll && search !== -1) || !isOptionAll) {
          if (typeof url !== "string") {
            url = url?.params({
              [keySearching]: search
            })
          }
        }
      }

      return url?.url()
    }
  })

  useEffect(() => {
    if (data?.data?.data) {
      const { data: dataResult } = data.data
      let result = isOptionAll ? customOptionAll({ data: dataResult }) : dataResult

      if (isOptionAll && result?.length === 0) {
        result = optionAddAll(dataResult)
      }

      let newResult: SelectDefault[] = []

      if (result) {
        if (typeof customFucKey === "function") {
          newResult = customFucKey(result)
        }
      }
      setOption((prev) => _.unionBy(prev, newResult, keyUnine ?? "value"))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return { data, search, setSearch, option, setOption, ...rest }
}

export default useFethingOptionApi
