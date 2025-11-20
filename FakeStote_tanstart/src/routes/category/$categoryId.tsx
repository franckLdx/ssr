import { fetchCategory, getCategoryKeys } from "@/services/categories/category";
import {
  fetchProductByCategory,
  getProductsByCatrgory,
} from "@/services/Products/products";
import {
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { prefetchCart } from "@/services/Cart/getCart";
import { Header } from "./-Header";
import { ProductsList } from "./-ProductsList";
import { ensureCategories } from "@/services/categories/categories";
import { createLoaderQueryClient } from "@/services/loader";
import { Loading } from "@/components/Loading";

export const Route = createFileRoute("/category/$categoryId")({
  component: CategoryPage,
  loader: async ({ params }): Promise<any> => {
    const queryClient = createLoaderQueryClient();

    ensureCategories(queryClient);

    const categoryId = params.categoryId;

    queryClient.prefetchQuery({
      queryKey: getProductsByCatrgory(categoryId),
      queryFn: () => fetchProductByCategory(categoryId),
    });

    queryClient.prefetchQuery({
      queryKey: getCategoryKeys(categoryId),
      queryFn: () => fetchCategory(categoryId),
    });

    prefetchCart(queryClient);

    return {
      dehydratedState: dehydrate(queryClient),
    };
  },
});

function CategoryPage() {
  const { dehydratedState } = Route.useLoaderData<any>();
  const { categoryId } = Route.useParams();

  return (
    <HydrationBoundary state={dehydratedState}>
      <Loading>
        <section>
          <Header categoryId={categoryId} />
          <ProductsList categoryId={categoryId} />
        </section>
      </Loading>
    </HydrationBoundary>
  );
}
