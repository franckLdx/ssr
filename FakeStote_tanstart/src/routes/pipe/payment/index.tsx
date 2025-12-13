import { Button } from '@/components/Button';
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn, useServerFn } from '@tanstack/react-start';

export const Route = createFileRoute('/pipe/payment/')({
  component: RouteComponent,
  head: () => ({
    meta: [{
      title: 'Payment | FakeStore',
    }],
  })
})

export const pay = createServerFn<{ id: number }, { success: boolean }>({ method: 'POST' }).handler(async (input) => {
  const { id } = input;
  // Server-only logic that can use id
  return { success: true }
})

function RouteComponent() {
  const onPay = useServerFn(pay);

  async function handlePay() {
    const result = await onPay({ id: 42 });
    console.log(result);
  }

  return (<div> Hello
    <div className="mt-4 flex justify-center">
      <Button onClick={handlePay} className="px-32 py-8">Payment</Button>
    </div>
  </div >);
}
