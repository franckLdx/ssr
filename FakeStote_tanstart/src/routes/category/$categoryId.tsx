import { ensureCategory } from "@/services/categories/category";
import {
  ensureProductByCategoryOptions,
} from "@/services/Products/products";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "./-Header";
import { ProductsList } from "./-ProductsList";
import { createLoaderQueryClient } from "@/services/loader";
import { Loading } from "@/components/Loading";

export const Route = createFileRoute("/category/$categoryId")({
  component: CategoryPage,
  loader: async ({ params }): Promise<any> => {
    const queryClient = createLoaderQueryClient();

    const categoryId = params.categoryId;

    return Promise.all([
      ensureCategory(queryClient, categoryId),
      ensureProductByCategoryOptions(queryClient, categoryId),
    ]);
  },
});

function CategoryPage() {
  const { categoryId } = Route.useParams();

  return (
    <Loading>
      <section>
        <Header categoryId={categoryId} />
        <ProductsList categoryId={categoryId} />
      </section>
    </Loading>
  );
}
