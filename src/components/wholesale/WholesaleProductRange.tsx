import { Link } from 'react-router-dom'

import product3DFour from '../../assets/3D/4.png'
import product3DTwo from '../../assets/3D/2.png'

export function WholesaleProductRange() {
  return (
    <section className="relative overflow-hidden bg-[#1F3D2B] py-20 text-[#FAF7F0] lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,195,165,0.12),transparent_34%),radial-gradient(circle_at_78%_62%,rgba(250,247,240,0.12),transparent_32%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
        <div className="absolute left-[8%] top-[24%] h-px w-[84%] bg-[#FAF7F0]/25" />
        <div className="absolute left-[8%] bottom-[24%] h-px w-[84%] bg-[#FAF7F0]/20" />
        <div className="absolute left-[33%] top-[14%] h-[72%] w-px bg-[#FAF7F0]/18" />
        <div className="absolute right-[33%] top-[14%] h-[72%] w-px bg-[#FAF7F0]/18" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.38em] text-[#D8C3A5]">
            Product Range
          </p>

          <h2 className="mx-auto mt-5 max-w-5xl font-serif text-[48px] font-bold leading-[0.9] tracking-[-0.065em] text-[#FAF7F0] sm:text-[72px] lg:text-[92px]">
            Built for shelves, markets, and online stores.
          </h2>
        </div>

        <div className="relative mt-10 min-h-[640px] lg:mt-4 lg:min-h-[680px]">
          <Link
            to="/category/crossbody-bag"
            aria-label="View crossbody bag range"
            className="group absolute left-[-12%] top-[8%] z-20 h-[430px] w-[68%] sm:left-[-8%] sm:h-[520px] sm:w-[58%] lg:left-[-2%] lg:top-[4%] lg:h-[640px] lg:w-[44%]"
          >
            <img
              src={product3DFour}
              alt="3D wholesale hemp crossbody bag"
              className="h-full w-full origin-left object-contain drop-shadow-[0_55px_90px_rgba(0,0,0,0.34)] transition duration-700 ease-out group-hover:-translate-y-6 group-hover:rotate-[-2deg] group-hover:scale-[1.12]"
            />

            <span className="absolute left-[16%] top-[10%] hidden border border-[#FAF7F0]/18 bg-[#FAF7F0]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#FAF7F0] backdrop-blur lg:block">
              Smallbag Range
            </span>
          </Link>

          <Link
            to="/category/fanny-pack"
            aria-label="View fanny pack range"
            className="group absolute right-[-16%] top-[0%] z-20 h-[460px] w-[70%] sm:right-[-10%] sm:h-[560px] sm:w-[60%] lg:right-[-3%] lg:top-[-2%] lg:h-[700px] lg:w-[45%]"
          >
            <img
              src={product3DTwo}
              alt="3D wholesale hemp fanny pack"
              className="h-full w-full origin-right object-contain drop-shadow-[0_55px_90px_rgba(0,0,0,0.34)] transition duration-700 ease-out group-hover:-translate-y-6 group-hover:rotate-[2deg] group-hover:scale-[1.12]"
            />

            <span className="absolute right-[14%] top-[13%] hidden border border-[#FAF7F0]/18 bg-[#FAF7F0]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#FAF7F0] backdrop-blur lg:block">
              Fanny Pack Range
            </span>
          </Link>

          <div className="absolute left-1/2 top-[43%] z-30 w-[calc(100%-20px)] max-w-[520px] -translate-x-1/2 border border-[#FAF7F0]/12 bg-[#FAF7F0]/10 p-7 text-center shadow-[0_35px_100px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-9 lg:top-[42%]">
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#D8C3A5]">
              Wholesale Ready
            </p>

            <h3 className="mt-4 font-serif text-[34px] font-bold leading-[0.95] tracking-[-0.055em] text-[#FAF7F0] sm:text-[48px]">
              Natural texture with strong display presence.
            </h3>

            <p className="mx-auto mt-5 max-w-md text-[15px] leading-7 text-[#FAF7F0]/68">
              Easy to style, easy to explain, and practical for customers looking for
              handmade hemp goods.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#wholesale-form"
                className="inline-flex items-center justify-center bg-[#FAF7F0] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B] transition hover:bg-[#D8C3A5]"
              >
                Start Inquiry
              </a>

              <Link
                to="/shop"
                className="inline-flex items-center justify-center border border-[#FAF7F0]/40 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#FAF7F0] hover:text-[#1F3D2B]"
              >
                View Products
              </Link>
            </div>
          </div>

          <div className="absolute bottom-[60px] left-1/2 z-0 h-28 w-[88%] -translate-x-1/2 rounded-full bg-black/22 blur-3xl lg:w-[64%]" />
        </div>

        <div className="mt-2 grid grid-cols-1 divide-y divide-[#FAF7F0]/12 border-y border-[#FAF7F0]/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-6 py-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D8C3A5]">
              Display
            </p>
            <p className="mt-2 font-serif text-2xl font-bold tracking-[-0.04em] text-[#FAF7F0]">
              Shelf-ready
            </p>
          </div>

          <div className="px-6 py-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D8C3A5]">
              Product
            </p>
            <p className="mt-2 font-serif text-2xl font-bold tracking-[-0.04em] text-[#FAF7F0]">
              Hemp goods
            </p>
          </div>

          <div className="px-6 py-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D8C3A5]">
              Retail
            </p>
            <p className="mt-2 font-serif text-2xl font-bold tracking-[-0.04em] text-[#FAF7F0]">
              Wholesale supply
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}