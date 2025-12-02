import { useFetchProductsByCatrgory } from "@/services/MyProducts/products";
import { ProductCard } from "./-ProductCard";

type ProductsListProps = {
  categoryId: string;
};

export function ProductsList({ categoryId }: ProductsListProps) {
  const productsQuery = useFetchProductsByCatrgory(categoryId);

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
