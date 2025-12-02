import { cartQueryOptions } from "@/services/cart/fetchCart";
import { useSuspenseQuery } from "@tanstack/react-query";

export function Products() {
  const cartQuery = useSuspenseQuery(cartQueryOptions);
  return <ul>
    {cartQuery.data?.products.map((product) => (
      <li key={product.productId}>
        {product.productId} - {product.quantity}
      </li>
    ))}
  </ul>;
}