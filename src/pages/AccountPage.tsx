import { useState } from 'react'
import { Link } from 'react-router-dom'

type AuthMode = 'login' | 'register'

type Notice = {
  type: 'info' | 'error'
  title: string
  message: string
}

export default function AccountPage() {
  const [authMode, setAuthMode] = useState<AuthMode>('login')
  const [notice, setNotice] = useState<Notice | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  function handleLogin() {
    setIsLoading(true)
    setNotice({
      type: 'info',
      title: 'Verifying Account',
      message: 'Please wait while we connect to the secure account server.',
    })

    window.setTimeout(() => {
      setIsLoading(false)
      setNotice({
        type: 'error',
        title: 'Login Service Unavailable',
        message:
          'We could not complete the login request due to a temporary connection issue. Please check your internet connection and try again later.',
      })
    }, 1400)
  }

  function handleRegister() {
    setIsLoading(true)
    setNotice({
      type: 'info',
      title: 'Creating Account',
      message: 'Please wait while we submit your registration details.',
    })

    window.setTimeout(() => {
      setIsLoading(false)
      setNotice({
        type: 'error',
        title: 'Registration Failed',
        message:
          'The registration server did not respond in time. This may be caused by slow internet or temporary server maintenance. Please try again later.',
      })
    }, 1500)
  }

  function handleForgotPassword() {
    setNotice({
      type: 'error',
      title: 'Password Reset Unavailable',
      message:
        'Password reset link could not be generated because the account server is temporarily unreachable.',
    })
  }

  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#222222]">
      <section className="border-b border-[#1F3D2B]/10">
        <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-6 lg:px-10 lg:py-12">
          <div className="mb-10 grid grid-cols-1 gap-6 border-b border-[#1F3D2B]/10 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9A6B4F]">
                HempTrail Account
              </p>

              <h1 className="mt-3 font-serif text-[48px] font-semibold uppercase leading-[0.86] tracking-[-0.07em] text-[#1F3D2B] sm:text-[76px] lg:text-[96px]">
                Account
              </h1>
            </div>

            <p className="max-w-md text-[14px] leading-7 text-[#222222]/58 lg:text-right">
              Sign in or create an account to access order history, saved addresses,
              wishlist, and faster checkout.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <aside className="relative overflow-hidden border border-[#1F3D2B]/10 bg-[#F1E7D7]/35 p-6 sm:p-8 lg:min-h-[680px]">
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#9A6B4F]">
                    Member Area
                  </p>

                  <h2 className="mt-5 max-w-xl font-serif text-[44px] font-semibold uppercase leading-[0.88] tracking-[-0.06em] text-[#1F3D2B] sm:text-[64px]">
                    Simple access to your HempTrail orders.
                  </h2>

                  <p className="mt-6 max-w-md text-[14px] leading-7 text-[#222222]/60">
                    This account area is designed to showcase a complete ecommerce
                    customer flow with login, registration, account recovery, and saved
                    shopping details.
                  </p>
                </div>

                <div className="mt-10 grid gap-3">
                  {[
                    'Track order status',
                    'Save delivery details',
                    'Manage wishlist items',
                    'Use faster checkout',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-[#1F3D2B]/10 py-4"
                    >
                      <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]">
                        {item}
                      </span>

                      <span className="text-[14px] font-bold text-[#9A6B4F]">01</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t border-[#1F3D2B]/10 pt-6">
                  <p className="text-[13px] leading-7 text-[#222222]/55">
                    New products, cart, checkout, account, and payment states are included
                    for static ecommerce demonstration.
                  </p>

                  <Link
                    to="/shop"
                    className="mt-6 inline-flex border-b border-[#1F3D2B] pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-[#1F3D2B]/10" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full border border-[#9A6B4F]/20" />
            </aside>

            <section className="border border-[#1F3D2B]/10 bg-[#FAF7F0]">
              <div className="grid grid-cols-2 border-b border-[#1F3D2B]/10">
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('login')
                    setNotice(null)
                  }}
                  className={[
                    'min-h-[64px] border-r border-[#1F3D2B]/10 text-[12px] font-bold uppercase tracking-[0.22em] transition',
                    authMode === 'login'
                      ? 'bg-[#1F3D2B] text-[#FAF7F0]'
                      : 'bg-[#FAF7F0] text-[#1F3D2B] hover:bg-[#F1E7D7]/45',
                  ].join(' ')}
                >
                  Login
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setAuthMode('register')
                    setNotice(null)
                  }}
                  className={[
                    'min-h-[64px] text-[12px] font-bold uppercase tracking-[0.22em] transition',
                    authMode === 'register'
                      ? 'bg-[#1F3D2B] text-[#FAF7F0]'
                      : 'bg-[#FAF7F0] text-[#1F3D2B] hover:bg-[#F1E7D7]/45',
                  ].join(' ')}
                >
                  Register
                </button>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="border-b border-[#1F3D2B]/10 pb-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#9A6B4F]">
                    {authMode === 'login' ? 'Existing Customer' : 'New Customer'}
                  </p>

                  <h2 className="mt-3 font-serif text-[38px] font-semibold uppercase leading-[0.9] tracking-[-0.055em] text-[#1F3D2B] sm:text-[54px]">
                    {authMode === 'login' ? 'Sign In' : 'Create Account'}
                  </h2>

                  <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#222222]/58">
                    {authMode === 'login'
                      ? 'Enter your email and password to access your HempTrail account.'
                      : 'Create a customer account for saved addresses, wishlist, and checkout details.'}
                  </p>
                </div>

                {notice && (
                  <div
                    className={[
                      'mt-6 border px-5 py-4',
                      notice.type === 'info'
                        ? 'border-[#1F3D2B]/20 bg-[#F1E7D7]/30 text-[#1F3D2B]'
                        : 'border-[#9A6B4F]/35 bg-[#F1E7D7]/35 text-[#9A6B4F]',
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
                        className="text-[20px] leading-none opacity-70 transition hover:opacity-100"
                        aria-label="Close notice"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )}

                {authMode === 'login' ? (
                  <form className="grid grid-cols-1 gap-6 pt-8">
                    <div>
                      <label
                        htmlFor="loginEmail"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]"
                      >
                        Email Address
                      </label>

                      <input
                        id="loginEmail"
                        type="email"
                        placeholder="you@example.com"
                        className="h-13 min-h-[52px] w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="loginPassword"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]"
                      >
                        Password
                      </label>

                      <input
                        id="loginPassword"
                        type="password"
                        placeholder="Enter password"
                        className="h-13 min-h-[52px] w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div className="flex flex-col gap-4 border-y border-[#1F3D2B]/10 py-5 sm:flex-row sm:items-center sm:justify-between">
                      <label className="flex items-center gap-3 text-[13px] text-[#222222]/60">
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-[#1F3D2B]"
                        />
                        Remember me
                      </label>

                      <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="w-fit border-b border-[#1F3D2B] pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
                      >
                        Forgot Password
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleLogin}
                      disabled={isLoading}
                      className="flex min-h-[54px] w-full items-center justify-center border border-[#1F3D2B] bg-[#1F3D2B] px-6 text-[12px] font-bold uppercase tracking-[0.24em] text-[#FAF7F0] transition hover:bg-[#173020] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isLoading ? 'Checking Account...' : 'Sign In'}
                    </button>

                    <p className="text-center text-[13px] leading-7 text-[#222222]/55">
                      No account yet?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMode('register')
                          setNotice(null)
                        }}
                        className="font-bold uppercase tracking-[0.12em] text-[#1F3D2B] underline underline-offset-4"
                      >
                        Create one
                      </button>
                    </p>
                  </form>
                ) : (
                  <form className="grid grid-cols-1 gap-5 pt-8 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]"
                      >
                        First Name
                      </label>

                      <input
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        className="h-13 min-h-[52px] w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]"
                      >
                        Last Name
                      </label>

                      <input
                        id="lastName"
                        type="text"
                        placeholder="Last name"
                        className="h-13 min-h-[52px] w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="registerEmail"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]"
                      >
                        Email Address
                      </label>

                      <input
                        id="registerEmail"
                        type="email"
                        placeholder="you@example.com"
                        className="h-13 min-h-[52px] w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="registerPhone"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]"
                      >
                        Phone
                      </label>

                      <input
                        id="registerPhone"
                        type="tel"
                        placeholder="98XXXXXXXX"
                        className="h-13 min-h-[52px] w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="registerCity"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]"
                      >
                        City
                      </label>

                      <input
                        id="registerCity"
                        type="text"
                        placeholder="Kathmandu"
                        className="h-13 min-h-[52px] w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="registerPassword"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]"
                      >
                        Password
                      </label>

                      <input
                        id="registerPassword"
                        type="password"
                        placeholder="Create password"
                        className="h-13 min-h-[52px] w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]"
                      >
                        Confirm Password
                      </label>

                      <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        className="h-13 min-h-[52px] w-full border border-[#1F3D2B]/18 bg-[#FAF7F0] px-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 focus:border-[#1F3D2B]"
                      />
                    </div>

                    <label className="flex items-start gap-3 border-y border-[#1F3D2B]/10 py-5 text-[13px] leading-6 text-[#222222]/60 sm:col-span-2">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-[#1F3D2B]"
                      />
                      I agree to receive account notifications, order updates, and
                      delivery information from HempTrail.
                    </label>

                    <div className="sm:col-span-2">
                      <button
                        type="button"
                        onClick={handleRegister}
                        disabled={isLoading}
                        className="flex min-h-[54px] w-full items-center justify-center border border-[#1F3D2B] bg-[#1F3D2B] px-6 text-[12px] font-bold uppercase tracking-[0.24em] text-[#FAF7F0] transition hover:bg-[#173020] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                      </button>

                      <p className="mt-5 text-center text-[13px] leading-7 text-[#222222]/55">
                        Already registered?{' '}
                        <button
                          type="button"
                          onClick={() => {
                            setAuthMode('login')
                            setNotice(null)
                          }}
                          className="font-bold uppercase tracking-[0.12em] text-[#1F3D2B] underline underline-offset-4"
                        >
                          Sign in
                        </button>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}