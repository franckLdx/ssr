import { Button } from '@/components/Button';
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn, useServerFn } from '@tanstack/react-start';
import { useState } from 'react';

export const Route = createFileRoute('/pipe/payment/')({
  component: RouteComponent,
  head: () => ({
    meta: [{
      title: 'Payment | FakeStore',
    }],
  })
})

export const pay = createServerFn({ method: "POST" }).handler(async ({ data }) => {
  // const id = (data as any).id;
  // Server-only logic that can use id
  throw new Error('Payment not implemented yet');
  // return { success: false }
})

function RouteComponent() {
  const callPay = useServerFn<any>(pay);
  const [e, setE] = useState<Error | undefined>(undefined)

  if (e) {
    throw e;
  }

  async function handlePay() {
    try {
      const result = await callPay();
      console.log(result);
    } catch (error) {
      setE(error as Error);
    }
  }

  return (<div> Hello
    <div className="mt-4 flex justify-center">
      <Button onClick={handlePay} className="px-32 py-8">Payment</Button>
    </div>
  </div >);
}
