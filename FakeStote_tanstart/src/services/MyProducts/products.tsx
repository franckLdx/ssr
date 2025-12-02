import { QueryClient, queryOptions, useSuspenseQuery } from "@tanstack/react-query";

export type ProductModel = {
	id: string;
	title: string;
	price: number;
	description: string;
	categoryId: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

const fetchProductByCategory = async (categoryId: string) => {
	const response = await fetch(
		`http://localhost:3000/products?categoryId=${categoryId}`,
	);

	if (!response.ok) {
		throw new Error("Failed to fetch products by category");
	}

	const products = (await response.json()) as ProductModel[];
	return products;
};


export const getProductsByCatrgory = (categoryId: string) => [
	"producs",
	"byCategory",
	categoryId,
];

const fetchProductByCategoryOptions = (categoryId: string) => queryOptions({
	queryKey: getProductsByCatrgory(categoryId),
	queryFn: () => fetchProductByCategory(categoryId),
})

export const prefetchProductByCategoryOptions = (queryClient: QueryClient, categoryId: string) =>
	queryClient.prefetchQuery(fetchProductByCategoryOptions(categoryId));

export const ensureProductByCategoryOptions = (queryClient: QueryClient, categoryId: string) =>
	queryClient.ensureQueryData(fetchProductByCategoryOptions(categoryId));

export const useFetchProductsByCatrgory = (categoryId: string) =>
	useSuspenseQuery(fetchProductByCategoryOptions(categoryId));
