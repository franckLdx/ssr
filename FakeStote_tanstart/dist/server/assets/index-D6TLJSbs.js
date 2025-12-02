import { jsx, jsxs } from "react/jsx-runtime";
import { c as cartQueryOptions, L as Loading } from "./router-BdaY2km5.js";
import { useSuspenseQuery } from "@tanstack/react-query";
import { P as PageHeader } from "./PageHeader-CGDbH1oi.js";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "@tanstack/react-devtools";
import "@tanstack/react-query-devtools";
import "@tanstack/react-router-devtools";
import "@tanstack/react-router-ssr-query";
function Products() {
  const cartQuery = useSuspenseQuery(cartQueryOptions);
  return /* @__PURE__ */ jsx("ul", { children: cartQuery.data?.products.map((product) => /* @__PURE__ */ jsxs("li", { children: [
    product.productId,
    " - ",
    product.quantity
  ] }, product.productId)) });
}
function RouteComponent() {
  return /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(Loading, { children: [
    /* @__PURE__ */ jsx(PageHeader, { children: "Your Cart" }),
    /* @__PURE__ */ jsx(Products, {})
  ] }) });
}
export {
  RouteComponent as component
};
