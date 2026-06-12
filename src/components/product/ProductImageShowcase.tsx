import { Link } from 'react-router-dom'

import type { Product } from '../shop/shopTypes'

type ProductImageShowcaseProps = {
  product: Product
}

export function ProductImageShowcase({ product }: ProductImageShowcaseProps) {
  return (
    <div className="relative flex min-h-[620px] items-center justify-center lg:min-h-[calc(100vh-190px)]">
      <Link
        to="/shop"
        className="absolute left-0 top-0 z-20 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B]/55 transition hover:text-[#1F3D2B]"
      >
        Back
      </Link>

      {product.tag && (
        <span className="absolute right-0 top-0 z-20 rounded-full bg-[#1F3D2B] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FAF7F0]">
          {product.tag}
        </span>
      )}

      <div className="absolute bottom-[16%] left-1/2 h-28 w-[72%] -translate-x-1/2 rounded-full bg-[#1F3D2B]/8 blur-3xl" />

      <img
        src={product.image}
        alt={product.alt}
        className="relative z-10 h-[500px] w-full object-contain drop-shadow-[0_60px_95px_rgba(34,34,34,0.18)] transition duration-700 hover:-translate-y-4 hover:scale-[1.035] sm:h-[640px] lg:h-[76vh]"
      />

      <div className="absolute bottom-0 left-0 hidden text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A6B4F] lg:block">
        Hemp / {product.category}
      </div>
    </div>
  )
}