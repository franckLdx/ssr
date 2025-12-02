import { ensureCategory } from "@/services/categories/category";
import {
  ensureProductByCategoryOptions,
} from "@/services/products/products";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "./-Header";
import { ProductsList } from "./-ProductsList";
import { Loading } from "@/components/Loading";
import { QueryClient } from "@tanstack/react-query";

export const Route = createFileRoute("/category/$categoryId")({
  component: CategoryPage,
  loader: async ({ params, context }): Promise<any> => {
    const queryClient = (context as any).queryClient as QueryClient;

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
