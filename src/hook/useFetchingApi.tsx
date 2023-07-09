import { UseQueryOptions, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { typeObject } from "@/types"
import QueryRequest from "@/services/builder/QueryRequest"

export interface customUrlProps {
  nameTable?: string
  page?: number
  limit?: number
  query?: QueryRequest
  RestProps?: typeObject
  searchValue?: typeObject
  [key: string]: string | number | undefined | QueryRequest | typeObject | object | boolean
}


export interface useFetchingApiParmeter {
  nameTable: string
  page?: number
  limit?: number
  customUrl?: (props: customUrlProps) => void | string
  CallAPi?: (url: string) => Promise<any>
  update?: boolean
  configCus?: UseQueryOptions
  isConfig?: boolean
  retry?: number
  RestProps?: typeObject
  searchValue?: typeObject
}

const useFetchingApi = ({
  nameTable = "",
  page = 1,
  limit = 10,
  customUrl = () => {},
  CallAPi = () => new Promise((resolve) => resolve),
  update = false,
  configCus = {},
  isConfig = true,
  retry = 1,
  ...RestProps
}: useFetchingApiParmeter) => {
  const queryClient = useQueryClient()
  const query = new QueryRequest()
  const url =
    customUrl({ query, nameTable, page, limit, ...RestProps }) || query.for(nameTable).page(page).limit(limit).url()
  const config: any = isConfig ? { keepPreviousData: true, retry } : configCus

  const { isPreviousData, data, ...rest } = useQuery([nameTable, url], () => CallAPi(url), config)

  const prefetchQueryClient = () => {
    queryClient.prefetchQuery([nameTable, url], () => CallAPi(url))
  }

  const invalidateQueriesQueryClient = () => {
    queryClient.invalidateQueries([nameTable, url])
  }

  const removeData = () => {
    rest?.remove()
  }

  useEffect(() => {
    if (!isPreviousData && data?.data?.pagination?.last_page > page) {
      queryClient.prefetchQuery([nameTable, url], () => CallAPi(url))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, update])

  return {
    isPreviousData,
    data,
    prefetchQueryClient,
    invalidateQueriesQueryClient,
    removeData,
    ...rest
  }
}

export default useFetchingApi
