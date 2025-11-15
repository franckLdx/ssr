import { createRouter, ErrorComponent, Link } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/react-query";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { NotFoundComponent } from "./components/NotFoundComponent";

export const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        gcTime: 1000 * 60 * 60 * 24 * 365, // 24 heures
        retry: 1,
      },
    },
  });

  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    context: { queryClient },
    defaultErrorComponent: ({ error, reset }) => (
      <ErrorComponent error={error} />
    ),
    defaultNotFoundComponent: NotFoundComponent
  });

  setupRouterSsrQueryIntegration({
    router,
    queryClient,
  });

  return router;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
