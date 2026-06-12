import { Link } from 'react-router-dom'

const shippingSections = [
  {
    title: 'Order Processing',
    content:
      'Orders are usually processed within 1–3 business days after confirmation. Since Hemp products are handmade, preparation may take slightly longer during busy periods.',
  },
  {
    title: 'Shipping Locations',
    content:
      'We support selected shipping locations depending on product availability, delivery partner coverage, and destination requirements.',
  },
  {
    title: 'Delivery Time',
    content:
      'Delivery time depends on your location and selected delivery method. Local orders may arrive faster, while remote or international deliveries may take additional time.',
  },
  {
    title: 'Shipping Charges',
    content:
      'Shipping charges may vary based on order size, delivery location, and shipping method. Any delivery cost will be shown or confirmed before the order is completed.',
  },
  {
    title: 'Tracking Information',
    content:
      'If tracking is available, we will share the tracking details after the order is dispatched. Some local delivery methods may provide limited tracking updates.',
  },
  {
    title: 'Incorrect Address',
    content:
      'Please make sure your name, phone number, and shipping address are correct before placing an order. Ojasvi is not responsible for delays caused by incomplete or incorrect delivery details.',
  },
  {
    title: 'Delivery Delays',
    content:
      'Delivery may be delayed due to weather, courier issues, public holidays, customs checks, remote locations, or other situations outside our control.',
  },
  {
    title: 'Damaged or Missing Package',
    content:
      'If your order arrives damaged or does not arrive within the expected time, contact us with your order details so we can review the issue and help with the next steps.',
  },
]

export default function ShippingPolicyPage() {
  return (
    <main className="bg-[#FAF7F0] text-[#222222]">
      <section className="relative overflow-hidden border-b border-[#1F3D2B]/10 bg-[#FAF7F0]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(154,107,79,0.1),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(31,61,43,0.1),transparent_34%)]" />

        <div className="relative mx-auto max-w-[1200px] px-5 py-20 text-center sm:px-6 lg:px-10 lg:py-24">
          <p className="text-[12px] font-bold uppercase tracking-[0.36em] text-[#9A6B4F]">
            Ojasvi Policy
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl font-serif text-[56px] font-bold leading-[0.9] tracking-[-0.065em] text-[#1F3D2B] sm:text-[84px] lg:text-[104px]">
            Shipping Policy
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-8 text-[#222222]/64">
            This Shipping Policy explains how Ojasvi processes, packs, dispatches,
            and delivers handmade hemp goods.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#1F3D2B] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020]"
            >
              Ask About Shipping
            </Link>

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
              Shipping Summary
            </p>

            <h2 className="mt-4 font-serif text-[34px] font-bold leading-none tracking-[-0.045em] text-[#1F3D2B]">
              Carefully packed and dispatched.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#222222]/62">
              Each order is checked, packed, and prepared for delivery with care before
              it leaves Ojasvi.
            </p>

            <div className="mt-7 space-y-4 border-t border-[#1F3D2B]/10 pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Processing
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1F3D2B]">
                  1–3 business days
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Delivery
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1F3D2B]">
                  Location-based timing
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Support
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1F3D2B]">
                  hello@ojasvi.com
                </p>
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            {shippingSections.map((section, index) => (
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
                Shipping Help
              </p>

              <h2 className="mt-4 font-serif text-[38px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[52px]">
                Need help with delivery?
              </h2>

              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#FAF7F0]/68">
                Contact Ojasvi with your order details if you need delivery support,
                tracking information, or help with a delayed package.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center justify-center border border-[#FAF7F0] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#FAF7F0] hover:text-[#1F3D2B]"
              >
                Contact Support
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}