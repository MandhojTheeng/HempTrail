import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import type { CartItem } from '../lib/cart'

import {
  clearCart,
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from '../lib/cart'

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    function syncCart() {
      setCartItems(getCartItems())
    }

    syncCart()

    window.addEventListener('hemptrail-cart-updated', syncCart)

    return () => {
      window.removeEventListener('hemptrail-cart-updated', syncCart)
    }
  }, [])

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.priceValue * item.quantity
    }, 0)
  }, [cartItems])

  const totalItems = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }, [cartItems])

  function refreshCart() {
    setCartItems(getCartItems())
  }

  function handleIncrease(productId: string, currentQuantity: number) {
    updateCartQuantity(productId, currentQuantity + 1)
    refreshCart()
  }

  function handleDecrease(productId: string, currentQuantity: number) {
    if (currentQuantity <= 1) return

    updateCartQuantity(productId, currentQuantity - 1)
    refreshCart()
  }

  function handleRemove(productId: string) {
    removeFromCart(productId)
    refreshCart()
  }

  function handleClearCart() {
    clearCart()
    setCartItems([])
  }

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#222222]">
      <section className="border-b border-[#1F3D2B]/10 bg-[#FAF7F0]">
        <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-6 lg:px-10 lg:py-12">
          <div className="mb-8 flex flex-col gap-4 border-b border-[#1F3D2B]/10 pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#9A6B4F]">
                Hemp Cart
              </p>

              <h1 className="mt-3 font-serif text-[44px] font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-[#1F3D2B] sm:text-[64px] lg:text-[78px]">
                Your Cart
              </h1>
            </div>

            <p className="max-w-xl text-[14px] leading-7 text-[#222222]/58 lg:text-right">
              Review your selected handmade hemp goods before continuing to checkout.
            </p>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_430px]">
              <section className="space-y-4">
                {cartItems.map((item) => (
                  <article
                    key={item.id}
                    className="grid grid-cols-[110px_1fr] gap-4 border border-[#1F3D2B]/10 bg-[#F1E7D7]/25 p-4 sm:grid-cols-[150px_1fr_auto]"
                  >
                    <Link
                      to={`/product/${item.id}`}
                      className="block aspect-[4/5] overflow-hidden bg-[#F1E7D7]"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.04]"
                      />
                    </Link>

                    <div className="flex flex-col justify-between gap-5">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9A6B4F]">
                          {item.category}
                        </p>

                        <Link to={`/product/${item.id}`}>
                          <h2 className="mt-2 max-w-xl font-serif text-[24px] font-semibold uppercase leading-[0.95] tracking-[-0.045em] text-[#1F3D2B] transition hover:text-[#9A6B4F] sm:text-[30px]">
                            {item.name}
                          </h2>
                        </Link>

                        <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.08em] text-[#222222]">
                          {item.price}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemove(item.id)}
                        className="w-fit border-b border-[#1F3D2B] pb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="col-span-2 flex items-center justify-between border-t border-[#1F3D2B]/10 pt-4 sm:col-span-1 sm:flex-col sm:items-end sm:border-t-0 sm:pt-0">
                      <div className="flex h-11 border border-[#1F3D2B]/18">
                        <button
                          type="button"
                          onClick={() => handleDecrease(item.id, item.quantity)}
                          className="flex w-11 items-center justify-center text-[16px] font-bold text-[#1F3D2B] transition hover:bg-[#F1E7D7]"
                        >
                          −
                        </button>

                        <span className="flex w-12 items-center justify-center border-x border-[#1F3D2B]/18 text-[13px] font-bold text-[#1F3D2B]">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleIncrease(item.id, item.quantity)}
                          className="flex w-11 items-center justify-center text-[16px] font-bold text-[#1F3D2B] transition hover:bg-[#F1E7D7]"
                        >
                          +
                        </button>
                      </div>

                      <p className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#1F3D2B]">
                        $ {(item.priceValue * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </article>
                ))}

                <div className="flex flex-col gap-4 border-t border-[#1F3D2B]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    to="/shop"
                    className="w-fit border-b border-[#1F3D2B] pb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
                  >
                    Continue Shopping
                  </Link>

                  <button
                    type="button"
                    onClick={handleClearCart}
                    className="w-fit border-b border-[#1F3D2B] pb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
                  >
                    Clear Cart
                  </button>
                </div>
              </section>

              <aside className="h-fit border border-[#1F3D2B]/12 bg-[#F1E7D7]/35 p-5 lg:sticky lg:top-28">
                <div className="border-b border-[#1F3D2B]/10 pb-5">
                  <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#9A6B4F]">
                    Cart Summary
                  </p>

                  <h2 className="mt-3 font-serif text-[34px] font-semibold uppercase leading-none tracking-[-0.055em] text-[#1F3D2B]">
                    Order Review
                  </h2>
                </div>

                <div className="space-y-4 border-b border-[#1F3D2B]/10 py-5">
                  <div className="flex items-center justify-between text-[14px] text-[#222222]/65">
                    <span>Total Items</span>
                    <span className="font-bold text-[#222222]">{totalItems}</span>
                  </div>

                  <div className="flex items-center justify-between text-[14px] text-[#222222]/65">
                    <span>Subtotal</span>
                    <span className="font-bold text-[#222222]">
                      $ {subtotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-[#1F3D2B]/10 py-5">
                  <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]">
                    Total
                  </span>

                  <span className="font-serif text-[30px] font-semibold uppercase tracking-[-0.045em] text-[#1F3D2B]">
                    $ {subtotal.toLocaleString()}
                  </span>
                </div>

                <Link
                  to="/checkout"
                  className="mt-5 flex min-h-[52px] w-full items-center justify-center border border-[#1F3D2B] bg-[#1F3D2B] px-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#FAF7F0] transition duration-300 hover:bg-[#173020]"
                >
                  Proceed to Checkout
                </Link>

                <p className="mt-4 text-center text-[12px] leading-6 text-[#222222]/50">
                  Delivery and payment details are completed on the checkout page.
                </p>
              </aside>
            </div>
          ) : (
            <div className="border border-[#1F3D2B]/10 bg-[#F1E7D7]/35 px-6 py-20 text-center">
              <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#9A6B4F]">
                Your cart is empty
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl font-serif text-[42px] font-semibold uppercase leading-[0.9] tracking-[-0.06em] text-[#1F3D2B] sm:text-[64px]">
                Add hemp goods to continue.
              </h2>

              <Link
                to="/shop"
                className="mt-8 inline-flex min-h-[52px] items-center justify-center border border-[#1F3D2B] bg-[#1F3D2B] px-8 text-[12px] font-bold uppercase tracking-[0.2em] text-[#FAF7F0] transition hover:bg-[#173020]"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}