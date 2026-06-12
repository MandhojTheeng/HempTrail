import { Link } from 'react-router-dom'

import product3DOne from '../../assets/3D/1.png'
import product3DThree from '../../assets/3D/3.png'
import product3DFive from '../../assets/3D/5.png'
import product3DEight from '../../assets/3D/4.png'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFCF7] text-[#222222]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(216,195,165,0.24),transparent_34%),radial-gradient(circle_at_82%_62%,rgba(31,61,43,0.08),transparent_36%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.1]">
        <div className="absolute left-[7%] top-[32%] h-px w-[86%] bg-[#1F3D2B]/20" />
        <div className="absolute left-[7%] bottom-[18%] h-px w-[86%] bg-[#1F3D2B]/18" />
        <div className="absolute left-1/2 top-[10%] hidden h-[80%] w-px bg-[#1F3D2B]/12 md:block" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-12 sm:px-6 md:py-14 lg:min-h-[calc(100vh-150px)] lg:px-10 lg:py-10">
        <p className="pointer-events-none absolute left-[6%] top-[8%] hidden font-serif text-[19vw] font-bold leading-none tracking-[-0.11em] text-[#1F3D2B]/[0.028] lg:block">
          Hemp
        </p>

        <div className="relative grid min-h-[auto] grid-cols-1 gap-8 lg:min-h-[calc(100vh-190px)] lg:grid-cols-[0.47fr_0.53fr] lg:gap-0">
          <div className="relative z-40 flex items-center pt-8 sm:pt-10 lg:pt-0">
            <div className="max-w-3xl">
              <h1 className="ht-home-fade ht-home-delay-1 max-w-4xl font-serif text-[52px] font-bold leading-[0.86] tracking-[-0.075em] text-[#1F3D2B] min-[420px]:text-[62px] sm:text-[82px] md:text-[96px] lg:text-[110px] xl:text-[132px] 2xl:text-[148px]">
                Handmade hemp for modern movement.
              </h1>

              <p className="ht-home-fade ht-home-delay-2 mt-6 max-w-[510px] text-[15px] leading-7 text-[#222222]/62 sm:mt-7 sm:text-[16px] sm:leading-8">
                Durable hemp bags and accessories designed for daily carry, travel, and
                conscious living.
              </p>

              <div className="ht-home-fade ht-home-delay-2 mt-8 flex flex-col gap-3 min-[460px]:flex-row sm:mt-10">
                <Link
                  to="/shop"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#1F3D2B] px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FAF7F0] shadow-[0_18px_45px_rgba(31,61,43,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#173020] hover:shadow-[0_24px_60px_rgba(31,61,43,0.22)] sm:min-w-[190px] sm:px-8 sm:text-[11px]"
                >
                  Shop Collection
                </Link>

                <Link
                  to="/our-story"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#F1E7D7] px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E3D1B9] sm:min-w-[190px] sm:px-8 sm:text-[11px]"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-full">
            <div className="pointer-events-none absolute left-[14%] top-[12%] h-[360px] w-[360px] rounded-full bg-[#F1E7D7]/48 blur-3xl sm:h-[520px] sm:w-[520px] lg:left-[18%] lg:top-[14%] lg:h-[560px] lg:w-[560px]" />
            <div className="pointer-events-none absolute right-[-8%] top-[20%] h-[260px] w-[260px] rounded-full bg-[#1F3D2B]/8 blur-3xl sm:right-[5%] sm:h-[420px] sm:w-[420px]" />
            <div className="pointer-events-none absolute bottom-[8%] left-[8%] h-[180px] w-[340px] rounded-full bg-[#D8C3A5]/24 blur-3xl sm:h-[260px] sm:w-[560px]" />

            <Link
              to="/product/classic-cream-hemp-backpack"
              aria-label="View Classic Cream Hemp Backpack"
              className="group absolute bottom-[10px] left-1/2 z-40 h-[430px] w-[76%] -translate-x-1/2 sm:bottom-[12px] sm:h-[560px] sm:w-[58%] md:h-[620px] md:w-[52%] lg:bottom-[20px] lg:left-[9%] lg:h-[74vh] lg:w-[45%] lg:translate-x-0"
            >
              <img
                src={product3DThree}
                alt="Classic Cream Hemp Backpack"
                className="h-full w-full object-contain drop-shadow-[0_54px_90px_rgba(34,34,34,0.2)] transition duration-700 ease-out group-hover:-translate-y-6 group-hover:scale-[1.055] sm:drop-shadow-[0_70px_115px_rgba(34,34,34,0.24)] lg:group-hover:-translate-y-8 lg:group-hover:scale-[1.075]"
              />

              <span className="absolute bottom-[16%] left-[18%] rounded-full bg-[#FFFCF7]/88 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B] shadow-[0_18px_50px_rgba(34,34,34,0.12)] backdrop-blur sm:text-[10px]">
                Featured
              </span>
            </Link>

            <Link
              to="/product/natural-canvas-hemp-backpack"
              aria-label="View Natural Canvas Hemp Backpack"
              className="group absolute right-[-4%] top-[0%] z-20 h-[210px] w-[38%] sm:right-[5%] sm:h-[320px] sm:w-[31%] md:h-[360px] lg:right-[9%] lg:top-[3%] lg:h-[470px] lg:w-[30%]"
            >
              <img
                src={product3DEight}
                alt="Natural Canvas Hemp Backpack"
                className="h-full w-full object-contain drop-shadow-[0_34px_70px_rgba(34,34,34,0.16)] transition duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-[2deg] group-hover:scale-[1.06] lg:drop-shadow-[0_44px_86px_rgba(34,34,34,0.18)] lg:group-hover:-translate-y-6 lg:group-hover:scale-[1.085]"
              />
            </Link>

            <Link
              to="/product/woven-hemp-crossbody-bag"
              aria-label="View Woven Hemp Crossbody Bag"
              className="group absolute left-[-12%] top-[24%] z-30 h-[170px] w-[38%] sm:left-[0%] sm:h-[250px] sm:w-[28%] md:h-[285px] lg:left-[2%] lg:top-[25%] lg:h-[330px] lg:w-[24%]"
            >
              <img
                src={product3DOne}
                alt="Woven Hemp Crossbody Bag"
                className="h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(34,34,34,0.15)] transition duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-[-2deg] group-hover:scale-[1.06] lg:drop-shadow-[0_38px_72px_rgba(34,34,34,0.16)] lg:group-hover:-translate-y-6 lg:group-hover:scale-[1.085]"
              />
            </Link>

            <Link
              to="/product/green-travel-fanny-pack"
              aria-label="View Green Travel Fanny Pack"
              className="group absolute bottom-[88px] right-[-14%] z-30 h-[190px] w-[46%] sm:bottom-[92px] sm:right-[-4%] sm:h-[285px] sm:w-[34%] md:h-[330px] lg:bottom-[105px] lg:right-[4%] lg:h-[405px] lg:w-[30%]"
            >
              <img
                src={product3DFive}
                alt="Green Travel Fanny Pack"
                className="h-full w-full object-contain drop-shadow-[0_34px_68px_rgba(34,34,34,0.18)] transition duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-[2deg] group-hover:scale-[1.06] lg:drop-shadow-[0_44px_82px_rgba(34,34,34,0.2)] lg:group-hover:-translate-y-6 lg:group-hover:scale-[1.085]"
              />
            </Link>

            <div className="absolute bottom-[42px] left-1/2 z-0 h-24 w-[82%] -translate-x-1/2 rounded-full bg-[#1F3D2B]/10 blur-3xl sm:bottom-[58px] sm:h-32 sm:w-[86%] lg:bottom-[62px]" />
          </div>
        </div>
      </div>
    </section>
  )
}