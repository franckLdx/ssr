import { QueryClient, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { CartModel } from "./declaration";

const fetchCart = async () => {
	const response = await fetch(`http://localhost:3000/carts/1`);
	if (!response.ok) {
		throw new Error("Failed to fetch cart");
	}

	return response.json() as Promise<CartModel>;
};

export const getCartKeys = () => ["cart"];

export const cartQueryOptions = queryOptions({
	queryKey: getCartKeys(),
	queryFn: () => fetchCart(),
});

export const prefetchCart = async (queryClient: QueryClient) =>
	queryClient.prefetchQuery(cartQueryOptions);

export const ensureCart = async (queryClient: QueryClient) =>
	queryClient.ensureQueryData(cartQueryOptions);

export const useIsProductInCart = (productId: string): boolean | undefined => {
	const cartQUery = useSuspenseQuery(cartQueryOptions)
	return cartQUery.data?.products?.some(
		(item: { productId: string; quantity: number }) =>
			item.productId === productId,
	);
};
