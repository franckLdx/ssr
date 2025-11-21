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

const fetchCartOptions = queryOptions({
	queryKey: getCartKeys(),
	queryFn: () => fetchCart(),
});

export const useFetchCart = () =>
	useSuspenseQuery(fetchCartOptions);

export const prefetchCart = async (queryClient: QueryClient) =>
	queryClient.prefetchQuery(fetchCartOptions);

export const ensureCart = async (queryClient: QueryClient) =>
	queryClient.ensureQueryData(fetchCartOptions);

export const useIsProductInCart = (productId: string): boolean | undefined => {
	const useGetCart = useFetchCart();
	return useGetCart.data?.products?.some(
		(item: { productId: string; quantity: number }) =>
			item.productId === productId,
	);
};
