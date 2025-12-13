import { Loading } from '@/components/Loading';
import { cartQueryOptions } from '@/services/cart/cart';
import { QueryClient } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router'
import { Products } from './-Products';
import { PageHeader } from '@/components/PageHeader';
import { getProductQueryOptions } from '@/services/products/products';
import { Total } from './-Total';
import { Button } from '@/components/Button';
import { Route as paymentRoute } from '../payment';

export const Route = createFileRoute('/pipe/cart/')({
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

  head: () => ({
    meta: [{
      title: 'Cart | FakeStore',
    }],
  })
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
      <div className="mt-4 flex justify-center">
        <Link to={paymentRoute.to}><Button className="px-32 py-8">Payment</Button></Link>
      </div>
    </section >
  )
}

