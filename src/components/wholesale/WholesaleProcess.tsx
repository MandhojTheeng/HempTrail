import { wholesaleSteps } from './wholesaleData'

export function WholesaleProcess() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F0] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(154,107,79,0.1),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(31,61,43,0.1),transparent_34%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.36em] text-[#9A6B4F]">
            Wholesale Process
          </p>

          <h2 className="mt-5 font-serif text-[46px] font-bold leading-[0.92] tracking-[-0.06em] text-[#1F3D2B] sm:text-[64px] lg:text-[76px]">
            Simple, clear, and made for thoughtful retail.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-8 text-[#222222]/62">
            From first inquiry to final dispatch, we keep each step transparent so you
            understand product options, quantity, pricing, and timing before confirming.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[72px] hidden h-px bg-[#1F3D2B]/12 lg:block" />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {wholesaleSteps.map((step, index) => (
              <article
                key={step.title}
                className="group relative overflow-hidden border border-[#1F3D2B]/10 bg-[#FFF9EF]/74 p-7 shadow-[0_24px_80px_rgba(34,34,34,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-[#FAF7F0] hover:shadow-[0_32px_100px_rgba(34,34,34,0.1)] sm:p-8"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D8C3A5]/22 transition duration-500 group-hover:scale-125" />

                <div className="relative">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#1F3D2B]/12 bg-[#FAF7F0] font-serif text-[34px] font-bold tracking-[-0.06em] text-[#1F3D2B] shadow-[0_18px_45px_rgba(34,34,34,0.06)]">
                      {step.number}
                    </span>

                    <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#9A6B4F]">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="max-w-sm font-serif text-[34px] font-bold leading-[0.95] tracking-[-0.05em] text-[#1F3D2B] sm:text-[42px]">
                    {step.title}
                  </h3>

                  <p className="mt-6 max-w-md text-[15px] leading-7 text-[#222222]/64">
                    {step.text}
                  </p>

                  <div className="mt-10 flex items-center gap-4">
                    <span className="h-px flex-1 bg-[#1F3D2B]/14" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#9A6B4F]">
                      Ojasvi
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 border border-[#1F3D2B]/10 bg-[#1F3D2B] px-6 py-7 text-[#FAF7F0] sm:px-8 lg:mt-14 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D8C3A5]">
              Ready to begin?
            </p>

            <h3 className="mt-3 font-serif text-[32px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[44px]">
              Share your store details and product interest.
            </h3>
          </div>

          <a
            href="#wholesale-form"
            className="mt-6 inline-flex items-center justify-center border border-[#FAF7F0] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#FAF7F0] hover:text-[#1F3D2B] lg:mt-0"
          >
            Start Inquiry
          </a>
        </div>
      </div>
    </section>
  )
}