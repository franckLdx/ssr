module.exports = [
"[project]/Documents/dev/react-execercies2/rsc/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0091a567726e8345dc602905f735fac479ab655080":"getCart","409edbc6ee905599611aec94834306b373d85e1965":"addProductToCart"},"",""] */ __turbopack_context__.s([
    "addProductToCart",
    ()=>addProductToCart,
    "getCart",
    ()=>getCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/rsc/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/rsc/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/rsc/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const TAG = 'cart';
const CART_URL = "http://localhost:3000/carts/1";
async function getCart() {
    console.log('******************* GET CART START');
    const response = await fetch(CART_URL, {
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
    console.log('******************* GET CART ' + cart.products.length);
    return cart;
}
async function addProductToCart(product) {
    const cartModel = await getCart();
    try {
        const payload = {
            products: [
                ...cartModel.products,
                {
                    productId: product.id,
                    quantity: 1
                }
            ]
        };
        const response = await fetch(CART_URL, {
            method: 'PATCH',
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            throw new Error("Failed to addd product");
        }
    } finally{
        console.log('******************* ADD PRODUCT');
        // revalidateTag(TAG, "max")
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTag"])(TAG);
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCart,
    addProductToCart
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCart, "0091a567726e8345dc602905f735fac479ab655080", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addProductToCart, "409edbc6ee905599611aec94834306b373d85e1965", null);
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[project]/Documents/dev/react-execercies2/rsc/next16/src/services/products/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"809f2d5a02461dee20a30ace826c935bf9da41defa":"$$RSC_SERVER_CACHE_0"},"",""] */ __turbopack_context__.s([
    "$$RSC_SERVER_CACHE_0",
    ()=>$$RSC_SERVER_CACHE_0,
    "getProducts",
    ()=>getProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/rsc/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/rsc/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/cache-wrapper.js [app-rsc] (ecmascript)");
;
;
var $$RSC_SERVER_CACHE_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$cache$2d$wrapper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])("default", "809f2d5a02461dee20a30ace826c935bf9da41defa", 0, async function getProducts() {
    const data = await fetch('http://localhost:3000/products', {
        cache: 'no-store'
    });
    if (!data.ok) {
        throw new Error("Failed to load products");
    }
    return await data.json();
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_CACHE_0, "809f2d5a02461dee20a30ace826c935bf9da41defa", null);
Object["defineProperty"]($$RSC_SERVER_CACHE_0, "name", {
    value: "getProducts",
    writable: false
});
var getProducts = $$RSC_SERVER_CACHE_0;
}),
"[project]/Documents/dev/react-execercies2/rsc/next16/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documents/dev/react-execercies2/rsc/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documents/dev/react-execercies2/rsc/next16/src/services/products/server.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$src$2f$services$2f$cart$2f$serverFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/rsc/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$src$2f$services$2f$products$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/rsc/next16/src/services/products/server.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/Documents/dev/react-execercies2/rsc/next16/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/Documents/dev/react-execercies2/rsc/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Documents/dev/react-execercies2/rsc/next16/src/services/products/server.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0091a567726e8345dc602905f735fac479ab655080",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$src$2f$services$2f$cart$2f$serverFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCart"],
    "409edbc6ee905599611aec94834306b373d85e1965",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$src$2f$services$2f$cart$2f$serverFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addProductToCart"],
    "809f2d5a02461dee20a30ace826c935bf9da41defa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$src$2f$services$2f$products$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_CACHE_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$src$2f$services$2f$cart$2f$serverFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$src$2f$services$2f$products$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Documents/dev/react-execercies2/rsc/next16/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/Documents/dev/react-execercies2/rsc/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Documents/dev/react-execercies2/rsc/next16/src/services/products/server.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$src$2f$services$2f$cart$2f$serverFunctions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/rsc/next16/src/services/cart/serverFunctions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$rsc$2f$next16$2f$src$2f$services$2f$products$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/rsc/next16/src/services/products/server.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d88e0d0d._.js.map