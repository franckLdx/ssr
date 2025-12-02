import { cartQueryOptions } from "@/services/cart/cart";
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