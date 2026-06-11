import type { FormEvent } from 'react'
import { useState } from 'react'

type HomeContactSelectProps = {
  label: string
  placeholder: string
  options: string[]
  name: string
}

const inquiryOptions = [
  'Product Question',
  'Order Support',
  'Wholesale Inquiry',
  'Custom Product',
  'General Message',
]

function HomeContactSelect({
  label,
  placeholder,
  options,
  name,
}: HomeContactSelectProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')

  return (
    <div className="relative">
      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]">
        {label}
      </label>

      <input type="hidden" name={name} value={selected} required />

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={[
          'flex w-full items-center justify-between rounded-full bg-[#FFFCF7] px-5 py-4 text-left text-[14px] outline-none transition shadow-[inset_0_0_0_1px_rgba(31,61,43,0.08)]',
          open
            ? 'shadow-[inset_0_0_0_2px_rgba(31,61,43,0.18)]'
            : 'hover:bg-[#FAF7F0]',
          selected ? 'text-[#222222]' : 'text-[#222222]/42',
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
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-[24px] bg-[#FFFCF7] p-2 shadow-[0_24px_70px_rgba(34,34,34,0.16)]">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option)
                setOpen(false)
              }}
              className={[
                'block w-full rounded-full px-4 py-3 text-left text-[14px] transition duration-200',
                selected === option
                  ? 'bg-[#1F3D2B] text-[#FAF7F0]'
                  : 'text-[#222222] hover:bg-[#FAF7F0]',
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

export function HomeContactSection() {
  const [showSuccess, setShowSuccess] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setShowSuccess(true)
    event.currentTarget.reset()

    window.setTimeout(() => {
      setShowSuccess(false)
    }, 4200)
  }

  return (
    <section className="relative overflow-hidden bg-[#FFFCF7] py-20 text-[#222222] lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(216,195,165,0.14),transparent_30%),radial-gradient(circle_at_88%_74%,rgba(31,61,43,0.06),transparent_34%)]" />

      {showSuccess && (
        <div className="fixed right-5 top-5 z-[120] w-[calc(100%-40px)] max-w-md rounded-[30px] bg-[#FFFCF7] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:right-8 sm:top-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1F3D2B] text-lg font-bold text-[#FAF7F0]">
              ✓
            </span>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A6B4F]">
                Message Sent
              </p>

              <h3 className="mt-2 font-serif text-[28px] font-bold leading-none tracking-[-0.045em] text-[#1F3D2B]">
                Thank you for contacting us.
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#222222]/62">
                Your message has been received. HempTrail will review your request and
                get back to you shortly.
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

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-5 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:px-10">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
            Contact HempTrail
          </p>

          <h2 className="mt-4 max-w-2xl font-serif text-[54px] font-bold leading-[0.86] tracking-[-0.075em] text-[#1F3D2B] sm:text-[78px] lg:text-[96px]">
            Need help with handmade hemp goods?
          </h2>

          <p className="mt-7 max-w-md text-[16px] leading-8 text-[#222222]/62">
            Send us a message for product questions, order support, wholesale
            requests, or custom hemp goods.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[42px] bg-[#FAF7F0]/42 p-5 shadow-[0_32px_100px_rgba(34,34,34,0.07)] sm:p-7 lg:p-9"
        >
          <div className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9A6B4F]">
              Send a Message
            </p>

            <h3 className="mt-3 font-serif text-[42px] font-bold leading-[0.9] tracking-[-0.065em] text-[#1F3D2B] sm:text-[58px]">
              Tell us what you need.
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]">
                First Name
              </label>
              <input
                required
                name="firstName"
                type="text"
                className="w-full rounded-full bg-[#FFFCF7] px-5 py-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 shadow-[inset_0_0_0_1px_rgba(31,61,43,0.08)] focus:shadow-[inset_0_0_0_2px_rgba(31,61,43,0.18)]"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]">
                Last Name
              </label>
              <input
                required
                name="lastName"
                type="text"
                className="w-full rounded-full bg-[#FFFCF7] px-5 py-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 shadow-[inset_0_0_0_1px_rgba(31,61,43,0.08)] focus:shadow-[inset_0_0_0_2px_rgba(31,61,43,0.18)]"
                placeholder="Your last name"
              />
            </div>

            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]">
                Email
              </label>
              <input
                required
                name="email"
                type="email"
                className="w-full rounded-full bg-[#FFFCF7] px-5 py-4 text-[14px] text-[#222222] outline-none transition placeholder:text-[#222222]/35 shadow-[inset_0_0_0_1px_rgba(31,61,43,0.08)] focus:shadow-[inset_0_0_0_2px_rgba(31,61,43,0.18)]"
                placeholder="you@example.com"
              />
            </div>

            <HomeContactSelect
              label="Inquiry Type"
              name="inquiryType"
              placeholder="Choose inquiry"
              options={inquiryOptions}
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#1F3D2B]">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={6}
              className="w-full resize-none rounded-[30px] bg-[#FFFCF7] px-5 py-4 text-[14px] leading-7 text-[#222222] outline-none transition placeholder:text-[#222222]/35 shadow-[inset_0_0_0_1px_rgba(31,61,43,0.08)] focus:shadow-[inset_0_0_0_2px_rgba(31,61,43,0.18)]"
              placeholder="Tell us about your question, order, or wholesale request..."
            />
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#1F3D2B] px-8 text-[11px] font-bold uppercase tracking-[0.16em] text-[#FAF7F0] transition hover:bg-[#173020]"
            >
              Send Message
            </button>

            <p className="max-w-sm text-[13px] leading-6 text-[#222222]/48">
              We usually respond within 1–2 business days.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}