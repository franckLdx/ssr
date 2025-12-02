import { queryOptions } from "@tanstack/react-query";

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


export const getProductsByCatergoryKeys = (categoryId: string) => [
	"producs",
	"byCategory",
	categoryId,
];

export const productByCategoryQueryOptions = (categoryId: string) => queryOptions({
	queryKey: getProductsByCatergoryKeys(categoryId),
	queryFn: () => fetchProductByCategory(categoryId),
})