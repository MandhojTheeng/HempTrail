import { Link } from 'react-router-dom'

import product3DOne from '../../assets/3D/1.png'
import product3DTwo from '../../assets/3D/2.png'

export function WholesaleHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#1F3D2B]/10 bg-[#F6F0E6]">
      <div className="relative min-h-[740px] lg:min-h-[790px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(216,195,165,0.58),transparent_35%),linear-gradient(180deg,#FAF7F0_0%,#F1E7D7_100%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.32]">
          <div className="absolute left-[18%] top-[23%] h-[1px] w-[64%] bg-[#1F3D2B]/10" />
          <div className="absolute left-[22%] top-[71%] h-[1px] w-[56%] bg-[#1F3D2B]/10" />
          <div className="absolute left-[31%] top-[18%] h-[62%] w-[1px] bg-[#1F3D2B]/8" />
          <div className="absolute right-[31%] top-[18%] h-[62%] w-[1px] bg-[#1F3D2B]/8" />
        </div>

        <div className="absolute inset-x-0 top-0 z-10 mx-auto max-w-[1440px] px-5 pt-12 text-center sm:px-6 lg:px-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.42em] text-[#9A6B4F]">
            Wholesale Hemp Goods
          </p>

          <h1 className="mx-auto mt-5 max-w-6xl font-serif text-[54px] font-bold leading-[0.9] tracking-[-0.07em] text-[#1F3D2B] sm:text-[82px] lg:text-[112px]">
            Natural hemp for thoughtful stores.
          </h1>
        </div>

        <div className="absolute inset-0 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
          <div className="relative h-full">
            <Link
              to="/category/crossbody-bag"
              aria-label="View crossbody bag"
              className="group absolute bottom-[135px] left-[1%] z-20 h-[320px] w-[34%] sm:bottom-[125px] sm:left-[2%] sm:h-[360px] sm:w-[34%] lg:bottom-[120px] lg:left-[3%] lg:h-[400px] lg:w-[30%]"
            >
              <img
                src={product3DOne}
                alt="3D hemp bag product"
                className="h-full w-full origin-left object-contain drop-shadow-[0_40px_70px_rgba(34,34,34,0.22)] transition duration-700 ease-out group-hover:-translate-y-4 group-hover:scale-[1.18]"
              />

              <span className="absolute left-[8%] top-[-10px] hidden border border-[#1F3D2B]/12 bg-[#FAF7F0]/78 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#1F3D2B] backdrop-blur lg:block">
                Crossbody Range
              </span>
            </Link>

            <Link
              to="/category/fanny-pack"
              aria-label="View fanny pack"
              className="group absolute bottom-[86px] right-[2%] z-20 h-[360px] w-[28%] sm:bottom-[82px] sm:right-[2%] sm:h-[430px] sm:w-[29%] lg:bottom-[72px] lg:right-[4%] lg:h-[470px] lg:w-[27%]"
            >
              <img
                src={product3DTwo}
                alt="3D hemp fanny pack product"
                className="h-full w-full origin-right object-contain drop-shadow-[0_42px_72px_rgba(34,34,34,0.22)] transition duration-700 ease-out group-hover:-translate-y-4 group-hover:scale-[1.09]"
              />

              <span className="absolute right-[8%] top-[18px] hidden border border-[#1F3D2B]/12 bg-[#FAF7F0]/78 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#1F3D2B] backdrop-blur lg:block">
                Fanny Pack Range
              </span>
            </Link>

            <div className="absolute left-1/2 top-[58%] z-10 hidden w-[320px] -translate-x-1/2 text-center lg:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#9A6B4F]">
                Built for display
              </p>

              <p className="mt-3 font-serif text-[28px] font-bold leading-[1.05] tracking-[-0.045em] text-[#1F3D2B]">
                Natural texture, practical shape, retail-ready presence.
              </p>
            </div>

            <div className="absolute bottom-[92px] left-1/2 z-0 h-24 w-[82%] -translate-x-1/2 rounded-full bg-[#1F3D2B]/10 blur-3xl lg:w-[64%]" />
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-30">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 px-5 text-center sm:px-6 lg:flex-row lg:items-end lg:px-10 lg:text-left">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#wholesale-form"
                className="inline-flex min-w-[170px] items-center justify-center bg-[#1F3D2B] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020]"
              >
                Send Inquiry
              </a>

              <Link
                to="/shop"
                className="inline-flex min-w-[170px] items-center justify-center border border-[#1F3D2B]/20 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B] transition hover:border-[#1F3D2B]/35 hover:bg-[#FAF7F0]"
              >
                View Products
              </Link>
            </div>

            <div className="hidden grid-cols-2 divide-x divide-[#1F3D2B]/12 border-y border-[#1F3D2B]/12 bg-[#FAF7F0]/36 backdrop-blur lg:grid">
              <div className="px-6 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Material
                </p>

                <p className="mt-2 font-serif text-xl font-bold text-[#1F3D2B]">
                  Hemp
                </p>
              </div>

              <div className="px-6 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Supply
                </p>

                <p className="mt-2 font-serif text-xl font-bold text-[#1F3D2B]">
                  Retail
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.32em] text-[#1F3D2B]/45 [writing-mode:vertical-rl] lg:block">
          Wholesale Supply
        </div>
      </div>
    </section>
  )
}