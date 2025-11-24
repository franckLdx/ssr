import { Title } from "./Typo";

type PageHeaderProps = {
  children: React.ReactNode;
}

export function PageHeader({ children }: PageHeaderProps) {
  return (
    <Title.H1 className="text-center pt-8 mb-16">
      {children}
    </Title.H1>
  )
}