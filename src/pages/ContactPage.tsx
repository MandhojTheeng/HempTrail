import { useState } from 'react'
import { Link } from 'react-router-dom'

type CustomSelectProps = {
  label: string
  placeholder: string
  options: string[]
  name: string
}

function CustomSelect({ label, placeholder, options, name }: CustomSelectProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')

  return (
    <div className="relative">
      <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]">
        {label}
      </label>

      <input type="hidden" name={name} value={selected} required />

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={[
          'flex w-full items-center justify-between border bg-[#FAF7F0] px-4 py-4 text-left text-sm outline-none transition',
          open
            ? 'border-[#1F3D2B] ring-2 ring-[#1F3D2B]/12'
            : 'border-[#1F3D2B]/12 hover:border-[#1F3D2B]/35',
          selected ? 'text-[#222222]' : 'text-[#222222]/45',
        ].join(' ')}
      >
        <span>{selected || placeholder}</span>

        <span
          className={[
            'text-[#1F3D2B] transition duration-300',
            open ? 'rotate-180' : '',
          ].join(' ')}
        >
          ↓
        </span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden border border-[#1F3D2B]/15 bg-[#FAF7F0] shadow-[0_18px_55px_rgba(34,34,34,0.14)]">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option)
                setOpen(false)
              }}
              className={[
                'block w-full px-4 py-3 text-left text-sm transition duration-200',
                selected === option
                  ? 'bg-[#1F3D2B] text-[#FAF7F0]'
                  : 'text-[#222222] hover:bg-[#1F3D2B] hover:text-[#FAF7F0]',
              ].join(' ')}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setShowSuccess(true)
    event.currentTarget.reset()

    window.setTimeout(() => {
      setShowSuccess(false)
    }, 4200)
  }

  return (
    <main className="bg-[#FAF7F0] text-[#222222]">
      {showSuccess && (
        <div className="fixed right-5 top-5 z-[120] w-[calc(100%-40px)] max-w-md border border-[#1F3D2B]/12 bg-[#FAF7F0] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:right-8 sm:top-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F3D2B] text-lg font-bold text-[#FAF7F0]">
              ✓
            </span>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#9A6B4F]">
                Message Sent
              </p>

              <h3 className="mt-2 font-serif text-[28px] font-bold leading-none tracking-[-0.045em] text-[#1F3D2B]">
                Thank you for contacting us.
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#222222]/62">
                Your message has been received. Ojasvi will review your request and get
                back to you shortly.
              </p>
            </div>

            <button
              type="button"
              aria-label="Close notification"
              onClick={() => setShowSuccess(false)}
              className="ml-auto text-xl leading-none text-[#1F3D2B]/55 transition hover:text-[#1F3D2B]"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <section className="border-b border-[#1F3D2B]/10 bg-[#FAF7F0]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-[0.48fr_0.52fr]">
          <div className="flex min-h-[540px] items-center px-5 py-20 sm:px-6 lg:px-10">
            <div className="max-w-xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-[#9A6B4F]">
                Contact Ojasvi
              </p>

              <h1 className="mt-5 font-serif text-[56px] font-bold leading-[0.9] tracking-[-0.065em] text-[#1F3D2B] sm:text-[82px] lg:text-[96px]">
                We’re here to help.
              </h1>

              <p className="mt-8 max-w-lg text-[18px] leading-9 text-[#222222]/66">
                Questions about products, orders, wholesale, or custom hemp goods? Send
                us a message and we’ll get back to you shortly.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="bg-[#F1E7D7]/70 px-5 py-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                    Support
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[#222222]/68">
                    Product and order help
                  </p>
                </div>

                <div className="bg-[#F1E7D7]/70 px-5 py-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                    Response
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[#222222]/68">
                    Within 1–2 business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1F3D2B] px-5 py-16 text-[#FAF7F0] sm:px-6 lg:px-10">
            <div className="mx-auto flex min-h-[440px] max-w-xl flex-col justify-center">
              <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-[#D8C3A5]">
                Get in touch
              </p>

              <h2 className="mt-5 font-serif text-[44px] font-bold leading-[0.95] tracking-[-0.055em] sm:text-[62px]">
                Handmade support for handmade goods.
              </h2>

              <p className="mt-7 text-[17px] leading-8 text-[#FAF7F0]/68">
                Whether you are buying one bag, asking about product details, or planning
                a wholesale order, we’ll guide you clearly.
              </p>

              <div className="mt-10 grid gap-4">
                <Link
                  to="/shop"
                  className="group bg-[#FAF7F0]/8 px-6 py-5 transition duration-300 hover:bg-[#FAF7F0]/14"
                >
                  <div className="flex items-center justify-between gap-5">
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.26em] text-[#D8C3A5]">
                        Shopping help
                      </span>
                      <span className="mt-2 block font-serif text-2xl font-bold tracking-[-0.04em] text-[#FAF7F0]">
                        Browse the collection
                      </span>
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FAF7F0]/25 text-xl transition group-hover:translate-x-1 group-hover:border-[#D8C3A5] group-hover:text-[#D8C3A5]">
                      →
                    </span>
                  </div>
                </Link>

                <Link
                  to="/wholesale"
                  className="group bg-[#FAF7F0]/8 px-6 py-5 transition duration-300 hover:bg-[#FAF7F0]/14"
                >
                  <div className="flex items-center justify-between gap-5">
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.26em] text-[#D8C3A5]">
                        Business inquiry
                      </span>
                      <span className="mt-2 block font-serif text-2xl font-bold tracking-[-0.04em] text-[#FAF7F0]">
                        Wholesale with Ojasvi
                      </span>
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FAF7F0]/25 text-xl transition group-hover:translate-x-1 group-hover:border-[#D8C3A5] group-hover:text-[#D8C3A5]">
                      →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-14 px-5 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:px-10">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#9A6B4F]">
              Send a Message
            </p>

            <h2 className="mt-4 font-serif text-[46px] font-bold leading-[0.94] tracking-[-0.06em] text-[#1F3D2B] sm:text-[64px]">
              Tell us what you need.
            </h2>

            <p className="mt-7 max-w-md text-[17px] leading-8 text-[#222222]/66">
              Use this form for product questions, order support, wholesale requests,
              custom inquiries, or general messages.
            </p>

            <div className="mt-10 bg-[#F1E7D7]/70 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
                Direct email
              </p>
              <p className="mt-3 font-serif text-2xl font-bold tracking-[-0.04em] text-[#1F3D2B]">
                hello@ojasvi.com
              </p>
              <p className="mt-3 text-[15px] leading-7 text-[#222222]/62">
                For orders, wholesale, product details, and general support.
              </p>
            </div>
          </div>

          <form
            className="border border-[#1F3D2B]/10 bg-white/60 p-6 shadow-[0_30px_80px_rgba(34,34,34,0.05)] sm:p-8 lg:p-10"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  name="firstName"
                  className="w-full border border-[#1F3D2B]/12 bg-[#FAF7F0] px-4 py-4 text-sm text-[#222222] outline-none transition placeholder:text-[#222222]/35 hover:border-[#1F3D2B]/35 focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/12"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border border-[#1F3D2B]/12 bg-[#FAF7F0] px-4 py-4 text-sm text-[#222222] outline-none transition placeholder:text-[#222222]/35 hover:border-[#1F3D2B]/35 focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/12"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]">
                Email Address
              </label>
              <input
                type="email"
                required
                name="email"
                className="w-full border border-[#1F3D2B]/12 bg-[#FAF7F0] px-4 py-4 text-sm text-[#222222] outline-none transition placeholder:text-[#222222]/35 hover:border-[#1F3D2B]/35 focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/12"
                placeholder="you@example.com"
              />
            </div>

            <div className="mt-5">
              <CustomSelect
                label="Inquiry Type"
                placeholder="Select one"
                name="inquiryType"
                options={[
                  'Product question',
                  'Order support',
                  'Wholesale inquiry',
                  'Custom request',
                  'General message',
                ]}
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]">
                Message
              </label>
              <textarea
                required
                name="message"
                rows={6}
                className="w-full resize-none border border-[#1F3D2B]/12 bg-[#FAF7F0] px-4 py-4 text-sm leading-7 text-[#222222] outline-none transition placeholder:text-[#222222]/35 hover:border-[#1F3D2B]/35 focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/12"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center bg-[#1F3D2B] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020] sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}