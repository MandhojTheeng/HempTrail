import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import backpackImage from '../assets/backpack.png'
import smallBagImage from '../assets/smallbag.webp'
import hatImage from '../assets/hat.webp'
import fannyPackImage from '../assets/fannypack.webp'
import crossbodyBagImage from '../assets/crossbodybag.png'
import { addToCart, getCartItems } from '../lib/cart'

type Product = {
  id: string
  name: string
  category: string
  price: string
  priceValue: number
  image: string
  alt: string
  tag?: string
}

type PriceRange = {
  label: string
  min: number
  max: number
}

const categories = ['All', 'Backpack', 'Small Bag', 'Hat', 'Fanny Pack', 'Crossbody Bag']

const priceRanges: PriceRange[] = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under Rs 2,000', min: 0, max: 1999 },
  { label: 'Rs 2,000 - Rs 3,000', min: 2000, max: 3000 },
  { label: 'Rs 3,000 - Rs 5,000', min: 3001, max: 5000 },
  { label: 'Above Rs 5,000', min: 5001, max: Infinity },
]

const products: Product[] = [
  {
    id: 'classic-hemp-backpack',
    name: 'Classic Hemp Backpack',
    category: 'Backpack',
    price: 'Rs 4,800',
    priceValue: 4800,
    image: backpackImage,
    alt: 'Classic hemp backpack',
    tag: 'Featured',
  },
  {
    id: 'daily-small-hemp-bag',
    name: 'Daily Small Hemp Bag',
    category: 'Small Bag',
    price: 'Rs 2,200',
    priceValue: 2200,
    image: smallBagImage,
    alt: 'Small hemp bag',
  },
  {
    id: 'natural-hemp-hat',
    name: 'Natural Hemp Hat',
    category: 'Hat',
    price: 'Rs 1,600',
    priceValue: 1600,
    image: hatImage,
    alt: 'Natural hemp hat',
  },
  {
    id: 'travel-hemp-fanny-pack',
    name: 'Travel Hemp Fanny Pack',
    category: 'Fanny Pack',
    price: 'Rs 2,400',
    priceValue: 2400,
    image: fannyPackImage,
    alt: 'Hemp fanny pack',
  },
  {
    id: 'woven-crossbody-bag',
    name: 'Woven Crossbody Bag',
    category: 'Crossbody Bag',
    price: 'Rs 2,900',
    priceValue: 2900,
    image: crossbodyBagImage,
    alt: 'Hemp crossbody bag',
  },
  {
    id: 'earthy-hemp-backpack',
    name: 'Earthy Hemp Backpack',
    category: 'Backpack',
    price: 'Rs 5,200',
    priceValue: 5200,
    image: backpackImage,
    alt: 'Earthy hemp backpack',
  },
  {
    id: 'compact-hemp-side-bag',
    name: 'Compact Hemp Side Bag',
    category: 'Small Bag',
    price: 'Rs 2,100',
    priceValue: 2100,
    image: smallBagImage,
    alt: 'Compact hemp side bag',
  },
  {
    id: 'everyday-crossbody-hemp-bag',
    name: 'Everyday Crossbody Hemp Bag',
    category: 'Crossbody Bag',
    price: 'Rs 3,100',
    priceValue: 3100,
    image: crossbodyBagImage,
    alt: 'Everyday hemp crossbody bag',
  },
]

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activePriceRange, setActivePriceRange] = useState<PriceRange>(priceRanges[0])
  const [cartProductIds, setCartProductIds] = useState<string[]>([])
  const [cartCount, setCartCount] = useState(0)

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
    <main className="min-h-screen bg-[#FAF7F0] text-[#222222]">
      <section className="border-b border-[#1F3D2B]/10 bg-[#FAF7F0]">
        <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-6 lg:px-10 lg:py-12">
          <div className="mb-8 flex flex-col gap-3 border-b border-[#1F3D2B]/10 pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#9A6B4F]">
                HempTrail Shop
              </p>

              <h1 className="mt-3 font-serif text-[44px] font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-[#1F3D2B] sm:text-[64px] lg:text-[78px]">
                Shop Collection
              </h1>
            </div>

            <div className="max-w-xl lg:text-right">
              <p className="text-[14px] leading-7 text-[#222222]/58">
                Handmade hemp bags and everyday accessories crafted with natural texture,
                clean utility, and Nepali craftsmanship.
              </p>

              <Link
                to="/checkout"
                className="mt-3 inline-flex text-[12px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
              >
                Cart: {cartCount} item{cartCount === 1 ? '' : 's'}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr]">
            <aside className="h-fit border border-[#1F3D2B]/12 bg-[#F1E7D7]/35 p-5 lg:sticky lg:top-28">
              <div className="mb-5 flex items-center justify-between border-b border-[#1F3D2B]/10 pb-4">
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#9A6B4F]">
                    Filters
                  </p>

                  <p className="mt-1 text-[13px] leading-6 text-[#222222]/55">
                    Refine by type and price.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('All')
                    setActivePriceRange(priceRanges[0])
                  }}
                  className="border-b border-[#1F3D2B] pb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
                >
                  Reset
                </button>
              </div>

              <div className="border-b border-[#1F3D2B]/10 pb-5">
                <p className="mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B]">
                  Category
                </p>

                <div className="space-y-2">
                  {categories.map((category) => {
                    const count =
                      category === 'All'
                        ? products.length
                        : products.filter((product) => product.category === category).length

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={[
                          'flex w-full items-center justify-between border px-4 py-3.5 text-left text-[13px] font-bold uppercase tracking-[0.06em] transition',
                          activeCategory === category
                            ? 'border-[#1F3D2B] bg-[#1F3D2B] text-[#FAF7F0]'
                            : 'border-[#1F3D2B]/12 bg-[#FAF7F0]/65 text-[#1F3D2B] hover:border-[#1F3D2B]/45 hover:bg-[#FAF7F0]',
                        ].join(' ')}
                      >
                        <span>{category}</span>
                        <span className="text-[12px]">{count}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="pt-5">
                <p className="mb-3 text-[14px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B]">
                  Price Range
                </p>

                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      type="button"
                      onClick={() => setActivePriceRange(range)}
                      className={[
                        'w-full border px-4 py-3.5 text-left text-[13px] font-bold uppercase tracking-[0.06em] transition',
                        activePriceRange.label === range.label
                          ? 'border-[#9A6B4F] bg-[#9A6B4F] text-[#FAF7F0]'
                          : 'border-[#1F3D2B]/12 bg-[#FAF7F0]/65 text-[#1F3D2B] hover:border-[#9A6B4F]/55 hover:bg-[#FAF7F0]',
                      ].join(' ')}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <section>
              <div className="mb-7 flex flex-col gap-4 border-b border-[#1F3D2B]/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  {activeLabel}
                </p>

                <p className="text-[13px] font-medium text-[#222222]/50">
                  {filteredProducts.length} item{filteredProducts.length === 1 ? '' : 's'} shown
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid items-stretch grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => {
                    const added = isInCart(product.id)

                    return (
                      <article key={product.id} className="group flex h-full flex-col">
                        <Link to={`/product/${product.id}`} className="block">
                          <div className="relative aspect-[4/5] overflow-hidden bg-[#F1E7D7]">
                            <img
                              src={product.image}
                              alt={product.alt}
                              className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
                            />

                            <div className="absolute inset-0 bg-[#1F3D2B]/0 transition duration-500 group-hover:bg-[#1F3D2B]/10" />

                            <div className="absolute left-4 top-4 flex items-center gap-2">
                              <span className="bg-[#FAF7F0]/92 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]">
                                {product.category}
                              </span>

                              {product.tag && (
                                <span className="bg-[#1F3D2B] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FAF7F0]">
                                  {product.tag}
                                </span>
                              )}
                            </div>

                            <span className="absolute bottom-4 right-4 translate-y-3 border border-[#FAF7F0]/70 bg-[#FAF7F0]/95 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                              View
                            </span>
                          </div>
                        </Link>

                        <div className="flex flex-1 flex-col pt-4">
                          <div className="grid min-h-[72px] grid-cols-[1fr_auto] gap-4">
                            <div>
                              <Link to={`/product/${product.id}`} className="block">
                                <h3 className="font-serif text-[22px] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[#1F3D2B] transition hover:text-[#9A6B4F]">
                                  {product.name}
                                </h3>
                              </Link>

                              <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.16em] text-[#222222]/42">
                                Handmade Hemp
                              </p>
                            </div>

                            <p className="pt-1 text-right text-[13px] font-bold uppercase tracking-[0.08em] text-[#222222]">
                              {product.price}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleAddToCart(product)}
                            className={[
                              'mt-auto flex h-12 w-full items-center justify-center border text-[12px] font-bold uppercase tracking-[0.16em] transition duration-300',
                              added
                                ? 'border-[#1F3D2B] bg-[#1F3D2B] text-[#FAF7F0]'
                                : 'border-[#1F3D2B] bg-[#FAF7F0] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-[#FAF7F0]',
                            ].join(' ')}
                          >
                            {added ? 'Added to Cart' : 'Add to Cart'}
                          </button>
                        </div>
                      </article>
                    )
                  })}
                </div>
              ) : (
                <div className="border border-[#1F3D2B]/10 bg-[#F1E7D7]/35 px-6 py-16 text-center">
                  <p className="font-serif text-[34px] font-semibold uppercase tracking-[-0.05em] text-[#1F3D2B]">
                    No products found
                  </p>

                  <p className="mx-auto mt-3 max-w-md text-[14px] leading-7 text-[#222222]/60">
                    Change the category or price range to view available hemp goods.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory('All')
                      setActivePriceRange(priceRanges[0])
                    }}
                    className="mt-6 border-b border-[#1F3D2B] pb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}