import { jsx } from "react/jsx-runtime";
import { R as Route, T as Title } from "./router-BxeZEsPy.js";
import { HydrationBoundary } from "@tanstack/react-query";
import "@tanstack/react-router";
import "@tanstack/react-router-devtools";
import "@tanstack/react-devtools";
import "@tanstack/react-query-devtools";
import "react";
import "lucide-react";
import "../server.js";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
import "node:fs";
import "@tanstack/react-router-ssr-query";
function App() {
  const {
    dehydratedState
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsx(HydrationBoundary, { state: dehydratedState, children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsx(Title.H1, { children: "Welcome Fake Store !" }) }) });
}
export {
  App as component
};
