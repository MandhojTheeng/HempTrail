import { useState } from 'react'
import { Link } from 'react-router-dom'

import ojasviLogo from '../assets/ojasvi.png'

const supportLinks = [
  { label: 'Shipping Policy', to: '/shipping-policy' },
  { label: 'Return Policy', to: '/return-policy' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

const companyLinks = [
  { label: 'Our Story', to: '/our-story' },
  { label: 'Wholesale', to: '/wholesale' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Shop Collection', to: '/shop' },
]

const socialLinks = ['Instagram', 'Facebook', 'TikTok']

function SocialIcon({ name }: { name: string }) {
  if (name === 'Instagram') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    )
  }

  if (name === 'Facebook') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M14 8H16V4H13.5C10.9 4 9 5.8 9 8.5V11H6V15H9V21H13V15H16L17 11H13V8.8C13 8.3 13.4 8 14 8Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 4C15.5 7 17.3 8.8 20 9V12.5C18 12.4 16.4 11.8 15 10.8V16.2C15 19.2 12.7 21 9.8 21C7.2 21 5 19.1 5 16.5C5 13.7 7.3 11.8 10.2 11.8C10.6 11.8 11 11.8 11.4 11.9V15.5C11 15.3 10.7 15.2 10.2 15.2C9.2 15.2 8.4 15.8 8.4 16.7C8.4 17.6 9.1 18.2 10 18.2C11.1 18.2 11.7 17.5 11.7 16.2V4H15Z"
        fill="currentColor"
      />
    </svg>
  )
}

function FooterToast({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-5 right-5 z-[140] w-[calc(100%-40px)] max-w-[390px] overflow-hidden rounded-[24px] bg-[#FFFCF7] text-[#1F3D2B] shadow-[0_28px_90px_rgba(0,0,0,0.22)]">
      <div className="flex items-start gap-4 p-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3D2B] text-[#FAF7F0]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12.5L9.2 16.7L19 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1F3D2B]/55">
            Email Signup
          </p>

          <h3 className="mt-1 font-serif text-[26px] font-bold leading-none tracking-[-0.045em] text-[#1F3D2B]">
            You are subscribed.
          </h3>

          <p className="mt-3 text-[14px] leading-6 text-[#1F3D2B]/62">
            Thank you for joining Ojasvi updates. We will send new collections and
            offers to your email.
          </p>
        </div>

        <button
          type="button"
          aria-label="Close notification"
          onClick={onClose}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1F3D2B]/8 text-[18px] leading-none text-[#1F3D2B] transition hover:bg-[#1F3D2B] hover:text-[#FAF7F0]"
        >
          ×
        </button>
      </div>
    </div>
  )
}

function ComingSoonMessage({
  socialName,
  onClose,
}: {
  socialName: string
  onClose: () => void
}) {
  return (
    <div className="fixed bottom-5 left-1/2 z-[140] w-[calc(100%-40px)] max-w-[360px] -translate-x-1/2 rounded-full bg-[#FFFCF7] px-5 py-3 text-center text-[12px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B] shadow-[0_22px_70px_rgba(0,0,0,0.2)]">
      <button
        type="button"
        onClick={onClose}
        className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#1F3D2B] text-[15px] leading-none text-[#FAF7F0]"
        aria-label="Close coming soon message"
      >
        ×
      </button>
      {socialName} coming soon
    </div>
  )
}

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [showSubscribeToast, setShowSubscribeToast] = useState(false)
  const [comingSoonSocial, setComingSoonSocial] = useState('')

  function handleEmailSignup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email.trim()) {
      return
    }

    setShowSubscribeToast(true)
    setEmail('')

    window.setTimeout(() => {
      setShowSubscribeToast(false)
    }, 4200)
  }

  function handleSocialClick(name: string) {
    setComingSoonSocial(name)

    window.setTimeout(() => {
      setComingSoonSocial('')
    }, 2200)
  }

  return (
    <>
      {showSubscribeToast && (
        <FooterToast onClose={() => setShowSubscribeToast(false)} />
      )}

      {comingSoonSocial && (
        <ComingSoonMessage
          socialName={comingSoonSocial}
          onClose={() => setComingSoonSocial('')}
        />
      )}

      <footer className="relative overflow-hidden bg-[#1F3D2B] text-[#FAF7F0]">
        <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-[#D8C3A5]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#9A6B4F]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr_1fr_0.9fr]">
            <div>
              <Link to="/" aria-label="Ojasvi home" className="inline-block">
                <img
                  src={ojasviLogo}
                  alt="Ojasvi"
                  className="h-16 w-auto object-contain sm:h-20"
                />

                <span className="mt-4 block text-[11px] font-bold uppercase tracking-[0.32em] text-[#D8C3A5]">
                  Handmade Ojasvi LLC Goods
                </span>
              </Link>

              <p className="mt-7 max-w-xl text-[16px] leading-8 text-[#FAF7F0]/68">
                Durable Ojasvi LLC bags and accessories crafted for travel, daily use, and
                conscious living.
              </p>

              <form
                className="mt-10 flex max-w-xl items-center border-b border-[#FAF7F0]/70 pb-3"
                onSubmit={handleEmailSignup}
              >
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-[15px] text-[#FAF7F0] outline-none placeholder:text-[#FAF7F0]/38"
                />

                <button
                  type="submit"
                  className="flex items-center gap-3 text-[15px] font-semibold tracking-wide text-[#FAF7F0] transition hover:text-[#D8C3A5]"
                >
                  Sign Up
                  <span aria-hidden="true" className="text-2xl leading-none">
                    →
                  </span>
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#D8C3A5]">
                Support
              </h3>

              <nav className="mt-7 grid gap-5" aria-label="Footer support links">
                {supportLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="w-fit text-[15px] font-medium uppercase tracking-[0.08em] text-[#FAF7F0]/82 transition hover:text-[#D8C3A5]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#D8C3A5]">
                Ojasvi
              </h3>

              <nav className="mt-7 grid gap-5" aria-label="Footer company links">
                {companyLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="w-fit text-[15px] font-medium uppercase tracking-[0.08em] text-[#FAF7F0]/82 transition hover:text-[#D8C3A5]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#D8C3A5]">
                Social
              </h3>

              <nav className="mt-7 grid gap-5" aria-label="Footer social links">
                {socialLinks.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSocialClick(item)}
                    className="group flex w-fit items-center gap-4 text-left text-[15px] font-medium uppercase tracking-[0.08em] text-[#FAF7F0]/82 transition hover:text-[#D8C3A5]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FAF7F0]/18 text-[#FAF7F0]/75 transition group-hover:border-[#D8C3A5]/60 group-hover:text-[#D8C3A5]">
                      <SocialIcon name={item} />
                    </span>
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-5 border-t border-[#FAF7F0]/15 pt-7 text-[13px] font-medium text-[#FAF7F0]/55 lg:flex-row">
            <p>© {new Date().getFullYear()} OjasviLLC. All rights reserved.</p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span>Natural Ojasvi LLC fiber</span>
              <span>Artisan-made goods</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}