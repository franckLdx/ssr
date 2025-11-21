import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { Loading } from "@/components/Loading";
import { Header, headerLoader } from "./-Header";
import { DevTools } from "./-DevTools";
import { createLoaderQueryClient, } from "@/services/loader";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  loader: async (): Promise<any> => {
    const queryClient = createLoaderQueryClient();

    await headerLoader(queryClient);

    return {
      dehydratedState: dehydrate(queryClient),
    }
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { dehydratedState } = Route.useLoaderData();
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="text-white">
        <HydrationBoundary state={dehydratedState}>
          <Loading >
            <Header />
            <main className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
              {children}
            </main>
            <DevTools />
          </Loading >
        </HydrationBoundary>
        <Scripts />
      </body>
    </html >
  );
}
