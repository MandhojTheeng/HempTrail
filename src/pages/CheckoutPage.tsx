import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import type { CartItem } from '../lib/cart'

import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from '../lib/cart'

type NoticeType = 'info' | 'error' | 'success'

type CheckoutNotice = {
  type: NoticeType
  title: string
  message: string
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [paymentMethod, setPaymentMethod] = useState('cash')
  const [notice, setNotice] = useState<CheckoutNotice | null>(null)
  const [isPaymentChecking, setIsPaymentChecking] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)

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

  const deliveryFee = cartItems.length > 0 ? 150 : 0
  const grandTotal = subtotal + deliveryFee

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

  function handleCashPayment() {
    setPaymentMethod('cash')
    setNotice({
      type: 'success',
      title: 'Cash on Delivery Selected',
      message:
        'Your order will be confirmed manually before dispatch. Payment will be collected during delivery.',
    })
  }

  function handleOnlinePayment() {
    setPaymentMethod('online')
    setIsPaymentChecking(true)
    setNotice({
      type: 'info',
      title: 'Connecting to Payment Gateway',
      message: 'Please wait while we check the secure payment connection.',
    })

    window.setTimeout(() => {
      setIsPaymentChecking(false)
      setNotice({
        type: 'error',
        title: 'Payment Gateway Timeout',
        message:
          'The payment server did not respond in time. This may be caused by slow internet or a temporary connection issue. Please try again later or use Cash on Delivery.',
      })
    }, 1600)
  }

  function handlePlaceOrder() {
    setIsPlacingOrder(true)
    setNotice({
      type: 'info',
      title: 'Processing Order',
      message: 'Please wait while we submit your order details.',
    })

    window.setTimeout(() => {
      setIsPlacingOrder(false)
      setNotice({
        type: 'error',
        title: 'Order Submission Failed',
        message:
          'We could not complete the order request because the checkout server is temporarily unreachable. Please check your connection and try again later.',
      })
    }, 1800)
  }

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#222222]">
      <section className="border-b border-[#1F3D2B]/10 bg-[#FAF7F0]">
        <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-6 lg:px-10 lg:py-12">
          <div className="mb-8 flex flex-col gap-4 border-b border-[#1F3D2B]/10 pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#9A6B4F]">
                HempTrail Checkout
              </p>

              <h1 className="mt-3 font-serif text-[44px] font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-[#1F3D2B] sm:text-[64px] lg:text-[78px]">
                Checkout
              </h1>
            </div>

            <p className="max-w-xl text-[14px] leading-7 text-[#222222]/58 lg:text-right">
              Complete your delivery details and review your handmade hemp goods before
              placing the order.
            </p>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_430px]">
              <section className="space-y-8">
                {notice && (
                  <div
                    className={[
                      'border px-5 py-4',
                      notice.type === 'error'
                        ? 'border-[#9A6B4F]/35 bg-[#F1E7D7] text-[#9A6B4F]'
                        : '',
                      notice.type === 'info'
                        ? 'border-[#1F3D2B]/20 bg-[#FAF7F0] text-[#1F3D2B]'
                        : '',
                      notice.type === 'success'
                        ? 'border-[#1F3D2B]/25 bg-[#F1E7D7]/45 text-[#1F3D2B]'
                        : '',
                    ].join(' ')}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-[0.18em]">
                          {notice.title}
                        </p>

                        <p className="mt-2 text-[14px] leading-7 opacity-80">
                          {notice.message}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setNotice(null)}
                        className="text-[18px] leading-none opacity-70 transition hover:opacity-100"
                        aria-label="Close notice"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )}

                <div className="border border-[#1F3D2B]/10 bg-[#F1E7D7]/25 p-5 sm:p-6">
                  <div className="border-b border-[#1F3D2B]/10 pb-5">
                    <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#9A6B4F]">
                      Delivery Details
                    </p>

                    <h2 className="mt-3 font-serif text-[34px] font-semibold uppercase leading-none tracking-[-0.055em] text-[#1F3D2B]">
                      Customer Information
                    </h2>
                  </div>

                  <form className="grid grid-cols-1 gap-5 pt-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]"
                      >
                        Full Name
                      </label>

                      <input
                        id="fullName"
                        type="text"
                        placeholder="Your full name"
                        className="h-12 w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        placeholder="98XXXXXXXX"
                        className="h-12 w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="h-12 w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]"
                      >
                        City
                      </label>

                      <input
                        id="city"
                        type="text"
                        placeholder="Kathmandu"
                        className="h-12 w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="address"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]"
                      >
                        Delivery Address
                      </label>

                      <textarea
                        id="address"
                        rows={4}
                        placeholder="Street, area, city, nearby landmark"
                        className="w-full resize-none border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 py-3 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="note"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]"
                      >
                        Order Note
                      </label>

                      <textarea
                        id="note"
                        rows={3}
                        placeholder="Any special instruction for this order"
                        className="w-full resize-none border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 py-3 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>
                  </form>
                </div>

                <div className="border border-[#1F3D2B]/10 bg-[#F1E7D7]/25 p-5 sm:p-6">
                  <div className="border-b border-[#1F3D2B]/10 pb-5">
                    <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#9A6B4F]">
                      Payment
                    </p>

                    <h2 className="mt-3 font-serif text-[34px] font-semibold uppercase leading-none tracking-[-0.055em] text-[#1F3D2B]">
                      Payment Method
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-3 pt-6 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={handleCashPayment}
                      disabled={isPaymentChecking || isPlacingOrder}
                      className={[
                        'border px-5 py-4 text-left transition disabled:cursor-not-allowed disabled:opacity-60',
                        paymentMethod === 'cash'
                          ? 'border-[#1F3D2B] bg-[#1F3D2B] text-[#FAF7F0]'
                          : 'border-[#1F3D2B]/15 bg-[#FAF7F0] text-[#1F3D2B] hover:border-[#1F3D2B]/45',
                      ].join(' ')}
                    >
                      <span className="block text-[13px] font-bold uppercase tracking-[0.16em]">
                        Cash on Delivery
                      </span>
                      <span className="mt-2 block text-[13px] leading-6 opacity-70">
                        Pay when your order arrives.
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleOnlinePayment}
                      disabled={isPaymentChecking || isPlacingOrder}
                      className={[
                        'border px-5 py-4 text-left transition disabled:cursor-not-allowed disabled:opacity-60',
                        paymentMethod === 'online'
                          ? 'border-[#9A6B4F] bg-[#9A6B4F] text-[#FAF7F0]'
                          : 'border-[#1F3D2B]/15 bg-[#FAF7F0] text-[#1F3D2B] hover:border-[#9A6B4F]/55',
                      ].join(' ')}
                    >
                      <span className="block text-[13px] font-bold uppercase tracking-[0.16em]">
                        {isPaymentChecking ? 'Checking Connection...' : 'Online Payment'}
                      </span>
                      <span className="mt-2 block text-[13px] leading-6 opacity-70">
                        Secure gateway connection required.
                      </span>
                    </button>
                  </div>

                  {isPaymentChecking && (
                    <div className="mt-5 border border-[#1F3D2B]/10 bg-[#FAF7F0] p-4">
                      <div className="h-1.5 w-full overflow-hidden bg-[#1F3D2B]/10">
                        <div className="h-full w-2/3 animate-pulse bg-[#1F3D2B]" />
                      </div>

                      <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B]">
                        Verifying payment server...
                      </p>
                    </div>
                  )}
                </div>

                <div className="border border-[#1F3D2B]/10 bg-[#F1E7D7]/25 p-5 sm:p-6">
                  <div className="border-b border-[#1F3D2B]/10 pb-5">
                    <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#9A6B4F]">
                      Items
                    </p>

                    <h2 className="mt-3 font-serif text-[34px] font-semibold uppercase leading-none tracking-[-0.055em] text-[#1F3D2B]">
                      Order Items
                    </h2>
                  </div>

                  <div className="space-y-4 pt-6">
                    {cartItems.map((item) => (
                      <article
                        key={item.id}
                        className="grid grid-cols-[90px_1fr] gap-4 border-b border-[#1F3D2B]/10 pb-4 sm:grid-cols-[110px_1fr_auto]"
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

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A6B4F]">
                            {item.category}
                          </p>

                          <Link to={`/product/${item.id}`}>
                            <h3 className="mt-2 font-serif text-[22px] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[#1F3D2B] transition hover:text-[#9A6B4F]">
                              {item.name}
                            </h3>
                          </Link>

                          <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.08em] text-[#222222]">
                            {item.price}
                          </p>

                          <button
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            className="mt-4 border-b border-[#1F3D2B] pb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
                          >
                            Remove
                          </button>
                        </div>

                        <div className="col-span-2 flex items-center justify-between pt-2 sm:col-span-1 sm:flex-col sm:items-end sm:pt-0">
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
                            Rs {(item.priceValue * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <aside className="h-fit border border-[#1F3D2B]/12 bg-[#F1E7D7]/35 p-5 lg:sticky lg:top-28">
                <div className="border-b border-[#1F3D2B]/10 pb-5">
                  <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#9A6B4F]">
                    Order Summary
                  </p>

                  <h2 className="mt-3 font-serif text-[34px] font-semibold uppercase leading-none tracking-[-0.055em] text-[#1F3D2B]">
                    Your Order
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
                      Rs {subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[14px] text-[#222222]/65">
                    <span>Delivery</span>
                    <span className="font-bold text-[#222222]">
                      Rs {deliveryFee.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[14px] text-[#222222]/65">
                    <span>Payment</span>
                    <span className="font-bold text-[#222222]">
                      {paymentMethod === 'cash' ? 'Cash on Delivery' : 'Online Payment'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-[#1F3D2B]/10 py-5">
                  <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]">
                    Total
                  </span>

                  <span className="font-serif text-[30px] font-semibold uppercase tracking-[-0.045em] text-[#1F3D2B]">
                    Rs {grandTotal.toLocaleString()}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  disabled={isPaymentChecking || isPlacingOrder}
                  className="mt-5 flex min-h-[52px] w-full items-center justify-center border border-[#1F3D2B] bg-[#1F3D2B] px-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#FAF7F0] transition duration-300 hover:bg-[#173020] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isPlacingOrder ? 'Processing Order...' : 'Place Order'}
                </button>

                <Link
                  to="/cart"
                  className="mt-3 flex min-h-[48px] w-full items-center justify-center border border-[#1F3D2B]/25 bg-transparent px-5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B] transition hover:border-[#1F3D2B]"
                >
                  Back to Cart
                </Link>

                <p className="mt-4 text-center text-[12px] leading-6 text-[#222222]/50">
                  Secure checkout verification depends on payment and order server
                  availability.
                </p>
              </aside>
            </div>
          ) : (
            <div className="border border-[#1F3D2B]/10 bg-[#F1E7D7]/35 px-6 py-20 text-center">
              <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-[#9A6B4F]">
                Your cart is empty
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl font-serif text-[42px] font-semibold uppercase leading-[0.9] tracking-[-0.06em] text-[#1F3D2B] sm:text-[64px]">
                Add hemp goods before checkout.
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