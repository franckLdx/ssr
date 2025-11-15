import { Link } from "@tanstack/react-router";
import { Title } from "./typo";

export function NotFoundComponent() {
  return (
    <div>
      <Title.H1>Not found!</Title.H1>
      <Link to="/">Go home</Link>
    </div>
  )
}