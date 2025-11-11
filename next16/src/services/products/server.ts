'use server'

import { ProductModel } from "./declaration"

export async function getProducts() {
  'use cache'
  const data = await fetch('http://localhost:3000/products', { cache: 'no-store' })
  if (!data.ok) {
    throw new Error("Failed to load products")
  }
  return await data.json() as ProductModel[]
}
