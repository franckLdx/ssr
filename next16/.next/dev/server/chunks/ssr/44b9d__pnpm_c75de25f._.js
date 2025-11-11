module.exports = [
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/timeoutManager.ts
__turbopack_context__.s([
    "TimeoutManager",
    ()=>TimeoutManager,
    "defaultTimeoutProvider",
    ()=>defaultTimeoutProvider,
    "systemSetTimeoutZero",
    ()=>systemSetTimeoutZero,
    "timeoutManager",
    ()=>timeoutManager
]);
var defaultTimeoutProvider = {
    // We need the wrapper function syntax below instead of direct references to
    // global setTimeout etc.
    //
    // BAD: `setTimeout: setTimeout`
    // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
    //
    // If we use direct references here, then anything that wants to spy on or
    // replace the global setTimeout (like tests) won't work since we'll already
    // have a hard reference to the original implementation at the time when this
    // file was imported.
    setTimeout: (callback, delay)=>setTimeout(callback, delay),
    clearTimeout: (timeoutId)=>clearTimeout(timeoutId),
    setInterval: (callback, delay)=>setInterval(callback, delay),
    clearInterval: (intervalId)=>clearInterval(intervalId)
};
var TimeoutManager = class {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support ReturnType<typeof setTimeout>, which is infeasible.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    #provider = defaultTimeoutProvider;
    #providerCalled = false;
    setTimeoutProvider(provider) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (this.#providerCalled && provider !== this.#provider) {
                console.error(`[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.`, {
                    previous: this.#provider,
                    provider
                });
            }
        }
        this.#provider = provider;
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = false;
        }
    }
    setTimeout(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = true;
        }
        return this.#provider.setTimeout(callback, delay);
    }
    clearTimeout(timeoutId) {
        this.#provider.clearTimeout(timeoutId);
    }
    setInterval(callback, delay) {
        if (("TURBOPACK compile-time value", "development") !== "production") {
            this.#providerCalled = true;
        }
        return this.#provider.setInterval(callback, delay);
    }
    clearInterval(intervalId) {
        this.#provider.clearInterval(intervalId);
    }
};
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
    setTimeout(callback, 0);
}
;
 //# sourceMappingURL=timeoutManager.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils.ts
__turbopack_context__.s([
    "addToEnd",
    ()=>addToEnd,
    "addToStart",
    ()=>addToStart,
    "ensureQueryFn",
    ()=>ensureQueryFn,
    "functionalUpdate",
    ()=>functionalUpdate,
    "hashKey",
    ()=>hashKey,
    "hashQueryKeyByOptions",
    ()=>hashQueryKeyByOptions,
    "isPlainArray",
    ()=>isPlainArray,
    "isPlainObject",
    ()=>isPlainObject,
    "isServer",
    ()=>isServer,
    "isValidTimeout",
    ()=>isValidTimeout,
    "keepPreviousData",
    ()=>keepPreviousData,
    "matchMutation",
    ()=>matchMutation,
    "matchQuery",
    ()=>matchQuery,
    "noop",
    ()=>noop,
    "partialMatchKey",
    ()=>partialMatchKey,
    "replaceData",
    ()=>replaceData,
    "replaceEqualDeep",
    ()=>replaceEqualDeep,
    "resolveEnabled",
    ()=>resolveEnabled,
    "resolveStaleTime",
    ()=>resolveStaleTime,
    "shallowEqualObjects",
    ()=>shallowEqualObjects,
    "shouldThrowError",
    ()=>shouldThrowError,
    "skipToken",
    ()=>skipToken,
    "sleep",
    ()=>sleep,
    "timeUntilStale",
    ()=>timeUntilStale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
;
var isServer = ("TURBOPACK compile-time value", "undefined") === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
                return false;
            }
        } else if (!partialMatchKey(query.queryKey, queryKey)) {
            return false;
        }
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) {
            return false;
        }
        if (type === "inactive" && isActive) {
            return false;
        }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
        return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
        return false;
    }
    if (predicate && !predicate(query)) {
        return false;
    }
    return true;
}
function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) {
            return false;
        }
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
                return false;
            }
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
            return false;
        }
    }
    if (status && mutation.state.status !== status) {
        return false;
    }
    if (predicate && !predicate(mutation)) {
        return false;
    }
    return true;
}
function hashQueryKeyByOptions(queryKey, options) {
    const hashFn = options?.queryKeyHashFn || hashKey;
    return hashFn(queryKey);
}
function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
        return Object.keys(b).every((key)=>partialMatchKey(a[key], b[key]));
    }
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b) {
    if (a === b) {
        return a;
    }
    const array = isPlainArray(a) && isPlainArray(b);
    if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
    const aItems = array ? a : Object.keys(a);
    const aSize = aItems.length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? new Array(bSize) : {};
    let equalItems = 0;
    for(let i = 0; i < bSize; i++){
        const key = array ? i : bItems[i];
        const aItem = a[key];
        const bItem = b[key];
        if (aItem === bItem) {
            copy[key] = aItem;
            if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
            continue;
        }
        if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
            copy[key] = bItem;
            continue;
        }
        const v = replaceEqualDeep(aItem, bItem);
        copy[key] = v;
        if (v === aItem) equalItems++;
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for(const key in a){
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
        return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
        return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
        return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
        return false;
    }
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
    return new Promise((resolve)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(resolve, timeout);
    });
}
function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
        return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                return replaceEqualDeep(prevData, data);
            } catch (error) {
                console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
                throw error;
            }
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
function keepPreviousData(previousData) {
    return previousData;
}
function addToEnd(items, item, max = 0) {
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === skipToken) {
            console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
        }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
        return ()=>fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
        return ()=>Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
    if (typeof throwOnError === "function") {
        return throwOnError(...params);
    }
    return !!throwOnError;
}
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/notifyManager.ts
__turbopack_context__.s([
    "createNotifyManager",
    ()=>createNotifyManager,
    "defaultScheduler",
    ()=>defaultScheduler,
    "notifyManager",
    ()=>notifyManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
;
var defaultScheduler = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["systemSetTimeoutZero"];
function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = defaultScheduler;
    const schedule = (callback)=>{
        if (transactions) {
            queue.push(callback);
        } else {
            scheduleFn(()=>{
                notifyFn(callback);
            });
        }
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) {
            scheduleFn(()=>{
                batchNotifyFn(()=>{
                    originalQueue.forEach((callback)=>{
                        notifyFn(callback);
                    });
                });
            });
        }
    };
    return {
        batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) {
                    flush();
                }
            }
            return result;
        },
        /**
     * All calls to the wrapped function will be batched.
     */ batchCalls: (callback)=>{
            return (...args)=>{
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        schedule,
        /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
var notifyManager = createNotifyManager();
;
 //# sourceMappingURL=notifyManager.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/subscribable.ts
__turbopack_context__.s([
    "Subscribable",
    ()=>Subscribable
]);
var Subscribable = class {
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
};
;
 //# sourceMappingURL=subscribable.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/focusManager.ts
__turbopack_context__.s([
    "FocusManager",
    ()=>FocusManager,
    "focusManager",
    ()=>focusManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
var FocusManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    #focused;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onFocus)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const listener = ()=>onFocus();
                window.addEventListener("visibilitychange", listener, false);
                return ()=>{
                    window.removeEventListener("visibilitychange", listener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup((focused)=>{
            if (typeof focused === "boolean") {
                this.setFocused(focused);
            } else {
                this.onFocus();
            }
        });
    }
    setFocused(focused) {
        const changed = this.#focused !== focused;
        if (changed) {
            this.#focused = focused;
            this.onFocus();
        }
    }
    onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    isFocused() {
        if (typeof this.#focused === "boolean") {
            return this.#focused;
        }
        return globalThis.document?.visibilityState !== "hidden";
    }
};
var focusManager = new FocusManager();
;
 //# sourceMappingURL=focusManager.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/onlineManager.ts
__turbopack_context__.s([
    "OnlineManager",
    ()=>OnlineManager,
    "onlineManager",
    ()=>onlineManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
var OnlineManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    #online = true;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onOnline)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const onlineListener = ()=>onOnline(true);
                const offlineListener = ()=>onOnline(false);
                window.addEventListener("online", onlineListener, false);
                window.addEventListener("offline", offlineListener, false);
                return ()=>{
                    window.removeEventListener("online", onlineListener);
                    window.removeEventListener("offline", offlineListener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup(this.setOnline.bind(this));
    }
    setOnline(online) {
        const changed = this.#online !== online;
        if (changed) {
            this.#online = online;
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    isOnline() {
        return this.#online;
    }
};
var onlineManager = new OnlineManager();
;
 //# sourceMappingURL=onlineManager.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/thenable.ts
__turbopack_context__.s([
    "pendingThenable",
    ()=>pendingThenable,
    "tryResolveSync",
    ()=>tryResolveSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(()=>{});
    function finalize(data) {
        Object.assign(thenable, data);
        delete thenable.resolve;
        delete thenable.reject;
    }
    thenable.resolve = (value)=>{
        finalize({
            status: "fulfilled",
            value
        });
        resolve(value);
    };
    thenable.reject = (reason)=>{
        finalize({
            status: "rejected",
            reason
        });
        reject(reason);
    };
    return thenable;
}
function tryResolveSync(promise) {
    let data;
    promise.then((result)=>{
        data = result;
        return result;
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"])?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    if (data !== void 0) {
        return {
            data
        };
    }
    return void 0;
}
;
 //# sourceMappingURL=thenable.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/retryer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/retryer.ts
__turbopack_context__.s([
    "CancelledError",
    ()=>CancelledError,
    "canFetch",
    ()=>canFetch,
    "createRetryer",
    ()=>createRetryer,
    "isCancelledError",
    ()=>isCancelledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
;
;
function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].isOnline() : true;
}
var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options?.revert;
        this.silent = options?.silent;
    }
};
function isCancelledError(value) {
    return value instanceof CancelledError;
}
function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let continueFn;
    const thenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
    const isResolved = ()=>thenable.status !== "pending";
    const cancel = (cancelOptions)=>{
        if (!isResolved()) {
            const error = new CancelledError(cancelOptions);
            reject(error);
            config.onCancel?.(error);
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusManager"].isFocused() && (config.networkMode === "always" || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            thenable.resolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved()) {
            continueFn?.();
            thenable.reject(value);
        }
    };
    const pause = ()=>{
        return new Promise((continueResolve)=>{
            continueFn = (value)=>{
                if (isResolved() || canContinue()) {
                    continueResolve(value);
                }
            };
            config.onPause?.();
        }).then(()=>{
            continueFn = void 0;
            if (!isResolved()) {
                config.onContinue?.();
            }
        });
    };
    const run = ()=>{
        if (isResolved()) {
            return;
        }
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise ?? config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            if (isResolved()) {
                return;
            }
            const retry = config.retry ?? (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] ? 0 : 3);
            const retryDelay = config.retryDelay ?? defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            config.onFail?.(failureCount, error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sleep"])(delay).then(()=>{
                return canContinue() ? void 0 : pause();
            }).then(()=>{
                if (isRetryCancelled) {
                    reject(error);
                } else {
                    run();
                }
            });
        });
    };
    return {
        promise: thenable,
        status: ()=>thenable.status,
        cancel,
        continue: ()=>{
            continueFn?.();
            return thenable;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) {
                run();
            } else {
                pause().then(run);
            }
            return thenable;
        }
    };
}
;
 //# sourceMappingURL=retryer.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/removable.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/removable.ts
__turbopack_context__.s([
    "Removable",
    ()=>Removable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
;
var Removable = class {
    #gcTimeout;
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.gcTime)) {
            this.#gcTimeout = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime);
        }
    }
    updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] ? Infinity : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
        if (this.#gcTimeout) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#gcTimeout);
            this.#gcTimeout = void 0;
        }
    }
};
;
 //# sourceMappingURL=removable.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/query.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/query.ts
