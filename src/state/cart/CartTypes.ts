export type Money = number

export type CartItem = {
  productId: string
  name: string
  price: Money
  image?: string
  quantity: number
  slug: string
}

export type CartAction =
  | { type: 'ADD'; payload: { productId: string; name: string; price: Money; image?: string; slug: string; quantity?: number } }
  | { type: 'SET_QTY'; payload: { productId: string; quantity: number } }
  | { type: 'REMOVE'; payload: { productId: string } }
  | { type: 'CLEAR' }

