import { Link } from 'react-router-dom'

const returnSections = [
  {
    title: 'Return Window',
    content:
      'You may request a return within 7 days of receiving your order. The item must be unused, clean, and in its original condition with any packaging, tags, or product labels included.',
  },
  {
    title: 'Eligible Items',
    content:
      'Products are eligible for return if they arrive damaged, defective, incorrect, or significantly different from what was shown on the website.',
  },
  {
    title: 'Non-Returnable Items',
    content:
      'Used items, washed items, personalized or custom-made products, final-sale items, and products damaged after delivery are not eligible for return.',
  },
  {
    title: 'Return Request Process',
    content:
      'To request a return, contact us with your order number, product name, reason for return, and clear photos if the item is damaged or incorrect. We will review your request and provide the next steps.',
  },
  {
    title: 'Refunds',
    content:
      'Once the returned item is received and inspected, we will notify you about approval or rejection. Approved refunds will be processed through the original payment method or another agreed method.',
  },
  {
    title: 'Exchange Option',
    content:
      'If the item is damaged, defective, or the wrong product was delivered, we may offer an exchange depending on product availability.',
  },
  {
    title: 'Return Shipping',
    content:
      'Return shipping costs may be the customer’s responsibility unless the item was damaged, defective, or incorrect due to an error from Hemp.',
  },
  {
    title: 'Order Cancellation',
    content:
      'Orders may be cancelled before they are packed or shipped. Once an order has already been dispatched, it must follow the return process.',
  },
]

export default function ReturnPolicyPage() {
  return (
    <main className="bg-[#FAF7F0] text-[#222222]">
      <section className="relative overflow-hidden border-b border-[#1F3D2B]/10 bg-[#FAF7F0]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(154,107,79,0.1),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(31,61,43,0.1),transparent_34%)]" />

        <div className="relative mx-auto max-w-[1200px] px-5 py-20 text-center sm:px-6 lg:px-10 lg:py-24">
          <p className="text-[12px] font-bold uppercase tracking-[0.36em] text-[#9A6B4F]">
            Hemp Policy
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl font-serif text-[56px] font-bold leading-[0.9] tracking-[-0.065em] text-[#1F3D2B] sm:text-[84px] lg:text-[104px]">
            Return Policy
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-8 text-[#222222]/64">
            We want every Hemp product to reach you in good condition. This policy
            explains how returns, refunds, exchanges, and cancellations are handled.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@hemp.com"
              className="inline-flex items-center justify-center bg-[#1F3D2B] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020]"
            >
              Request Return
            </a>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center border border-[#1F3D2B]/20 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B] transition hover:bg-[#F1E7D7]"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-[320px_1fr] lg:px-10">
          <aside className="h-fit border border-[#1F3D2B]/10 bg-[#F1E7D7]/60 p-6 lg:sticky lg:top-36">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#9A6B4F]">
              Return Summary
            </p>

            <h2 className="mt-4 font-serif text-[34px] font-bold leading-none tracking-[-0.045em] text-[#1F3D2B]">
              Simple and fair returns.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#222222]/62">
              Returns are reviewed based on product condition, delivery issue, and return
              request timing.
            </p>

            <div className="mt-7 space-y-4 border-t border-[#1F3D2B]/10 pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Return Window
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1F3D2B]">
                  Within 7 days
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Condition
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1F3D2B]">
                  Unused and original
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Contact
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1F3D2B]">
                  hello@ojasvi.com
                </p>
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            {returnSections.map((section, index) => (
              <article
                key={section.title}
                className="border border-[#1F3D2B]/10 bg-white/55 p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-[80px_1fr]">
                  <p className="font-serif text-[42px] font-bold leading-none tracking-[-0.06em] text-[#D8C3A5]">
                    {String(index + 1).padStart(2, '0')}
                  </p>

                  <div>
                    <h2 className="font-serif text-[34px] font-bold leading-none tracking-[-0.045em] text-[#1F3D2B] sm:text-[42px]">
                      {section.title}
                    </h2>

                    <p className="mt-5 text-[16px] leading-8 text-[#222222]/66">
                      {section.content}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <article className="bg-[#1F3D2B] p-7 text-[#FAF7F0] sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D8C3A5]">
                Need Help?
              </p>

              <h2 className="mt-4 font-serif text-[38px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[52px]">
                Contact us before sending anything back.
              </h2>

              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#FAF7F0]/68">
                Please contact Hemp first so we can confirm whether your item is
                eligible for return, refund, or exchange.
              </p>

              <a
                href="mailto:hello@ojasvi.com"
                className="mt-7 inline-flex items-center justify-center border border-[#FAF7F0] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#FAF7F0] hover:text-[#1F3D2B]"
              >
                Email Hemp
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}