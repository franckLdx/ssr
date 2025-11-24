import { PageHeader } from "@/components/PageHeader";
import { useFetchCategory } from "@/services/categories/category";

type HeaderProps = {
  categoryId: string;
}

export function Header({ categoryId }: HeaderProps) {
  const categoryQuery = useFetchCategory(categoryId);

  return (
    <PageHeader>
      {categoryQuery.data?.description}
    </PageHeader>
  );
}
