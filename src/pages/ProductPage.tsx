import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductImageShowcase } from '../components/product/ProductImageShowcase'
import { ProductInfoPanel } from '../components/product/ProductInfoPanel'
import { ProductRelatedSection } from '../components/product/ProductRelatedSection'
import {
  getProductDescription,
  getProductSections,
} from '../components/product/productContent'
import { products } from '../components/shop/shopData'
import { addToCart, getCartItems } from '../lib/cart'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id || params.productId || params.slug

  const [quantity, setQuantity] = useState(1)
  const [cartProductIds, setCartProductIds] = useState<string[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [openSection, setOpenSection] = useState('Details')

  const product = useMemo(() => {
    return products.find((item) => item.id === productId) || products[0]
  }, [productId])

  const relatedProducts = useMemo(() => {
    const sameCategoryProducts = products.filter(
      (item) => item.id !== product.id && item.category === product.category,
    )

    const otherProducts = products.filter(
      (item) => item.id !== product.id && item.category !== product.category,
    )

    return [...sameCategoryProducts, ...otherProducts].slice(0, 4)
  }, [product])

  const productDescription = getProductDescription(product.category)
  const productSections = getProductSections(product.category)

  useEffect(() => {
    setQuantity(1)
    setOpenSection('Details')
  }, [product.id])

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

  function handleAddToCart() {
    Array.from({ length: quantity }).forEach(() => {
      addToCart({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        priceValue: product.priceValue,
        image: product.image,
        alt: product.alt,
      })
    })

    const updatedCart = getCartItems()

    setCartProductIds(updatedCart.map((item) => item.id))
    setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0))
  }

  const isAdded = cartProductIds.includes(product.id)

  return (
    <main className="min-h-screen bg-[#FFFCF7] text-[#222222]">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_48%,rgba(216,195,165,0.34),transparent_34%),radial-gradient(circle_at_78%_34%,rgba(31,61,43,0.06),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[calc(100vh-150px)] max-w-[1440px] grid-cols-1 px-5 py-8 sm:px-6 lg:grid-cols-[0.58fr_0.42fr] lg:px-10 lg:py-12">
          <ProductImageShowcase product={product} />

          <ProductInfoPanel
            product={product}
            productDescription={productDescription}
            productSections={productSections}
            quantity={quantity}
            cartCount={cartCount}
            isAdded={isAdded}
            openSection={openSection}
            onQuantityDecrease={() => setQuantity((value) => Math.max(1, value - 1))}
            onQuantityIncrease={() => setQuantity((value) => value + 1)}
            onAddToCart={handleAddToCart}
            onOpenSectionChange={setOpenSection}
          />
        </div>
      </section>

      <ProductRelatedSection products={relatedProducts} />
    </main>
  )
}