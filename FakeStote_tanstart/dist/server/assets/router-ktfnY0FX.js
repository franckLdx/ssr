import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link as Link$1, createFileRoute, lazyRouteComponent, createRootRoute, HeadContent, Scripts, createRouter, ErrorComponent } from "@tanstack/react-router";
import { Suspense, useState } from "react";
import { Menu as Menu$1, X, ShoppingCart, Home } from "lucide-react";
import { queryOptions, useSuspenseQuery, dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "../server.js";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
function Loading({ children }) {
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { children: "Loading..." }), children });
}
function Button({
  className,
  onClick,
  children,
  "aria-label": ariaLabel
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      className: `p-2 hover:bg-gray-700 rounded-lg transition-colors border border-gray-300 ${className}`,
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
const categoriresQueryOptions = queryOptions({
  queryKey: CATEGORIES_KEY,
  queryFn: fetchCategories
});
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
const getCategoryQueryOptions = (categoryId) => queryOptions({
  queryKey: getCategoryKeys(categoryId),
  queryFn: () => fetchCategory(categoryId)
});
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
const getProductsByCatergoryKeys = (categoryId) => [
  "producs",
  "byCategory",
  categoryId
];
const getProductByCategoryQueryOptions = (categoryId) => queryOptions({
  queryKey: getProductsByCatergoryKeys(categoryId),
  queryFn: () => fetchProductByCategory(categoryId)
});
const fetchProduct = async (productId) => {
  const response = await fetch(
    `http://localhost:3000/products/${productId}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch product ${productId}`);
  }
  const products = await response.json();
  return products;
};
const getProductKeys = (productId) => [
  "producs",
  productId
];
const getProductQueryOptions = (productId) => queryOptions({
  queryKey: getProductKeys(productId),
  queryFn: () => fetchProduct(productId)
});
const $$splitComponentImporter$3 = () => import("./_categoryId-hDpNJjHE.js");
const Route$4 = createFileRoute("/category/$categoryId")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  loader: async ({
    params,
    context
  }) => {
    const queryClient = context.queryClient;
    const categoryId = params.categoryId;
    return Promise.all([queryClient.ensureQueryData(getCategoryQueryOptions(categoryId)), queryClient.ensureQueryData(getProductByCategoryQueryOptions(categoryId))]);
  },
  head: () => ({
    meta: [{
      title: "Category | FakeStore"
    }]
  })
});
const fetchCart = async () => {
  const response = await fetch(`http://localhost:3000/carts/1`);
  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }
  return response.json();
};
const getCartKeys = () => ["cart"];
const cartQueryOptions = queryOptions({
  queryKey: getCartKeys(),
  queryFn: () => fetchCart()
});
const useIsProductInCart = (productId) => {
  const cartQUery = useSuspenseQuery(cartQueryOptions);
  return cartQUery.data?.products?.some(
    (item) => item.productId === productId
  );
};
const $$splitComponentImporter$2 = () => import("./index-SbBbGxk2.js");
const Route$3 = createFileRoute("/pipe/cart/")({
  loader: async ({
    context
  }) => {
    const queryClient = context.queryClient;
    const cart = await queryClient.ensureQueryData(cartQueryOptions);
    for (const product of cart.products) {
      queryClient.prefetchQuery(getProductQueryOptions(product.productId));
    }
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Cart | FakeStore"
    }]
  })
});
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const categoriesQuery = useSuspenseQuery(categoriresQueryOptions);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("header", { className: "p-4 flex items-center justify-between bg-gray-800 text-white shadow-lg", children: [
      /* @__PURE__ */ jsx(BurgerButtons, { onClick: () => setIsOpen(true) }),
      /* @__PURE__ */ jsx(Link$1, { to: Route$3.to, children: /* @__PURE__ */ jsx(Button, { children: /* @__PURE__ */ jsx(ShoppingCart, { size: 24 }) }) })
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
                to: Route$4.to,
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
    queryClient.ensureQueryData(categoriresQueryOptions),
    queryClient.ensureQueryData(cartQueryOptions)
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
const appCss = "/assets/styles-D8Y57yg4.css";
const Route$2 = createRootRoute({
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
  const { dehydratedState } = Route$2.useLoaderData();
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
const $$splitComponentImporter$1 = () => import("./index-BG7dWZkW.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
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
const $$splitComponentImporter = () => import("./index-DV1aaOEE.js");
const Route = createFileRoute("/pipe/payment/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Payment | FakeStore"
    }]
  })
});
const pay_createServerFn_handler = createSsrRpc("6826078ac2d43b349bd8c0be7048326c018698db17798e64c38dcee1197b5a5b");
const pay = createServerFn({
  method: "POST"
}).handler(pay_createServerFn_handler, async ({
  data
}) => {
  data.id;
  return {
    success: true
  };
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const CategoryCategoryIdRoute = Route$4.update({
  id: "/category/$categoryId",
  path: "/category/$categoryId",
  getParentRoute: () => Route$2
});
const PipePaymentIndexRoute = Route.update({
  id: "/pipe/payment/",
  path: "/pipe/payment/",
  getParentRoute: () => Route$2
});
const PipeCartIndexRoute = Route$3.update({
  id: "/pipe/cart/",
  path: "/pipe/cart/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  CategoryCategoryIdRoute,
  PipeCartIndexRoute,
  PipePaymentIndexRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
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
  Route$4 as R,
  Title as T,
  getCartKeys as a,
  getProductByCategoryQueryOptions as b,
  cartQueryOptions as c,
  getProductQueryOptions as d,
  Route as e,
  getCategoryQueryOptions as g,
  pay as p,
  router as r,
  useIsProductInCart as u
};
