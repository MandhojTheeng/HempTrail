import { Link } from 'react-router-dom'

const policySections = [
  {
    title: 'Information We Collect',
    content:
      'When you browse Ojasvi LLC, place an order, create an account, or contact us, we may collect details such as your name, email address, phone number, shipping address, billing details, order information, and messages sent through our forms.',
  },
  {
    title: 'How We Use Your Information',
    content:
      'We use your information to process orders, deliver products, provide customer support, respond to inquiries, improve our website, prevent fraud, and send updates only when you choose to receive them.',
  },
  {
    title: 'Orders and Payments',
    content:
      'Payment information is handled through secure third-party payment services. Ojasvi LLC does not store full card or payment account details on this website.',
  },
  {
    title: 'Cookies and Website Data',
    content:
      'Our website may use cookies or similar technologies to remember preferences, improve browsing experience, understand site performance, and support basic ecommerce functionality such as cart storage.',
  },
  {
    title: 'Sharing Your Information',
    content:
      'We do not sell your personal information. We may share limited information with trusted service providers such as delivery partners, payment processors, website hosting providers, or support tools when needed to complete your request.',
  },
  {
    title: 'Data Security',
    content:
      'We take reasonable steps to protect your information from unauthorized access, misuse, loss, or disclosure. However, no online system is completely secure, so we recommend using strong passwords and protecting your account details.',
  },
  {
    title: 'Your Rights',
    content:
      'You may request access, correction, or deletion of your personal information by contacting us. You may also unsubscribe from marketing emails at any time.',
  },
  {
    title: 'Policy Updates',
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#FAF7F0] text-[#222222]">
      <section className="relative overflow-hidden border-b border-[#1F3D2B]/10 bg-[#FAF7F0]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(154,107,79,0.1),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(31,61,43,0.1),transparent_34%)]" />

        <div className="relative mx-auto max-w-[1200px] px-5 py-20 text-center sm:px-6 lg:px-10 lg:py-24">
          <p className="text-[12px] font-bold uppercase tracking-[0.36em] text-[#9A6B4F]">
            Ojasvi LLC Policy
          </p>

          <h1 className="mx-auto mt-5 max-w-5xl font-serif text-[56px] font-bold leading-[0.9] tracking-[-0.065em] text-[#1F3D2B] sm:text-[84px] lg:text-[104px]">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-8 text-[#222222]/64">
            This Privacy Policy explains how Ojasvi LLC collects, uses, protects, and
            manages your information when you visit our website or shop with us.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@ojasvi.com"
              className="inline-flex items-center justify-center bg-[#1F3D2B] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020]"
            >
              Contact Us
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
              Policy Summary
            </p>

            <h2 className="mt-4 font-serif text-[34px] font-bold leading-none tracking-[-0.045em] text-[#1F3D2B]">
              Your privacy matters.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#222222]/62">
              We only collect information needed to run the store, complete orders,
              provide support, and improve your experience.
            </p>

            <div className="mt-7 space-y-4 border-t border-[#1F3D2B]/10 pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                  Effective Date
                </p>
                <p className="mt-2 text-sm font-semibold text-[#1F3D2B]">
                  2026
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
            {policySections.map((section, index) => (
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
                Questions?
              </p>

              <h2 className="mt-4 font-serif text-[38px] font-bold leading-[0.95] tracking-[-0.05em] sm:text-[52px]">
                Contact Ojasvi LLC about your privacy.
              </h2>

              <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#FAF7F0]/68">
                For questions about this policy or your personal information, contact us
                directly and we will help you with the next steps.
              </p>

              <a
                href="mailto:hello@ojasvi.com"
                className="mt-7 inline-flex items-center justify-center border border-[#FAF7F0] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#FAF7F0] hover:text-[#1F3D2B]"
              >
                Email Ojasvi LLC
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}