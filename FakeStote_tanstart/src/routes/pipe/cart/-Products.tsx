import { useFetchCart } from "@/services/Cart/getCart";

export function Products() {
  const cartQuery = useFetchCart();
  return <ul>
    {cartQuery.data?.products.map((product) => (
      <li key={product.productId}>
        {product.productId} - {product.quantity}
      </li>
    ))}
  </ul>;
}