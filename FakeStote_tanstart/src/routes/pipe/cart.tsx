import { createLoaderQueryClient } from '@/services/loader';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pipe/cart')({
  loader: async (): Promise<any> => {
    const queryClient = createLoaderQueryClient();
  },

  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pipe/cart"!</div>
}
