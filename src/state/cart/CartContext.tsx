import { createContext } from 'react'

import type { CartContextValue } from './useCartContext'

export const CartDrawerContext = createContext<CartContextValue | null>(null)

