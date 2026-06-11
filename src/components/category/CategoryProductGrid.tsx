import { ShopProductCard } from '../shop/ShopProductCard'
import type { Product } from '../shop/shopTypes'

type CategoryProductGridProps = {
  products: Product[]
  isInCart: (productId: string) => boolean
  onAddToCart: (product: Product) => void
  onReset: () => void
}

export function CategoryProductGrid({
  products,
  isInCart,
  onAddToCart,
  onReset,
}: CategoryProductGridProps) {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF7] py-10 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(216,195,165,0.18),transparent_30%),radial-gradient(circle_at_88%_70%,rgba(31,61,43,0.05),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
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

              <h2 className="mt-3 font-serif text-[46px] font-bold leading-[0.9] tracking-[-0.06em] text-[#1F3D2B] sm:text-[58px]">
                No products found
              </h2>

              <p className="mx-auto mt-5 max-w-md text-[14px] leading-7 text-[#222222]/58">
                Try a different price range to view available handmade hemp goods.
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