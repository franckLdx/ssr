import { QueryClient } from "@tanstack/react-query";

export const createLoaderQueryClient = () => new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});

