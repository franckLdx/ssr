export type CartItemModel = {
	productId: string;
	quantity: number;
};

export type CartModel = {
	id: string;
	userId: number;
	date: string;
	products: CartItemModel[];
};
