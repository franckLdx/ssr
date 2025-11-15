import { useSuspenseQuery } from "@tanstack/react-query";
import { CartModel } from "./declaration";

export const fetchCart = async () => {
	const response = await fetch(`http://localhost:3000/carts/1`);
	if (!response.ok) {
		throw new Error("Failed to fetch cart");
	}

	return response.json() as Promise<CartModel>;
};

export const getCartKeys = () => ["cart"];

export const useFetchCart = () =>
	useSuspenseQuery({
		queryKey: getCartKeys(),
		queryFn: () => fetchCart(),
	});

export const prefetchCart = async (queryClient: any) =>
	queryClient.prefetchQuery({
		queryKey: getCartKeys(),
		queryFn: fetchCart,
	});

export const useIsProductInCart = (productId: string): boolean | undefined => {
	const useGetCart = useFetchCart();
	return useGetCart.data?.products?.some(
		(item: { productId: string; quantity: number }) =>
			item.productId === productId,
	);
};
