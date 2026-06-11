import { Link } from 'react-router-dom'

import backpackImage from '../../assets/backpack.png'
import smallBagImage from '../../assets/smallbag.webp'
import hatImage from '../../assets/hat.webp'
import fannyPackImage from '../../assets/fannypack.webp'
import crossbodyBagImage from '../../assets/crossbodybag.png'

const categories = [
  {
    title: 'Small Bag',
    to: '/category/small-bag',
    image: smallBagImage,
    alt: 'Small hemp bag',
  },
  {
    title: 'Hat',
    to: '/category/hat',
    image: hatImage,
    alt: 'Hemp hat',
  },
  {
    title: 'Fanny Pack',
    to: '/category/fanny-pack',
    image: fannyPackImage,
    alt: 'Hemp fanny pack',
  },
  {
    title: 'Crossbody Bag',
    to: '/category/crossbody-bag',
    image: crossbodyBagImage,
    alt: 'Hemp crossbody bag',
  },
]

export function HomeCategorySection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F0] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(154,107,79,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(31,61,43,0.1),transparent_34%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-[#9A6B4F]">
              Shop by Category
            </p>

            <h2 className="mt-4 max-w-4xl font-serif text-[38px] font-bold leading-[0.95] tracking-[-0.055em] text-[#1F3D2B] sm:text-[52px] lg:text-[62px]">
              Choose your carry.
            </h2>
          </div>

          <Link
            to="/shop"
            className="inline-flex w-fit items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B]"
          >
            View all
            <span className="text-xl">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <Link
            to="/category/backpack"
            className="group relative min-h-[620px] overflow-hidden rounded-[36px] bg-[#E7D7C1] shadow-[0_35px_100px_rgba(34,34,34,0.12)]"
          >
            <img
              src={backpackImage}
              alt="Hemp backpack"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-[1200ms] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/88 via-[#1F3D2B]/18 to-transparent" />

            <div className="absolute left-7 top-7">
              <span className="rounded-full bg-[#FAF7F0]/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#1F3D2B]">
                Featured
              </span>
            </div>

            <div className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF7F0] text-xl text-[#1F3D2B] transition group-hover:translate-x-1 group-hover:-translate-y-1">
              →
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-[#FAF7F0] sm:p-10">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#D8C3A5]">
                01
              </p>

              <h3 className="font-serif text-[48px] font-bold leading-none tracking-[-0.055em] sm:text-[64px]">
                Backpack
              </h3>
            </div>
          </Link>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {categories.map((category, index) => (
              <Link
                key={category.to}
                to={category.to}
                className="group relative min-h-[300px] overflow-hidden rounded-[32px] bg-[#E7D7C1] shadow-[0_25px_80px_rgba(34,34,34,0.08)]"
              >
                <img
                  src={category.image}
                  alt={category.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-[1000ms] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B]/82 via-[#1F3D2B]/12 to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#FAF7F0]/85">
                    0{index + 2}
                  </span>
                </div>

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#FAF7F0]/45 text-lg text-[#FAF7F0] transition group-hover:bg-[#FAF7F0] group-hover:text-[#1F3D2B]">
                  →
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-[#FAF7F0]">
                  <h3 className="font-serif text-[30px] font-bold leading-none tracking-[-0.045em] sm:text-[36px]">
                    {category.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 rounded-full bg-[#1F3D2B] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020]"
          >
            Explore all handmade hemp goods
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}