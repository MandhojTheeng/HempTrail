import { Navigate, Route, Routes } from 'react-router-dom'
import { HempTrailLayout } from './layouts/HempTrailLayout'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import PaymentErrorPage from './pages/PaymentErrorPage'
import AccountPage from './pages/AccountPage'
import OurStoryPage from './pages/OurStoryPage'
import WholesalePage from './pages/WholesalePage'
import ContactPage from './pages/ContactPage'
import ShippingPolicyPage from './pages/ShippingPolicyPage'
import ReturnPolicyPage from './pages/ReturnPolicyPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<HempTrailLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment-error" element={<PaymentErrorPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/wholesale" element={<WholesalePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
        <Route path="/return-policy" element={<ReturnPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

