import { QueryClient, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { Category } from "./declaration";

const fetchCategory = async (categoryId: string) => {
	const response = await fetch(
		`http://localhost:3000/categories/${categoryId}`,
	);

	if (!response.ok) {
		throw new Error("Failed to fetch category");
	}

	const category = (await response.json()) as Category;
	return category;
};

export const getCategoryKeys = (categoryId: string) => ["category", categoryId];

const fetchCategoryOptions = (categoryId: string) => queryOptions({
	queryKey: getCategoryKeys(categoryId),
	queryFn: () => fetchCategory(categoryId),
})

export const prefetchCategory = (queryClient: QueryClient, categoryId: string) =>
	queryClient.prefetchQuery(fetchCategoryOptions(categoryId));

export const ensureCategory = (queryClient: QueryClient, categoryId: string) =>
	queryClient.ensureQueryData(fetchCategoryOptions(categoryId));

export const useFetchCategory = (categoryId: string) =>
	useSuspenseQuery(fetchCategoryOptions(categoryId));
