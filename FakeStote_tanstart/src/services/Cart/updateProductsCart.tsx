import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CartItemModel, CartModel } from "./declaration";
import { useFetchCart, getCartKeys } from "./getCart";
import type { ProductModel } from "../Products/products";

export const useAddProductToCart = () => {
	const cart = useFetchCart();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (product: ProductModel) => {
			const legacyItems = cart.data?.products ?? [];
			const cartItems: CartItemModel[] = [
				...legacyItems,
				{ productId: product.id, quantity: 1 },
			];
			const response = await fetch(`http://localhost:3000/carts/1`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					products: cartItems,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to add item to cart");
			}

			return response.json() as Promise<CartModel>;
		},
		onSuccess: (data) => {
			queryClient.setQueryData(getCartKeys(), data);
		},
	});
};

export const useRemoveProductToCart = () => {
	const cart = useFetchCart();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (product: ProductModel) => {
			const legacyItems = cart.data?.products ?? [];
			const cartItems: CartItemModel[] = legacyItems.filter((item) => item.productId !== product.id);
			const response = await fetch(`http://localhost:3000/carts/1`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					products: cartItems,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to add item to cart");
			}

			return response.json() as Promise<CartModel>;
		},
		onSuccess: (data) => {
			queryClient.setQueryData(getCartKeys(), data);
		},
	});
};
