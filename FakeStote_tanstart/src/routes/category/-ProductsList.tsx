import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductCard } from "./-ProductCard";
import { productByCategoryQueryOptions } from "@/services/products/products";

type ProductsListProps = {
  categoryId: string;
};

export function ProductsList({ categoryId }: ProductsListProps) {
  const productsQuery = useSuspenseQuery(productByCategoryQueryOptions(categoryId));

  return (
    <ul className="flex flex-wrap gap-8 list-none p-0 m-0">
      {productsQuery.data?.map((product) => (
        <li key={product.id} className="w-full sm:w-auto">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
