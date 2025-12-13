import { a as createServerRpc, c as createServerFn } from "../server.js";
import "node:async_hooks";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const pay_createServerFn_handler = createServerRpc("6826078ac2d43b349bd8c0be7048326c018698db17798e64c38dcee1197b5a5b", (opts, signal) => {
  return pay.__executeServer(opts, signal);
});
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
export {
  pay_createServerFn_handler
};
