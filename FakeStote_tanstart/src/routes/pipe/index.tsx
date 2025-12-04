import { Loading } from '@/components/Loading';
import { cartQueryOptions } from '@/services/cart/cart';
import { QueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { Products } from './cart/-Products';
import { PageHeader } from '@/components/PageHeader';
import { getProductQueryOptions } from '@/services/products/products';
import { Total } from './cart/-Total';

export const Route = createFileRoute('/pipe/')({
  loader: async ({ context }): Promise<any> => {
    const queryClient = (context as any).queryClient as QueryClient;
    const cart = await queryClient.ensureQueryData(cartQueryOptions);

    for (const product of cart.products) {
      queryClient.prefetchQuery(
        getProductQueryOptions(product.productId),
      )
    }
  },

  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section>
      <PageHeader>
        <Loading>
          Your Cart - <Total />
        </Loading >
      </PageHeader>
      <Products />
    </section >
  )
}

