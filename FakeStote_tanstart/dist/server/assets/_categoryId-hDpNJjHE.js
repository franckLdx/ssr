import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { P as PageHeader } from "./PageHeader-CWYJycO2.js";
import { g as getCategoryQueryOptions, T as Title, c as cartQueryOptions, a as getCartKeys, u as useIsProductInCart, B as Button, b as getProductByCategoryQueryOptions, R as Route, L as Loading } from "./router-ktfnY0FX.js";
import { useSuspenseQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "@tanstack/react-devtools";
import "@tanstack/react-query-devtools";
import "@tanstack/react-router-devtools";
import "../server.js";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router-ssr-query";
function Header({ categoryId }) {
  const categoryQuery = useSuspenseQuery(getCategoryQueryOptions(categoryId));
  return /* @__PURE__ */ jsx(PageHeader, { children: categoryQuery.data?.description });
}
function Border({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-4 w-128", children });
}
function Footer({ children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("hr", { className: "border-0 h-1 bg-black my-4 w-full" }),
    children
  ] });
}
const Card = {
  Border,
  Title: Title.H2,
  Footer
};
function Spinner() {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" }) });
}
const useAddProductToCart = () => {
  const cart = useSuspenseQuery(cartQueryOptions);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product) => {
      const legacyItems = cart.data?.products ?? [];
      const cartItems = [
        ...legacyItems,
        { productId: product.id, quantity: 1 }
      ];
      const response = await fetch(`http://localhost:3000/carts/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          products: cartItems
        })
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.setQueryData(getCartKeys(), data);
    }
  });
};
const useRemoveProductToCart = () => {
  const cart = useSuspenseQuery(cartQueryOptions);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (product) => {
      const legacyItems = cart.data?.products ?? [];
      const cartItems = legacyItems.filter((item) => item.productId !== product.id);
      const response = await fetch(`http://localhost:3000/carts/1`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          products: cartItems
        })
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.setQueryData(getCartKeys(), data);
    }
  });
};
function ProductCardFooter({ product }) {
  const isProductInCart = useIsProductInCart(product.id);
  const add = useAddProductToCart();
  const onAdd = () => add.mutate(product);
  const remove = useRemoveProductToCart();
  const onRemove = () => remove.mutate(product);
  if (isProductInCart === void 0) {
    return null;
  }
  if (add.isPending || remove.isPending) {
    return /* @__PURE__ */ jsx(Spinner, {});
  }
  return isProductInCart ? /* @__PURE__ */ jsx(Button, { onClick: onRemove, children: "Retirer du panier" }) : /* @__PURE__ */ jsx(Button, { onClick: onAdd, children: "Ajouter au panier" });
}
function ProductCard({ product }) {
  return /* @__PURE__ */ jsxs(Card.Border, { children: [
    /* @__PURE__ */ jsx(Card.Title, { children: product.title }),
    /* @__PURE__ */ jsx("img", { src: product.image, alt: "", "aria-hidden": true, className: "mx-auto block" }),
    /* @__PURE__ */ jsx("p", { className: "pt-2", children: product.description }),
    /* @__PURE__ */ jsxs("p", { className: "pt-2", children: [
      "Rating: ",
      product.rating.rate,
      "/",
      product.rating.count
    ] }),
    /* @__PURE__ */ jsx(Card.Footer, { children: /* @__PURE__ */ jsx(ProductCardFooter, { product }) })
  ] });
}
function ProductsList({ categoryId }) {
  const productsQuery = useSuspenseQuery(getProductByCategoryQueryOptions(categoryId));
  return /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-8 list-none p-0 m-0", children: productsQuery.data?.map((product) => /* @__PURE__ */ jsx("li", { className: "w-full sm:w-auto", children: /* @__PURE__ */ jsx(ProductCard, { product }) }, product.id)) });
}
function CategoryPage() {
  const {
    categoryId
  } = Route.useParams();
  return /* @__PURE__ */ jsx(Loading, { children: /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(Header, { categoryId }),
    /* @__PURE__ */ jsx(ProductsList, { categoryId })
  ] }) });
}
export {
  CategoryPage as component
};
