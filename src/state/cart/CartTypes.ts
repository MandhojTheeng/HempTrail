export type Money = number

export type CartItem = {
  productId: string
  name: string
  price: Money
  image?: string
  quantity: number
  slug: string
}

export type AddCartItemPayload = {
  productId: string
  name: string
  price: Money
  image?: string
  slug: string
  quantity?: number
}

export type CartAction =
  | {
      type: 'ADD'
      payload: AddCartItemPayload
    }
  | {
      type: 'SET_QTY'
      payload: {
        productId: string
        quantity: number
      }
    }
  | {
      type: 'REMOVE'
      payload: {
        productId: string
      }
    }
  | {
      type: 'CLEAR'
    }

export type CartContextValue = {
  items: CartItem[]
  addToCart: (item: AddCartItemPayload) => void
  setQuantity: (productId: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
  cartCount: number
  cartTotal: Money
}