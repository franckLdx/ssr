import { Card } from "@/components/Card";
import type { ProductModel } from "@/services/Products/products";
import { ProductCardFooter } from "./-ProductCartFooter";

type ProductCardProps = {
	product: ProductModel;
};

export function ProductCard({ product }: ProductCardProps) {
	return (
		<Card.Border>
			<Card.Title>{product.title}</Card.Title>
			<img src={product.image} alt="" aria-hidden className="mx-auto block" />
			<p className="pt-2">{product.description}</p>
			<p className="pt-2">
				Rating: {product.rating.rate}/{product.rating.count}
			</p>
			<Card.Footer>
				<ProductCardFooter product={product} />
			</Card.Footer>
		</Card.Border>
	);
}
