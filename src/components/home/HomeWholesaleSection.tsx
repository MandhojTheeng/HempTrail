import { Link } from 'react-router-dom'

import product3DThree from '../../assets/3D/3.png'
import product3DFive from '../../assets/3D/5.png'

export function HomeWholesaleSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF7] text-[#222222]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(216,195,165,0.32),transparent_32%),radial-gradient(circle_at_82%_44%,rgba(31,61,43,0.1),transparent_32%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
        <div className="absolute left-[7%] top-[28%] h-px w-[86%] bg-[#1F3D2B]/10" />
        <div className="absolute left-[7%] bottom-[24%] h-px w-[86%] bg-[#1F3D2B]/10" />
        <div className="absolute left-1/2 top-[12%] h-[76%] w-px bg-[#1F3D2B]/8" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid min-h-[680px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.34fr_0.32fr_0.34fr]">
          <div className="relative order-2 min-h-[430px] lg:order-1 lg:min-h-[620px]">
            <Link
              to="/category/backpack"
              aria-label="View backpack range"
              className="group absolute inset-0 flex items-center justify-center"
            >
              <img
                src={product3DThree}
                alt="3D hemp backpack"
                className="h-[430px] w-full object-contain drop-shadow-[0_45px_80px_rgba(34,34,34,0.18)] transition duration-700 ease-out group-hover:-translate-y-5 group-hover:scale-[1.08] sm:h-[520px] lg:h-[640px]"
              />
            </Link>

            <div className="absolute bottom-10 left-1/2 h-14 w-[72%] -translate-x-1/2 rounded-full bg-[#1F3D2B]/8 blur-2xl" />
          </div>

          <div className="relative z-20 order-1 text-center lg:order-2">
            <p className="text-[12px] font-bold uppercase tracking-[0.38em] text-[#9A6B4F]">
              Wholesale Supply
            </p>

            <h2 className="mx-auto mt-5 max-w-xl font-serif text-[50px] font-bold leading-[0.88] tracking-[-0.07em] text-[#1F3D2B] sm:text-[74px] lg:text-[88px]">
              Handmade hemp, ready for retail.
            </h2>

            <p className="mx-auto mt-7 max-w-md text-[16px] leading-8 text-[#222222]/62">
              Stock natural hemp goods for boutiques, markets, and conscious lifestyle
              stores.
            </p>

            <div className="mx-auto mt-9 flex max-w-md flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/wholesale"
                className="inline-flex min-w-[180px] items-center justify-center bg-[#1F3D2B] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020]"
              >
                Wholesale Inquiry
              </Link>

              <Link
                to="/shop"
                className="inline-flex min-w-[180px] items-center justify-center border border-[#1F3D2B]/20 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B] transition hover:border-[#1F3D2B] hover:bg-[#F1E7D7]"
              >
                View Products
              </Link>
            </div>

            <div className="mx-auto mt-12 grid max-w-md grid-cols-2 divide-x divide-[#1F3D2B]/10 border-y border-[#1F3D2B]/10 bg-[#FAF7F0]/50 backdrop-blur">
              <div className="px-3 py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Fiber
                </p>
                <p className="mt-2 font-serif text-xl font-bold text-[#1F3D2B]">
                  Hemp
                </p>
              </div>

              <div className="px-3 py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Supply
                </p>
                <p className="mt-2 font-serif text-xl font-bold text-[#1F3D2B]">
                  Retail
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-3 min-h-[400px] lg:min-h-[620px]">
            <Link
              to="/category/fanny-pack"
              aria-label="View fanny pack range"
              className="group absolute inset-0 flex items-center justify-center"
            >
              <img
                src={product3DFive}
                alt="3D hemp fanny pack"
                className="h-[390px] w-full object-contain drop-shadow-[0_45px_80px_rgba(34,34,34,0.18)] transition duration-700 ease-out group-hover:-translate-y-5 group-hover:scale-[1.08] sm:h-[500px] lg:h-[610px]"
              />
            </Link>

            <div className="absolute bottom-12 left-1/2 h-14 w-[72%] -translate-x-1/2 rounded-full bg-[#1F3D2B]/8 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}