__turbopack_context__.s([
    "Query",
    ()=>Query,
    "fetchState",
    ()=>fetchState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/retryer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/removable.js [app-ssr] (ecmascript)");
;
;
;
;
var Query = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Removable"] {
    #initialState;
    #revertState;
    #cache;
    #client;
    #retryer;
    #defaultOptions;
    #abortSignalConsumed;
    constructor(config){
        super();
        this.#abortSignalConsumed = false;
        this.#defaultOptions = config.defaultOptions;
        this.setOptions(config.options);
        this.observers = [];
        this.#client = config.client;
        this.#cache = this.#client.getQueryCache();
        this.queryKey = config.queryKey;
        this.queryHash = config.queryHash;
        this.#initialState = getDefaultState(this.options);
        this.state = config.state ?? this.#initialState;
        this.scheduleGc();
    }
    get meta() {
        return this.options.meta;
    }
    get promise() {
        return this.#retryer?.promise;
    }
    setOptions(options) {
        this.options = {
            ...this.#defaultOptions,
            ...options
        };
        this.updateGcTime(this.options.gcTime);
        if (this.state && this.state.data === void 0) {
            const defaultState = getDefaultState(this.options);
            if (defaultState.data !== void 0) {
                this.setData(defaultState.data, {
                    updatedAt: defaultState.dataUpdatedAt,
                    manual: true
                });
                this.#initialState = defaultState;
            }
        }
    }
    optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === "idle") {
            this.#cache.remove(this);
        }
    }
    setData(newData, options) {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(this.state.data, newData, this.options);
        this.#dispatch({
            data,
            type: "success",
            dataUpdatedAt: options?.updatedAt,
            manual: options?.manual
        });
        return data;
    }
    setState(state, setStateOptions) {
        this.#dispatch({
            type: "setState",
            state,
            setStateOptions
        });
    }
    cancel(options) {
        const promise = this.#retryer?.promise;
        this.#retryer?.cancel(options);
        return promise ? promise.then(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]) : Promise.resolve();
    }
    destroy() {
        super.destroy();
        this.cancel({
            silent: true
        });
    }
    reset() {
        this.destroy();
        this.setState(this.#initialState);
    }
    isActive() {
        return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(observer.options.enabled, this) !== false);
    }
    isDisabled() {
        if (this.getObserversCount() > 0) {
            return !this.isActive();
        }
        return this.options.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skipToken"] || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(observer.options.staleTime, this) === "static");
        }
        return false;
    }
    isStale() {
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>observer.getCurrentResult().isStale);
        }
        return this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(staleTime = 0) {
        if (this.state.data === void 0) {
            return true;
        }
        if (staleTime === "static") {
            return false;
        }
        if (this.state.isInvalidated) {
            return true;
        }
        return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.state.dataUpdatedAt, staleTime);
    }
    onFocus() {
        const observer = this.observers.find((x)=>x.shouldFetchOnWindowFocus());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    onOnline() {
        const observer = this.observers.find((x)=>x.shouldFetchOnReconnect());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            this.clearGcTimeout();
            this.#cache.notify({
                type: "observerAdded",
                query: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        if (this.observers.includes(observer)) {
            this.observers = this.observers.filter((x)=>x !== observer);
            if (!this.observers.length) {
                if (this.#retryer) {
                    if (this.#abortSignalConsumed) {
                        this.#retryer.cancel({
                            revert: true
                        });
                    } else {
                        this.#retryer.cancelRetry();
                    }
                }
                this.scheduleGc();
            }
            this.#cache.notify({
                type: "observerRemoved",
                query: this,
                observer
            });
        }
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        if (!this.state.isInvalidated) {
            this.#dispatch({
                type: "invalidate"
            });
        }
    }
    async fetch(options, fetchOptions) {
        if (this.state.fetchStatus !== "idle" && // If the promise in the retyer is already rejected, we have to definitely
        // re-start the fetch; there is a chance that the query is still in a
        // pending state when that happens
        this.#retryer?.status() !== "rejected") {
            if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
                this.cancel({
                    silent: true
                });
            } else if (this.#retryer) {
                this.#retryer.continueRetry();
                return this.#retryer.promise;
            }
        }
        if (options) {
            this.setOptions(options);
        }
        if (!this.options.queryFn) {
            const observer = this.observers.find((x)=>x.options.queryFn);
            if (observer) {
                this.setOptions(observer.options);
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!Array.isArray(this.options.queryKey)) {
                console.error(`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`);
            }
        }
        const abortController = new AbortController();
        const addSignalProperty = (object)=>{
            Object.defineProperty(object, "signal", {
                enumerable: true,
                get: ()=>{
                    this.#abortSignalConsumed = true;
                    return abortController.signal;
                }
            });
        };
        const fetchFn = ()=>{
            const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureQueryFn"])(this.options, fetchOptions);
            const createQueryFnContext = ()=>{
                const queryFnContext2 = {
                    client: this.#client,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                addSignalProperty(queryFnContext2);
                return queryFnContext2;
            };
            const queryFnContext = createQueryFnContext();
            this.#abortSignalConsumed = false;
            if (this.options.persister) {
                return this.options.persister(queryFn, queryFnContext, this);
            }
            return queryFn(queryFnContext);
        };
        const createFetchContext = ()=>{
            const context2 = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#client,
                state: this.state,
                fetchFn
            };
            addSignalProperty(context2);
            return context2;
        };
        const context = createFetchContext();
        this.options.behavior?.onFetch(context, this);
        this.#revertState = this.state;
        if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
            this.#dispatch({
                type: "fetch",
                meta: context.fetchOptions?.meta
            });
        }
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRetryer"])({
            initialPromise: fetchOptions?.initialPromise,
            fn: context.fetchFn,
            onCancel: (error)=>{
                if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancelledError"] && error.revert) {
                    this.setState({
                        ...this.#revertState,
                        fetchStatus: "idle"
                    });
                }
                abortController.abort();
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue: ()=>{
                this.#dispatch({
                    type: "continue"
                });
            },
            retry: context.options.retry,
            retryDelay: context.options.retryDelay,
            networkMode: context.options.networkMode,
            canRun: ()=>true
        });
        try {
            const data = await this.#retryer.start();
            if (data === void 0) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`);
                }
                throw new Error(`${this.queryHash} data is undefined`);
            }
            this.setData(data);
            this.#cache.config.onSuccess?.(data, this);
            this.#cache.config.onSettled?.(data, this.state.error, this);
            return data;
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancelledError"]) {
                if (error.silent) {
                    return this.#retryer.promise;
                } else if (error.revert) {
                    if (this.state.data === void 0) {
                        throw error;
                    }
                    return this.state.data;
                }
            }
            this.#dispatch({
                type: "error",
                error
            });
            this.#cache.config.onError?.(error, this);
            this.#cache.config.onSettled?.(this.state.data, error, this);
            throw error;
        } finally{
            this.scheduleGc();
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        fetchFailureCount: action.failureCount,
                        fetchFailureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...state,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...state,
                        ...fetchState(state.data, this.options),
                        fetchMeta: action.meta ?? null
                    };
                case "success":
                    const newState = {
                        ...state,
                        data: action.data,
                        dataUpdateCount: state.dataUpdateCount + 1,
                        dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
                        error: null,
                        isInvalidated: false,
                        status: "success",
                        ...!action.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                    this.#revertState = action.manual ? newState : void 0;
                    return newState;
                case "error":
                    const error = action.error;
                    return {
                        ...state,
                        error,
                        errorUpdateCount: state.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: state.fetchFailureCount + 1,
                        fetchFailureReason: error,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return {
                        ...state,
                        isInvalidated: true
                    };
                case "setState":
                    return {
                        ...state,
                        ...action.state
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.observers.forEach((observer)=>{
                observer.onQueryUpdate();
            });
            this.#cache.notify({
                query: this,
                type: "updated",
                action
            });
        });
    }
};
function fetchState(data, options) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canFetch"])(options.networkMode) ? "fetching" : "paused",
        ...data === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
function getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasData = data !== void 0;
    const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: false,
        status: hasData ? "success" : "pending",
        fetchStatus: "idle"
    };
}
;
 //# sourceMappingURL=query.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryCache.ts
__turbopack_context__.s([
    "QueryCache",
    ()=>QueryCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
;
;
;
;
var QueryCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(config = {}){
        super();
        this.config = config;
        this.#queries = /* @__PURE__ */ new Map();
    }
    #queries;
    build(client, options, state) {
        const queryKey = options.queryKey;
        const queryHash = options.queryHash ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(queryKey, options);
        let query = this.get(queryHash);
        if (!query) {
            query = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Query"]({
                client,
                queryKey,
                queryHash,
                options: client.defaultQueryOptions(options),
                state,
                defaultOptions: client.getQueryDefaults(queryKey)
            });
            this.add(query);
        }
        return query;
    }
    add(query) {
        if (!this.#queries.has(query.queryHash)) {
            this.#queries.set(query.queryHash, query);
            this.notify({
                type: "added",
                query
            });
        }
    }
    remove(query) {
        const queryInMap = this.#queries.get(query.queryHash);
        if (queryInMap) {
            query.destroy();
            if (queryInMap === query) {
                this.#queries.delete(query.queryHash);
            }
            this.notify({
                type: "removed",
                query
            });
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                this.remove(query);
            });
        });
    }
    get(queryHash) {
        return this.#queries.get(queryHash);
    }
    getAll() {
        return [
            ...this.#queries.values()
        ];
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchQuery"])(defaultedFilters, query));
    }
    findAll(filters = {}) {
        const queries = this.getAll();
        return Object.keys(filters).length > 0 ? queries.filter((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchQuery"])(filters, query)) : queries;
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    onFocus() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onFocus();
            });
        });
    }
    onOnline() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onOnline();
            });
        });
    }
};
;
 //# sourceMappingURL=queryCache.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/mutation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutation.ts
__turbopack_context__.s([
    "Mutation",
    ()=>Mutation,
    "getDefaultState",
    ()=>getDefaultState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/removable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/retryer.js [app-ssr] (ecmascript)");
;
;
;
var Mutation = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Removable"] {
    #client;
    #observers;
    #mutationCache;
    #retryer;
    constructor(config){
        super();
        this.#client = config.client;
        this.mutationId = config.mutationId;
        this.#mutationCache = config.mutationCache;
        this.#observers = [];
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
    setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(observer) {
        if (!this.#observers.includes(observer)) {
            this.#observers.push(observer);
            this.clearGcTimeout();
            this.#mutationCache.notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        this.#observers = this.#observers.filter((x)=>x !== observer);
        this.scheduleGc();
        this.#mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!this.#observers.length) {
            if (this.state.status === "pending") {
                this.scheduleGc();
            } else {
                this.#mutationCache.remove(this);
            }
        }
    }
    continue() {
        return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
        this.execute(this.state.variables);
    }
    async execute(variables) {
        const onContinue = ()=>{
            this.#dispatch({
                type: "continue"
            });
        };
        const mutationFnContext = {
            client: this.#client,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRetryer"])({
            fn: ()=>{
                if (!this.options.mutationFn) {
                    return Promise.reject(new Error("No mutationFn found"));
                }
                return this.options.mutationFn(variables, mutationFnContext);
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>this.#mutationCache.canRun(this)
        });
        const restored = this.state.status === "pending";
        const isPaused = !this.#retryer.canStart();
        try {
            if (restored) {
                onContinue();
            } else {
                this.#dispatch({
                    type: "pending",
                    variables,
                    isPaused
                });
                await this.#mutationCache.config.onMutate?.(variables, this, mutationFnContext);
                const context = await this.options.onMutate?.(variables, mutationFnContext);
                if (context !== this.state.context) {
                    this.#dispatch({
                        type: "pending",
                        context,
                        variables,
                        isPaused
                    });
                }
            }
            const data = await this.#retryer.start();
            await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this, mutationFnContext);
            await this.options.onSuccess?.(data, variables, this.state.context, mutationFnContext);
            await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this, mutationFnContext);
            await this.options.onSettled?.(data, null, variables, this.state.context, mutationFnContext);
            this.#dispatch({
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                await this.#mutationCache.config.onError?.(error, variables, this.state.context, this, mutationFnContext);
                await this.options.onError?.(error, variables, this.state.context, mutationFnContext);
                await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this, mutationFnContext);
                await this.options.onSettled?.(void 0, error, variables, this.state.context, mutationFnContext);
                throw error;
            } finally{
                this.#dispatch({
                    type: "error",
                    error
                });
            }
        } finally{
            this.#mutationCache.runNext(this);
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        failureCount: action.failureCount,
                        failureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        isPaused: true
                    };
                case "continue":
                    return {
                        ...state,
                        isPaused: false
                    };
                case "pending":
                    return {
                        ...state,
                        context: action.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: action.isPaused,
                        status: "pending",
                        variables: action.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...state,
                        data: action.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: false
                    };
                case "error":
                    return {
                        ...state,
                        data: void 0,
                        error: action.error,
                        failureCount: state.failureCount + 1,
                        failureReason: action.error,
                        isPaused: false,
                        status: "error"
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#observers.forEach((observer)=>{
                observer.onMutationUpdate(action);
            });
            this.#mutationCache.notify({
                mutation: this,
                type: "updated",
                action
            });
        });
    }
};
function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
;
 //# sourceMappingURL=mutation.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/mutationCache.ts
__turbopack_context__.s([
    "MutationCache",
    ()=>MutationCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/mutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
;
;
;
;
var MutationCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(config = {}){
        super();
        this.config = config;
        this.#mutations = /* @__PURE__ */ new Set();
        this.#scopes = /* @__PURE__ */ new Map();
        this.#mutationId = 0;
    }
    #mutations;
    #scopes;
    #mutationId;
    build(client, options, state) {
        const mutation = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mutation"]({
            client,
            mutationCache: this,
            mutationId: ++this.#mutationId,
            options: client.defaultMutationOptions(options),
            state
        });
        this.add(mutation);
        return mutation;
    }
    add(mutation) {
        this.#mutations.add(mutation);
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const scopedMutations = this.#scopes.get(scope);
            if (scopedMutations) {
                scopedMutations.push(mutation);
            } else {
                this.#scopes.set(scope, [
                    mutation
                ]);
            }
        }
        this.notify({
            type: "added",
            mutation
        });
    }
    remove(mutation) {
        if (this.#mutations.delete(mutation)) {
            const scope = scopeFor(mutation);
            if (typeof scope === "string") {
                const scopedMutations = this.#scopes.get(scope);
                if (scopedMutations) {
                    if (scopedMutations.length > 1) {
                        const index = scopedMutations.indexOf(mutation);
                        if (index !== -1) {
                            scopedMutations.splice(index, 1);
                        }
                    } else if (scopedMutations[0] === mutation) {
                        this.#scopes.delete(scope);
                    }
                }
            }
        }
        this.notify({
            type: "removed",
            mutation
        });
    }
    canRun(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const mutationsWithSameScope = this.#scopes.get(scope);
            const firstPendingMutation = mutationsWithSameScope?.find((m)=>m.state.status === "pending");
            return !firstPendingMutation || firstPendingMutation === mutation;
        } else {
            return true;
        }
    }
    runNext(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const foundMutation = this.#scopes.get(scope)?.find((m)=>m !== mutation && m.state.isPaused);
            return foundMutation?.continue() ?? Promise.resolve();
        } else {
            return Promise.resolve();
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#mutations.forEach((mutation)=>{
                this.notify({
                    type: "removed",
                    mutation
                });
            });
            this.#mutations.clear();
            this.#scopes.clear();
        });
    }
    getAll() {
        return Array.from(this.#mutations);
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchMutation"])(defaultedFilters, mutation));
    }
    findAll(filters = {}) {
        return this.getAll().filter((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchMutation"])(filters, mutation));
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    resumePausedMutations() {
        const pausedMutations = this.getAll().filter((x)=>x.state.isPaused);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>Promise.all(pausedMutations.map((mutation)=>mutation.continue().catch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]))));
    }
};
function scopeFor(mutation) {
    return mutation.options.scope?.id;
}
;
 //# sourceMappingURL=mutationCache.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/infiniteQueryBehavior.ts
__turbopack_context__.s([
    "hasNextPage",
    ()=>hasNextPage,
    "hasPreviousPage",
    ()=>hasPreviousPage,
    "infiniteQueryBehavior",
    ()=>infiniteQueryBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
;
function infiniteQueryBehavior(pages) {
    return {
        onFetch: (context, query)=>{
            const options = context.options;
            const direction = context.fetchOptions?.meta?.fetchMore?.direction;
            const oldPages = context.state.data?.pages || [];
            const oldPageParams = context.state.data?.pageParams || [];
            let result = {
                pages: [],
                pageParams: []
            };
            let currentPage = 0;
            const fetchFn = async ()=>{
                let cancelled = false;
                const addSignalProperty = (object)=>{
                    Object.defineProperty(object, "signal", {
                        enumerable: true,
                        get: ()=>{
                            if (context.signal.aborted) {
                                cancelled = true;
                            } else {
                                context.signal.addEventListener("abort", ()=>{
                                    cancelled = true;
                                });
                            }
                            return context.signal;
                        }
                    });
                };
                const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureQueryFn"])(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous)=>{
                    if (cancelled) {
                        return Promise.reject();
                    }
                    if (param == null && data.pages.length) {
                        return Promise.resolve(data);
                    }
                    const createQueryFnContext = ()=>{
                        const queryFnContext2 = {
                            client: context.client,
                            queryKey: context.queryKey,
                            pageParam: param,
                            direction: previous ? "backward" : "forward",
                            meta: context.options.meta
                        };
                        addSignalProperty(queryFnContext2);
                        return queryFnContext2;
                    };
                    const queryFnContext = createQueryFnContext();
                    const page = await queryFn(queryFnContext);
                    const { maxPages } = context.options;
                    const addTo = previous ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToStart"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToEnd"];
                    return {
                        pages: addTo(data.pages, page, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    };
                };
                if (direction && oldPages.length) {
                    const previous = direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const oldData = {
                        pages: oldPages,
                        pageParams: oldPageParams
                    };
                    const param = pageParamFn(options, oldData);
                    result = await fetchPage(oldData, param, previous);
                } else {
                    const remainingPages = pages ?? oldPages.length;
                    do {
                        const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
                        if (currentPage > 0 && param == null) {
                            break;
                        }
                        result = await fetchPage(result, param);
                        currentPage++;
                    }while (currentPage < remainingPages)
                }
                return result;
            };
            if (context.options.persister) {
                context.fetchFn = ()=>{
                    return context.options.persister?.(fetchFn, {
                        client: context.client,
                        queryKey: context.queryKey,
                        meta: context.options.meta,
                        signal: context.signal
                    }, query);
                };
            } else {
                context.fetchFn = fetchFn;
            }
        }
    };
}
function getNextPageParam(options, { pages, pageParams }) {
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
    if (!data) return false;
    return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam) return false;
    return getPreviousPageParam(options, data) != null;
}
;
 //# sourceMappingURL=infiniteQueryBehavior.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryClient.ts
__turbopack_context__.s([
    "QueryClient",
    ()=>QueryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var QueryClient = class {
    #queryCache;
    #mutationCache;
    #defaultOptions;
    #queryDefaults;
    #mutationDefaults;
    #mountCount;
    #unsubscribeFocus;
    #unsubscribeOnline;
    constructor(config = {}){
        this.#queryCache = config.queryCache || new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryCache"]();
        this.#mutationCache = config.mutationCache || new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MutationCache"]();
        this.#defaultOptions = config.defaultOptions || {};
        this.#queryDefaults = /* @__PURE__ */ new Map();
        this.#mutationDefaults = /* @__PURE__ */ new Map();
        this.#mountCount = 0;
    }
    mount() {
        this.#mountCount++;
        if (this.#mountCount !== 1) return;
        this.#unsubscribeFocus = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusManager"].subscribe(async (focused)=>{
            if (focused) {
                await this.resumePausedMutations();
                this.#queryCache.onFocus();
            }
        });
        this.#unsubscribeOnline = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].subscribe(async (online)=>{
            if (online) {
                await this.resumePausedMutations();
                this.#queryCache.onOnline();
            }
        });
    }
    unmount() {
        this.#mountCount--;
        if (this.#mountCount !== 0) return;
        this.#unsubscribeFocus?.();
        this.#unsubscribeFocus = void 0;
        this.#unsubscribeOnline?.();
        this.#unsubscribeOnline = void 0;
    }
    isFetching(filters) {
        return this.#queryCache.findAll({
            ...filters,
            fetchStatus: "fetching"
        }).length;
    }
    isMutating(filters) {
        return this.#mutationCache.findAll({
            ...filters,
            status: "pending"
        }).length;
    }
    /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */ getQueryData(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state.data;
    }
    ensureQueryData(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        const query = this.#queryCache.build(this, defaultedOptions);
        const cachedData = query.state.data;
        if (cachedData === void 0) {
            return this.fetchQuery(options);
        }
        if (options.revalidateIfStale && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query))) {
            void this.prefetchQuery(defaultedOptions);
        }
        return Promise.resolve(cachedData);
    }
    getQueriesData(filters) {
        return this.#queryCache.findAll(filters).map(({ queryKey, state })=>{
            const data = state.data;
            return [
                queryKey,
                data
            ];
        });
    }
    setQueryData(queryKey, updater, options) {
        const defaultedOptions = this.defaultQueryOptions({
            queryKey
        });
        const query = this.#queryCache.get(defaultedOptions.queryHash);
        const prevData = query?.state.data;
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionalUpdate"])(updater, prevData);
        if (data === void 0) {
            return void 0;
        }
        return this.#queryCache.build(this, defaultedOptions).setData(data, {
            ...options,
            manual: true
        });
    }
    setQueriesData(filters, updater, options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map(({ queryKey })=>[
                    queryKey,
                    this.setQueryData(queryKey, updater, options)
                ]));
    }
    getQueryState(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state;
    }
    removeQueries(filters) {
        const queryCache = this.#queryCache;
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                queryCache.remove(query);
            });
        });
    }
    resetQueries(filters, options) {
        const queryCache = this.#queryCache;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                query.reset();
            });
            return this.refetchQueries({
                type: "active",
                ...filters
            }, options);
        });
    }
    cancelQueries(filters, cancelOptions = {}) {
        const defaultedCancelOptions = {
            revert: true,
            ...cancelOptions
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map((query)=>query.cancel(defaultedCancelOptions)));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    invalidateQueries(filters, options = {}) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#queryCache.findAll(filters).forEach((query)=>{
                query.invalidate();
            });
            if (filters?.refetchType === "none") {
                return Promise.resolve();
            }
            return this.refetchQueries({
                ...filters,
                type: filters?.refetchType ?? filters?.type ?? "active"
            }, options);
        });
    }
    refetchQueries(filters, options = {}) {
        const fetchOptions = {
            ...options,
            cancelRefetch: options.cancelRefetch ?? true
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).filter((query)=>!query.isDisabled() && !query.isStatic()).map((query)=>{
                let promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) {
                    promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
                }
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
            }));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchQuery(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        if (defaultedOptions.retry === void 0) {
            defaultedOptions.retry = false;
        }
        const query = this.#queryCache.build(this, defaultedOptions);
        return query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
    }
    prefetchQuery(options) {
        return this.fetchQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchInfiniteQuery(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.fetchQuery(options);
    }
    prefetchInfiniteQuery(options) {
        return this.fetchInfiniteQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
    }
    ensureInfiniteQueryData(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.ensureQueryData(options);
    }
    resumePausedMutations() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) {
            return this.#mutationCache.resumePausedMutations();
        }
        return Promise.resolve();
    }
    getQueryCache() {
        return this.#queryCache;
    }
    getMutationCache() {
        return this.#mutationCache;
    }
    getDefaultOptions() {
        return this.#defaultOptions;
    }
    setDefaultOptions(options) {
        this.#defaultOptions = options;
    }
    setQueryDefaults(queryKey, options) {
        this.#queryDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(queryKey), {
            queryKey,
            defaultOptions: options
        });
    }
    getQueryDefaults(queryKey) {
        const defaults = [
            ...this.#queryDefaults.values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partialMatchKey"])(queryKey, queryDefault.queryKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    setMutationDefaults(mutationKey, options) {
        this.#mutationDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashKey"])(mutationKey), {
            mutationKey,
            defaultOptions: options
        });
    }
    getMutationDefaults(mutationKey) {
        const defaults = [
            ...this.#mutationDefaults.values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partialMatchKey"])(mutationKey, queryDefault.mutationKey)) {
                Object.assign(result, queryDefault.defaultOptions);
            }
        });
        return result;
    }
    defaultQueryOptions(options) {
        if (options._defaulted) {
            return options;
        }
        const defaultedOptions = {
            ...this.#defaultOptions.queries,
            ...this.getQueryDefaults(options.queryKey),
            ...options,
            _defaulted: true
        };
        if (!defaultedOptions.queryHash) {
            defaultedOptions.queryHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(defaultedOptions.queryKey, defaultedOptions);
        }
        if (defaultedOptions.refetchOnReconnect === void 0) {
            defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
        }
        if (defaultedOptions.throwOnError === void 0) {
            defaultedOptions.throwOnError = !!defaultedOptions.suspense;
        }
        if (!defaultedOptions.networkMode && defaultedOptions.persister) {
            defaultedOptions.networkMode = "offlineFirst";
        }
        if (defaultedOptions.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skipToken"]) {
            defaultedOptions.enabled = false;
        }
        return defaultedOptions;
    }
    defaultMutationOptions(options) {
        if (options?._defaulted) {
            return options;
        }
        return {
            ...this.#defaultOptions.mutations,
            ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
            ...options,
            _defaulted: true
        };
    }
    clear() {
        this.#queryCache.clear();
        this.#mutationCache.clear();
    }
};
;
 //# sourceMappingURL=queryClient.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryClientContext",
    ()=>QueryClientContext,
    "QueryClientProvider",
    ()=>QueryClientProvider,
    "useQueryClient",
    ()=>useQueryClient
]);
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = ({ client, children })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        client.mount();
        return ()=>{
            client.unmount();
        };
    }, [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/queryObserver.ts
__turbopack_context__.s([
    "QueryObserver",
    ()=>QueryObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/thenable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/timeoutManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var QueryObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(client, options){
        super();
        this.options = options;
        this.#client = client;
        this.#selectError = null;
        this.#currentThenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
        this.bindMethods();
        this.setOptions(options);
    }
    #client;
    #currentQuery = void 0;
    #currentQueryInitialState = void 0;
    #currentResult = void 0;
    #currentResultState;
    #currentResultOptions;
    #currentThenable;
    #selectError;
    #selectFn;
    #selectResult;
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    #lastQueryWithDefinedData;
    #staleTimeoutId;
    #refetchIntervalId;
    #currentRefetchInterval;
    #trackedProps = /* @__PURE__ */ new Set();
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            this.#currentQuery.addObserver(this);
            if (shouldFetchOnMount(this.#currentQuery, this.options)) {
                this.#executeFetch();
            } else {
                this.updateResult();
            }
            this.#updateTimers();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.destroy();
        }
    }
    shouldFetchOnReconnect() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return shouldFetchOn(this.#currentQuery, this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        this.#clearStaleTimeout();
        this.#clearRefetchInterval();
        this.#currentQuery.removeObserver(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = this.#currentQuery;
        this.options = this.#client.defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== "boolean") {
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        }
        this.#updateQuery();
        this.#currentQuery.setOptions(this.options);
        if (prevOptions._defaulted && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getQueryCache().notify({
                type: "observerOptionsUpdated",
                query: this.#currentQuery,
                observer: this
            });
        }
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally(this.#currentQuery, prevQuery, this.options, prevOptions)) {
            this.#executeFetch();
        }
        this.updateResult();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(prevOptions.staleTime, this.#currentQuery))) {
            this.#updateStaleTimeout();
        }
        const nextRefetchInterval = this.#computeRefetchInterval();
        if (mounted && (this.#currentQuery !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, this.#currentQuery) || nextRefetchInterval !== this.#currentRefetchInterval)) {
            this.#updateRefetchInterval(nextRefetchInterval);
        }
    }
    getOptimisticResult(options) {
        const query = this.#client.getQueryCache().build(this.#client, options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
            this.#currentResult = result;
            this.#currentResultOptions = this.options;
            this.#currentResultState = this.#currentQuery.state;
        }
        return result;
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked?.(key);
                if (key === "promise") {
                    this.trackProp("data");
                    if (!this.options.experimental_prefetchInRender && this.#currentThenable.status === "pending") {
                        this.#currentThenable.reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
                    }
                }
                return Reflect.get(target, key);
            }
        });
    }
    trackProp(key) {
        this.#trackedProps.add(key);
    }
    getCurrentQuery() {
        return this.#currentQuery;
    }
    refetch({ ...options } = {}) {
        return this.fetch({
            ...options
        });
    }
    fetchOptimistic(options) {
        const defaultedOptions = this.#client.defaultQueryOptions(options);
        const query = this.#client.getQueryCache().build(this.#client, defaultedOptions);
        return query.fetch().then(()=>this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
        return this.#executeFetch({
            ...fetchOptions,
            cancelRefetch: fetchOptions.cancelRefetch ?? true
        }).then(()=>{
            this.updateResult();
            return this.#currentResult;
        });
    }
    #executeFetch(fetchOptions) {
        this.#updateQuery();
        let promise = this.#currentQuery.fetch(this.options, fetchOptions);
        if (!fetchOptions?.throwOnError) {
            promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]);
        }
        return promise;
    }
    #updateStaleTimeout() {
        this.#clearStaleTimeout();
        const staleTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(this.options.staleTime, this.#currentQuery);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] || this.#currentResult.isStale || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(staleTime)) {
            return;
        }
        const time = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.#currentResult.dataUpdatedAt, staleTime);
        const timeout = time + 1;
        this.#staleTimeoutId = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setTimeout(()=>{
            if (!this.#currentResult.isStale) {
                this.updateResult();
            }
        }, timeout);
    }
    #computeRefetchInterval() {
        return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.#currentQuery) : this.options.refetchInterval) ?? false;
    }
    #updateRefetchInterval(nextInterval) {
        this.#clearRefetchInterval();
        this.#currentRefetchInterval = nextInterval;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(this.options.enabled, this.#currentQuery) === false || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.#currentRefetchInterval) || this.#currentRefetchInterval === 0) {
            return;
        }
        this.#refetchIntervalId = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].setInterval(()=>{
            if (this.options.refetchIntervalInBackground || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusManager"].isFocused()) {
                this.#executeFetch();
            }
        }, this.#currentRefetchInterval);
    }
    #updateTimers() {
        this.#updateStaleTimeout();
        this.#updateRefetchInterval(this.#computeRefetchInterval());
    }
    #clearStaleTimeout() {
        if (this.#staleTimeoutId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearTimeout(this.#staleTimeoutId);
            this.#staleTimeoutId = void 0;
        }
    }
    #clearRefetchInterval() {
        if (this.#refetchIntervalId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$timeoutManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timeoutManager"].clearInterval(this.#refetchIntervalId);
            this.#refetchIntervalId = void 0;
        }
    }
    createResult(query, options) {
        const prevQuery = this.#currentQuery;
        const prevOptions = this.options;
        const prevResult = this.#currentResult;
        const prevResultState = this.#currentResultState;
        const prevResultOptions = this.#currentResultOptions;
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : this.#currentQueryInitialState;
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) {
                newState = {
                    ...newState,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchState"])(state.data, query.options)
                };
            }
            if (options._optimisticResults === "isRestoring") {
                newState.fetchStatus = "idle";
            }
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if (prevResult?.isPlaceholderData && options.placeholderData === prevResultOptions?.placeholderData) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else {
                placeholderData = typeof options.placeholderData === "function" ? options.placeholderData(this.#lastQueryWithDefinedData?.state.data, this.#lastQueryWithDefinedData) : options.placeholderData;
            }
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === prevResultState?.data && options.select === this.#selectFn) {
                data = this.#selectResult;
            } else {
                try {
                    this.#selectFn = options.select;
                    data = options.select(data);
                    data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceData"])(prevResult?.data, data, options);
                    this.#selectResult = data;
                    this.#selectError = null;
                } catch (selectError) {
                    this.#selectError = selectError;
                }
            }
        }
        if (this.#selectError) {
            error = this.#selectError;
            data = this.#selectResult;
            errorUpdatedAt = Date.now();
            status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: newState.dataUpdateCount > 0 || newState.errorUpdateCount > 0,
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            promise: this.#currentThenable,
            isEnabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
            const finalizeThenableIfPossible = (thenable)=>{
                if (nextResult.status === "error") {
                    thenable.reject(nextResult.error);
                } else if (nextResult.data !== void 0) {
                    thenable.resolve(nextResult.data);
                }
            };
            const recreateThenable = ()=>{
                const pending = this.#currentThenable = nextResult.promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pendingThenable"])();
                finalizeThenableIfPossible(pending);
            };
            const prevThenable = this.#currentThenable;
            switch(prevThenable.status){
                case "pending":
                    if (query.queryHash === prevQuery.queryHash) {
                        finalizeThenableIfPossible(prevThenable);
                    }
                    break;
                case "fulfilled":
                    if (nextResult.status === "error" || nextResult.data !== prevThenable.value) {
                        recreateThenable();
                    }
                    break;
                case "rejected":
                    if (nextResult.status !== "error" || nextResult.error !== prevThenable.reason) {
                        recreateThenable();
                    }
                    break;
            }
        }
        return nextResult;
    }
    updateResult() {
        const prevResult = this.#currentResult;
        const nextResult = this.createResult(this.#currentQuery, this.options);
        this.#currentResultState = this.#currentQuery.state;
        this.#currentResultOptions = this.options;
        if (this.#currentResultState.data !== void 0) {
            this.#lastQueryWithDefinedData = this.#currentQuery;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(nextResult, prevResult)) {
            return;
        }
        this.#currentResult = nextResult;
        const shouldNotifyListeners = ()=>{
            if (!prevResult) {
                return true;
            }
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.#trackedProps.size) {
                return true;
            }
            const includedProps = new Set(notifyOnChangePropsValue ?? this.#trackedProps);
            if (this.options.throwOnError) {
                includedProps.add("error");
            }
            return Object.keys(this.#currentResult).some((key)=>{
                const typedKey = key;
                const changed = this.#currentResult[typedKey] !== prevResult[typedKey];
                return changed && includedProps.has(typedKey);
            });
        };
        this.#notify({
            listeners: shouldNotifyListeners()
        });
    }
    #updateQuery() {
        const query = this.#client.getQueryCache().build(this.#client, this.options);
        if (query === this.#currentQuery) {
            return;
        }
        const prevQuery = this.#currentQuery;
        this.#currentQuery = query;
        this.#currentQueryInitialState = query.state;
        if (this.hasListeners()) {
            prevQuery?.removeObserver(this);
            query.addObserver(this);
        }
    }
    onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) {
            this.#updateTimers();
        }
    }
    #notify(notifyOptions) {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (notifyOptions.listeners) {
                this.listeners.forEach((listener)=>{
                    listener(this.#currentResult);
                });
            }
            this.#client.getQueryCache().notify({
                query: this.#currentQuery,
                type: "observerResultsUpdated"
            });
        });
    }
};
function shouldLoadOnMount(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEnabled"])(options.enabled, query) !== false && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveStaleTime"])(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(observer.getCurrentResult(), optimisticResult)) {
        return true;
    }
    return false;
}
;
 //# sourceMappingURL=queryObserver.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryErrorResetBoundary",
    ()=>QueryErrorResetBoundary,
    "useQueryErrorResetBoundary",
    ()=>useQueryErrorResetBoundary
]);
// src/QueryErrorResetBoundary.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](createValue());
var useQueryErrorResetBoundary = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>createValue());
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};
;
 //# sourceMappingURL=QueryErrorResetBoundary.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensurePreventErrorBoundaryRetry",
    ()=>ensurePreventErrorBoundaryRetry,
    "getHasError",
    ()=>getHasError,
    "useClearResetErrorBoundary",
    ()=>useClearResetErrorBoundary
]);
// src/errorBoundaryUtils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
"use client";
;
;
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary)=>{
    if (options.suspense || options.throwOnError || options.experimental_prefetchInRender) {
        if (!errorResetBoundary.isReset()) {
            options.retryOnMount = false;
        }
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        errorResetBoundary.clearReset();
    }, [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldThrowError"])(throwOnError, [
        result.error,
        query
    ]));
};
;
 //# sourceMappingURL=errorBoundaryUtils.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IsRestoringProvider",
    ()=>IsRestoringProvider,
    "useIsRestoring",
    ()=>useIsRestoring
]);
// src/IsRestoringProvider.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var IsRestoringContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](false);
var useIsRestoring = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;
;
 //# sourceMappingURL=IsRestoringProvider.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/suspense.ts
__turbopack_context__.s([
    "defaultThrowOnError",
    ()=>defaultThrowOnError,
    "ensureSuspenseTimers",
    ()=>ensureSuspenseTimers,
    "fetchOptimistic",
    ()=>fetchOptimistic,
    "shouldSuspend",
    ()=>shouldSuspend,
    "willFetch",
    ()=>willFetch
]);
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") {
            defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
        }
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>defaultedOptions?.suspense && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });
;
 //# sourceMappingURL=suspense.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseQuery",
    ()=>useBaseQuery
]);
// src/useBaseQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/IsRestoringProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/suspense.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function useBaseQuery(options, Observer, queryClient) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof options !== "object" || Array.isArray(options)) {
            throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
        }
    }
    const isRestoring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$IsRestoringProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsRestoring"])();
    const errorResetBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryErrorResetBoundary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryErrorResetBoundary"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    client.getDefaultOptions().queries?._experimental_beforeQuery?.(defaultedOptions);
    if ("TURBOPACK compile-time truthy", 1) {
        if (!defaultedOptions.queryFn) {
            console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
        }
    }
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureSuspenseTimers"])(defaultedOptions);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensurePreventErrorBoundaryRetry"])(defaultedOptions, errorResetBoundary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useClearResetErrorBoundary"])(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>new Observer(client, defaultedOptions));
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((onStoreChange)=>{
        const unsubscribe = shouldSubscribe ? observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)) : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        observer.updateResult();
        return unsubscribe;
    }, [
        observer,
        shouldSubscribe
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        observer.setOptions(defaultedOptions);
    }, [
        defaultedOptions,
        observer
    ]);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shouldSuspend"])(defaultedOptions, result)) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$errorBoundaryUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHasError"])({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query: client.getQueryCache().get(defaultedOptions.queryHash),
        suspense: defaultedOptions.suspense
    })) {
        throw result.error;
    }
    ;
    client.getDefaultOptions().queries?._experimental_afterQuery?.(defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isServer"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["willFetch"])(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$suspense$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchOptimistic"])(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        client.getQueryCache().get(defaultedOptions.queryHash)?.promise;
        promise?.catch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"]).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}
;
 //# sourceMappingURL=useBaseQuery.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
// src/useQuery.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+query-core@5.90.5/node_modules/@tanstack/query-core/build/modern/queryObserver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@tanstack+react-query@5.90.5_react@19.2.0/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js [app-ssr] (ecmascript)");
"use client";
;
;
function useQuery(options, queryClient) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$90$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useBaseQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBaseQuery"])(options, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$90$2e$5$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryObserver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryObserver"], queryClient);
}
;
 //# sourceMappingURL=useQuery.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@zag-js+utils@1.26.3/node_modules/@zag-js/utils/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timer",
    ()=>Timer,
    "add",
    ()=>add,
    "addOrRemove",
    ()=>addOrRemove,
    "callAll",
    ()=>callAll,
    "cast",
    ()=>cast,
    "chunk",
    ()=>chunk,
    "clampPercent",
    ()=>clampPercent,
    "clampValue",
    ()=>clampValue,
    "clear",
    ()=>clear,
    "compact",
    ()=>compact,
    "createSplitProps",
    ()=>createSplitProps,
    "createStore",
    ()=>createStore,
    "debounce",
    ()=>debounce,
    "decrementValue",
    ()=>decrementValue,
    "diff",
    ()=>diff,
    "ensure",
    ()=>ensure,
    "ensureProps",
    ()=>ensureProps,
    "first",
    ()=>first,
    "flatArray",
    ()=>flatArray,
    "fromLength",
    ()=>fromLength,
    "getClosestValue",
    ()=>getClosestValue,
    "getClosestValueIndex",
    ()=>getClosestValueIndex,
    "getMaxValueAtIndex",
    ()=>getMaxValueAtIndex,
    "getMinValueAtIndex",
    ()=>getMinValueAtIndex,
    "getNextStepValue",
    ()=>getNextStepValue,
    "getPercentValue",
    ()=>getPercentValue,
    "getPreviousStepValue",
    ()=>getPreviousStepValue,
    "getValuePercent",
    ()=>getValuePercent,
    "getValueRanges",
    ()=>getValueRanges,
    "getValueSetterAtIndex",
    ()=>getValueSetterAtIndex,
    "getValueTransformer",
    ()=>getValueTransformer,
    "has",
    ()=>has,
    "hasProp",
    ()=>hasProp,
    "identity",
    ()=>identity,
    "incrementValue",
    ()=>incrementValue,
    "insertAt",
    ()=>insertAt,
    "invariant",
    ()=>invariant,
    "isArray",
    ()=>isArray,
    "isBoolean",
    ()=>isBoolean,
    "isDev",
    ()=>isDev,
    "isEmpty",
    ()=>isEmpty,
    "isEqual",
    ()=>isEqual,
    "isFunction",
    ()=>isFunction,
    "isNaN",
    ()=>isNaN,
    "isNull",
    ()=>isNull,
    "isNumber",
    ()=>isNumber,
    "isObject",
    ()=>isObject,
    "isObjectLike",
    ()=>isObjectLike,
    "isPlainObject",
    ()=>isPlainObject,
    "isString",
    ()=>isString,
    "isValueAtMax",
    ()=>isValueAtMax,
    "isValueAtMin",
    ()=>isValueAtMin,
    "isValueWithinRange",
    ()=>isValueWithinRange,
    "json",
    ()=>json,
    "last",
    ()=>last,
    "match",
    ()=>match,
    "mod",
    ()=>mod,
    "nan",
    ()=>nan,
    "next",
    ()=>next,
    "nextIndex",
    ()=>nextIndex,
    "noop",
    ()=>noop,
    "omit",
    ()=>omit,
    "partition",
    ()=>partition,
    "pick",
    ()=>pick,
    "prev",
    ()=>prev,
    "prevIndex",
    ()=>prevIndex,
    "remove",
    ()=>remove,
    "removeAt",
    ()=>removeAt,
    "roundToDpr",
    ()=>roundToDpr,
    "roundToStepPrecision",
    ()=>roundToStepPrecision,
    "roundValue",
    ()=>roundValue,
    "runIfFn",
    ()=>runIfFn,
    "setRafInterval",
    ()=>setRafInterval,
    "setRafTimeout",
    ()=>setRafTimeout,
    "setValueAtIndex",
    ()=>setValueAtIndex,
    "snapValueToStep",
    ()=>snapValueToStep,
    "splitProps",
    ()=>splitProps,
    "throttle",
    ()=>throttle,
    "toArray",
    ()=>toArray,
    "toFixedNumber",
    ()=>toFixedNumber,
    "toPx",
    ()=>toPx,
    "tryCatch",
    ()=>tryCatch,
    "uniq",
    ()=>uniq,
    "uuid",
    ()=>uuid,
    "warn",
    ()=>warn,
    "wrap",
    ()=>wrap
]);
var __defProp = Object.defineProperty;
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
// src/array.ts
function toArray(v) {
    if (v == null) return [];
    return Array.isArray(v) ? v : [
        v
    ];
}
var fromLength = (length)=>Array.from(Array(length).keys());
var first = (v)=>v[0];
var last = (v)=>v[v.length - 1];
var isEmpty = (v)=>v.length === 0;
var has = (v, t)=>v.indexOf(t) !== -1;
var add = (v, ...items)=>v.concat(items);
var remove = (v, ...items)=>v.filter((t)=>!items.includes(t));
var removeAt = (v, i)=>v.filter((_, idx)=>idx !== i);
var insertAt = (v, i, ...items)=>[
        ...v.slice(0, i),
        ...items,
        ...v.slice(i)
    ];
var uniq = (v)=>Array.from(new Set(v));
var diff = (a, b)=>{
    const set = new Set(b);
    return a.filter((t)=>!set.has(t));
};
var addOrRemove = (v, item)=>has(v, item) ? remove(v, item) : add(v, item);
function clear(v) {
    while(v.length > 0)v.pop();
    return v;
}
function nextIndex(v, idx, opts = {}) {
    const { step = 1, loop = true } = opts;
    const next2 = idx + step;
    const len = v.length;
    const last2 = len - 1;
    if (idx === -1) return step > 0 ? 0 : last2;
    if (next2 < 0) return loop ? last2 : 0;
    if (next2 >= len) return loop ? 0 : idx > len ? len : idx;
    return next2;
}
function next(v, idx, opts = {}) {
    return v[nextIndex(v, idx, opts)];
}
function prevIndex(v, idx, opts = {}) {
    const { step = 1, loop = true } = opts;
    return nextIndex(v, idx, {
        step: -step,
        loop
    });
}
function prev(v, index, opts = {}) {
    return v[prevIndex(v, index, opts)];
}
function chunk(v, size) {
    return v.reduce((rows, value, index)=>{
        if (index % size === 0) rows.push([
            value
        ]);
        else last(rows)?.push(value);
        return rows;
    }, []);
}
function flatArray(arr) {
    return arr.reduce((flat, item)=>{
        if (Array.isArray(item)) {
            return flat.concat(flatArray(item));
        }
        return flat.concat(item);
    }, []);
}
function partition(arr, fn) {
    return arr.reduce(([pass, fail], value)=>{
        if (fn(value)) pass.push(value);
        else fail.push(value);
        return [
            pass,
            fail
        ];
    }, [
        [],
        []
    ]);
}
// src/equal.ts
var isArrayLike = (value)=>value?.constructor.name === "Array";
var isArrayEqual = (a, b)=>{
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (!isEqual(a[i], b[i])) return false;
    }
    return true;
};
var isEqual = (a, b)=>{
    if (Object.is(a, b)) return true;
    if (a == null && b != null || a != null && b == null) return false;
    if (typeof a?.isEqual === "function" && typeof b?.isEqual === "function") {
        return a.isEqual(b);
    }
    if (typeof a === "function" && typeof b === "function") {
        return a.toString() === b.toString();
    }
    if (isArrayLike(a) && isArrayLike(b)) {
        return isArrayEqual(Array.from(a), Array.from(b));
    }
    if (!(typeof a === "object") || !(typeof b === "object")) return false;
    const keys = Object.keys(b ?? /* @__PURE__ */ Object.create(null));
    const length = keys.length;
    for(let i = 0; i < length; i++){
        const hasKey = Reflect.has(a, keys[i]);
        if (!hasKey) return false;
    }
    for(let i = 0; i < length; i++){
        const key = keys[i];
        if (!isEqual(a[key], b[key])) return false;
    }
    return true;
};
// src/guard.ts
var isDev = ()=>("TURBOPACK compile-time value", "development") !== "production";
var isArray = (v)=>Array.isArray(v);
var isBoolean = (v)=>v === true || v === false;
var isObjectLike = (v)=>v != null && typeof v === "object";
var isObject = (v)=>isObjectLike(v) && !isArray(v);
var isNumber = (v)=>typeof v === "number" && !Number.isNaN(v);
var isString = (v)=>typeof v === "string";
var isFunction = (v)=>typeof v === "function";
var isNull = (v)=>v == null;
var hasProp = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
var baseGetTag = (v)=>Object.prototype.toString.call(v);
var fnToString = Function.prototype.toString;
var objectCtorString = fnToString.call(Object);
var isPlainObject = (v)=>{
    if (!isObjectLike(v) || baseGetTag(v) != "[object Object]" || isFrameworkElement(v)) return false;
    const proto = Object.getPrototypeOf(v);
    if (proto === null) return true;
    const Ctor = hasProp(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && fnToString.call(Ctor) == objectCtorString;
};
var isReactElement = (x)=>typeof x === "object" && x !== null && "$$typeof" in x && "props" in x;
var isVueElement = (x)=>typeof x === "object" && x !== null && "__v_isVNode" in x;
var isFrameworkElement = (x)=>isReactElement(x) || isVueElement(x);
// src/functions.ts
var runIfFn = (v, ...a)=>{
    const res = typeof v === "function" ? v(...a) : v;
    return res ?? void 0;
};
var cast = (v)=>v;
var identity = (v)=>v();
var noop = ()=>{};
var callAll = (...fns)=>(...a)=>{
        fns.forEach(function(fn) {
            fn?.(...a);
        });
    };
var uuid = /* @__PURE__ */ (()=>{
    let id = 0;
    return ()=>{
        id++;
        return id.toString(36);
    };
})();
function match(key, record, ...args) {
    if (key in record) {
        const fn = record[key];
        return isFunction(fn) ? fn(...args) : fn;
    }
    const error = new Error(`No matching key: ${JSON.stringify(key)} in ${JSON.stringify(Object.keys(record))}`);
    Error.captureStackTrace?.(error, match);
    throw error;
}
var tryCatch = (fn, fallback)=>{
    try {
        return fn();
    } catch (error) {
        if (error instanceof Error) {
            Error.captureStackTrace?.(error, tryCatch);
        }
        return fallback?.();
    }
};
function throttle(fn, wait = 0) {
    let lastCall = 0;
    let timeout = null;
    return (...args)=>{
        const now = Date.now();
        const timeSinceLastCall = now - lastCall;
        if (timeSinceLastCall >= wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            fn(...args);
            lastCall = now;
        } else if (!timeout) {
            timeout = setTimeout(()=>{
                fn(...args);
                lastCall = Date.now();
                timeout = null;
            }, wait - timeSinceLastCall);
        }
    };
}
function debounce(fn, wait = 0) {
    let timeout = null;
    return (...args)=>{
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(()=>{
            fn(...args);
        }, wait);
    };
}
// src/number.ts
var { floor, abs, round, min, max, pow, sign } = Math;
var isNaN = (v)=>Number.isNaN(v);
var nan = (v)=>isNaN(v) ? 0 : v;
var mod = (v, m)=>(v % m + m) % m;
var wrap = (v, vmax)=>(v % vmax + vmax) % vmax;
var getMinValueAtIndex = (i, v, vmin)=>i === 0 ? vmin : v[i - 1];
var getMaxValueAtIndex = (i, v, vmax)=>i === v.length - 1 ? vmax : v[i + 1];
var isValueAtMax = (v, vmax)=>nan(v) >= vmax;
var isValueAtMin = (v, vmin)=>nan(v) <= vmin;
var isValueWithinRange = (v, vmin, vmax)=>{
    const value = nan(v);
    const minCheck = vmin == null || value >= vmin;
    const maxCheck = vmax == null || value <= vmax;
    return minCheck && maxCheck;
};
var roundValue = (v, vmin, step)=>round((nan(v) - vmin) / step) * step + vmin;
var clampValue = (v, vmin, vmax)=>min(max(nan(v), vmin), vmax);
var clampPercent = (v)=>clampValue(v, 0, 1);
var getValuePercent = (v, vmin, vmax)=>(nan(v) - vmin) / (vmax - vmin);
var getPercentValue = (p, vmin, vmax, step)=>clampValue(roundValue(p * (vmax - vmin) + vmin, vmin, step), vmin, vmax);
var roundToStepPrecision = (v, step)=>{
    let rv = v;
    let ss = step.toString();
    let pi = ss.indexOf(".");
    let p = pi >= 0 ? ss.length - pi : 0;
    if (p > 0) {
        let pw = pow(10, p);
        rv = round(rv * pw) / pw;
    }
    return rv;
};
var roundToDpr = (v, dpr)=>typeof dpr === "number" ? floor(v * dpr + 0.5) / dpr : round(v);
var snapValueToStep = (v, vmin, vmax, step)=>{
    const min2 = vmin != null ? Number(vmin) : 0;
    const max2 = Number(vmax);
    const remainder = (v - min2) % step;
    let snapped = abs(remainder) * 2 >= step ? v + sign(remainder) * (step - abs(remainder)) : v - remainder;
    snapped = roundToStepPrecision(snapped, step);
    if (!isNaN(min2) && snapped < min2) {
        snapped = min2;
    } else if (!isNaN(max2) && snapped > max2) {
        const stepsInRange = floor((max2 - min2) / step);
        const largestValidStep = min2 + stepsInRange * step;
        snapped = stepsInRange <= 0 || largestValidStep < min2 ? max2 : largestValidStep;
    }
    return roundToStepPrecision(snapped, step);
};
var setValueAtIndex = (vs, i, v)=>{
    if (vs[i] === v) return vs;
    return [
        ...vs.slice(0, i),
        v,
        ...vs.slice(i + 1)
    ];
};
function getValueSetterAtIndex(index, ctx) {
    const minValueAtIndex = getMinValueAtIndex(index, ctx.values, ctx.min);
    const maxValueAtIndex = getMaxValueAtIndex(index, ctx.values, ctx.max);
    let nextValues = ctx.values.slice();
    return function setValue(value) {
        let nextValue = snapValueToStep(value, minValueAtIndex, maxValueAtIndex, ctx.step);
        nextValues = setValueAtIndex(nextValues, index, value);
        nextValues[index] = nextValue;
        return nextValues;
    };
}
function getNextStepValue(index, ctx) {
    const nextValue = ctx.values[index] + ctx.step;
    return getValueSetterAtIndex(index, ctx)(nextValue);
}
function getPreviousStepValue(index, ctx) {
    const nextValue = ctx.values[index] - ctx.step;
    return getValueSetterAtIndex(index, ctx)(nextValue);
}
var getClosestValueIndex = (vs, t)=>{
    let i = vs.findIndex((v)=>t - v < 0);
    if (i === 0) return i;
    if (i === -1) return vs.length - 1;
    let vLeft = vs[i - 1];
    let vRight = vs[i];
    if (abs(vLeft - t) < abs(vRight - t)) return i - 1;
    return i;
};
var getClosestValue = (vs, t)=>vs[getClosestValueIndex(vs, t)];
var getValueRanges = (vs, vmin, vmax, gap)=>vs.map((v, i)=>({
            min: i === 0 ? vmin : vs[i - 1] + gap,
            max: i === vs.length - 1 ? vmax : vs[i + 1] - gap,
            value: v
        }));
var getValueTransformer = (va, vb)=>{
    const [a, b] = va;
    const [c, d] = vb;
    return (v)=>a === b || c === d ? c : c + (d - c) / (b - a) * (v - a);
};
var toFixedNumber = (v, d = 0, b = 10)=>{
    const pow2 = Math.pow(b, d);
    return round(v * pow2) / pow2;
};
var countDecimals = (value)=>{
    if (!Number.isFinite(value)) return 0;
    let e = 1, p = 0;
    while(Math.round(value * e) / e !== value){
        e *= 10;
        p += 1;
    }
    return p;
};
var decimalOp = (a, op, b)=>{
    let result = op === "+" ? a + b : a - b;
    if (a % 1 !== 0 || b % 1 !== 0) {
        const multiplier = 10 ** Math.max(countDecimals(a), countDecimals(b));
        a = Math.round(a * multiplier);
        b = Math.round(b * multiplier);
        result = op === "+" ? a + b : a - b;
        result /= multiplier;
    }
    return result;
};
var incrementValue = (v, s)=>decimalOp(nan(v), "+", s);
var decrementValue = (v, s)=>decimalOp(nan(v), "-", s);
var toPx = (v)=>typeof v === "number" ? `${v}px` : v;
// src/object.ts
function compact(obj) {
    if (!isPlainObject(obj) || obj === void 0) return obj;
    const keys = Reflect.ownKeys(obj).filter((key)=>typeof key === "string");
    const filtered = {};
    for (const key of keys){
        const value = obj[key];
        if (value !== void 0) {
            filtered[key] = compact(value);
        }
    }
    return filtered;
}
var json = (v)=>JSON.parse(JSON.stringify(v));
function pick(obj, keys) {
    const filtered = {};
    for (const key of keys){
        const value = obj[key];
        if (value !== void 0) {
            filtered[key] = value;
        }
    }
    return filtered;
}
function splitProps(props, keys) {
    const rest = {};
    const result = {};
    const keySet = new Set(keys);
    for(const key in props){
        if (keySet.has(key)) {
            result[key] = props[key];
        } else {
            rest[key] = props[key];
        }
    }
    return [
        result,
        rest
    ];
}
var createSplitProps = (keys)=>{
    return function split(props) {
        return splitProps(props, keys);
    };
};
function omit(obj, keys) {
    return createSplitProps(keys)(obj)[1];
}
// src/store.ts
function createStore(initialState, compare = Object.is) {
    let state = {
        ...initialState
    };
    const listeners = /* @__PURE__ */ new Set();
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const publish = ()=>{
        listeners.forEach((listener)=>listener());
    };
    const get = (key)=>{
        return state[key];
    };
    const set = (key, value)=>{
        if (!compare(state[key], value)) {
            state[key] = value;
            publish();
        }
    };
    const update = (updates)=>{
        let hasChanges = false;
        for(const key in updates){
            const value = updates[key];
            if (value !== void 0 && !compare(state[key], value)) {
                state[key] = value;
                hasChanges = true;
            }
        }
        if (hasChanges) {
            publish();
        }
    };
    const snapshot = ()=>({
            ...state
        });
    return {
        subscribe,
        get,
        set,
        update,
        snapshot
    };
}
// src/timers.ts
var currentTime = ()=>performance.now();
var _tick;
var Timer = class {
    constructor(onTick){
        this.onTick = onTick;
        __publicField(this, "frameId", null);
        __publicField(this, "pausedAtMs", null);
        __publicField(this, "context");
        __publicField(this, "cancelFrame", ()=>{
            if (this.frameId === null) return;
            cancelAnimationFrame(this.frameId);
            this.frameId = null;
        });
        __publicField(this, "setStartMs", (startMs)=>{
            this.context.startMs = startMs;
        });
        __publicField(this, "start", ()=>{
            if (this.frameId !== null) return;
            const now = currentTime();
            if (this.pausedAtMs !== null) {
                this.context.startMs += now - this.pausedAtMs;
                this.pausedAtMs = null;
            } else {
                this.context.startMs = now;
            }
            this.frameId = requestAnimationFrame(__privateGet(this, _tick));
        });
        __publicField(this, "pause", ()=>{
            if (this.frameId === null) return;
            this.cancelFrame();
            this.pausedAtMs = currentTime();
        });
        __publicField(this, "stop", ()=>{
            if (this.frameId === null) return;
            this.cancelFrame();
            this.pausedAtMs = null;
        });
        __privateAdd(this, _tick, (now)=>{
            this.context.now = now;
            this.context.deltaMs = now - this.context.startMs;
            const shouldContinue = this.onTick(this.context);
            if (shouldContinue === false) {
                this.stop();
                return;
            }
            this.frameId = requestAnimationFrame(__privateGet(this, _tick));
        });
        this.context = {
            now: 0,
            startMs: currentTime(),
            deltaMs: 0
        };
    }
    get elapsedMs() {
        if (this.pausedAtMs !== null) {
            return this.pausedAtMs - this.context.startMs;
        }
        return currentTime() - this.context.startMs;
    }
};
_tick = new WeakMap();
function setRafInterval(fn, intervalMs) {
    const timer = new Timer(({ now, deltaMs })=>{
        if (deltaMs >= intervalMs) {
            const startMs = intervalMs > 0 ? now - deltaMs % intervalMs : now;
            timer.setStartMs(startMs);
            fn({
                startMs,
                deltaMs
            });
        }
    });
    timer.start();
    return ()=>timer.stop();
}
function setRafTimeout(fn, delayMs) {
    const timer = new Timer(({ deltaMs })=>{
        if (deltaMs >= delayMs) {
            fn();
            return false;
        }
    });
    timer.start();
    return ()=>timer.stop();
}
// src/warning.ts
function warn(...a) {
    const m = a.length === 1 ? a[0] : a[1];
    const c = a.length === 2 ? a[0] : true;
    if (c && ("TURBOPACK compile-time value", "development") !== "production") {
        console.warn(m);
    }
}
function invariant(...a) {
    const m = a.length === 1 ? a[0] : a[1];
    const c = a.length === 2 ? a[0] : true;
    if (c && ("TURBOPACK compile-time value", "development") !== "production") {
        throw new Error(m);
    }
}
function ensure(c, m) {
    if (c == null) throw new Error(m());
}
function ensureProps(props, keys, scope) {
    let missingKeys = [];
    for (const key of keys){
        if (props[key] == null) missingKeys.push(key);
    }
    if (missingKeys.length > 0) throw new Error(`[zag-js${scope ? ` > ${scope}` : ""}] missing required props: ${missingKeys.join(", ")}`);
}
;
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@zag-js+dom-query@1.26.3/node_modules/@zag-js/dom-query/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/caret.ts
__turbopack_context__.s([
    "MAX_Z_INDEX",
    ()=>MAX_Z_INDEX,
    "addDomEvent",
    ()=>addDomEvent,
    "ariaAttr",
    ()=>ariaAttr,
    "clickIfLink",
    ()=>clickIfLink,
    "contains",
    ()=>contains,
    "createScope",
    ()=>createScope,
    "dataAttr",
    ()=>dataAttr,
    "defaultItemToId",
    ()=>defaultItemToId,
    "disableTextSelection",
    ()=>disableTextSelection,
    "dispatchInputCheckedEvent",
    ()=>dispatchInputCheckedEvent,
    "dispatchInputValueEvent",
    ()=>dispatchInputValueEvent,
    "findControlledElements",
    ()=>findControlledElements,
    "getActiveElement",
    ()=>getActiveElement,
    "getBeforeInputValue",
    ()=>getBeforeInputValue,
    "getByText",
    ()=>getByText,
    "getByTypeahead",
    ()=>getByTypeahead,
    "getComputedStyle",
    ()=>getComputedStyle,
    "getControlledElements",
    ()=>getControlledElements,
    "getDataUrl",
    ()=>getDataUrl,
    "getDocument",
    ()=>getDocument,
    "getDocumentElement",
    ()=>getDocumentElement,
    "getEventKey",
    ()=>getEventKey,
    "getEventPoint",
    ()=>getEventPoint,
    "getEventStep",
    ()=>getEventStep,
    "getEventTarget",
    ()=>getEventTarget,
    "getFirstFocusable",
    ()=>getFirstFocusable,
    "getFirstTabbable",
    ()=>getFirstTabbable,
    "getFocusables",
    ()=>getFocusables,
    "getInitialFocus",
    ()=>getInitialFocus,
    "getLastTabbable",
    ()=>getLastTabbable,
    "getNativeEvent",
    ()=>getNativeEvent,
    "getNearestOverflowAncestor",
    ()=>getNearestOverflowAncestor,
    "getNextTabbable",
    ()=>getNextTabbable,
    "getNodeName",
    ()=>getNodeName,
    "getOverflowAncestors",
    ()=>getOverflowAncestors,
    "getParentNode",
    ()=>getParentNode,
    "getPlatform",
    ()=>getPlatform,
    "getRelativePoint",
    ()=>getRelativePoint,
    "getRootNode",
    ()=>getRootNode,
    "getScrollPosition",
    ()=>getScrollPosition,
    "getTabIndex",
    ()=>getTabIndex,
    "getTabbableEdges",
    ()=>getTabbableEdges,
    "getTabbables",
    ()=>getTabbables,
    "getUserAgent",
    ()=>getUserAgent,
    "getWindow",
    ()=>getWindow,
    "hasControllerElements",
    ()=>hasControllerElements,
    "indexOfId",
    ()=>indexOfId,
    "isActiveElement",
    ()=>isActiveElement,
    "isAnchorElement",
    ()=>isAnchorElement,
    "isAndroid",
    ()=>isAndroid,
    "isApple",
    ()=>isApple,
    "isCaretAtStart",
    ()=>isCaretAtStart,
    "isChrome",
    ()=>isChrome,
    "isComposingEvent",
    ()=>isComposingEvent,
    "isContextMenuEvent",
    ()=>isContextMenuEvent,
    "isControlledByExpandedController",
    ()=>isControlledByExpandedController,
    "isControlledElement",
    ()=>isControlledElement,
    "isControllerElement",
    ()=>isControllerElement,
    "isCtrlOrMetaKey",
    ()=>isCtrlOrMetaKey,
    "isDocument",
    ()=>isDocument,
    "isDom",
    ()=>isDom,
    "isDownloadingEvent",
    ()=>isDownloadingEvent,
    "isEditableElement",
    ()=>isEditableElement,
    "isElementVisible",
    ()=>isElementVisible,
    "isFirefox",
    ()=>isFirefox,
    "isFocusable",
    ()=>isFocusable,
    "isHTMLElement",
    ()=>isHTMLElement,
    "isIPad",
    ()=>isIPad,
    "isIPhone",
    ()=>isIPhone,
    "isInView",
    ()=>isInView,
    "isInputElement",
    ()=>isInputElement,
    "isInteractiveContainerElement",
    ()=>isInteractiveContainerElement,
    "isIos",
    ()=>isIos,
    "isKeyboardClick",
    ()=>isKeyboardClick,
    "isLeftClick",
    ()=>isLeftClick,
    "isMac",
    ()=>isMac,
    "isModifierKey",
    ()=>isModifierKey,
    "isNode",
    ()=>isNode,
    "isOpeningInNewTab",
    ()=>isOpeningInNewTab,
    "isOverflowElement",
    ()=>isOverflowElement,
    "isPrintableKey",
    ()=>isPrintableKey,
    "isRootElement",
    ()=>isRootElement,
    "isSafari",
    ()=>isSafari,
    "isShadowRoot",
    ()=>isShadowRoot,
    "isTabbable",
    ()=>isTabbable,
    "isTouchDevice",
    ()=>isTouchDevice,
    "isTouchEvent",
    ()=>isTouchEvent,
    "isValidTabEvent",
    ()=>isValidTabEvent,
    "isVirtualClick",
    ()=>isVirtualClick,
    "isVirtualPointerEvent",
    ()=>isVirtualPointerEvent,
    "isVisualViewport",
    ()=>isVisualViewport,
    "isWebKit",
    ()=>isWebKit,
    "isWindow",
    ()=>isWindow,
    "itemById",
    ()=>itemById,
    "nextById",
    ()=>nextById,
    "nextTick",
    ()=>nextTick,
    "observeAttributes",
    ()=>observeAttributes,
    "observeChildren",
    ()=>observeChildren,
    "prevById",
    ()=>prevById,
    "proxyTabFocus",
    ()=>proxyTabFocus,
    "query",
    ()=>query,
    "queryAll",
    ()=>queryAll,
    "queueBeforeEvent",
    ()=>queueBeforeEvent,
    "raf",
    ()=>raf,
    "requestPointerLock",
    ()=>requestPointerLock,
    "restoreTextSelection",
    ()=>restoreTextSelection,
    "scrollIntoView",
    ()=>scrollIntoView,
    "setAttribute",
    ()=>setAttribute,
    "setCaretToEnd",
    ()=>setCaretToEnd,
    "setElementChecked",
    ()=>setElementChecked,
    "setElementValue",
    ()=>setElementValue,
    "setProperty",
    ()=>setProperty,
    "setStyle",
    ()=>setStyle,
    "setStyleProperty",
    ()=>setStyleProperty,
    "setVisuallyHidden",
    ()=>setVisuallyHidden,
    "trackElementRect",
    ()=>trackElementRect,
    "trackFormControl",
    ()=>trackFormControl,
    "trackPointerMove",
    ()=>trackPointerMove,
    "trackPress",
    ()=>trackPress,
    "trackVisualViewport",
    ()=>trackVisualViewport,
    "visuallyHiddenStyle",
    ()=>visuallyHiddenStyle,
    "waitForElement",
    ()=>waitForElement,
    "waitForPromise",
    ()=>waitForPromise
]);
function isCaretAtStart(input) {
    if (!input) return false;
    try {
        return input.selectionStart === 0 && input.selectionEnd === 0;
    } catch  {
        return input.value === "";
    }
}
function setCaretToEnd(input) {
    if (!input) return;
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    if (Math.abs(end - start) !== 0) return;
    if (start !== 0) return;
    input.setSelectionRange(input.value.length, input.value.length);
}
// src/shared.ts
var clamp = (value)=>Math.max(0, Math.min(1, value));
var wrap = (v, idx)=>{
    return v.map((_, index)=>v[(Math.max(idx, 0) + index) % v.length]);
};
var pipe = (...fns)=>(arg)=>fns.reduce((acc, fn)=>fn(acc), arg);
var noop = ()=>void 0;
var isObject = (v)=>typeof v === "object" && v !== null;
var MAX_Z_INDEX = 2147483647;
var dataAttr = (guard)=>guard ? "" : void 0;
var ariaAttr = (guard)=>guard ? "true" : void 0;
// src/node.ts
var ELEMENT_NODE = 1;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;
var isHTMLElement = (el)=>isObject(el) && el.nodeType === ELEMENT_NODE && typeof el.nodeName === "string";
var isDocument = (el)=>isObject(el) && el.nodeType === DOCUMENT_NODE;
var isWindow = (el)=>isObject(el) && el === el.window;
var isVisualViewport = (el)=>isObject(el) && el.constructor.name === "VisualViewport";
var getNodeName = (node)=>{
    if (isHTMLElement(node)) return node.localName || "";
    return "#document";
};
function isRootElement(node) {
    return [
        "html",
        "body",
        "#document"
    ].includes(getNodeName(node));
}
var isNode = (el)=>isObject(el) && el.nodeType !== void 0;
var isShadowRoot = (el)=>isNode(el) && el.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in el;
var isInputElement = (el)=>isHTMLElement(el) && el.localName === "input";
var isAnchorElement = (el)=>!!el?.matches("a[href]");
var isElementVisible = (el)=>{
    if (!isHTMLElement(el)) return false;
    return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
};
function isActiveElement(element) {
    if (!element) return false;
    const rootNode = element.getRootNode();
    return getActiveElement(rootNode) === element;
}
var TEXTAREA_SELECT_REGEX = /(textarea|select)/;
function isEditableElement(el) {
    if (el == null || !isHTMLElement(el)) return false;
    try {
        return isInputElement(el) && el.selectionStart != null || TEXTAREA_SELECT_REGEX.test(el.localName) || el.isContentEditable || el.getAttribute("contenteditable") === "true" || el.getAttribute("contenteditable") === "";
    } catch  {
        return false;
    }
}
function contains(parent, child) {
    if (!parent || !child) return false;
    if (!isHTMLElement(parent) || !isHTMLElement(child)) return false;
    const rootNode = child.getRootNode?.();
    if (parent === child) return true;
    if (parent.contains(child)) return true;
    if (rootNode && isShadowRoot(rootNode)) {
        let next = child;
        while(next){
            if (parent === next) return true;
            next = next.parentNode || next.host;
        }
    }
    return false;
}
function getDocument(el) {
    if (isDocument(el)) return el;
    if (isWindow(el)) return el.document;
    return el?.ownerDocument ?? document;
}
function getDocumentElement(el) {
    return getDocument(el).documentElement;
}
function getWindow(el) {
    if (isShadowRoot(el)) return getWindow(el.host);
    if (isDocument(el)) return el.defaultView ?? window;
    if (isHTMLElement(el)) return el.ownerDocument?.defaultView ?? window;
    return window;
}
function getActiveElement(rootNode) {
    let activeElement = rootNode.activeElement;
    while(activeElement?.shadowRoot){
        const el = activeElement.shadowRoot.activeElement;
        if (!el || el === activeElement) break;
        else activeElement = el;
    }
    return activeElement;
}
function getParentNode(node) {
    if (getNodeName(node) === "html") return node;
    const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getRootNode(node) {
    let result;
    try {
        result = node.getRootNode({
            composed: true
        });
        if (isDocument(result) || isShadowRoot(result)) return result;
    } catch  {}
    return node.ownerDocument ?? document;
}
// src/computed-style.ts
var styleCache = /* @__PURE__ */ new WeakMap();
function getComputedStyle(el) {
    if (!styleCache.has(el)) {
        styleCache.set(el, getWindow(el).getComputedStyle(el));
    }
    return styleCache.get(el);
}
// src/controller.ts
var INTERACTIVE_CONTAINER_ROLE = /* @__PURE__ */ new Set([
    "menu",
    "listbox",
    "dialog",
    "grid",
    "tree",
    "region"
]);
var isInteractiveContainerRole = (role)=>INTERACTIVE_CONTAINER_ROLE.has(role);
var getAriaControls = (element)=>element.getAttribute("aria-controls")?.split(" ") || [];
function isControlledElement(container, element) {
    const visitedIds = /* @__PURE__ */ new Set();
    const rootNode = getRootNode(container);
    const checkElement = (searchRoot)=>{
        const controllingElements = searchRoot.querySelectorAll("[aria-controls]");
        for (const controller of controllingElements){
            if (controller.getAttribute("aria-expanded") !== "true") continue;
            const controlledIds = getAriaControls(controller);
            for (const id of controlledIds){
                if (!id || visitedIds.has(id)) continue;
                visitedIds.add(id);
                const controlledElement = rootNode.getElementById(id);
                if (controlledElement) {
                    const role = controlledElement.getAttribute("role");
                    const modal = controlledElement.getAttribute("aria-modal") === "true";
                    if (role && isInteractiveContainerRole(role) && !modal) {
                        if (controlledElement === element || controlledElement.contains(element)) {
                            return true;
                        }
                        if (checkElement(controlledElement)) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    return checkElement(container);
}
function findControlledElements(searchRoot, callback) {
    const rootNode = getRootNode(searchRoot);
    const visitedIds = /* @__PURE__ */ new Set();
    const findRecursive = (root)=>{
        const controllingElements = root.querySelectorAll("[aria-controls]");
        for (const controller of controllingElements){
            if (controller.getAttribute("aria-expanded") !== "true") continue;
            const controlledIds = getAriaControls(controller);
            for (const id of controlledIds){
                if (!id || visitedIds.has(id)) continue;
                visitedIds.add(id);
                const controlledElement = rootNode.getElementById(id);
                if (controlledElement) {
                    const role = controlledElement.getAttribute("role");
                    const modal = controlledElement.getAttribute("aria-modal") === "true";
                    if (role && INTERACTIVE_CONTAINER_ROLE.has(role) && !modal) {
                        callback(controlledElement);
                        findRecursive(controlledElement);
                    }
                }
            }
        }
    };
    findRecursive(searchRoot);
}
function getControlledElements(container) {
    const controlledElements = /* @__PURE__ */ new Set();
    findControlledElements(container, (controlledElement)=>{
        if (!container.contains(controlledElement)) {
            controlledElements.add(controlledElement);
        }
    });
    return Array.from(controlledElements);
}
function isInteractiveContainerElement(element) {
    const role = element.getAttribute("role");
    return Boolean(role && INTERACTIVE_CONTAINER_ROLE.has(role));
}
function isControllerElement(element) {
    return element.hasAttribute("aria-controls") && element.getAttribute("aria-expanded") === "true";
}
function hasControllerElements(element) {
    if (isControllerElement(element)) return true;
    return Boolean(element.querySelector?.('[aria-controls][aria-expanded="true"]'));
}
function isControlledByExpandedController(element) {
    if (!element.id) return false;
    const rootNode = getRootNode(element);
    const escapedId = CSS.escape(element.id);
    const selector = `[aria-controls~="${escapedId}"][aria-expanded="true"], [aria-controls="${escapedId}"][aria-expanded="true"]`;
    const controller = rootNode.querySelector(selector);
    return Boolean(controller && isInteractiveContainerElement(element));
}
// src/data-url.ts
function getDataUrl(svg, opts) {
    const { type, quality = 0.92, background } = opts;
    if (!svg) throw new Error("[zag-js > getDataUrl]: Could not find the svg element");
    const win = getWindow(svg);
    const doc = win.document;
    const svgBounds = svg.getBoundingClientRect();
    const svgClone = svg.cloneNode(true);
    if (!svgClone.hasAttribute("viewBox")) {
        svgClone.setAttribute("viewBox", `0 0 ${svgBounds.width} ${svgBounds.height}`);
    }
    const serializer = new win.XMLSerializer();
    const source = '<?xml version="1.0" standalone="no"?>\r\n' + serializer.serializeToString(svgClone);
    const svgString = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
    if (type === "image/svg+xml") {
        return Promise.resolve(svgString).then((str)=>{
            svgClone.remove();
            return str;
        });
    }
    const dpr = win.devicePixelRatio || 1;
    const canvas = doc.createElement("canvas");
    const image = new win.Image();
    image.src = svgString;
    canvas.width = svgBounds.width * dpr;
    canvas.height = svgBounds.height * dpr;
    const context = canvas.getContext("2d");
    if (type === "image/jpeg" || background) {
        context.fillStyle = background || "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    return new Promise((resolve)=>{
        image.onload = ()=>{
            context?.drawImage(image, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(type, quality));
            svgClone.remove();
        };
    });
}
// src/platform.ts
var isDom = ()=>typeof document !== "undefined";
function getPlatform() {
    const agent = navigator.userAgentData;
    return agent?.platform ?? navigator.platform;
}
function getUserAgent() {
    const ua2 = navigator.userAgentData;
    if (ua2 && Array.isArray(ua2.brands)) {
        return ua2.brands.map(({ brand, version })=>`${brand}/${version}`).join(" ");
    }
    return navigator.userAgent;
}
var pt = (v)=>isDom() && v.test(getPlatform());
var ua = (v)=>isDom() && v.test(getUserAgent());
var vn = (v)=>isDom() && v.test(navigator.vendor);
var isTouchDevice = ()=>isDom() && !!navigator.maxTouchPoints;
var isIPhone = ()=>pt(/^iPhone/i);
var isIPad = ()=>pt(/^iPad/i) || isMac() && navigator.maxTouchPoints > 1;
var isIos = ()=>isIPhone() || isIPad();
var isApple = ()=>isMac() || isIos();
var isMac = ()=>pt(/^Mac/i);
var isSafari = ()=>isApple() && vn(/apple/i);
var isFirefox = ()=>ua(/Firefox/i);
var isChrome = ()=>ua(/Chrome/i);
var isWebKit = ()=>ua(/AppleWebKit/i) && !isChrome();
var isAndroid = ()=>ua(/Android/i);
// src/event.ts
function getBeforeInputValue(event) {
    const { selectionStart, selectionEnd, value } = event.currentTarget;
    const data = event.data;
    return value.slice(0, selectionStart) + (data ?? "") + value.slice(selectionEnd);
}
function getComposedPath(event) {
    return event.composedPath?.() ?? event.nativeEvent?.composedPath?.();
}
function getEventTarget(event) {
    const composedPath = getComposedPath(event);
    return composedPath?.[0] ?? event.target;
}
function isOpeningInNewTab(event) {
    const element = event.currentTarget;
    if (!element) return false;
    const validElement = element.matches("a[href], button[type='submit'], input[type='submit']");
    if (!validElement) return false;
    const isMiddleClick = event.button === 1;
    const isModKeyClick = isCtrlOrMetaKey(event);
    return isMiddleClick || isModKeyClick;
}
function isDownloadingEvent(event) {
    const element = event.currentTarget;
    if (!element) return false;
    const localName = element.localName;
    if (!event.altKey) return false;
    if (localName === "a") return true;
    if (localName === "button" && element.type === "submit") return true;
    if (localName === "input" && element.type === "submit") return true;
    return false;
}
function isComposingEvent(event) {
    return getNativeEvent(event).isComposing || event.keyCode === 229;
}
function isKeyboardClick(e) {
    return e.detail === 0 || e.clientX === 0 && e.clientY === 0;
}
function isCtrlOrMetaKey(e) {
    if (isMac()) return e.metaKey;
    return e.ctrlKey;
}
function isPrintableKey(e) {
    return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
function isVirtualPointerEvent(e) {
    return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function isVirtualClick(e) {
    if (e.pointerType === "" && e.isTrusted) return true;
    if (isAndroid() && e.pointerType) {
        return e.type === "click" && e.buttons === 1;
    }
    return e.detail === 0 && !e.pointerType;
}
var isLeftClick = (e)=>e.button === 0;
var isContextMenuEvent = (e)=>{
    return e.button === 2 || isMac() && e.ctrlKey && e.button === 0;
};
var isModifierKey = (e)=>e.ctrlKey || e.altKey || e.metaKey;
var isTouchEvent = (event)=>"touches" in event && event.touches.length > 0;
var keyMap = {
    Up: "ArrowUp",
    Down: "ArrowDown",
    Esc: "Escape",
    " ": "Space",
    ",": "Comma",
    Left: "ArrowLeft",
    Right: "ArrowRight"
};
var rtlKeyMap = {
    ArrowLeft: "ArrowRight",
    ArrowRight: "ArrowLeft"
};
function getEventKey(event, options = {}) {
    const { dir = "ltr", orientation = "horizontal" } = options;
    let key = event.key;
    key = keyMap[key] ?? key;
    const isRtl = dir === "rtl" && orientation === "horizontal";
    if (isRtl && key in rtlKeyMap) key = rtlKeyMap[key];
    return key;
}
function getNativeEvent(event) {
    return event.nativeEvent ?? event;
}
var pageKeys = /* @__PURE__ */ new Set([
    "PageUp",
    "PageDown"
]);
var arrowKeys = /* @__PURE__ */ new Set([
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
]);
function getEventStep(event) {
    if (event.ctrlKey || event.metaKey) {
        return 0.1;
    } else {
        const isPageKey = pageKeys.has(event.key);
        const isSkipKey = isPageKey || event.shiftKey && arrowKeys.has(event.key);
        return isSkipKey ? 10 : 1;
    }
}
function getEventPoint(event, type = "client") {
    const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
    return {
        x: point[`${type}X`],
        y: point[`${type}Y`]
    };
}
var addDomEvent = (target, eventName, handler, options)=>{
    const node = typeof target === "function" ? target() : target;
    node?.addEventListener(eventName, handler, options);
    return ()=>{
        node?.removeEventListener(eventName, handler, options);
    };
};
// src/form.ts
function getDescriptor(el, options) {
    const { type = "HTMLInputElement", property = "value" } = options;
    const proto = getWindow(el)[type].prototype;
    return Object.getOwnPropertyDescriptor(proto, property) ?? {};
}
function getElementType(el) {
    if (el.localName === "input") return "HTMLInputElement";
    if (el.localName === "textarea") return "HTMLTextAreaElement";
    if (el.localName === "select") return "HTMLSelectElement";
}
function setElementValue(el, value, property = "value") {
    if (!el) return;
    const type = getElementType(el);
    if (type) {
        const descriptor = getDescriptor(el, {
            type,
            property
        });
        descriptor.set?.call(el, value);
    }
    el.setAttribute(property, value);
}
function setElementChecked(el, checked) {
    if (!el) return;
    const descriptor = getDescriptor(el, {
        type: "HTMLInputElement",
        property: "checked"
    });
    descriptor.set?.call(el, checked);
    if (checked) el.setAttribute("checked", "");
    else el.removeAttribute("checked");
}
function dispatchInputValueEvent(el, options) {
    const { value, bubbles = true } = options;
    if (!el) return;
    const win = getWindow(el);
    if (!(el instanceof win.HTMLInputElement)) return;
    setElementValue(el, `${value}`);
    el.dispatchEvent(new win.Event("input", {
        bubbles
    }));
}
function dispatchInputCheckedEvent(el, options) {
    const { checked, bubbles = true } = options;
    if (!el) return;
    const win = getWindow(el);
    if (!(el instanceof win.HTMLInputElement)) return;
    setElementChecked(el, checked);
    el.dispatchEvent(new win.Event("click", {
        bubbles
    }));
}
function getClosestForm(el) {
    return isFormElement(el) ? el.form : el.closest("form");
}
function isFormElement(el) {
    return el.matches("textarea, input, select, button");
}
function trackFormReset(el, callback) {
    if (!el) return;
    const form = getClosestForm(el);
    const onReset = (e)=>{
        if (e.defaultPrevented) return;
        callback();
    };
    form?.addEventListener("reset", onReset, {
        passive: true
    });
    return ()=>form?.removeEventListener("reset", onReset);
}
function trackFieldsetDisabled(el, callback) {
    const fieldset = el?.closest("fieldset");
    if (!fieldset) return;
    callback(fieldset.disabled);
    const win = getWindow(fieldset);
    const obs = new win.MutationObserver(()=>callback(fieldset.disabled));
    obs.observe(fieldset, {
        attributes: true,
        attributeFilter: [
            "disabled"
        ]
    });
    return ()=>obs.disconnect();
}
function trackFormControl(el, options) {
    if (!el) return;
    const { onFieldsetDisabledChange, onFormReset } = options;
    const cleanups = [
        trackFormReset(el, onFormReset),
        trackFieldsetDisabled(el, onFieldsetDisabledChange)
    ];
    return ()=>cleanups.forEach((cleanup)=>cleanup?.());
}
// src/tabbable.ts
var isFrame = (el)=>isHTMLElement(el) && el.tagName === "IFRAME";
var hasTabIndex = (el)=>!Number.isNaN(parseInt(el.getAttribute("tabindex") || "0", 10));
var hasNegativeTabIndex = (el)=>parseInt(el.getAttribute("tabindex") || "0", 10) < 0;
var focusableSelector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type";
var getFocusables = (container, includeContainer = false)=>{
    if (!container) return [];
    const elements = Array.from(container.querySelectorAll(focusableSelector));
    const include = includeContainer == true || includeContainer == "if-empty" && elements.length === 0;
    if (include && isHTMLElement(container) && isFocusable(container)) {
        elements.unshift(container);
    }
    const focusableElements = elements.filter(isFocusable);
    focusableElements.forEach((element, i)=>{
        if (isFrame(element) && element.contentDocument) {
            const frameBody = element.contentDocument.body;
            focusableElements.splice(i, 1, ...getFocusables(frameBody));
        }
    });
    return focusableElements;
};
function isFocusable(element) {
    if (!element || element.closest("[inert]")) return false;
    return element.matches(focusableSelector) && isElementVisible(element);
}
function getFirstFocusable(container, includeContainer) {
    const [first] = getFocusables(container, includeContainer);
    return first || null;
}
function getTabbables(container, includeContainer) {
    if (!container) return [];
    const elements = Array.from(container.querySelectorAll(focusableSelector));
    const tabbableElements = elements.filter(isTabbable);
    if (includeContainer && isTabbable(container)) {
        tabbableElements.unshift(container);
    }
    tabbableElements.forEach((element, i)=>{
        if (isFrame(element) && element.contentDocument) {
            const frameBody = element.contentDocument.body;
            const allFrameTabbable = getTabbables(frameBody);
            tabbableElements.splice(i, 1, ...allFrameTabbable);
        }
    });
    if (!tabbableElements.length && includeContainer) {
        return elements;
    }
    return tabbableElements;
}
function isTabbable(el) {
    if (el != null && el.tabIndex > 0) return true;
    return isFocusable(el) && !hasNegativeTabIndex(el);
}
function getFirstTabbable(container, includeContainer) {
    const [first] = getTabbables(container, includeContainer);
    return first || null;
}
function getLastTabbable(container, includeContainer) {
    const elements = getTabbables(container, includeContainer);
    return elements[elements.length - 1] || null;
}
function getTabbableEdges(container, includeContainer) {
    const elements = getTabbables(container, includeContainer);
    const first = elements[0] || null;
    const last = elements[elements.length - 1] || null;
    return [
        first,
        last
    ];
}
function getNextTabbable(container, current) {
    const tabbables = getTabbables(container);
    const doc = container?.ownerDocument || document;
    const currentElement = current ?? getActiveElement(doc);
    if (!currentElement) return null;
    const index = tabbables.indexOf(currentElement);
    return tabbables[index + 1] || null;
}
function getTabIndex(node) {
    if (node.tabIndex < 0) {
        if ((/^(audio|video|details)$/.test(node.localName) || isEditableElement(node)) && !hasTabIndex(node)) {
            return 0;
        }
    }
    return node.tabIndex;
}
// src/initial-focus.ts
function getInitialFocus(options) {
    const { root, getInitialEl, filter, enabled = true } = options;
    if (!enabled) return;
    let node = null;
    node || (node = typeof getInitialEl === "function" ? getInitialEl() : getInitialEl);
    node || (node = root?.querySelector("[data-autofocus],[autofocus]"));
    if (!node) {
        const tabbables = getTabbables(root);
        node = filter ? tabbables.filter(filter)[0] : tabbables[0];
    }
    return node || root || void 0;
}
function isValidTabEvent(event) {
    const container = event.currentTarget;
    if (!container) return false;
    const [firstTabbable, lastTabbable] = getTabbableEdges(container);
    if (isActiveElement(firstTabbable) && event.shiftKey) return false;
    if (isActiveElement(lastTabbable) && !event.shiftKey) return false;
    if (!firstTabbable && !lastTabbable) return false;
    return true;
}
// src/raf.ts
function nextTick(fn) {
    const set = /* @__PURE__ */ new Set();
    function raf2(fn2) {
        const id = globalThis.requestAnimationFrame(fn2);
        set.add(()=>globalThis.cancelAnimationFrame(id));
    }
    raf2(()=>raf2(fn));
    return function cleanup() {
        set.forEach((fn2)=>fn2());
    };
}
function raf(fn) {
    let cleanup;
    const id = globalThis.requestAnimationFrame(()=>{
        cleanup = fn();
    });
    return ()=>{
        globalThis.cancelAnimationFrame(id);
        cleanup?.();
    };
}
function queueBeforeEvent(el, type, cb) {
    const cancelTimer = raf(()=>{
        el.removeEventListener(type, exec, true);
        cb();
    });
    const exec = ()=>{
        cancelTimer();
        cb();
    };
    el.addEventListener(type, exec, {
        once: true,
        capture: true
    });
    return cancelTimer;
}
// src/mutation-observer.ts
function observeAttributesImpl(node, options) {
    if (!node) return;
    const { attributes, callback: fn } = options;
    const win = node.ownerDocument.defaultView || window;
    const obs = new win.MutationObserver((changes)=>{
        for (const change of changes){
            if (change.type === "attributes" && change.attributeName && attributes.includes(change.attributeName)) {
                fn(change);
            }
        }
    });
    obs.observe(node, {
        attributes: true,
        attributeFilter: attributes
    });
    return ()=>obs.disconnect();
}
function observeAttributes(nodeOrFn, options) {
    const { defer } = options;
    const func = defer ? raf : (v)=>v();
    const cleanups = [];
    cleanups.push(func(()=>{
        const node = typeof nodeOrFn === "function" ? nodeOrFn() : nodeOrFn;
        cleanups.push(observeAttributesImpl(node, options));
    }));
    return ()=>{
        cleanups.forEach((fn)=>fn?.());
    };
}
function observeChildrenImpl(node, options) {
    const { callback: fn } = options;
    if (!node) return;
    const win = node.ownerDocument.defaultView || window;
    const obs = new win.MutationObserver(fn);
    obs.observe(node, {
        childList: true,
        subtree: true
    });
    return ()=>obs.disconnect();
}
function observeChildren(nodeOrFn, options) {
    const { defer } = options;
    const func = defer ? raf : (v)=>v();
    const cleanups = [];
    cleanups.push(func(()=>{
        const node = typeof nodeOrFn === "function" ? nodeOrFn() : nodeOrFn;
        cleanups.push(observeChildrenImpl(node, options));
    }));
    return ()=>{
        cleanups.forEach((fn)=>fn?.());
    };
}
// src/navigate.ts
function clickIfLink(el) {
    const click = ()=>{
        const win = getWindow(el);
        el.dispatchEvent(new win.MouseEvent("click"));
    };
    if (isFirefox()) {
        queueBeforeEvent(el, "keyup", click);
    } else {
        queueMicrotask(click);
    }
}
// src/overflow.ts
function getNearestOverflowAncestor(el) {
    const parentNode = getParentNode(el);
    if (isRootElement(parentNode)) return getDocument(parentNode).body;
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(el, list = []) {
    const scrollableAncestor = getNearestOverflowAncestor(el);
    const isBody = scrollableAncestor === el.ownerDocument.body;
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, []));
}
var getElementRect = (el)=>{
    if (isHTMLElement(el)) return el.getBoundingClientRect();
    if (isVisualViewport(el)) return {
        top: 0,
        left: 0,
        bottom: el.height,
        right: el.width
    };
    return {
        top: 0,
        left: 0,
        bottom: el.innerHeight,
        right: el.innerWidth
    };
};
function isInView(el, ancestor) {
    if (!isHTMLElement(el)) return true;
    const ancestorRect = getElementRect(ancestor);
    const elRect = el.getBoundingClientRect();
    return elRect.top >= ancestorRect.top && elRect.left >= ancestorRect.left && elRect.bottom <= ancestorRect.bottom && elRect.right <= ancestorRect.right;
}
var OVERFLOW_RE = /auto|scroll|overlay|hidden|clip/;
var nonOverflowValues = /* @__PURE__ */ new Set([
    "inline",
    "contents"
]);
function isOverflowElement(el) {
    const win = getWindow(el);
    const { overflow, overflowX, overflowY, display } = win.getComputedStyle(el);
    return OVERFLOW_RE.test(overflow + overflowY + overflowX) && !nonOverflowValues.has(display);
}
function isScrollable(el) {
    return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
}
function scrollIntoView(el, options) {
    const { rootEl, ...scrollOptions } = options || {};
    if (!el || !rootEl) return;
    if (!isOverflowElement(rootEl) || !isScrollable(rootEl)) return;
    el.scrollIntoView(scrollOptions);
}
function getScrollPosition(element) {
    if (isHTMLElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
// src/point.ts
function getRelativePoint(point, element) {
    const { left, top, width, height } = element.getBoundingClientRect();
    const offset = {
        x: point.x - left,
        y: point.y - top
    };
    const percent = {
        x: clamp(offset.x / width),
        y: clamp(offset.y / height)
    };
    function getPercentValue(options = {}) {
        const { dir = "ltr", orientation = "horizontal", inverted } = options;
        const invertX = typeof inverted === "object" ? inverted.x : inverted;
        const invertY = typeof inverted === "object" ? inverted.y : inverted;
        if (orientation === "horizontal") {
            return dir === "rtl" || invertX ? 1 - percent.x : percent.x;
        }
        return invertY ? 1 - percent.y : percent.y;
    }
    return {
        offset,
        percent,
        getPercentValue
    };
}
// src/pointer-lock.ts
function requestPointerLock(doc, fn) {
    const body = doc.body;
    const supported = "pointerLockElement" in doc || "mozPointerLockElement" in doc;
    const isLocked = ()=>!!doc.pointerLockElement;
    function onPointerChange() {
        fn?.(isLocked());
    }
    function onPointerError(event) {
        if (isLocked()) fn?.(false);
        console.error("PointerLock error occurred:", event);
        doc.exitPointerLock();
    }
    if (!supported) return;
    try {
        body.requestPointerLock();
    } catch  {}
    const cleanup = [
        addDomEvent(doc, "pointerlockchange", onPointerChange, false),
        addDomEvent(doc, "pointerlockerror", onPointerError, false)
    ];
    return ()=>{
        cleanup.forEach((cleanup2)=>cleanup2());
        doc.exitPointerLock();
    };
}
// src/text-selection.ts
var state = "default";
var userSelect = "";
var elementMap = /* @__PURE__ */ new WeakMap();
function disableTextSelectionImpl(options = {}) {
    const { target, doc } = options;
    const docNode = doc ?? document;
    const rootEl = docNode.documentElement;
    if (isIos()) {
        if (state === "default") {
            userSelect = rootEl.style.webkitUserSelect;
            rootEl.style.webkitUserSelect = "none";
        }
        state = "disabled";
    } else if (target) {
        elementMap.set(target, target.style.userSelect);
        target.style.userSelect = "none";
    }
    return ()=>restoreTextSelection({
            target,
            doc: docNode
        });
}
function restoreTextSelection(options = {}) {
    const { target, doc } = options;
    const docNode = doc ?? document;
    const rootEl = docNode.documentElement;
    if (isIos()) {
        if (state !== "disabled") return;
        state = "restoring";
        setTimeout(()=>{
            nextTick(()=>{
                if (state === "restoring") {
                    if (rootEl.style.webkitUserSelect === "none") {
                        rootEl.style.webkitUserSelect = userSelect || "";
                    }
                    userSelect = "";
                    state = "default";
                }
            });
        }, 300);
    } else {
        if (target && elementMap.has(target)) {
            const prevUserSelect = elementMap.get(target);
            if (target.style.userSelect === "none") {
                target.style.userSelect = prevUserSelect ?? "";
            }
            if (target.getAttribute("style") === "") {
                target.removeAttribute("style");
            }
            elementMap.delete(target);
        }
    }
}
function disableTextSelection(options = {}) {
    const { defer, target, ...restOptions } = options;
    const func = defer ? raf : (v)=>v();
    const cleanups = [];
    cleanups.push(func(()=>{
        const node = typeof target === "function" ? target() : target;
        cleanups.push(disableTextSelectionImpl({
            ...restOptions,
            target: node
        }));
    }));
    return ()=>{
        cleanups.forEach((fn)=>fn?.());
    };
}
// src/pointer-move.ts
function trackPointerMove(doc, handlers) {
    const { onPointerMove, onPointerUp } = handlers;
    const handleMove = (event)=>{
        const point = getEventPoint(event);
        const distance = Math.sqrt(point.x ** 2 + point.y ** 2);
        const moveBuffer = event.pointerType === "touch" ? 10 : 5;
        if (distance < moveBuffer) return;
        if (event.pointerType === "mouse" && event.button === 0) {
            handleUp(event);
            return;
        }
        onPointerMove({
            point,
            event
        });
    };
    const handleUp = (event)=>{
        const point = getEventPoint(event);
        onPointerUp({
            point,
            event
        });
    };
    const cleanups = [
        addDomEvent(doc, "pointermove", handleMove, false),
        addDomEvent(doc, "pointerup", handleUp, false),
        addDomEvent(doc, "pointercancel", handleUp, false),
        addDomEvent(doc, "contextmenu", handleUp, false),
        disableTextSelection({
            doc
        })
    ];
    return ()=>{
        cleanups.forEach((cleanup)=>cleanup());
    };
}
// src/press.ts
function trackPress(options) {
    const { pointerNode, keyboardNode = pointerNode, onPress, onPressStart, onPressEnd, isValidKey = (e)=>e.key === "Enter" } = options;
    if (!pointerNode) return noop;
    const win = getWindow(pointerNode);
    let removeStartListeners = noop;
    let removeEndListeners = noop;
    let removeAccessibleListeners = noop;
    const getInfo = (event)=>({
            point: getEventPoint(event),
            event
        });
    function startPress(event) {
        onPressStart?.(getInfo(event));
    }
    function cancelPress(event) {
        onPressEnd?.(getInfo(event));
    }
    const startPointerPress = (startEvent)=>{
        removeEndListeners();
        const endPointerPress = (endEvent)=>{
            const target = getEventTarget(endEvent);
            if (contains(pointerNode, target)) {
                onPress?.(getInfo(endEvent));
            } else {
                onPressEnd?.(getInfo(endEvent));
            }
        };
        const removePointerUpListener = addDomEvent(win, "pointerup", endPointerPress, {
            passive: !onPress,
            once: true
        });
        const removePointerCancelListener = addDomEvent(win, "pointercancel", cancelPress, {
            passive: !onPressEnd,
            once: true
        });
        removeEndListeners = pipe(removePointerUpListener, removePointerCancelListener);
        if (isActiveElement(keyboardNode) && startEvent.pointerType === "mouse") {
            startEvent.preventDefault();
        }
        startPress(startEvent);
    };
    const removePointerListener = addDomEvent(pointerNode, "pointerdown", startPointerPress, {
        passive: !onPressStart
    });
    const removeFocusListener = addDomEvent(keyboardNode, "focus", startAccessiblePress);
    removeStartListeners = pipe(removePointerListener, removeFocusListener);
    function startAccessiblePress() {
        const handleKeydown = (keydownEvent)=>{
            if (!isValidKey(keydownEvent)) return;
            const handleKeyup = (keyupEvent)=>{
                if (!isValidKey(keyupEvent)) return;
                const evt2 = new win.PointerEvent("pointerup");
                const info = getInfo(evt2);
                onPress?.(info);
                onPressEnd?.(info);
            };
            removeEndListeners();
            removeEndListeners = addDomEvent(keyboardNode, "keyup", handleKeyup);
            const evt = new win.PointerEvent("pointerdown");
            startPress(evt);
        };
        const handleBlur = ()=>{
            const evt = new win.PointerEvent("pointercancel");
            cancelPress(evt);
        };
        const removeKeydownListener = addDomEvent(keyboardNode, "keydown", handleKeydown);
        const removeBlurListener = addDomEvent(keyboardNode, "blur", handleBlur);
        removeAccessibleListeners = pipe(removeKeydownListener, removeBlurListener);
    }
    return ()=>{
        removeStartListeners();
        removeEndListeners();
        removeAccessibleListeners();
    };
}
// src/proxy-tab-focus.ts
function proxyTabFocusImpl(container, options = {}) {
    const { triggerElement, onFocus, onFocusEnter } = options;
    const doc = container?.ownerDocument || document;
    const body = doc.body;
    function onKeyDown(event) {
        if (event.key !== "Tab") return;
        let elementToFocus = null;
        const [firstTabbable, lastTabbable] = getTabbableEdges(container, true);
        const nextTabbableAfterTrigger = getNextTabbable(body, triggerElement);
        const noTabbableElements = !firstTabbable && !lastTabbable;
        if (event.shiftKey && isActiveElement(nextTabbableAfterTrigger)) {
            onFocusEnter?.();
            elementToFocus = lastTabbable;
        } else if (event.shiftKey && (isActiveElement(firstTabbable) || noTabbableElements)) {
            elementToFocus = triggerElement;
        } else if (!event.shiftKey && isActiveElement(triggerElement)) {
            onFocusEnter?.();
            elementToFocus = firstTabbable;
        } else if (!event.shiftKey && (isActiveElement(lastTabbable) || noTabbableElements)) {
            elementToFocus = nextTabbableAfterTrigger;
        }
        if (!elementToFocus) return;
        event.preventDefault();
        if (typeof onFocus === "function") {
            onFocus(elementToFocus);
        } else {
            elementToFocus.focus();
        }
    }
    return addDomEvent(doc, "keydown", onKeyDown, true);
}
function proxyTabFocus(container, options) {
    const { defer, triggerElement, ...restOptions } = options;
    const func = defer ? raf : (v)=>v();
    const cleanups = [];
    cleanups.push(func(()=>{
        const node = typeof container === "function" ? container() : container;
        const trigger = typeof triggerElement === "function" ? triggerElement() : triggerElement;
        cleanups.push(proxyTabFocusImpl(node, {
            triggerElement: trigger,
            ...restOptions
        }));
    }));
    return ()=>{
        cleanups.forEach((fn)=>fn?.());
    };
}
// src/query.ts
function queryAll(root, selector) {
    return Array.from(root?.querySelectorAll(selector) ?? []);
}
function query(root, selector) {
    return root?.querySelector(selector) ?? null;
}
var defaultItemToId = (v)=>v.id;
function itemById(v, id, itemToId = defaultItemToId) {
    return v.find((item)=>itemToId(item) === id);
}
function indexOfId(v, id, itemToId = defaultItemToId) {
    const item = itemById(v, id, itemToId);
    return item ? v.indexOf(item) : -1;
}
function nextById(v, id, loop = true) {
    let idx = indexOfId(v, id);
    idx = loop ? (idx + 1) % v.length : Math.min(idx + 1, v.length - 1);
    return v[idx];
}
function prevById(v, id, loop = true) {
    let idx = indexOfId(v, id);
    if (idx === -1) return loop ? v[v.length - 1] : null;
    idx = loop ? (idx - 1 + v.length) % v.length : Math.max(0, idx - 1);
    return v[idx];
}
// src/resize-observer.ts
function trackElementRect(elements, options) {
    const { onEntry, measure, box = "border-box" } = options;
    const elems = (Array.isArray(elements) ? elements : [
        elements
    ]).filter(isHTMLElement);
    const win = getWindow(elems[0]);
    const trigger = (entries)=>{
        const rects = elems.map((el)=>measure(el));
        onEntry({
            rects,
            entries
        });
    };
    trigger([]);
    const obs = new win.ResizeObserver(trigger);
    elems.forEach((el)=>obs.observe(el, {
            box
        }));
    return ()=>obs.disconnect();
}
// src/scope.ts
function createScope(methods) {
    const dom = {
        getRootNode: (ctx)=>ctx.getRootNode?.() ?? document,
        getDoc: (ctx)=>getDocument(dom.getRootNode(ctx)),
        getWin: (ctx)=>dom.getDoc(ctx).defaultView ?? window,
        getActiveElement: (ctx)=>getActiveElement(dom.getRootNode(ctx)),
        isActiveElement,
        getById: (ctx, id)=>dom.getRootNode(ctx).getElementById(id),
        setValue: (elem, value)=>{
            if (elem == null || value == null) return;
            setElementValue(elem, value.toString());
        }
    };
    return {
        ...dom,
        ...methods
    };
}
// src/searchable.ts
var sanitize = (str)=>str.split("").map((char)=>{
        const code = char.charCodeAt(0);
        if (code > 0 && code < 128) return char;
        if (code >= 128 && code <= 255) return `/x${code.toString(16)}`.replace("/", "\\");
        return "";
    }).join("").trim();
var getValueText = (el)=>{
    return sanitize(el.dataset?.valuetext ?? el.textContent ?? "");
};
var match = (valueText, query2)=>{
    return valueText.trim().toLowerCase().startsWith(query2.toLowerCase());
};
function getByText(v, text, currentId, itemToId = defaultItemToId) {
    const index = currentId ? indexOfId(v, currentId, itemToId) : -1;
    let items = currentId ? wrap(v, index) : v;
    const isSingleKey = text.length === 1;
    if (isSingleKey) {
        items = items.filter((item)=>itemToId(item) !== currentId);
    }
    return items.find((item)=>match(getValueText(item), text));
}
// src/set.ts
function setAttribute(el, attr, v) {
    const prev = el.getAttribute(attr);
    const exists = prev != null;
    el.setAttribute(attr, v);
    return ()=>{
        if (!exists) {
            el.removeAttribute(attr);
        } else {
            el.setAttribute(attr, prev);
        }
    };
}
function setProperty(el, prop, v) {
    const exists = prop in el;
    const prev = el[prop];
    el[prop] = v;
    return ()=>{
        if (!exists) {
            delete el[prop];
        } else {
            el[prop] = prev;
        }
    };
}
function setStyle(el, style) {
    if (!el) return noop;
    const prev = Object.keys(style).reduce((acc, key)=>{
        acc[key] = el.style.getPropertyValue(key);
        return acc;
    }, {});
    Object.assign(el.style, style);
    return ()=>{
        Object.assign(el.style, prev);
        if (el.style.length === 0) {
            el.removeAttribute("style");
        }
    };
}
function setStyleProperty(el, prop, value) {
    if (!el) return noop;
    const prev = el.style.getPropertyValue(prop);
    el.style.setProperty(prop, value);
    return ()=>{
        el.style.setProperty(prop, prev);
        if (el.style.length === 0) {
            el.removeAttribute("style");
        }
    };
}
// src/typeahead.ts
function getByTypeaheadImpl(baseItems, options) {
    const { state: state2, activeId, key, timeout = 350, itemToId } = options;
    const search = state2.keysSoFar + key;
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]);
    const query2 = isRepeated ? search[0] : search;
    let items = baseItems.slice();
    const next = getByText(items, query2, activeId, itemToId);
    function cleanup() {
        clearTimeout(state2.timer);
        state2.timer = -1;
    }
    function update(value) {
        state2.keysSoFar = value;
        cleanup();
        if (value !== "") {
            state2.timer = +setTimeout(()=>{
                update("");
                cleanup();
            }, timeout);
        }
    }
    update(search);
    return next;
}
var getByTypeahead = /* @__PURE__ */ Object.assign(getByTypeaheadImpl, {
    defaultOptions: {
        keysSoFar: "",
        timer: -1
    },
    isValidEvent: isValidTypeaheadEvent
});
function isValidTypeaheadEvent(event) {
    return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
// src/visual-viewport.ts
function trackVisualViewport(doc, fn) {
    const win = doc?.defaultView || window;
    const onResize = ()=>{
        fn?.(getViewportSize(win));
    };
    onResize();
    return addDomEvent(win.visualViewport ?? win, "resize", onResize);
}
function getViewportSize(win) {
    return {
        width: win.visualViewport?.width || win.innerWidth,
        height: win.visualViewport?.height || win.innerHeight
    };
}
// src/visually-hidden.ts
var visuallyHiddenStyle = {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap",
    wordWrap: "normal"
};
function setVisuallyHidden(el) {
    Object.assign(el.style, visuallyHiddenStyle);
}
// src/wait-for.ts
function waitForPromise(promise, controller, timeout) {
    const { signal } = controller;
    const wrappedPromise = new Promise((resolve, reject)=>{
        const timeoutId = setTimeout(()=>{
            reject(new Error(`Timeout of ${timeout}ms exceeded`));
        }, timeout);
        signal.addEventListener("abort", ()=>{
            clearTimeout(timeoutId);
            reject(new Error("Promise aborted"));
        });
        promise.then((result)=>{
            if (!signal.aborted) {
                clearTimeout(timeoutId);
                resolve(result);
            }
        }).catch((error)=>{
            if (!signal.aborted) {
                clearTimeout(timeoutId);
                reject(error);
            }
        });
    });
    const abort = ()=>controller.abort();
    return [
        wrappedPromise,
        abort
    ];
}
function waitForElement(target, options) {
    const { timeout, rootNode } = options;
    const win = getWindow(rootNode);
    const doc = getDocument(rootNode);
    const controller = new win.AbortController();
    return waitForPromise(new Promise((resolve)=>{
        const el = target();
        if (el) {
            resolve(el);
            return;
        }
        const observer = new win.MutationObserver(()=>{
            const el2 = target();
            if (el2 && el2.isConnected) {
                observer.disconnect();
                resolve(el2);
            }
        });
        observer.observe(doc.body, {
            childList: true,
            subtree: true
        });
    }), controller, timeout);
}
;
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@zag-js+core@1.26.3/node_modules/@zag-js/core/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INIT_STATE",
    ()=>INIT_STATE,
    "MachineStatus",
    ()=>MachineStatus,
    "createGuards",
    ()=>createGuards,
    "createMachine",
    ()=>createMachine,
    "createScope",
    ()=>createScope,
    "memo",
    ()=>memo,
    "mergeProps",
    ()=>mergeProps,
    "setup",
    ()=>setup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$utils$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@zag-js+utils@1.26.3/node_modules/@zag-js/utils/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$dom$2d$query$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@zag-js+dom-query@1.26.3/node_modules/@zag-js/dom-query/dist/index.mjs [app-ssr] (ecmascript)");
;
;
// src/merge-props.ts
var clsx = (...args)=>args.map((str)=>str?.trim?.()).filter(Boolean).join(" ");
var CSS_REGEX = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
var serialize = (style)=>{
    const res = {};
    let match;
    while(match = CSS_REGEX.exec(style)){
        res[match[1]] = match[2];
    }
    return res;
};
var css = (a, b)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$utils$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(a)) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$utils$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(b)) return `${a};${b}`;
        a = serialize(a);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$utils$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(b)) {
        b = serialize(b);
    }
    return Object.assign({}, a ?? {}, b ?? {});
};
function mergeProps(...args) {
    let result = {};
    for (let props of args){
        if (!props) continue;
        for(let key in result){
            if (key.startsWith("on") && typeof result[key] === "function" && typeof props[key] === "function") {
                result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$utils$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callAll"])(props[key], result[key]);
                continue;
            }
            if (key === "className" || key === "class") {
                result[key] = clsx(result[key], props[key]);
                continue;
            }
            if (key === "style") {
                result[key] = css(result[key], props[key]);
                continue;
            }
            result[key] = props[key] !== void 0 ? props[key] : result[key];
        }
        for(let key in props){
            if (result[key] === void 0) {
                result[key] = props[key];
            }
        }
        const symbols = Object.getOwnPropertySymbols(props);
        for (let symbol of symbols){
            result[symbol] = props[symbol];
        }
    }
    return result;
}
function memo(getDeps, fn, opts) {
    let deps = [];
    let result;
    return (depArgs)=>{
        const newDeps = getDeps(depArgs);
        const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$utils$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$utils$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isEqual"])(deps[index], dep));
        if (!depsChanged) return result;
        deps = newDeps;
        result = fn(newDeps, depArgs);
        opts?.onChange?.(result);
        return result;
    };
}
// src/create-machine.ts
function createGuards() {
    return {
        and: (...guards)=>{
            return function andGuard(params) {
                return guards.every((str)=>params.guard(str));
            };
        },
        or: (...guards)=>{
            return function orGuard(params) {
                return guards.some((str)=>params.guard(str));
            };
        },
        not: (guard)=>{
            return function notGuard(params) {
                return !params.guard(guard);
            };
        }
    };
}
function createMachine(config) {
    return config;
}
function setup() {
    return {
        guards: createGuards(),
        createMachine: (config)=>{
            return createMachine(config);
        },
        choose: (transitions)=>{
            return function chooseFn({ choose }) {
                return choose(transitions)?.actions;
            };
        }
    };
}
// src/types.ts
var MachineStatus = /* @__PURE__ */ ((MachineStatus2)=>{
    MachineStatus2["NotStarted"] = "Not Started";
    MachineStatus2["Started"] = "Started";
    MachineStatus2["Stopped"] = "Stopped";
    return MachineStatus2;
})(MachineStatus || {});
var INIT_STATE = "__init__";
function createScope(props) {
    const getRootNode = ()=>props.getRootNode?.() ?? document;
    const getDoc = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$dom$2d$query$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocument"])(getRootNode());
    const getWin = ()=>getDoc().defaultView ?? window;
    const getActiveElementFn = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$dom$2d$query$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getActiveElement"])(getRootNode());
    const getById = (id)=>getRootNode().getElementById(id);
    return {
        ...props,
        getRootNode,
        getDoc,
        getWin,
        getActiveElement: getActiveElementFn,
        isActiveElement: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$dom$2d$query$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$dom$2d$query$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isActiveElement"],
        getById
    };
}
;
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@ark-ui+react@5.26.2_react-_6d4ad260d50a118023ad8c35cd4bb024/node_modules/@ark-ui/react/dist/utils/compose-refs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs
]);
function composeRefs(...refs) {
    return (node)=>{
        const cleanUps = [];
        for (const ref of refs){
            if (typeof ref === "function") {
                const cb = ref(node);
                if (typeof cb === "function") {
                    cleanUps.push(cb);
                }
            } else if (ref) {
                ref.current = node;
            }
        }
        if (cleanUps.length) {
            return ()=>{
                for (const cleanUp of cleanUps){
                    cleanUp();
                }
            };
        }
    };
}
;
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@ark-ui+react@5.26.2_react-_6d4ad260d50a118023ad8c35cd4bb024/node_modules/@ark-ui/react/dist/components/factory.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ark",
    ()=>ark,
    "jsxFactory",
    ()=>jsxFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$core$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@zag-js+core@1.26.3/node_modules/@zag-js/core/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$ark$2d$ui$2b$react$40$5$2e$26$2e$2_react$2d$_6d4ad260d50a118023ad8c35cd4bb024$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$compose$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@ark-ui+react@5.26.2_react-_6d4ad260d50a118023ad8c35cd4bb024/node_modules/@ark-ui/react/dist/utils/compose-refs.js [app-ssr] (ecmascript)");
;
;
;
function getRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
const withAsChild = (Component)=>{
    const Comp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
        const { asChild, children, ...restProps } = props;
        if (!asChild) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(Component, {
                ...restProps,
                ref
            }, children);
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(children)) {
            return null;
        }
        const onlyChild = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children);
        const childRef = getRef(onlyChild);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(onlyChild, {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$zag$2d$js$2b$core$40$1$2e$26$2e$3$2f$node_modules$2f40$zag$2d$js$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProps"])(restProps, onlyChild.props),
            ref: ref ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$dev$2f$react$2d$execercies2$2f$next16$2f$node_modules$2f2e$pnpm$2f40$ark$2d$ui$2b$react$40$5$2e$26$2e$2_react$2d$_6d4ad260d50a118023ad8c35cd4bb024$2f$node_modules$2f40$ark$2d$ui$2f$react$2f$dist$2f$utils$2f$compose$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(ref, childRef) : childRef
        });
    }));
    Comp.displayName = Component.displayName || Component.name;
    return Comp;
};
const jsxFactory = ()=>{
    const cache = /* @__PURE__ */ new Map();
    return new Proxy(withAsChild, {
        apply (_target, _thisArg, argArray) {
            return withAsChild(argArray[0]);
        },
        get (_, element) {
            const asElement = element;
            if (!cache.has(asElement)) {
                cache.set(asElement, withAsChild(asElement));
            }
            return cache.get(asElement);
        }
    });
};
const ark = jsxFactory();
;
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HMR_REFRESH: null,
    ACTION_NAVIGATE: null,
    ACTION_REFRESH: null,
    ACTION_RESTORE: null,
    ACTION_SERVER_ACTION: null,
    ACTION_SERVER_PATCH: null,
    PrefetchKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HMR_REFRESH: function() {
        return ACTION_HMR_REFRESH;
    },
    ACTION_NAVIGATE: function() {
        return ACTION_NAVIGATE;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_RESTORE: function() {
        return ACTION_RESTORE;
    },
    ACTION_SERVER_ACTION: function() {
        return ACTION_SERVER_ACTION;
    },
    ACTION_SERVER_PATCH: function() {
        return ACTION_SERVER_PATCH;
    },
    PrefetchKind: function() {
        return PrefetchKind;
    }
});
const ACTION_REFRESH = 'refresh';
const ACTION_NAVIGATE = 'navigate';
const ACTION_RESTORE = 'restore';
const ACTION_SERVER_PATCH = 'server-patch';
const ACTION_HMR_REFRESH = 'hmr-refresh';
const ACTION_SERVER_ACTION = 'server-action';
var PrefetchKind = /*#__PURE__*/ function(PrefetchKind) {
    PrefetchKind["AUTO"] = "auto";
    PrefetchKind["FULL"] = "full";
    PrefetchKind["TEMPORARY"] = "temporary";
    return PrefetchKind;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router-reducer-types.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/is-thenable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isThenable", {
    enumerable: true,
    get: function() {
        return isThenable;
    }
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/next-devtools/dev-overlay.shim.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dispatcher: null,
    renderAppDevOverlay: null,
    renderPagesDevOverlay: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatcher: function() {
        return dispatcher;
    },
    renderAppDevOverlay: function() {
        return renderAppDevOverlay;
    },
    renderPagesDevOverlay: function() {
        return renderPagesDevOverlay;
    }
});
function renderAppDevOverlay() {
    throw Object.defineProperty(new Error("Next DevTools: Can't render in this environment. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E697",
        enumerable: false,
        configurable: true
    });
}
function renderPagesDevOverlay() {
    throw Object.defineProperty(new Error("Next DevTools: Can't render in this environment. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E697",
        enumerable: false,
        configurable: true
    });
}
const dispatcher = new Proxy({}, {
    get: (_, prop)=>{
        return ()=>{
            throw Object.defineProperty(new Error(`Next DevTools: Can't dispatch ${String(prop)} in this environment. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
                value: "E698",
                enumerable: false,
                configurable: true
            });
        };
    }
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-overlay.shim.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useAppDevRenderingIndicator", {
    enumerable: true,
    get: function() {
        return useAppDevRenderingIndicator;
    }
});
const _react = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _nextdevtools = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/next-devtools/dev-overlay.shim.js [app-ssr] (ecmascript)");
const useAppDevRenderingIndicator = ()=>{
    const [isPending, startTransition] = (0, _react.useTransition)();
    (0, _react.useEffect)(()=>{
        if (isPending) {
            _nextdevtools.dispatcher.renderingIndicatorShow();
        } else {
            _nextdevtools.dispatcher.renderingIndicatorHide();
        }
    }, [
        isPending
    ]);
    return startTransition;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-app-dev-rendering-indicator.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    dispatchAppRouterAction: null,
    useActionQueue: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dispatchAppRouterAction: function() {
        return dispatchAppRouterAction;
    },
    useActionQueue: function() {
        return useActionQueue;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
const _isthenable = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/is-thenable.js [app-ssr] (ecmascript)");
// The app router state lives outside of React, so we can import the dispatch
// method directly wherever we need it, rather than passing it around via props
// or context.
let dispatch = null;
function dispatchAppRouterAction(action) {
    if (dispatch === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    dispatch(action);
}
const __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
const promisesWithDebugInfo = ("TURBOPACK compile-time truthy", 1) ? new WeakMap() : "TURBOPACK unreachable";
function useActionQueue(actionQueue) {
    const [state, setState] = _react.default.useState(actionQueue.state);
    // Because of a known issue that requires to decode Flight streams inside the
    // render phase, we have to be a bit clever and assign the dispatch method to
    // a module-level variable upon initialization. The useState hook in this
    // module only exists to synchronize state that lives outside of React.
    // Ideally, what we'd do instead is pass the state as a prop to root.render;
    // this is conceptually how we're modeling the app router state, despite the
    // weird implementation details.
    if ("TURBOPACK compile-time truthy", 1) {
        const { useAppDevRenderingIndicator } = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/next-devtools/userspace/use-app-dev-rendering-indicator.js [app-ssr] (ecmascript)");
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const appDevRenderingIndicator = useAppDevRenderingIndicator();
        dispatch = (action)=>{
            appDevRenderingIndicator(()=>{
                actionQueue.dispatch(action, setState);
            });
        };
    } else //TURBOPACK unreachable
    ;
    // When navigating to a non-prefetched route, then App Router state will be
    // blocked until the server responds. We need to transfer the `_debugInfo`
    // from the underlying Flight response onto the top-level promise that is
    // passed to React (via `use`) so that the latency is accurately represented
    // in the React DevTools.
    const stateWithDebugInfo = (0, _react.useMemo)(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if ((0, _isthenable.isThenable)(state)) {
            // useMemo can't be used to cache a Promise since the memoized value is thrown
            // away when we suspend. So we use a WeakMap to cache the Promise with debug info.
            let promiseWithDebugInfo = promisesWithDebugInfo.get(state);
            if (promiseWithDebugInfo === undefined) {
                const debugInfo = [];
                promiseWithDebugInfo = Promise.resolve(state).then((asyncState)=>{
                    if (asyncState.debugInfo !== null) {
                        debugInfo.push(...asyncState.debugInfo);
                    }
                    return asyncState;
                });
                promiseWithDebugInfo._debugInfo = debugInfo;
                promisesWithDebugInfo.set(state, promiseWithDebugInfo);
            }
            return promiseWithDebugInfo;
        }
        return state;
    }, [
        state
    ]);
    return (0, _isthenable.isThenable)(stateWithDebugInfo) ? (0, _react.use)(stateWithDebugInfo) : stateWithDebugInfo;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-action-queue.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callServer", {
    enumerable: true,
    get: function() {
        return callServer;
    }
});
const _react = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-ssr] (ecmascript)");
const _useactionqueue = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/use-action-queue.js [app-ssr] (ecmascript)");
async function callServer(actionId, actionArgs) {
    return new Promise((resolve, reject)=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                actionId,
                actionArgs,
                resolve,
                reject
            });
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSourceMapURL", {
    enumerable: true,
    get: function() {
        return findSourceMapURL;
    }
});
const basePath = ("TURBOPACK compile-time value", "") || '';
const pathname = `${basePath}/__nextjs_source-map`;
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? function findSourceMapURL(filename) {
    if (filename === '') {
        return null;
    }
    if (filename.startsWith(document.location.origin) && filename.includes('/_next/static')) {
        // This is a request for a client chunk. This can only happen when
        // using Turbopack. In this case, since we control how those source
        // maps are generated, we can safely assume that the sourceMappingURL
        // is relative to the filename, with an added `.map` extension. The
        // browser can just request this file, and it gets served through the
        // normal dev server, without the need to route this through
        // the `/__nextjs_source-map` dev middleware.
        return `${filename}.map`;
    }
    const url = new URL(pathname, document.location.origin);
    url.searchParams.set('filename', filename);
    return url.href;
} : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-find-source-map-url.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactServerDOMTurbopackClient; //# sourceMappingURL=react-server-dom-turbopack-client.js.map
}),
"[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)");
const _client = __turbopack_context__.r("[project]/Documents/dev/react-execercies2/next16/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
];

//# sourceMappingURL=44b9d__pnpm_c75de25f._.js.map