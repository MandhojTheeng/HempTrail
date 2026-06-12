import { Link } from 'react-router-dom'

import storyBagCloseup from '../../assets/story-bag-closeup.jpeg'
import storyWorkshop from '../../assets/story-workshop.jpeg'

const storyPoints = [
  {
    number: '01',
    title: 'Natural hemp texture',
    text: 'Strong woven hemp fabric gives every product an earthy feel and practical everyday durability.',
  },
  {
    number: '02',
    title: 'Handmade craft',
    text: 'Each bag carries the quiet character of careful making, simple construction, and useful details.',
  },
  {
    number: '03',
    title: 'Made to be carried',
    text: 'Designed for travel, work, study, markets, and the small movements of daily life.',
  },
]

export function HomeStorySection() {
  return (
    <section className="relative bg-[#1F3D2B] py-24 text-[#FAF7F0] lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#D8C3A5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#9A6B4F]/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-[#D8C3A5]">
              Our Story
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-[50px] font-bold leading-[0.92] tracking-[-0.065em] text-[#FAF7F0] sm:text-[76px]">
              A quiet process behind every piece.
            </h2>

            <p className="mt-8 max-w-xl text-[17px] leading-9 text-[#FAF7F0]/68">
              Before a Hemp product reaches the customer, it moves through a simple
              but careful process: material, making, purpose. Nothing is added only
              for decoration. Every detail has to support real daily use.
            </p>

            <Link
              to="/our-story"
              className="mt-10 inline-flex items-center justify-center border border-[#FAF7F0] px-9 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#FAF7F0] hover:text-[#1F3D2B]"
            >
              Read Our Story
            </Link>
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
          {storyPoints.map((item, index) => (
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
                  <h3 className="font-serif text-[31px] font-bold leading-[1] tracking-[-0.045em] text-[#FAF7F0]">
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
  )
}