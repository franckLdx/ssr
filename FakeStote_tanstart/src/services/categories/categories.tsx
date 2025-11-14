import { useSuspenseQuery } from "@tanstack/react-query";
import type { Category } from "./declaration";

export const fetchCategories = async () => {
	const response = await fetch("http://localhost:3000/categories");

	if (!response.ok) {
		throw new Error("Failed to fetch categories");
	}

	const categories = (await response.json()) as Category[];
	return categories;
};

export const CATEGORIES_KEY = ["categories"];

export const useFetchCategories = () =>
	useSuspenseQuery({
		queryKey: CATEGORIES_KEY,
		queryFn: fetchCategories,
	});
