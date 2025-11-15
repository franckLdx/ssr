import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link as Link$1, createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, rootRouteId, createRouter, ErrorComponent } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Menu as Menu$1, X, Home } from "lucide-react";
import { useSuspenseQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn, j as json } from "../server.js";
import fs from "node:fs";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
function Button({
  onClick,
  children,
  "aria-label": ariaLabel
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: "p-2 hover:bg-gray-700 rounded-lg transition-colors border border-gray-300",
      "aria-label": ariaLabel,
      children
    }
  );
}
function BurgerButtons({ onClick }) {
  return /* @__PURE__ */ jsx(Button, { onClick, "aria-label": "Open menu", children: /* @__PURE__ */ jsx(Menu$1, { size: 24 }) });
}
function Link({ to, children, onClick }) {
  return /* @__PURE__ */ jsx(
    Link$1,
    {
      to,
      onClick,
      className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2",
      activeProps: {
        className: "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2"
      },
      reloadDocument: true,
      children
    }
  );
}
function Text({ children }) {
  return /* @__PURE__ */ jsx("span", { className: "font-medium", children });
}
function Title$1({ onClose, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-700", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onClose,
        className: "p-2 hover:bg-gray-800 rounded-lg transition-colors",
        "aria-label": "Close menu",
        children: /* @__PURE__ */ jsx(X, { size: 24 })
      }
    )
  ] });
}
const Menu = {
  Link,
  Text,
  Title: Title$1
};
const fetchCategories = async () => {
  const response = await fetch("http://localhost:3000/categories");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await response.json();
  return categories;
};
const CATEGORIES_KEY = ["categories"];
const useFetchCategories = () => useSuspenseQuery({
  queryKey: CATEGORIES_KEY,
  queryFn: fetchCategories
});
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const categoriesQuery = useFetchCategories();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "p-4 flex items-center bg-gray-800 text-white shadow-lg", children: /* @__PURE__ */ jsx(BurgerButtons, { onClick: () => setIsOpen(true) }) }),
    /* @__PURE__ */ jsxs(
      "aside",
      {
        className: `fixed top-0 left-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full hidden"}`,
        children: [
          /* @__PURE__ */ jsx(Menu.Title, { onClose, children: "Categories" }),
          /* @__PURE__ */ jsxs("nav", { className: "flex-1 p-4 overflow-y-auto", children: [
            /* @__PURE__ */ jsxs(Menu.Link, { to: "/", onClick: onClose, children: [
              /* @__PURE__ */ jsx(Home, { size: 20 }),
              /* @__PURE__ */ jsx(Menu.Text, { children: "Home" })
            ] }),
            categoriesQuery.data?.map((category) => /* @__PURE__ */ jsx(
              Menu.Link,
              {
                to: `/category/${category.id}`,
                onClick: onClose,
                children: /* @__PURE__ */ jsx(Menu.Text, { children: category.description })
              },
              category.id
            ))
          ] })
        ]
      }
    )
  ] });
}
const appCss = "/assets/styles-7y8p32iP.css";
const Route$9 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "TanStack Start Starter"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "text-white", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900", children }),
      /* @__PURE__ */ jsx(
        TanStackDevtools,
        {
          config: {
            position: "bottom-right"
          },
          plugins: [
            {
              name: "Tanstack Router",
              render: /* @__PURE__ */ jsx(TanStackRouterDevtoolsPanel, {})
            },
            {
              name: "TanStack Query",
              render: /* @__PURE__ */ jsx(ReactQueryDevtools, {})
            }
          ]
        }
      ),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$7 = () => import("./index-BJknfJsq.js");
