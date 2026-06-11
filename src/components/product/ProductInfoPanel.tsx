import { Link } from 'react-router-dom'

import type { Product } from '../shop/shopTypes'
import { ProductAccordion } from './ProductAccordion'
import type { ProductSection } from './productContent'

type ProductInfoPanelProps = {
  product: Product
  productDescription: string
  productSections: ProductSection[]
  quantity: number
  cartCount: number
  isAdded: boolean
  openSection: string
  onQuantityDecrease: () => void
  onQuantityIncrease: () => void
  onAddToCart: () => void
  onOpenSectionChange: (section: string) => void
}

export function ProductInfoPanel({
  product,
  productDescription,
  productSections,
  quantity,
  cartCount,
  isAdded,
  openSection,
  onQuantityDecrease,
  onQuantityIncrease,
  onAddToCart,
  onOpenSectionChange,
}: ProductInfoPanelProps) {
  return (
    <aside className="flex items-center lg:pl-12">
      <div className="w-full max-w-xl lg:ml-auto">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A6B4F]">
            {product.category}
          </p>

          <Link
            to="/checkout"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
          >
            Cart {cartCount}
          </Link>
        </div>

        <h1 className="font-serif text-[60px] font-bold leading-[0.86] tracking-[-0.08em] text-[#1F3D2B] sm:text-[82px] lg:text-[96px]">
          {product.name}
        </h1>

        <div className="mt-7 flex items-center justify-between gap-5">
          <p className="text-[15px] font-bold uppercase tracking-[0.08em] text-[#222222]">
            {product.price}
          </p>

          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#222222]/40">
            Handmade Hemp
          </p>
        </div>

        <p className="mt-8 max-w-lg text-[15px] leading-8 text-[#222222]/62">
          {productDescription}
        </p>

        <div className="mt-10 flex items-center justify-between border-y border-[#1F3D2B]/10 py-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B]">
            Quantity
          </p>

          <div className="inline-flex items-center rounded-full bg-[#F1E7D7] p-1">
            <button
              type="button"
              onClick={onQuantityDecrease}
              className="flex h-10 w-10 items-center justify-center rounded-full text-xl leading-none text-[#1F3D2B] transition hover:bg-[#FFFCF7]"
            >
              −
            </button>

            <span className="flex h-10 min-w-12 items-center justify-center text-[13px] font-bold text-[#1F3D2B]">
              {quantity}
            </span>

            <button
              type="button"
              onClick={onQuantityIncrease}
              className="flex h-10 w-10 items-center justify-center rounded-full text-xl leading-none text-[#1F3D2B] transition hover:bg-[#FFFCF7]"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-7 grid gap-3">
          <button
            type="button"
            onClick={onAddToCart}
            className={[
              'inline-flex min-h-[58px] w-full items-center justify-center rounded-full px-8 text-[12px] font-bold uppercase tracking-[0.15em] transition duration-300',
              isAdded
                ? 'bg-[#1F3D2B] text-[#FAF7F0] shadow-[0_18px_45px_rgba(31,61,43,0.18)]'
                : 'bg-[#1F3D2B] text-[#FAF7F0] hover:bg-[#173020]',
            ].join(' ')}
          >
            {isAdded ? 'Added to Cart' : 'Add to Cart'}
          </button>

          <Link
            to="/checkout"
            className="inline-flex min-h-[58px] w-full items-center justify-center rounded-full bg-[#F1E7D7] px-8 text-[12px] font-bold uppercase tracking-[0.15em] text-[#1F3D2B] transition hover:bg-[#E3D1B9]"
          >
            Checkout
          </Link>
        </div>

        <ProductAccordion
          sections={productSections}
          openSection={openSection}
          onOpenSectionChange={onOpenSectionChange}
        />
      </div>
    </aside>
  )
}