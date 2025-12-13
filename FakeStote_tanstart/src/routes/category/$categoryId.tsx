import { getCategoryQueryOptions } from "@/services/categories/category";
import {
  getProductByCategoryQueryOptions,
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
      queryClient.ensureQueryData(getCategoryQueryOptions(categoryId)),
      queryClient.ensureQueryData(getProductByCategoryQueryOptions(categoryId)),
    ]);
  },
  head: () => ({
    meta: [{
      title: 'Category | FakeStore',
    }],
  })
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
