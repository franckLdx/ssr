import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { useIsProductInCart } from "@/services/Cart/getCart";
import { useRemoveProductToCart, useAddProductToCart } from "@/services/Cart/updateProductsCart";
import type { ProductModel } from "@/services/Products/products";

type ProductCardFooterProps = {
	product: ProductModel;
};

export function ProductCardFooter({ product }: ProductCardFooterProps) {
	const isProductInCart = useIsProductInCart(product.id);

	const add = useAddProductToCart();
	const onAdd = () => add.mutate(product);

	const remove = useRemoveProductToCart();
	const onRemove = () => remove.mutate(product);

	if (isProductInCart === undefined) {
		return null;
	}

	if (add.isPending || remove.isPending) {
		return (<Spinner />);
	}

	return isProductInCart ? (
		<Button onClick={onRemove}>Retirer du panier</Button>
	) : (
		<Button onClick={onAdd}>Ajouter au panier</Button>
	); 
}
