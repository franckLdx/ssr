import { jsxs, jsx } from "react/jsx-runtime";
import { g as getProductQueryOptions, c as cartQueryOptions, L as Loading } from "./router-Wgci3UxL.js";
import { useSuspenseQuery, useQueries } from "@tanstack/react-query";
import { P as PageHeader } from "./PageHeader-BX85VuTN.js";
import { useMemo } from "react";
import "@tanstack/react-router";
import "lucide-react";
import "@tanstack/react-devtools";
import "@tanstack/react-query-devtools";
import "@tanstack/react-router-devtools";
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
    /* @__PURE__ */ jsx(Products, {})
  ] });
}
export {
  RouteComponent as component
};
