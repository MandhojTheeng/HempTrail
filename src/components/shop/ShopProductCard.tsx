import { Link } from 'react-router-dom'

import type { Product } from './shopTypes'

type ShopProductCardProps = {
  product: Product
  index: number
  isAdded: boolean
  onAddToCart: (product: Product) => void
}

export function ShopProductCard({
  product,
  index,
  isAdded,
  onAddToCart,
}: ShopProductCardProps) {
  return (
    <article
      className={[
        'group relative flex min-h-[560px] flex-col',
        index % 2 === 1 ? 'lg:pt-14' : '',
      ].join(' ')}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative flex h-[430px] items-center justify-center overflow-visible bg-transparent sm:h-[470px]">
          <div className="absolute bottom-[50px] left-1/2 h-20 w-[74%] -translate-x-1/2 rounded-full bg-[#1F3D2B]/7 blur-3xl transition duration-700 group-hover:w-[86%] group-hover:bg-[#1F3D2B]/10" />

          <div className="absolute inset-x-0 bottom-10 h-px bg-[#1F3D2B]/8 opacity-0 transition duration-500 group-hover:opacity-100" />

          <img
            src={product.image}
            alt={product.alt}
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_36px_60px_rgba(34,34,34,0.14)] transition duration-700 ease-out group-hover:-translate-y-5 group-hover:scale-[1.1]"
          />

          <div className="absolute left-0 top-0 z-20 flex items-center gap-2">
            <span className="bg-[#FFFCF7]/70 px-0 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9A6B4F] backdrop-blur-sm">
              {product.category}
            </span>

            {product.tag && (
              <span className="rounded-full bg-[#1F3D2B] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#FAF7F0]">
                {product.tag}
              </span>
            )}
          </div>

          <span className="absolute bottom-6 right-0 z-20 translate-y-3 rounded-full bg-[#1F3D2B] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FAF7F0] opacity-0 shadow-[0_18px_40px_rgba(31,61,43,0.18)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View
          </span>
        </div>
      </Link>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <Link to={`/product/${product.id}`} className="block">
              <h3 className="max-w-[260px] font-serif text-[28px] font-bold leading-[0.92] tracking-[-0.055em] text-[#1F3D2B] transition hover:text-[#9A6B4F]">
                {product.name}
              </h3>
            </Link>

            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#222222]/36">
              Handmade hemp
            </p>
          </div>

          <p className="shrink-0 pt-1 text-right text-[13px] font-bold uppercase tracking-[0.06em] text-[#222222]/80">
            {product.price}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <Link
            to={`/product/${product.id}`}
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B]/62 transition hover:text-[#1F3D2B]"
          >
            Details
          </Link>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className={[
              'inline-flex h-11 min-w-[150px] items-center justify-center rounded-full px-6 text-[11px] font-bold uppercase tracking-[0.13em] transition duration-300',
              isAdded
                ? 'bg-[#1F3D2B] text-[#FAF7F0] shadow-[0_16px_36px_rgba(31,61,43,0.18)]'
                : 'bg-[#F1E7D7] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-[#FAF7F0]',
            ].join(' ')}
          >
            {isAdded ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  )
}