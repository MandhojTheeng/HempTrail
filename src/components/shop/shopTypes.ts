export type Product = {
  id: string
  name: string
  category: string
  price: string
  priceValue: number
  image: string
  alt: string
  tag?: string
}

export type PriceRange = {
  label: string
  min: number
  max: number
}