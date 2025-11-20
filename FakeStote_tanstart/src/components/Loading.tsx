import { Suspense } from "react";

type LoadingProps = {
  children?: React.ReactNode;
};

export function Loading({ children }: LoadingProps) {
  return (<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>);
}