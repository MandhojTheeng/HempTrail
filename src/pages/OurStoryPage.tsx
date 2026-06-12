import { Link } from 'react-router-dom'

import storyHero from '../assets/story-hero.jpeg'
import storyBackpack from '../assets/story-backpack.jpeg'
import storyBagCloseup from '../assets/story-bag-closeup.jpeg'
import storyWorkshop from '../assets/story-workshop.jpeg'

const journeyItems = [
  {
    number: '01',
    eyebrow: 'Material',
    title: 'The hemp is selected for texture, strength, and everyday use.',
    text: 'We start with woven hemp fabric that feels natural in the hand and strong enough for daily carrying.',
  },
  {
    number: '02',
    eyebrow: 'Making',
    title: 'The shape is built with simple craft and practical details.',
    text: 'Panels, straps, pockets, and finishing are made with a focus on comfort, structure, and long-term use.',
  },
  {
    number: '03',
    eyebrow: 'Purpose',
    title: 'The final piece is made to move with you every day.',
    text: 'From work to travel, shopping to short trips, Ojasvi bags are made to be used, not only displayed.',
  },
]

const principles = [
  'Natural hemp texture',
  'Handmade craft',
  'Practical daily carry',
  'Earthy timeless design',
]

export default function OurStoryPage() {
  return (
    <main className="overflow-hidden bg-[#FAF7F0] text-[#222222]">
      <style>
        {`
          @keyframes htFadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes htSlowScale {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(1.045);
            }
          }

          @keyframes htFloat {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-12px);
            }
          }

          .ht-story-fade {
            animation: htFadeUp 0.85s ease both;
          }

          .ht-story-delay-1 {
            animation-delay: 0.12s;
          }

          .ht-story-delay-2 {
            animation-delay: 0.24s;
          }

          .ht-story-zoom {
            animation: htSlowScale 18s ease-in-out infinite alternate;
          }

          .ht-story-float {
            animation: htFloat 5s ease-in-out infinite;
          }
        `}
      </style>

      <section className="relative min-h-[88vh] border-b border-[#1F3D2B]/10">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#FAF7F0]" />

          <div className="relative overflow-hidden bg-[#D8C3A5]">
            <img
              src={storyHero}
              alt="Handmade hemp bag"
              className="ht-story-zoom h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F0] via-[#FAF7F0]/35 to-transparent" />
            <div className="absolute inset-0 bg-[#1F3D2B]/8" />
          </div>
        </div>

        <div className="relative z-10 mx-auto grid min-h-[88vh] max-w-[1440px] grid-cols-1 items-center px-5 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="max-w-2xl">
            <p className="ht-story-fade text-[12px] font-bold uppercase tracking-[0.34em] text-[#9A6B4F]">
              Our Story
            </p>

            <h1 className="ht-story-fade ht-story-delay-1 mt-5 font-serif text-[58px] font-bold leading-[0.88] tracking-[-0.07em] text-[#1F3D2B] sm:text-[86px] lg:text-[108px]">
              From handmade craft to everyday carry.
            </h1>

            <p className="ht-story-fade ht-story-delay-2 mt-8 max-w-xl text-[18px] leading-9 text-[#222222]/68">
              Ojasvi creates handmade hemp bags and accessories shaped by natural
              fiber, practical design, and careful everyday usability.
            </p>

            <div className="ht-story-fade ht-story-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-[#1F3D2B] px-9 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020]"
              >
                Shop Collection
              </Link>

              <Link
                to="/wholesale"
                className="inline-flex items-center justify-center border border-[#1F3D2B]/20 px-9 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B] transition hover:bg-[#F1E7D7]"
              >
                Wholesale Inquiry
              </Link>
            </div>
          </div>

          <div className="relative mt-16 hidden min-h-[640px] lg:block">
            <div className="absolute right-0 top-0 h-[540px] w-[72%] overflow-hidden bg-[#D8C3A5] shadow-[0_30px_80px_rgba(34,34,34,0.12)]">
              <img
                src={storyBackpack}
                alt="Ojasvi handmade hemp backpack"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="ht-story-float absolute bottom-8 left-6 w-[360px] bg-[#FAF7F0] p-8 shadow-[0_30px_80px_rgba(34,34,34,0.16)]">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#9A6B4F]">
                Handmade Hemp Goods
              </p>

              <p className="mt-4 font-serif text-[34px] font-bold leading-[0.98] tracking-[-0.05em] text-[#1F3D2B]">
                Woven texture. Practical shape. Daily use.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-[#222222]/62">
                Bags made with natural texture, earthy color, and practical construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-24 lg:py-32">
        <div className="mx-auto max-w-[1180px] px-5 text-center sm:px-6 lg:px-10">
          <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-[#9A6B4F]">
            The Beginning
          </p>

          <h2 className="mt-5 font-serif text-[46px] font-bold leading-[0.98] tracking-[-0.06em] text-[#1F3D2B] sm:text-[72px]">
            Ojasvi was made to feel honest before it feels branded.
          </h2>

          <p className="mx-auto mt-9 max-w-3xl text-[18px] leading-9 text-[#222222]/66">
            The story is in the material: the woven hemp, the handmade finish, the
            everyday shape, and the quiet durability of a product made to be carried
            again and again.
          </p>
        </div>
      </section>

      <section className="relative bg-[#1F3D2B] py-24 text-[#FAF7F0] lg:py-32">
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#D8C3A5]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#9A6B4F]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-[#D8C3A5]">
                The Journey
              </p>

              <h2 className="mt-5 max-w-2xl font-serif text-[50px] font-bold leading-[0.92] tracking-[-0.065em] text-[#FAF7F0] sm:text-[76px]">
                A quiet process behind every piece.
              </h2>

              <p className="mt-8 max-w-xl text-[17px] leading-9 text-[#FAF7F0]/68">
                Before an Ojasvi product reaches the customer, it moves through a
                simple but careful process: material, making, purpose. Nothing is added
                only for decoration. Every detail has to support real daily use.
              </p>
            </div>

            <div className="relative min-h-[580px]">
              <div className="absolute left-0 top-0 h-[430px] w-[74%] overflow-hidden bg-[#D8C3A5] shadow-[0_35px_90px_rgba(0,0,0,0.22)]">
                <img
                  src={storyBagCloseup}
                  alt="Close-up of hemp bag texture"
                  className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 right-0 h-[380px] w-[58%] overflow-hidden border-[12px] border-[#1F3D2B] bg-[#D8C3A5] shadow-[0_35px_90px_rgba(0,0,0,0.2)]">
                <img
                  src={storyWorkshop}
                  alt="Handmade hemp product"
                  className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute bottom-12 left-8 max-w-[310px] bg-[#FAF7F0] p-7 text-[#1F3D2B] shadow-[0_25px_70px_rgba(0,0,0,0.2)]">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#9A6B4F]">
                  Crafted slowly
                </p>

                <p className="mt-3 font-serif text-[32px] font-bold leading-[0.96] tracking-[-0.05em]">
                  The value is in the small details.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 border-y border-[#FAF7F0]/15 lg:grid-cols-3">
            {journeyItems.map((item, index) => (
              <article
                key={item.title}
                className={[
                  'group relative px-0 py-10 transition duration-300 lg:px-9 lg:py-12',
                  index !== 0 ? 'border-t border-[#FAF7F0]/15 lg:border-l lg:border-t-0' : '',
                ].join(' ')}
              >
                <div className="flex items-start gap-5">
                  <span className="font-serif text-[58px] font-bold leading-none tracking-[-0.07em] text-[#D8C3A5]/55 transition group-hover:text-[#D8C3A5]">
                    {item.number}
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D8C3A5]/70">
                      {item.eyebrow}
                    </p>

                    <h3 className="mt-3 font-serif text-[31px] font-bold leading-[1] tracking-[-0.045em] text-[#FAF7F0]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[15px] leading-7 text-[#FAF7F0]/62">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-[#9A6B4F]">
              Our Principles
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-[48px] font-bold leading-[0.95] tracking-[-0.06em] text-[#1F3D2B] sm:text-[74px]">
              Simple values guide every product.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item}
                className="border border-[#1F3D2B]/10 bg-white/55 p-7 transition hover:border-[#1F3D2B]/25 hover:bg-white"
              >
                <p className="font-serif text-[34px] font-bold leading-none tracking-[-0.05em] text-[#1F3D2B]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1F3D2B] px-5 py-20 text-center text-[#FAF7F0] sm:px-6 lg:px-10">
        <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-[#D8C3A5]">
          Made for everyday movement
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[48px] font-bold leading-[0.95] tracking-[-0.06em] sm:text-[76px]">
          Carry something natural, useful, and made with care.
        </h2>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center border border-[#FAF7F0] px-9 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#FAF7F0] hover:text-[#1F3D2B]"
          >
            Shop Collection
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#FAF7F0] px-9 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B] transition hover:bg-[#D8C3A5]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}