import type { CartAction, CartItem, CartContextValue } from './types'

export type { CartItem, CartAction, CartContextValue }

export function createDefaultCartState(): { items: CartItem[] } {
  return { items: [] }
}

