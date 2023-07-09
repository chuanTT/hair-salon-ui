"use client";
import { defaultProps } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

// {
//   defaultOptions: {
//     queries: {
//       staleTime: 10000,
//       cacheTime: 30000,
//     },
//   },
// }

const queryClient = new QueryClient();

const QueryClientProviderLayout: FC<defaultProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientProviderLayout;
