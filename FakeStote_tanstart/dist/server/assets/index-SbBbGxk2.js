import { jsxs, jsx } from "react/jsx-runtime";
import { d as getProductQueryOptions, c as cartQueryOptions, L as Loading, e as Route, B as Button } from "./router-ktfnY0FX.js";
import { Link } from "@tanstack/react-router";
import { useSuspenseQuery, useQueries } from "@tanstack/react-query";
import { P as PageHeader } from "./PageHeader-CWYJycO2.js";
import { useMemo } from "react";
import "lucide-react";
import "@tanstack/react-devtools";
import "@tanstack/react-query-devtools";
import "@tanstack/react-router-devtools";
import "../server.js";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router-ssr-query";
function Price({ amount }) {
  return /* @__PURE__ */ jsxs("span", { children: [
    amount,
    " €"
  ] });
}
function Product({ cartItem }) {
  const product = useSuspenseQuery(getProductQueryOptions(cartItem.productId)).data;
  return /* @__PURE__ */ jsxs("p", { className: "m-10 p-6 border-2 flex justify-between", children: [
    product.title,
    " ",
    /* @__PURE__ */ jsxs("span", { children: [
      product.price,
      " x ",
      cartItem.quantity,
      " = ",
      /* @__PURE__ */ jsx(Price, { amount: product.price * cartItem.quantity })
    ] })
  ] });
}
function Products() {
  const cartQuery = useSuspenseQuery(cartQueryOptions);
  return /* @__PURE__ */ jsx("ul", { children: cartQuery.data?.products.map((product) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Loading, { children: /* @__PURE__ */ jsx(Product, { cartItem: product }) }) }, product.productId)) });
}
function Total() {
  const cart = useSuspenseQuery(cartQueryOptions).data;
  const productQueries = useQueries({
    queries: cart.products.map((p) => getProductQueryOptions(p.productId))
  });
  const allQueriesDone = productQueries.every((r) => r.isSuccess);
  const totalAmount = useMemo(() => {
    return productQueries.reduce((total, productQuery) => {
      const product = productQuery.data;
      if (!product) return total;
      const cartItem = cart.products.find((p) => p.productId === product.id);
      if (!cartItem) return total;
      return total + product.price * cartItem.quantity;
    }, 0) || 0;
  }, [cart, allQueriesDone, productQueries]);
  if (!allQueriesDone) {
    return /* @__PURE__ */ jsx("span", { children: "Computing..." });
  }
  return /* @__PURE__ */ jsx(Price, { amount: totalAmount });
}
function RouteComponent() {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(PageHeader, { children: /* @__PURE__ */ jsxs(Loading, { children: [
      "Your Cart - ",
      /* @__PURE__ */ jsx(Total, {})
    ] }) }),
    /* @__PURE__ */ jsx(Products, {}),
    /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ jsx(Link, { to: Route.to, children: /* @__PURE__ */ jsx(Button, { className: "px-32 py-8", children: "Payment" }) }) })
  ] });
}
export {
  RouteComponent as component
};
