import { Outlet, useLocation } from 'react-router-dom'

import { SiteFooter } from '../ui/SiteFooter'
import { SiteHeader } from '../ui/SiteHeader'
import { CartProvider } from '../state/cart/CartProvider'
import { CartDrawerProvider } from '../state/cart/CartDrawerContext'

export function HempTrailLayout() {
  const location = useLocation()

  return (
    <CartProvider>
      <CartDrawerProvider>
        <div className="ht-app">
          <SiteHeader />

          <main className="ht-main" aria-label="Main content">
            <Outlet key={location.pathname} />
          </main>

          <SiteFooter />
        </div>
      </CartDrawerProvider>
    </CartProvider>
  )
}