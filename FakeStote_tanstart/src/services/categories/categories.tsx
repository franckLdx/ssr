import { QueryClient, queryOptions, useQuery, useSuspenseQuery } from "@tanstack/react-query";
import type { Category } from "./declaration";
import { logInfo, wait } from "@/components/log";

export const fetchCategories = async () => {
	const response = await fetch("http://localhost:3000/categories");

	if (!response.ok) {
		throw new Error("Failed to fetch categories");
	}

	const categories = (await response.json()) as Category[];
	return categories;
};

const CATEGORIES_KEY = ["categories"];

const options = queryOptions({
	queryKey: CATEGORIES_KEY,
	queryFn: fetchCategories,
})

export const useFetchCategories = () =>
	useSuspenseQuery(options)

export const prefetchCategories = (queryClient: QueryClient) =>
	queryClient.prefetchQuery(options)

export const ensureCategories = (queryClient: QueryClient) =>
	queryClient.ensureQueryData(options)
