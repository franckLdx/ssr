import { useSuspenseQuery } from "@tanstack/react-query";
import type { Category } from "./declaration";

export const fetchCategory = async (categoryId: string) => {
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

export const useFetchCategory = (categoryId: string) =>
	useSuspenseQuery({
		queryKey: getCategoryKeys(categoryId),
		queryFn: () => fetchCategory(categoryId),
	});
