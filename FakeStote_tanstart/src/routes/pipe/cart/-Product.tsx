import { Price } from "@/components/Price";
import { CartItemModel } from "@/services/cart/declaration";
import { getProductQueryOptions } from "@/services/products/products";
import { useSuspenseQuery } from "@tanstack/react-query";

type ProductProps = {
  cartItem: CartItemModel
};

export function Product({ cartItem }: ProductProps) {
  const product = useSuspenseQuery(getProductQueryOptions(cartItem.productId)).data;

  return (
    <p className="m-10 p-6 border-2 flex justify-between">
      {product.title} <span>{product.price}&nbsp;x&nbsp;{cartItem.quantity}&nbsp;=&nbsp;<Price amount={product.price * cartItem.quantity} /></span>
    </p>

  )
}