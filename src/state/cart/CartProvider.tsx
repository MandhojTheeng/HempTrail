import { useContext, useMemo, useReducer } from 'react'

import { cartReducer } from './cartReducer'
import { CartDrawerContext } from './CartContext'

import type { CartAction, CartItem, Money } from './CartTypes'

type CartState = {
  items: CartItem[]
}

type CartContextValue = {
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

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer as (s: CartState, a: CartAction) => CartState, {
    items: [],
  })

  const value = useMemo<CartContextValue>(() => {
    const count = state.items.reduce((acc, it) => acc + it.quantity, 0)
    const subtotal = state.items.reduce((acc, it) => acc + it.quantity * it.price, 0)

    return {
      items: state.items,
      count,
      subtotal,
      addToCart: ({ productId, name, price, image, slug, quantity }) =>
        dispatch({ type: 'ADD', payload: { productId, name, price, image, slug, quantity } }),
      setQuantity: (productId, quantity) =>
        dispatch({ type: 'SET_QTY', payload: { productId, quantity } }),
      removeFromCart: (productId) => dispatch({ type: 'REMOVE', payload: { productId } }),
      clearCart: () => dispatch({ type: 'CLEAR' }),
    }
  }, [state.items])

  return <CartDrawerContext.Provider value={value}>{children}</CartDrawerContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartDrawerContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

