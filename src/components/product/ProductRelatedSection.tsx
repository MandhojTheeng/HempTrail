import { Link } from 'react-router-dom'

import type { Product } from '../shop/shopTypes'

type ProductRelatedSectionProps = {
  products: Product[]
}

export function ProductRelatedSection({ products }: ProductRelatedSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F0] py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(216,195,165,0.24),transparent_30%),radial-gradient(circle_at_88%_60%,rgba(31,61,43,0.06),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9A6B4F]">
              You may also like
            </p>

            <h2 className="mt-3 font-serif text-[48px] font-bold leading-[0.88] tracking-[-0.07em] text-[#1F3D2B] sm:text-[72px] lg:text-[86px]">
              Related goods
            </h2>
          </div>

          <Link
            to="/shop"
            className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B] transition hover:text-[#9A6B4F]"
          >
            View all products
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item, index) => (
            <article
              key={item.id}
              className={[
                'group flex min-h-[460px] flex-col',
                index % 2 === 1 ? 'lg:pt-10' : '',
              ].join(' ')}
            >
              <Link to={`/product/${item.id}`} className="block">
                <div className="relative flex h-[330px] items-center justify-center overflow-visible">
                  <div className="absolute bottom-10 left-1/2 h-16 w-[72%] -translate-x-1/2 rounded-full bg-[#1F3D2B]/8 blur-2xl transition duration-700 group-hover:w-[84%]" />

                  <img
                    src={item.image}
                    alt={item.alt}
                    className="relative z-10 h-full w-full object-contain drop-shadow-[0_30px_50px_rgba(34,34,34,0.14)] transition duration-700 group-hover:-translate-y-4 group-hover:scale-[1.08]"
                  />
                </div>
              </Link>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A6B4F]">
                      {item.category}
                    </p>

                    <Link to={`/product/${item.id}`}>
                      <h3 className="mt-2 font-serif text-[26px] font-bold leading-[0.94] tracking-[-0.055em] text-[#1F3D2B] transition hover:text-[#9A6B4F]">
                        {item.name}
                      </h3>
                    </Link>
                  </div>

                  <p className="shrink-0 text-[13px] font-bold uppercase tracking-[0.06em] text-[#222222]/80">
                    {item.price}
                  </p>
                </div>

                <Link
                  to={`/product/${item.id}`}
                  className="mt-auto pt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B]/60 transition hover:text-[#1F3D2B]"
                >
                  View Product
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}