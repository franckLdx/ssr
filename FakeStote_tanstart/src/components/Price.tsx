type PriceProps = {
  amount: number
};

export function Price({ amount }: PriceProps) {
  return (
    <span>{amount}&nbsp;€</span>
  );
}