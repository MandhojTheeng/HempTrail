import { createContext } from 'react'

import type { CartAction, CartItem, Money } from './CartTypes'


export type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  addToCart: (args: {
    productId: string
    name: string
    price: Money
    image?: string
    slug: string
    quantity?: number
  }) => void
  setQuantity: (productId: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

export const CartDrawerContext = createContext<CartContextValue | null>(null)

export type { CartAction }


