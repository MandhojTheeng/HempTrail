import { Link } from 'react-router-dom'

import { products } from '../shop/shopData'

const featuredProducts = products.slice(0, 4)

export function HomeProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF7] py-20 text-[#222222] lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(216,195,165,0.24),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(31,61,43,0.06),transparent_32%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
              Featured Goods
            </p>

            <h2 className="mt-4 max-w-4xl font-serif text-[54px] font-bold leading-[0.86] tracking-[-0.075em] text-[#1F3D2B] sm:text-[82px] lg:text-[104px]">
              Everyday hemp, made with character.
            </h2>
          </div>

          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B]"
          >
            <span className="relative">
              View Shop
              <span className="absolute -bottom-1 left-0 h-px w-full bg-[#1F3D2B] transition group-hover:w-2/3" />
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F3D2B] text-[#FAF7F0] transition group-hover:bg-[#9A6B4F]">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-24 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <article
              key={product.id}
              className={[
                'group relative flex min-h-[520px] flex-col',
                index % 2 === 1 ? 'lg:pt-14' : '',
              ].join(' ')}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative flex h-[390px] items-center justify-center overflow-visible bg-transparent">
                  <div className="absolute bottom-[48px] left-1/2 h-20 w-[74%] -translate-x-1/2 rounded-full bg-[#1F3D2B]/7 blur-3xl transition duration-700 group-hover:w-[86%] group-hover:bg-[#1F3D2B]/10" />

                  <img
                    src={product.image}
                    alt={product.alt}
                    className="relative z-10 h-full w-full object-contain drop-shadow-[0_36px_60px_rgba(34,34,34,0.14)] transition duration-700 ease-out group-hover:-translate-y-5 group-hover:scale-[1.1]"
                  />

                  {product.tag && (
                    <span className="absolute left-0 top-0 z-20 rounded-full bg-[#1F3D2B] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#FAF7F0]">
                      {product.tag}
                    </span>
                  )}

                  <span className="absolute bottom-6 right-0 z-20 translate-y-3 rounded-full bg-[#1F3D2B] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FAF7F0] opacity-0 shadow-[0_18px_40px_rgba(31,61,43,0.18)] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View
                  </span>
                </div>
              </Link>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9A6B4F]">
                      {product.category}
                    </p>

                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="mt-2 max-w-[260px] font-serif text-[28px] font-bold leading-[0.92] tracking-[-0.055em] text-[#1F3D2B] transition hover:text-[#9A6B4F]">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <p className="shrink-0 pt-1 text-right text-[13px] font-bold uppercase tracking-[0.06em] text-[#222222]/80">
                    {product.price}
                  </p>
                </div>

                <Link
                  to={`/product/${product.id}`}
                  className="mt-auto pt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B]/62 transition hover:text-[#1F3D2B]"
                >
                  Product Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}