const loader = async () => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: CATEGORIES_KEY,
    queryFn: fetchCategories
  });
  return {
    dehydratedState: dehydrate(queryClient)
  };
};
const Route$8 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  loader
});
const fetchCategory = async (categoryId) => {
  const response = await fetch(
    `http://localhost:3000/categories/${categoryId}`
  );
  debugger;
  if (response.status === 404) {
    throw notFound({ routeId: rootRouteId });
  }
  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }
  const category = await response.json();
  return category;
};
const getCategoryKeys = (categoryId) => ["category", categoryId];
const useFetchCategory = (categoryId) => useSuspenseQuery({
  queryKey: getCategoryKeys(categoryId),
  queryFn: () => fetchCategory(categoryId)
});
const fetchProductByCategory = async (categoryId) => {
  const response = await fetch(
    `http://localhost:3000/products?categoryId=${categoryId}`
  );
  if (response.status === 404) {
    throw notFound({ routeId: rootRouteId });
  }
  if (!response.ok) {
    throw new Error("Failed to fetch products by category");
  }
  const products = await response.json();
  return products;
};
const getProductsByCatrgory = (categoryId) => [
  "producs",
  "byCategory",
  categoryId
];
const useFetchProductsByCatrgory = (categoryId) => useSuspenseQuery({
  queryKey: getProductsByCatrgory(categoryId),
  queryFn: () => fetchProductByCategory(categoryId)
});
const fetchCart = async () => {
  const response = await fetch(`http://localhost:3000/carts/1`);
  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }
  return response.json();
};
const getCartKeys = () => ["cart"];
const useFetchCart = () => useSuspenseQuery({
  queryKey: getCartKeys(),
  queryFn: () => fetchCart()
});
const useIsProductInCart = (productId) => {
  const useGetCart = useFetchCart();
  return useGetCart.data?.products?.some(
    (item) => item.productId === productId
  );
};
const $$splitComponentImporter$6 = () => import("./_categoryId-IFkAQccK.js");
const Route$7 = createFileRoute("/category/$categoryId")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  loader: async ({
    params
  }) => {
    const categoryId = params.categoryId;
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity
        }
      }
    });
    queryClient.prefetchQuery({
      queryKey: getProductsByCatrgory(categoryId),
      queryFn: () => fetchProductByCategory(categoryId)
    });
    queryClient.prefetchQuery({
      queryKey: getCategoryKeys(categoryId),
      queryFn: () => fetchCategory(categoryId)
    });
    queryClient.prefetchQuery({
      queryKey: getCartKeys(),
      queryFn: fetchCart
    });
    return {
      dehydratedState: dehydrate(queryClient)
    };
  }
});
const createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};
const $$splitComponentImporter$5 = () => import("./start.server-funcs-CZgEirRV.js");
const TODOS_FILE = "todos.json";
async function readTodos() {
  return JSON.parse(await fs.promises.readFile(TODOS_FILE, "utf-8").catch(() => JSON.stringify([{
    id: 1,
    name: "Get groceries"
  }, {
    id: 2,
    name: "Buy a new phone"
  }], null, 2)));
}
const getTodos_createServerFn_handler = createSsrRpc("c9d51a5243700889c80f82ed57a4ce74b25f188e5ebd534c9c64965dc44e8e8d");
const getTodos = createServerFn({
  method: "GET"
}).handler(getTodos_createServerFn_handler, async () => await readTodos());
const Route$6 = createFileRoute("/demo/start/server-funcs")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  loader: async () => await getTodos()
});
const $$splitComponentImporter$4 = () => import("./start.api-request-DhPN1_Dc.js");
const Route$5 = createFileRoute("/demo/start/api-request")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const Route$4 = createFileRoute("/demo/api/names")({
  server: {
    handlers: {
      GET: () => json(["Alice", "Bob", "Charlie"])
    }
  }
});
const $$splitComponentImporter$3 = () => import("./start.ssr.index-BmCCCK3g.js");
const Route$3 = createFileRoute("/demo/start/ssr/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./start.ssr.spa-mode-Dj8JTHWb.js");
const Route$2 = createFileRoute("/demo/start/ssr/spa-mode")({
  ssr: false,
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const getPunkSongs_createServerFn_handler = createSsrRpc("f74da881407a186b78a7af058df21dafb0126eb11e5a4d54fd322e8feb5038f1");
const getPunkSongs = createServerFn({
  method: "GET"
}).handler(getPunkSongs_createServerFn_handler, async () => [{
  id: 1,
  name: "Teenage Dirtbag",
  artist: "Wheatus"
}, {
  id: 2,
  name: "Smells Like Teen Spirit",
  artist: "Nirvana"
}, {
  id: 3,
  name: "The Middle",
  artist: "Jimmy Eat World"
}, {
  id: 4,
  name: "My Own Worst Enemy",
  artist: "Lit"
}, {
  id: 5,
  name: "Fat Lip",
  artist: "Sum 41"
}, {
  id: 6,
  name: "All the Small Things",
  artist: "blink-182"
}, {
  id: 7,
  name: "Beverly Hills",
  artist: "Weezer"
}]);
const $$splitComponentImporter$1 = () => import("./start.ssr.full-ssr-_HuE60Oc.js");
const Route$1 = createFileRoute("/demo/start/ssr/full-ssr")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  loader: async () => await getPunkSongs()
});
const $$splitComponentImporter = () => import("./start.ssr.data-only-BDfEAkYP.js");
const Route = createFileRoute("/demo/start/ssr/data-only")({
  ssr: "data-only",
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async () => await getPunkSongs()
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const CategoryCategoryIdRoute = Route$7.update({
  id: "/category/$categoryId",
  path: "/category/$categoryId",
  getParentRoute: () => Route$9
});
const DemoStartServerFuncsRoute = Route$6.update({
  id: "/demo/start/server-funcs",
  path: "/demo/start/server-funcs",
  getParentRoute: () => Route$9
});
const DemoStartApiRequestRoute = Route$5.update({
  id: "/demo/start/api-request",
  path: "/demo/start/api-request",
  getParentRoute: () => Route$9
});
const DemoApiNamesRoute = Route$4.update({
  id: "/demo/api/names",
  path: "/demo/api/names",
  getParentRoute: () => Route$9
});
const DemoStartSsrIndexRoute = Route$3.update({
  id: "/demo/start/ssr/",
  path: "/demo/start/ssr/",
  getParentRoute: () => Route$9
});
const DemoStartSsrSpaModeRoute = Route$2.update({
  id: "/demo/start/ssr/spa-mode",
  path: "/demo/start/ssr/spa-mode",
  getParentRoute: () => Route$9
});
const DemoStartSsrFullSsrRoute = Route$1.update({
  id: "/demo/start/ssr/full-ssr",
  path: "/demo/start/ssr/full-ssr",
  getParentRoute: () => Route$9
});
const DemoStartSsrDataOnlyRoute = Route.update({
  id: "/demo/start/ssr/data-only",
  path: "/demo/start/ssr/data-only",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  CategoryCategoryIdRoute,
  DemoApiNamesRoute,
  DemoStartApiRequestRoute,
  DemoStartServerFuncsRoute,
  DemoStartSsrDataOnlyRoute,
  DemoStartSsrFullSsrRoute,
  DemoStartSsrSpaModeRoute,
  DemoStartSsrIndexRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
function H1({ className, children }) {
  return /* @__PURE__ */ jsx("h1", { className: `text-2xl md:text-3xl mb-4 font-medium ${className}`, children });
}
function H2({ className, children }) {
  return /* @__PURE__ */ jsx("h1", { className: `text-xl md:text-2xl mb-2 font-medium ${className}`, children });
}
const Title = {
  H1,
  H2
};
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Title.H1, { children: "Not found!" }),
    /* @__PURE__ */ jsx(Link$1, { to: "/", children: "Go home" })
  ] });
}
const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        gcTime: 1e3 * 60 * 60 * 24 * 365,
        // 24 heures
        retry: 1
      }
    }
  });
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    context: { queryClient },
    defaultErrorComponent: ({ error, reset }) => /* @__PURE__ */ jsx(ErrorComponent, { error }),
    defaultNotFoundComponent: NotFound
  });
  setupRouterSsrQueryIntegration({
    router: router2,
    queryClient
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Route$8 as R,
  Title as T,
  useFetchCart as a,
  useIsProductInCart as b,
  useFetchProductsByCatrgory as c,
  Route$7 as d,
  Route$6 as e,
  createSsrRpc as f,
  getCartKeys as g,
  getPunkSongs as h,
  Route$1 as i,
  Route as j,
  router as r,
  useFetchCategory as u
};
