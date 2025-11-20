import { useState } from "react";
import { Home, ShoppingCart } from "lucide-react";
import { BurgerButtons } from "../components/menu/BurgerButtons";
import { Menu } from "../components/menu";
import { useFetchCategories } from "@/services/categories/categories";
import { Route as categoryRoute } from "./category/$categoryId";
import { Route as cartRoute } from "./pipe/cart";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  const categoriesQuery = useFetchCategories();

  return (
    <>
      <header className="p-4 flex items-center justify-between bg-gray-800 text-white shadow-lg">
        <BurgerButtons onClick={() => setIsOpen(true)} />
        <Link to={cartRoute.to}><Button><ShoppingCart size={24} /></Button></Link>
      </header >
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full hidden"
          }`}
      >
        <Menu.Title onClose={onClose}>Categories</Menu.Title>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Menu.Link to="/" onClick={onClose}>
            <Home size={20} />
            <Menu.Text>Home</Menu.Text>
          </Menu.Link>

          {categoriesQuery.data?.map((category: any) => (
            <Menu.Link
              key={category.id}
              to={categoryRoute.to}
              params={{ categoryId: category.id }}
              onClick={onClose}
            >
              <Menu.Text>{category.description}</Menu.Text>
            </Menu.Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
