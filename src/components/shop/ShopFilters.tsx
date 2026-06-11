import { useState } from 'react'

import { categories, priceRanges, products } from './shopData'
import type { PriceRange } from './shopTypes'

type ShopFiltersProps = {
  activeCategory: string
  activePriceRange: PriceRange
  onCategoryChange: (category: string) => void
  onPriceRangeChange: (range: PriceRange) => void
}

export function ShopFilters({
  activeCategory,
  activePriceRange,
  onCategoryChange,
  onPriceRangeChange,
}: ShopFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const activeFilterText =
    activeCategory === 'All' && activePriceRange.label === 'All Prices'
      ? 'All products'
      : `${activeCategory} · ${activePriceRange.label}`

  return (
    <>
      <section className="sticky top-[150px] z-40 bg-[#FFFCF7]/94 backdrop-blur-xl">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between gap-5 py-5">
            <p className="text-[13px] font-medium text-[#222222]/55">
              {activeFilterText}
            </p>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B]"
            >
              <span className="relative">
                Filters
                <span className="absolute -bottom-1 left-0 h-px w-full bg-[#1F3D2B] transition group-hover:w-2/3" />
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F3D2B] text-[#FAF7F0] transition group-hover:bg-[#9A6B4F]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 7H20"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 12H17"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 17H14"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-[90]">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#1F3D2B]/18 backdrop-blur-[2px]"
          />

          <aside className="absolute left-0 top-0 flex h-full w-full max-w-[430px] flex-col bg-[#FFFCF7] px-6 py-7 shadow-[32px_0_90px_rgba(34,34,34,0.16)] sm:px-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="font-serif text-[46px] font-bold leading-none tracking-[-0.065em] text-[#1F3D2B]">
                  Filters
                </h2>

                <p className="mt-4 text-[13px] leading-6 text-[#222222]/55">
                  {activeFilterText}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1E7D7] text-[18px] text-[#1F3D2B] transition hover:bg-[#1F3D2B] hover:text-[#FAF7F0]"
                aria-label="Close filters"
              >
                ×
              </button>
            </div>

            <div className="mt-9 flex-1 overflow-y-auto pr-2 [scrollbar-color:#D8C3A5_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#D8C3A5] hover:[&::-webkit-scrollbar-thumb]:bg-[#9A6B4F]">
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B]">
                    Category
                  </p>

                  <p className="text-[11px] font-medium text-[#9A6B4F]">
                    {activeCategory}
                  </p>
                </div>

                <div className="space-y-1">
                  {categories.map((category) => {
                    const count =
                      category === 'All'
                        ? products.length
                        : products.filter((product) => product.category === category)
                            .length

                    const isActive = activeCategory === category

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => onCategoryChange(category)}
                        className={[
                          'group flex w-full items-center justify-between rounded-full px-4 py-3 text-left transition',
                          isActive
                            ? 'bg-[#1F3D2B] text-[#FAF7F0] shadow-[0_14px_34px_rgba(31,61,43,0.16)]'
                            : 'text-[#1F3D2B] hover:bg-[#F1E7D7]',
                        ].join(' ')}
                      >
                        <span className="text-[12px] font-bold uppercase tracking-[0.1em]">
                          {category}
                        </span>

                        <span
                          className={[
                            'flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-[10px] font-bold',
                            isActive
                              ? 'bg-[#FAF7F0]/14 text-[#FAF7F0]/78'
                              : 'bg-[#1F3D2B]/7 text-[#1F3D2B]/50 group-hover:bg-[#1F3D2B]/10',
                          ].join(' ')}
                        >
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-9">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B]">
                    Price
                  </p>

                  <p className="max-w-[190px] text-right text-[11px] font-medium leading-5 text-[#9A6B4F]">
                    {activePriceRange.label}
                  </p>
                </div>

                <div className="space-y-1">
                  {priceRanges.map((range) => {
                    const isActive = activePriceRange.label === range.label

                    return (
                      <button
                        key={range.label}
                        type="button"
                        onClick={() => onPriceRangeChange(range)}
                        className={[
                          'flex w-full items-center justify-between rounded-full px-4 py-3 text-left transition',
                          isActive
                            ? 'bg-[#9A6B4F] text-[#FAF7F0] shadow-[0_14px_34px_rgba(154,107,79,0.16)]'
                            : 'text-[#1F3D2B] hover:bg-[#F1E7D7]',
                        ].join(' ')}
                      >
                        <span className="text-[12px] font-bold uppercase tracking-[0.1em]">
                          {range.label}
                        </span>

                        {isActive && (
                          <span className="text-[13px] font-bold leading-none">
                            ✓
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 border-t border-[#1F3D2B]/10 pt-5">
              <button
                type="button"
                onClick={() => {
                  onCategoryChange('All')
                  onPriceRangeChange(priceRanges[0])
                }}
                className="inline-flex items-center justify-center bg-[#F1E7D7] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B] transition hover:bg-[#E3D1B9]"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center bg-[#1F3D2B] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FAF7F0] transition hover:bg-[#173020]"
              >
                Apply
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}