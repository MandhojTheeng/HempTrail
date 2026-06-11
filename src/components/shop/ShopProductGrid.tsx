import { ShopProductCard } from './ShopProductCard'
import type { Product } from './shopTypes'

type ShopProductGridProps = {
  products: Product[]
  activeLabel: string
  isInCart: (productId: string) => boolean
  onAddToCart: (product: Product) => void
  onReset: () => void
}

export function ShopProductGrid({
  products,
  activeLabel,
  isInCart,
  onAddToCart,
  onReset,
}: ShopProductGridProps) {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF7] py-12 lg:py-18">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(216,195,165,0.22),transparent_28%),radial-gradient(circle_at_82%_42%,rgba(31,61,43,0.06),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9A6B4F]">
              {activeLabel}
            </p>

            <h2 className="mt-2 max-w-3xl font-serif text-[52px] font-bold leading-[0.88] tracking-[-0.07em] text-[#1F3D2B] sm:text-[74px] lg:text-[88px]">
              New collection
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[#1F3D2B]/16" />

            <p className="text-[12px] font-medium text-[#222222]/48">
              {products.length} item{products.length === 1 ? '' : 's'}
            </p>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-10 gap-y-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <ShopProductCard
                key={product.id}
                product={product}
                index={index}
                isAdded={isInCart(product.id)}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[36px] bg-[#F7F0E6] px-6 py-16 text-center shadow-[0_26px_90px_rgba(34,34,34,0.08)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(154,107,79,0.16),transparent_36%)]" />

            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A6B4F]">
                Empty Selection
              </p>

              <h3 className="mt-3 font-serif text-[46px] font-bold leading-[0.9] tracking-[-0.06em] text-[#1F3D2B] sm:text-[58px]">
                No products found
              </h3>

              <p className="mx-auto mt-5 max-w-md text-[14px] leading-7 text-[#222222]/58">
                Try a different category or price range to view available handmade hemp
                goods.
              </p>

              <button
                type="button"
                onClick={onReset}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1F3D2B] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FAF7F0] transition hover:bg-[#173020]"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}