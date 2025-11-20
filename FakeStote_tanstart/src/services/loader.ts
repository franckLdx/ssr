import { dehydrate, QueryClient } from "@tanstack/react-query";

export const createLoaderQueryClient = () => new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});


export const getDehydratedState = (queryClient: QueryClient) => ({
  dehydratedState: dehydrate(queryClient),
});
