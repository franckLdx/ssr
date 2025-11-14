import { Title } from "@/components/typo";
import { useFetchCategory } from "@/services/categories/category";

type HeaderProps = {
  categoryId: string;
}

export function Header({ categoryId}: HeaderProps) {
  const categoryQuery = useFetchCategory(categoryId);

  return (
    <Title.H1 className="text-center pt-8 mb-16">
      {categoryQuery.data?.description}
    </Title.H1>
);
}
