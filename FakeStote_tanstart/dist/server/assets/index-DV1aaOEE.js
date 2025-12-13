import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button, p as pay } from "./router-ktfnY0FX.js";
import * as React from "react";
import { useRouter, isRedirect } from "@tanstack/react-router";
import "lucide-react";
import "@tanstack/react-query";
import "@tanstack/react-devtools";
import "@tanstack/react-query-devtools";
import "@tanstack/react-router-devtools";
import "../server.js";
import "node:async_hooks";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router-ssr-query";
function useServerFn(serverFn) {
  const router = useRouter();
  return React.useCallback(
    async (...args) => {
      try {
        const res = await serverFn(...args);
        if (isRedirect(res)) {
          throw res;
        }
        return res;
      } catch (err) {
        if (isRedirect(err)) {
          err.options._fromLocation = router.state.location;
          return router.navigate(router.resolveRedirect(err).options);
        }
        throw err;
      }
    },
    [router, serverFn]
  );
}
function RouteComponent() {
  const onPay = useServerFn(pay);
  async function handlePay() {
    const result = await onPay({
      data: {
        id: 42
      }
    });
    console.log(result);
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    " Hello",
    /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ jsx(Button, { onClick: handlePay, className: "px-32 py-8", children: "Payment" }) })
  ] });
}
export {
  RouteComponent as component
};
