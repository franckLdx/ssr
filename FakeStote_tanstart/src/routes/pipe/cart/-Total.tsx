import { Price } from "@/components/Price";
import { cartQueryOptions } from "@/services/cart/cart";
import { getProductQueryOptions } from "@/services/products/products";
import { useQueries, useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export function Total() {
  const cart = useSuspenseQuery(cartQueryOptions).data;
  const productQueries = useQueries({
    queries: cart.products.map(p => getProductQueryOptions(p.productId))
  });
  const allQueriesDone = productQueries.every(r => r.isSuccess);

  const totalAmount = useMemo(() => {
    return productQueries.reduce((total, productQuery) => {
      const product = productQuery.data;
      if (!product) return total;
      const cartItem = cart.products.find(p => p.productId === product.id);
      if (!cartItem) return total;
      return total + product.price * cartItem.quantity;
    }, 0) || 0;
  }, [cart, allQueriesDone, productQueries])

  if (!allQueriesDone) {
    return <span>Computing...</span>;
  }

  return (
    <Price amount={totalAmount} />
  );
}