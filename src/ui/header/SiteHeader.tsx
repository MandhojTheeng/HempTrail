import { useEffect, useMemo, useState } from 'react'

import { getCartItems } from '../../lib/cart'
import { HeaderActions } from './HeaderActions'
import { HeaderCollectionsNav } from './HeaderCollectionsNav'
import { nav, searchItems } from './HeaderData'
import { HeaderDesktopNav } from './HeaderDesktopNav'
import { HeaderLogo } from './HeaderLogo'
import { HeaderMobileMenu } from './HeaderMobileMenu'
import { HeaderSearchModal } from './HeaderSearchModal'
import { HeaderTopBar } from './HeaderTopBar'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)

  const filteredSearchItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    if (!query) {
      return searchItems.slice(0, 5)
    }

    return searchItems
      .filter((item) => {
        return item.label.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)
      })
      .slice(0, 6)
  }, [searchQuery])

  useEffect(() => {
    function syncCartCount() {
      const cartItems = getCartItems()
      const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

      setCartCount(totalItems)
    }

    syncCartCount()

    window.addEventListener('hemptrail-cart-updated', syncCartCount)
    window.addEventListener('storage', syncCartCount)

    return () => {
      window.removeEventListener('hemptrail-cart-updated', syncCartCount)
      window.removeEventListener('storage', syncCartCount)
    }
  }, [])

  useEffect(() => {
    if (!searchOpen) {
      return
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeSearch()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [searchOpen])

  function closeSearch() {
    setSearchOpen(false)
    setSearchQuery('')
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FAF7F0] text-[#222222]">
        <HeaderTopBar />

        <div className="border-b border-[#1F3D2B]/10">
          <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 py-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-start">
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((value) => !value)}
                className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B] transition hover:text-[#9A6B4F] lg:hidden"
              >
                <span className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-[#1F3D2B]/15">
                  <span
                    className={[
                      'h-0.5 w-4 rounded-full bg-current transition',
                      mobileOpen ? 'translate-y-2 rotate-45' : '',
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'h-0.5 w-4 rounded-full bg-current transition',
                      mobileOpen ? 'opacity-0' : '',
                    ].join(' ')}
                  />
                  <span
                    className={[
                      'h-0.5 w-4 rounded-full bg-current transition',
                      mobileOpen ? '-translate-y-2 -rotate-45' : '',
                    ].join(' ')}
                  />
                </span>

                <span className="hidden sm:inline">Menu</span>
              </button>

              <HeaderDesktopNav items={nav.slice(0, 2)} ariaLabel="Primary navigation left" />
            </div>

            <HeaderLogo />

            <div className="flex items-center justify-end gap-1 sm:gap-2">
              <div className="hidden items-center gap-7 lg:flex">
                <HeaderDesktopNav items={nav.slice(2)} ariaLabel="Primary navigation right" />
              </div>

              <HeaderActions cartCount={cartCount} onSearchOpen={() => setSearchOpen(true)} />
            </div>
          </div>
        </div>

        <HeaderCollectionsNav />

        {mobileOpen && (
          <HeaderMobileMenu cartCount={cartCount} onClose={() => setMobileOpen(false)} />
        )}
      </header>

      {searchOpen && (
        <HeaderSearchModal
          searchQuery={searchQuery}
          filteredSearchItems={filteredSearchItems}
          onQueryChange={setSearchQuery}
          onClose={closeSearch}
        />
      )}
    </>
  )
}