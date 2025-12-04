import { cartQueryOptions } from "@/services/cart/cart";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Product } from "./-Product";
import { Loading } from "@/components/Loading";

export function Products() {
  const cartQuery = useSuspenseQuery(cartQueryOptions);

  return (
    <ul>
      {cartQuery.data?.products.map((product) => (
        <li key={product.productId}>
          <Loading>
            <Product cartItem={product} />
          </Loading>
        </li>
      ))}
    </ul>
  );
}