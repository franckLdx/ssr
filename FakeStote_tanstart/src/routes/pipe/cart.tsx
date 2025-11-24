import { QueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pipe/cart')({
  loader: async ({ context }): Promise<any> => {
    const queryClient = (context as any).queryClient as QueryClient;
  },

  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pipe/cart"!</div>
}
