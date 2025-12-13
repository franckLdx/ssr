import { Link } from "@tanstack/react-router";
import { Button } from "./Button";
import { ReactNode } from "react";

type LinkButtonProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

export function LinkButton({ to, children, className }: LinkButtonProps) {
  return (
    <Link to={to}>
      <Button className={className}>
        {children}
      </Button>
    </Link>
  )
}