import { fetchCategory, getCategoryKeys } from "@/services/categories/category";
import {
  fetchProductByCategory,
  getProductsByCatrgory,
} from "@/services/Products/products";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { fetchCart, getCartKeys } from "@/services/Cart/getCart";
import { Header } from "./-Header";
import { ProductsList } from "./-ProductsList";

export const Route = createFileRoute("/category/$categoryId")({
  component: CategoryPage,
  loader: async ({ params }): Promise<any> => {
    const categoryId = params.categoryId;
    const queryClient = new QueryClient({
      defaultOptions: { queries: { staleTime: Infinity } },
    });

    queryClient.prefetchQuery({
      queryKey: getProductsByCatrgory(categoryId),
      queryFn: () => fetchProductByCategory(categoryId),
    });

    queryClient.prefetchQuery({
      queryKey: getCategoryKeys(categoryId),
      queryFn: () => fetchCategory(categoryId),
    });

    queryClient.prefetchQuery({
      queryKey: getCartKeys(),
      queryFn: fetchCart,
    });

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
      <section>
        <Header categoryId={categoryId} />
        <ProductsList categoryId={categoryId} />
      </section>
    </HydrationBoundary>
  );
}
