import { useContext } from 'react'

import { CartDrawerContext } from './CartDrawerContext'


export function useCart() {
  const ctx = useContext(CartDrawerContext)
  if (!ctx) throw new Error('useCart must be used within CartDrawerProvider')
  return ctx
}

