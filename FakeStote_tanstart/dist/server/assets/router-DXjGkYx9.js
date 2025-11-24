import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link as Link$1, createFileRoute, lazyRouteComponent, createRootRoute, HeadContent, Scripts, createRouter, ErrorComponent } from "@tanstack/react-router";
import { Suspense, useState } from "react";
import { Menu as Menu$1, X, ShoppingCart, Home } from "lucide-react";
import { useSuspenseQuery, queryOptions, dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
function Loading({ children }) {
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading..." }), children });
}
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
function Link({ to, params, children, onClick }) {
  return /* @__PURE__ */ jsx(
    Link$1,
    {
      to,
      params,
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
const options = queryOptions({
  queryKey: CATEGORIES_KEY,
  queryFn: fetchCategories
});
const useFetchCategories = () => useSuspenseQuery(options);
const ensureCategories = (queryClient) => queryClient.ensureQueryData(options);
const fetchCategory = async (categoryId) => {
  const response = await fetch(
    `http://localhost:3000/categories/${categoryId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }
  const category = await response.json();
  return category;
};
const getCategoryKeys = (categoryId) => ["category", categoryId];
const fetchCategoryOptions = (categoryId) => queryOptions({
  queryKey: getCategoryKeys(categoryId),
  queryFn: () => fetchCategory(categoryId)
});
const ensureCategory = (queryClient, categoryId) => queryClient.ensureQueryData(fetchCategoryOptions(categoryId));
const useFetchCategory = (categoryId) => useSuspenseQuery(fetchCategoryOptions(categoryId));
const fetchProductByCategory = async (categoryId) => {
  const response = await fetch(
    `http://localhost:3000/products?categoryId=${categoryId}`
  );
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
const fetchProductByCategoryOptions = (categoryId) => queryOptions({
  queryKey: getProductsByCatrgory(categoryId),
  queryFn: () => fetchProductByCategory(categoryId)
});
const ensureProductByCategoryOptions = (queryClient, categoryId) => queryClient.ensureQueryData(fetchProductByCategoryOptions(categoryId));
const useFetchProductsByCatrgory = (categoryId) => useSuspenseQuery(fetchProductByCategoryOptions(categoryId));
const $$splitComponentImporter$2 = () => import("./_categoryId-i3UxCbIV.js");
const Route$3 = createFileRoute("/category/$categoryId")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  loader: async ({
    params,
    context
  }) => {
    const queryClient = context.queryClient;
    const categoryId = params.categoryId;
    return Promise.all([ensureCategory(queryClient, categoryId), ensureProductByCategoryOptions(queryClient, categoryId)]);
  }
});
const $$splitComponentImporter$1 = () => import("./cart-BCoPNNur.js");
const Route$2 = createFileRoute("/pipe/cart")({
  loader: async ({
    context
  }) => {
    context.queryClient;
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const fetchCart = async () => {
  const response = await fetch(`http://localhost:3000/carts/1`);
  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }
  return response.json();
};
const getCartKeys = () => ["cart"];
const fetchCartOptions = queryOptions({
  queryKey: getCartKeys(),
  queryFn: () => fetchCart()
});
const useFetchCart = () => useSuspenseQuery(fetchCartOptions);
const ensureCart = async (queryClient) => queryClient.ensureQueryData(fetchCartOptions);
const useIsProductInCart = (productId) => {
  const useGetCart = useFetchCart();
  return useGetCart.data?.products?.some(
    (item) => item.productId === productId
  );
};
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const categoriesQuery = useFetchCategories();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "p-4 flex items-center justify-between bg-gray-800 text-white shadow-lg", children: [
      /* @__PURE__ */ jsx(BurgerButtons, { onClick: () => setIsOpen(true) }),
      /* @__PURE__ */ jsx(Link$1, { to: Route$2.to, children: /* @__PURE__ */ jsx(Button, { children: /* @__PURE__ */ jsx(ShoppingCart, { size: 24 }) }) })
    ] }),
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
                to: Route$3.to,
                params: { categoryId: category.id },
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
async function headerLoader(queryClient) {
  return Promise.all([
    ensureCategories(queryClient),
    ensureCart(queryClient)
  ]);
}
function DevTools() {
  return /* @__PURE__ */ jsx(
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
  );
}
const appCss = "/assets/styles-B_D4lkoZ.css";
const Route$1 = createRootRoute({
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
  shellComponent: RootDocument,
  loader: async ({ context }) => {
    const queryClient = context.queryClient;
    await headerLoader(queryClient);
    return {
      dehydratedState: dehydrate(queryClient)
    };
  }
});
function RootDocument({ children }) {
  const { dehydratedState } = Route$1.useLoaderData();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "text-white", children: [
      /* @__PURE__ */ jsx(HydrationBoundary, { state: dehydratedState, children: /* @__PURE__ */ jsxs(Loading, { children: [
        /* @__PURE__ */ jsx(Header, {}),
        /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900", children }),
        /* @__PURE__ */ jsx(DevTools, {})
      ] }) }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-BqKzd2Ru.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const PipeCartRoute = Route$2.update({
  id: "/pipe/cart",
  path: "/pipe/cart",
  getParentRoute: () => Route$1
});
const CategoryCategoryIdRoute = Route$3.update({
  id: "/category/$categoryId",
  path: "/category/$categoryId",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute,
  CategoryCategoryIdRoute,
  PipeCartRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
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
function NotFoundComponent() {
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
    defaultErrorComponent: ({ error }) => /* @__PURE__ */ jsx(ErrorComponent, { error }),
    defaultNotFoundComponent: NotFoundComponent
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
  Loading as L,
  Route$3 as R,
  Title as T,
  useFetchCart as a,
  useIsProductInCart as b,
  useFetchProductsByCatrgory as c,
  getCartKeys as g,
  router as r,
  useFetchCategory as u
};
