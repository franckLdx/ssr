module.exports = [
"[project]/Documents/dev/react-execercies2/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"005fe848a9ecac0474d6b87338bcd12d28fecf684c":"getCart","40cb72d50f20a31baaa93fe21abfbd0525bb2bd7c1":"addProductToCart"},"",""] */ __turbopack_context__.s([
    "addProductToCart",
    ()=>addProductToCart,
    "getCart",
    ()=>getCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const TAG = 'cart';
async function getCart() {
    console.log('******************* START GET CART');
    const response = await fetch('https://fakestoreapi.com/carts/5', {
        next: {
            tags: [
                TAG
            ]
        },
        cache: 'no-store'
    });
    if (!response.ok) {
        throw new Error("Failed to addd product");
    }
    const cart = await response.json();
    console.log('******************* STOP GET CART');
    return cart;
}
async function addProductToCart(product) {
    try {
        const payload = {
            id: 5,
            useid: 3,
            products: [
                product
            ]
        };
        const response = await fetch('https://fakestoreapi.com/carts/5', {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            throw new Error("Failed to addd product");
        }
    } finally{
        console.log('******************* ADD PRODUCT DONE');
        // revalidateTag(TAG, "max")
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTag"])(TAG);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCart,
    addProductToCart
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCart, "005fe848a9ecac0474d6b87338bcd12d28fecf684c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProductToCart, "40cb72d50f20a31baaa93fe21abfbd0525bb2bd7c1", null);
}),
"[project]/Documents/dev/react-execercies2/next16/src/services/products/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00e6f370e817e9663ea6e6ee86b974647b02b3b2f6":"getProducts"},"",""] */ __turbopack_context__.s([
    "getProducts",
    ()=>getProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
async function getProducts() {
    const data = await fetch('https://fakestoreapi.com/products', {
        cache: 'no-store'
    });
    if (!data.ok) {
        throw new Error("Failed to load products");
    }
    return await data.json();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProducts
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "00e6f370e817e9663ea6e6ee86b974647b02b3b2f6", null);
}),
"[project]/Documents/dev/react-execercies2/next16/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documents/dev/react-execercies2/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documents/dev/react-execercies2/next16/src/services/products/server.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$src$2f$services$2f$cart$2f$serverFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$src$2f$services$2f$products$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/src/services/products/server.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/Documents/dev/react-execercies2/next16/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documents/dev/react-execercies2/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documents/dev/react-execercies2/next16/src/services/products/server.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "005fe848a9ecac0474d6b87338bcd12d28fecf684c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$src$2f$services$2f$cart$2f$serverFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCart"],
    "00e6f370e817e9663ea6e6ee86b974647b02b3b2f6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$src$2f$services$2f$products$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"],
    "40cb72d50f20a31baaa93fe21abfbd0525bb2bd7c1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$src$2f$services$2f$cart$2f$serverFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProductToCart"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$src$2f$services$2f$cart$2f$serverFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$src$2f$services$2f$products$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Documents/dev/react-execercies2/next16/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/Documents/dev/react-execercies2/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Documents/dev/react-execercies2/next16/src/services/products/server.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$src$2f$services$2f$cart$2f$serverFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$src$2f$services$2f$products$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/src/services/products/server.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Documents_dev_react-execercies2_next16_9ce1dcf3._.js.map