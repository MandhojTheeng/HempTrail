import type { CartAction, CartItem, Money } from './CartTypes'



type CartState = {
  items: CartItem[]
}

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const { productId, name, price, image, slug, quantity = 1 } = action.payload
      const existing = state.items.find((it) => it.productId === productId)
      if (existing) {
        return {
          items: state.items.map((it) =>
            it.productId === productId ? { ...it, quantity: it.quantity + quantity } : it
          ),
        }
      }
      return {
        items: [
          ...state.items,
          {
            productId,
            name,
            price: price as Money,
            image,
            slug,
            quantity,
          },
        ],
      }
    }
    case 'SET_QTY': {
      const { productId, quantity } = action.payload
      if (quantity <= 0) {
        return { items: state.items.filter((it) => it.productId !== productId) }
      }
      return {
        items: state.items.map((it) => (it.productId === productId ? { ...it, quantity } : it)),
      }
    }
    case 'REMOVE': {
      return { items: state.items.filter((it) => it.productId !== action.payload.productId) }
    }
    case 'CLEAR':
      return { items: [] }
  }
}

