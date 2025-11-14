import { Menu } from "lucide-react";
import { Button } from "../Button";

type BurgerButtonsProps = {
	onClick: () => void;
};

export function BurgerButtons({ onClick }: BurgerButtonsProps) {
	return (
		<Button onClick={onClick} aria-label="Open menu">
			<Menu size={24} />
		</Button>
	);
}
