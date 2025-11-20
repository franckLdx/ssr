import { ensureCategories } from '@/services/categories/categories';
import { createLoaderQueryClient } from '@/services/loader';
import { dehydrate } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pipe/cart')({
  loader: async (): Promise<any> => {
    const queryClient = createLoaderQueryClient();

    ensureCategories(queryClient);

    return {
      dehydratedState: dehydrate(queryClient),
    };
  },

  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pipe/cart"!</div>
}
