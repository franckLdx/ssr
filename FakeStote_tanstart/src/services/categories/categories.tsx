import { queryOptions } from "@tanstack/react-query";
import type { Category } from "./declaration";

const fetchCategories = async () => {
	const response = await fetch("http://localhost:3000/categories");

	if (!response.ok) {
		throw new Error("Failed to fetch categories");
	}

	const categories = (await response.json()) as Category[];
	return categories;
};

const CATEGORIES_KEY = ["categories"];

export const categoriresQueryOptions = queryOptions({
	queryKey: CATEGORIES_KEY,
	queryFn: fetchCategories,
})

