import { Link } from 'react-router-dom'

const termsSections = [
  {
    title: 'Use of This Website',
    content:
      'By using the Ojasvi LLC website, you agree to use it for lawful purposes only. You must not misuse the website, attempt to damage it, copy content without permission, or interfere with normal website operation.',
  },
  {
    title: 'Product Information',
    content:
      'We try to display product details, images, colors, sizes, materials, and prices as accurately as possible. Since Ojasvi LLC products are handmade, small variations in texture, pattern, color, or finish may occur.',
  },
  {
    title: 'Orders and Availability',
    content:
      'All orders are subject to product availability and confirmation. If an item becomes unavailable after an order is placed, we may contact you to offer an alternative, delay the order, or cancel and refund the unavailable item.',
  },
  {
    title: 'Pricing and Payment',
    content:
      'Prices are listed  unless stated otherwise. Ojasvi LLC may update prices at any time. Payment must be completed through the available checkout method before an order can be processed.',
  },
  {
    title: 'Shipping and Delivery',
    content:
      'Shipping times may vary depending on location, courier service, product availability, and external conditions. Ojasvi LLC is not responsible for delays caused by incorrect delivery information, courier issues, weather, customs, or events outside our control.',
  },
  {
    title: 'Returns and Exchanges',
    content:
      'Returns and exchanges are handled according to our Return Policy. Items must be unused, clean, and in original condition unless the issue is caused by a damaged, defective, or incorrect product.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All website content, including brand name, product photos, text, graphics, layout, and design elements, belongs to Ojasvi LLC or its content providers. You may not copy, reproduce, or reuse content without permission.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'Ojasvi LLC is not responsible for indirect, incidental, or unexpected losses related to website use, product delays, courier issues, or third-party payment and delivery services.',
  },
  {
    title: 'Changes to Terms',
    content:
      'We may update these Terms & Conditions from time to time. Continued use of the website after updates means you accept the revised terms.',
  },
]

export default function TermsPage() {
  return (
    <main className="bg-[#FAF7F0] text-[#222222]">
      <section className="relative overflow-hidden border-b border-[#1F3D2B]/10 bg-[#FAF7F0]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(154,107,79,0.1),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(31,61,43,0.1),transparent_34%)]" />

        <div className="relative mx-auto max-w-[1200px] px-5 py-20 text-center sm:px-6 lg:px-10 lg:py-24">
          <p className="text-[12px] font-bold uppercase tracking-[0.36em] text-[#9A6B4F]">
            Ojasvi LLC Policy
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl font-serif text-[56px] font-bold leading-[0.9] tracking-[-0.065em] text-[#1F3D2B] sm:text-[84px] lg:text-[104px]">
            Terms &amp; Conditions
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-8 text-[#222222]/64">
            These Terms & Conditions explain the rules for using the Ojasvi LLC website,
            placing orders, and purchasing handmade Ojasvi LLC goods from us.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#1F3D2B] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020]"
            >
              Ask a Question
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
              Terms Summary
            </p>

            <h2 className="mt-4 font-serif text-[34px] font-bold leading-none tracking-[-0.045em] text-[#1F3D2B]">
              Clear terms for a simple shopping experience.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#222222]/62">
              These terms cover website use, product orders, payments, shipping, returns,
              and general responsibilities.
            </p>

            <div className="mt-7 space-y-4 border-t border-[#1F3D2B]/10 pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Applies To
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1F3D2B]">
                  Website and orders
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Brand
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1F3D2B]">
                  Ojasvi LLC
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
            {termsSections.map((section, index) => (
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
                Need Clarification?
              </p>

              <h2 className="mt-4 font-serif text-[38px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[52px]">
                Contact Ojasvi LLC before placing an order.
              </h2>

              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#FAF7F0]/68">
                If you have questions about these terms, product availability, returns,
                shipping, or payment, contact us before completing your purchase.
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