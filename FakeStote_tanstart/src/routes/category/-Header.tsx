import { PageHeader } from "@/components/PageHeader";
import { getCategoryQueryOptions } from "@/services/categories/category";
import { useSuspenseQuery } from "@tanstack/react-query";

type HeaderProps = {
  categoryId: string;
}

export function Header({ categoryId }: HeaderProps) {
  const categoryQuery = useSuspenseQuery(getCategoryQueryOptions(categoryId));

  return (
    <PageHeader>
      {categoryQuery.data?.description}
    </PageHeader>
  );
}
