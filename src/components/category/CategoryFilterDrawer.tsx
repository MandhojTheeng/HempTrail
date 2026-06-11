import { Link } from 'react-router-dom'

import { categories, priceRanges, products } from '../shop/shopData'
import type { PriceRange } from '../shop/shopTypes'
import { createCategorySlug } from './categoryHelpers'

type CategoryFilterDrawerProps = {
  isOpen: boolean
  currentCategory: string
  activeLabel: string
  activePriceRange: PriceRange
  onClose: () => void
  onReset: () => void
  onPriceRangeChange: (range: PriceRange) => void
}

export function CategoryFilterDrawer({
  isOpen,
  currentCategory,
  activeLabel,
  activePriceRange,
  onClose,
  onReset,
  onPriceRangeChange,
}: CategoryFilterDrawerProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        aria-label="Close filters"
        onClick={onClose}
        className="absolute inset-0 bg-[#1F3D2B]/18 backdrop-blur-[2px]"
      />

      <aside className="absolute left-0 top-0 flex h-full w-full max-w-[430px] flex-col bg-[#FFFCF7] px-6 py-7 shadow-[32px_0_90px_rgba(34,34,34,0.16)] sm:px-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="font-serif text-[46px] font-bold leading-none tracking-[-0.065em] text-[#1F3D2B]">
              Filters
            </h2>

            <p className="mt-4 text-[13px] leading-6 text-[#222222]/55">
              {activeLabel}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
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
                {currentCategory}
              </p>
            </div>

            <div className="space-y-1">
              {categories
                .filter((category) => category !== 'All')
                .map((category) => {
                  const count = products.filter(
                    (product) => product.category === category,
                  ).length

                  const isActive = currentCategory === category

                  return (
                    <Link
                      key={category}
                      to={`/category/${createCategorySlug(category)}`}
                      onClick={onClose}
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
                    </Link>
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
            onClick={onReset}
            className="inline-flex items-center justify-center bg-[#F1E7D7] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B] transition hover:bg-[#E3D1B9]"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center bg-[#1F3D2B] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FAF7F0] transition hover:bg-[#173020]"
          >
            Apply
          </button>
        </div>
      </aside>
    </div>
  )
}