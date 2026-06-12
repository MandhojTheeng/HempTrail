import { Link } from 'react-router-dom'

import { categories } from '../shop/shopData'
import { categoryDescriptions, createCategorySlug } from './categoryHelpers'

type CategoryHeaderProps = {
  currentCategory: string
  activeLabel: string
  productCount: number
  cartCount: number
  onOpenFilters: () => void
}

export function CategoryHeader({
  currentCategory,
  activeLabel,
  productCount,
  cartCount,
  onOpenFilters,
}: CategoryHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF7]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,195,165,0.24),transparent_30%),radial-gradient(circle_at_86%_34%,rgba(31,61,43,0.06),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-12 sm:px-6 lg:px-10 lg:pt-16">
        <div className="flex flex-col gap-8 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              to="/shop"
              className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B]/55 transition hover:text-[#1F3D2B]"
            >
              Back to Shop
            </Link>

            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-[#9A6B4F]">
              Hemp Category
            </p>

            <h1 className="mt-3 max-w-4xl font-serif text-[58px] font-bold leading-[0.86] tracking-[-0.08em] text-[#1F3D2B] sm:text-[86px] lg:text-[108px]">
              {currentCategory}
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#222222]/58">
              {categoryDescriptions[currentCategory] ||
                'Handmade hemp goods crafted with natural texture and everyday function.'}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <Link
              to="/checkout"
              className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
            >
              Cart {cartCount}
            </Link>

            <div className="flex items-center gap-3">
              <p className="text-[13px] font-medium text-[#222222]/48">
                {productCount} item{productCount === 1 ? '' : 's'}
              </p>

              <span className="h-px w-12 bg-[#1F3D2B]/14" />

              <button
                type="button"
                onClick={onOpenFilters}
                className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B]"
              >
                <span className="relative">
                  Filters
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-[#1F3D2B] transition group-hover:w-2/3" />
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F3D2B] text-[#FAF7F0] transition group-hover:bg-[#9A6B4F]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
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
        </div>

        <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#9A6B4F]">
            {activeLabel}
          </p>

          <div className="flex gap-4 overflow-x-auto pb-1 sm:justify-end">
            {categories
              .filter((category) => category !== 'All')
              .map((category) => (
                <Link
                  key={category}
                  to={`/category/${createCategorySlug(category)}`}
                  className={[
                    'shrink-0 text-[11px] font-bold uppercase tracking-[0.13em] transition',
                    currentCategory === category
                      ? 'text-[#1F3D2B]'
                      : 'text-[#222222]/36 hover:text-[#1F3D2B]',
                  ].join(' ')}
                >
                  {category}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}