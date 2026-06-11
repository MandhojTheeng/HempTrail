import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { CategoryFilterDrawer } from '../components/category/CategoryFilterDrawer'
import { CategoryHeader } from '../components/category/CategoryHeader'
import { CategoryProductGrid } from '../components/category/CategoryProductGrid'
import {
  getCategoryFromSlug,
  normalizeSlug,
} from '../components/category/categoryHelpers'
import { priceRanges, products } from '../components/shop/shopData'
import type { PriceRange, Product } from '../components/shop/shopTypes'
import { addToCart, getCartItems } from '../lib/cart'

export default function CategoryPage() {
  const params = useParams()
  const currentSlug = normalizeSlug(params.categoryId || params.slug || params.category)
  const currentCategory = getCategoryFromSlug(currentSlug)

  const [activePriceRange, setActivePriceRange] = useState<PriceRange>(priceRanges[0])
  const [cartProductIds, setCartProductIds] = useState<string[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    setActivePriceRange(priceRanges[0])
    setIsFilterOpen(false)
  }, [currentCategory])

  useEffect(() => {
    function syncCartState() {
      const cartItems = getCartItems()

      setCartProductIds(cartItems.map((item) => item.id))
      setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0))
    }

    syncCartState()

    window.addEventListener('hemptrail-cart-updated', syncCartState)

    return () => {
      window.removeEventListener('hemptrail-cart-updated', syncCartState)
    }
  }, [])

  const categoryProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = product.category === currentCategory

      const matchesPrice =
        product.priceValue >= activePriceRange.min &&
        product.priceValue <= activePriceRange.max

      return matchesCategory && matchesPrice
    })
  }, [currentCategory, activePriceRange])

  const activeLabel =
    activePriceRange.label === 'All Prices'
      ? currentCategory
      : `${currentCategory} · ${activePriceRange.label}`

  function handleResetFilters() {
    setActivePriceRange(priceRanges[0])
  }

  function handleAddToCart(product: Product) {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      priceValue: product.priceValue,
      image: product.image,
      alt: product.alt,
    })

    const updatedCart = getCartItems()

    setCartProductIds(updatedCart.map((item) => item.id))
    setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0))
  }

  function isInCart(productId: string) {
    return cartProductIds.includes(productId)
  }

  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#222222]">
      <CategoryHeader
        currentCategory={currentCategory}
        activeLabel={activeLabel}
        productCount={categoryProducts.length}
        cartCount={cartCount}
        onOpenFilters={() => setIsFilterOpen(true)}
      />

      <CategoryProductGrid
        products={categoryProducts}
        isInCart={isInCart}
        onAddToCart={handleAddToCart}
        onReset={handleResetFilters}
      />

      <CategoryFilterDrawer
        isOpen={isFilterOpen}
        currentCategory={currentCategory}
        activeLabel={activeLabel}
        activePriceRange={activePriceRange}
        onClose={() => setIsFilterOpen(false)}
        onReset={handleResetFilters}
        onPriceRangeChange={setActivePriceRange}
      />
    </main>
  )
}