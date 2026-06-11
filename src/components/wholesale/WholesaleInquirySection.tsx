import type { FormEvent } from 'react'

import product3DFour from '../../assets/3D/4.png'
import product3DFive from '../../assets/3D/5.png'
import { WholesaleCustomSelect } from './WholesaleCustomSelect'
import { productInterestOptions, quantityOptions } from './wholesaleData'

type WholesaleInquirySectionProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function WholesaleInquirySection({ onSubmit }: WholesaleInquirySectionProps) {
  return (
    <section id="wholesale-form" className="relative overflow-hidden bg-[#FAF7F0] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(154,107,79,0.1),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(31,61,43,0.1),transparent_34%)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.36em] text-[#9A6B4F]">
              Wholesale Inquiry
            </p>

            <h2 className="mt-5 max-w-4xl font-serif text-[50px] font-bold leading-[0.9] tracking-[-0.065em] text-[#1F3D2B] sm:text-[72px] lg:text-[92px]">
              Tell us about your store.
            </h2>
          </div>

          <p className="max-w-md text-[16px] leading-8 text-[#222222]/62 lg:ml-auto">
            Share your business details, preferred product type, and estimated order
            quantity. We’ll respond with product options, pricing, and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 overflow-hidden border border-[#1F3D2B]/10 bg-white/50 shadow-[0_35px_100px_rgba(34,34,34,0.08)] lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative min-h-[520px] overflow-hidden bg-[#1F3D2B] p-8 text-[#FAF7F0] sm:p-10 lg:min-h-full">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(216,195,165,0.18),transparent_38%),linear-gradient(180deg,rgba(31,61,43,0)_0%,rgba(0,0,0,0.22)_100%)]" />

            <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
              <div className="absolute left-[12%] top-[22%] h-px w-[76%] bg-[#FAF7F0]/45" />
              <div className="absolute left-[12%] bottom-[26%] h-px w-[76%] bg-[#FAF7F0]/35" />
              <div className="absolute left-[50%] top-[12%] h-[76%] w-px bg-[#FAF7F0]/35" />
            </div>

            <div className="relative z-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#D8C3A5]">
                Partnership Details
              </p>

              <h3 className="mt-4 max-w-md font-serif text-[40px] font-bold leading-[0.94] tracking-[-0.055em] text-[#FAF7F0] sm:text-[54px]">
                Start with a few clear details.
              </h3>

              <p className="mt-5 max-w-md text-[15px] leading-7 text-[#FAF7F0]/68">
                We use your inquiry to understand your store type, product interest,
                quantity range, and delivery location.
              </p>
            </div>

            <div className="absolute bottom-[-18px] left-[-40px] z-10 h-[330px] w-[56%] sm:h-[390px] lg:h-[430px]">
              <img
                src={product3DFour}
                alt="3D hemp small bag"
                className="h-full w-full object-contain drop-shadow-[0_45px_80px_rgba(0,0,0,0.38)]"
              />
            </div>

            <div className="absolute bottom-[20px] right-[-58px] z-10 h-[300px] w-[58%] sm:h-[370px] lg:h-[410px]">
              <img
                src={product3DFive}
                alt="3D hemp fanny pack"
                className="h-full w-full object-contain drop-shadow-[0_45px_80px_rgba(0,0,0,0.38)]"
              />
            </div>

            <div className="absolute bottom-8 left-8 right-8 z-20 grid grid-cols-3 divide-x divide-[#FAF7F0]/15 border-y border-[#FAF7F0]/15 bg-[#1F3D2B]/40 backdrop-blur">
              <div className="px-3 py-4 text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D8C3A5]">
                  Origin
                </p>
                <p className="mt-2 font-serif text-lg font-bold text-[#FAF7F0]">
                  Nepal
                </p>
              </div>

              <div className="px-3 py-4 text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D8C3A5]">
                  Goods
                </p>
                <p className="mt-2 font-serif text-lg font-bold text-[#FAF7F0]">
                  Hemp
                </p>
              </div>

              <div className="px-3 py-4 text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D8C3A5]">
                  Supply
                </p>
                <p className="mt-2 font-serif text-lg font-bold text-[#FAF7F0]">
                  Retail
                </p>
              </div>
            </div>
          </div>

          <form className="bg-[#FFF9EF]/78 p-6 sm:p-8 lg:p-12" onSubmit={onSubmit}>
            <div className="mb-8 border-b border-[#1F3D2B]/10 pb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#9A6B4F]">
                Inquiry Form
              </p>

              <h3 className="mt-3 font-serif text-[36px] font-bold leading-none tracking-[-0.05em] text-[#1F3D2B] sm:text-[46px]">
                Wholesale request
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B]">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  name="fullName"
                  placeholder="Your name"
                  className="w-full border border-[#1F3D2B]/12 bg-[#FAF7F0] px-4 py-4 text-sm text-[#222222] outline-none transition placeholder:text-[#222222]/35 hover:border-[#1F3D2B]/35 focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/12"
                />
              </div>

              <div>
                <label className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B]">
                  Business Name
                </label>
                <input
                  type="text"
                  required
                  name="businessName"
                  placeholder="Store or company name"
                  className="w-full border border-[#1F3D2B]/12 bg-[#FAF7F0] px-4 py-4 text-sm text-[#222222] outline-none transition placeholder:text-[#222222]/35 hover:border-[#1F3D2B]/35 focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/12"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="you@example.com"
                  className="w-full border border-[#1F3D2B]/12 bg-[#FAF7F0] px-4 py-4 text-sm text-[#222222] outline-none transition placeholder:text-[#222222]/35 hover:border-[#1F3D2B]/35 focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/12"
                />
              </div>

              <div>
                <label className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B]">
                  Location
                </label>
                <input
                  type="text"
                  required
                  name="location"
                  placeholder="City, Country"
                  className="w-full border border-[#1F3D2B]/12 bg-[#FAF7F0] px-4 py-4 text-sm text-[#222222] outline-none transition placeholder:text-[#222222]/35 hover:border-[#1F3D2B]/35 focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/12"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <WholesaleCustomSelect
                label="Product Interest"
                placeholder="Select category"
                name="productInterest"
                options={productInterestOptions}
              />

              <WholesaleCustomSelect
                label="Estimated Quantity"
                placeholder="Select quantity"
                name="estimatedQuantity"
                options={quantityOptions}
              />
            </div>

            <div className="mt-6">
              <label className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B]">
                Message
              </label>

              <textarea
                required
                name="message"
                rows={7}
                placeholder="Tell us about your store, preferred products, timeline, or any custom requirements..."
                className="w-full resize-none border border-[#1F3D2B]/12 bg-[#FAF7F0] px-4 py-4 text-sm leading-7 text-[#222222] outline-none transition placeholder:text-[#222222]/35 hover:border-[#1F3D2B]/35 focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/12"
              />
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center bg-[#1F3D2B] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020] sm:w-auto"
              >
                Submit Inquiry
              </button>

              <p className="text-[12px] leading-6 text-[#222222]/48 sm:max-w-[260px] sm:text-right">
                We usually respond within 1–2 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}