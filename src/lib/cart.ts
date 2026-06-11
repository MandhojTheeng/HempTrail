export type CartProduct = {
  id: string
  name: string
  category: string
  price: string
  priceValue: number
  image: string
  alt: string
}

export type CartItem = CartProduct & {
  quantity: number
}

const CART_KEY = 'hemptrail_cart'

export function getCartItems(): CartItem[] {
  const savedCart = localStorage.getItem(CART_KEY)

  if (!savedCart) return []

  try {
    return JSON.parse(savedCart) as CartItem[]
  } catch {
    return []
  }
}

export function saveCartItems(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
  window.dispatchEvent(new Event('hemptrail-cart-updated'))
}

export function addToCart(product: CartProduct, quantity = 1) {
  const currentCart = getCartItems()
  const existingItem = currentCart.find((item) => item.id === product.id)

  if (existingItem) {
    const updatedCart = currentCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item,
    )

    saveCartItems(updatedCart)
    return
  }

  saveCartItems([...currentCart, { ...product, quantity }])
}

export function removeFromCart(productId: string) {
  const updatedCart = getCartItems().filter((item) => item.id !== productId)
  saveCartItems(updatedCart)
}

export function updateCartQuantity(productId: string, quantity: number) {
  if (quantity < 1) return

  const updatedCart = getCartItems().map((item) =>
    item.id === productId ? { ...item, quantity } : item,
  )

  saveCartItems(updatedCart)
}

export function clearCart() {
  saveCartItems([])
}