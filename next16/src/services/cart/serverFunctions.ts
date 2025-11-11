
'use server'

import { updateTag } from "next/cache";
import { CartModel } from "./declaration";
import { ProductModel } from "../products/declaration";

const TAG = 'cart'

const CART_URL = "http://localhost:3000/carts/1"

export async function getCart() {
  console.log('******************* GET CART START')
  const response = await fetch(CART_URL, { next: { tags: [TAG] }, cache: 'no-store' })
  if (!response.ok) {
    throw new Error("Failed to addd product")
  }
  const cart = await response.json() as CartModel
  console.log('******************* GET CART ' + cart.products.length)
  return cart
}

export async function addProductToCart(product: ProductModel) {
  const cartModel = await getCart()
  try {
    const payload = {
      products: [
        ...cartModel.products,
        {
          productId: product.id,
          quantity: 1
        }
      ]
    }
    const response = await fetch(CART_URL, { method: 'PATCH', body: JSON.stringify(payload) })
    if (!response.ok) {
      throw new Error("Failed to addd product")
    }
  } finally {
    console.log('******************* ADD PRODUCT')
    // revalidateTag(TAG, "max")
    updateTag(TAG)
  }
}