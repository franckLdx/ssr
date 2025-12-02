import { Loading } from '@/components/Loading';
import { cartQueryOptions } from '@/services/cart/cart';
import { QueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { Products } from './cart/-Products';
import { PageHeader } from '@/components/PageHeader';

export const Route = createFileRoute('/pipe/')({
  loader: async ({ context }): Promise<any> => {
    const queryClient = (context as any).queryClient as QueryClient;
    await queryClient.ensureQueryData(cartQueryOptions);
  },

  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section>
      <Loading>
        <PageHeader>
          Your Cart
        </PageHeader>
        <Products />
      </Loading >
    </section >
  )
}
