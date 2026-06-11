import { useEffect, useMemo, useState } from 'react'

import { priceRanges, products } from '../components/shop/shopData'
import type { PriceRange, Product } from '../components/shop/shopTypes'
import { ShopFilters } from '../components/shop/ShopFilters'
import { ShopProductGrid } from '../components/shop/ShopProductGrid'
import { addToCart, getCartItems } from '../lib/cart'

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activePriceRange, setActivePriceRange] = useState<PriceRange>(priceRanges[0])
  const [cartProductIds, setCartProductIds] = useState<string[]>([])

  useEffect(() => {
    function syncCartState() {
      const cartItems = getCartItems()
      setCartProductIds(cartItems.map((item) => item.id))
    }

    syncCartState()

    window.addEventListener('hemptrail-cart-updated', syncCartState)

    return () => {
      window.removeEventListener('hemptrail-cart-updated', syncCartState)
    }
  }, [])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory

      const matchesPrice =
        product.priceValue >= activePriceRange.min &&
        product.priceValue <= activePriceRange.max

      return matchesCategory && matchesPrice
    })
  }, [activeCategory, activePriceRange])

  const activeLabel =
    activeCategory === 'All' && activePriceRange.label === 'All Prices'
      ? 'All handmade pieces'
      : `${activeCategory === 'All' ? 'All Categories' : activeCategory} · ${
          activePriceRange.label
        }`

  function handleResetFilters() {
    setActiveCategory('All')
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
  }

  function isInCart(productId: string) {
    return cartProductIds.includes(productId)
  }

  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#222222]">
      <ShopFilters
        activeCategory={activeCategory}
        activePriceRange={activePriceRange}
        onCategoryChange={setActiveCategory}
        onPriceRangeChange={setActivePriceRange}
      />

      <ShopProductGrid
        products={filteredProducts}
        activeLabel={activeLabel}
        isInCart={isInCart}
        onAddToCart={handleAddToCart}
        onReset={handleResetFilters}
      />
    </main>
  )
}