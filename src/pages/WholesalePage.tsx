import type { FormEvent } from 'react'
import { useState } from 'react'

import { WholesaleHero } from '../components/wholesale/WholesaleHero'
import { WholesaleInquirySection } from '../components/wholesale/WholesaleInquirySection'
import { WholesaleProcess } from '../components/wholesale/WholesaleProcess'
import { WholesaleProductRange } from '../components/wholesale/WholesaleProductRange'
import { WholesaleSuccessToast } from '../components/wholesale/WholesaleSuccessToast'

export default function WholesalePage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [formResetKey, setFormResetKey] = useState(0)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setShowSuccess(true)
    setFormResetKey((value) => value + 1)

    window.setTimeout(() => {
      setShowSuccess(false)
    }, 4200)
  }

  return (
    <main className="overflow-hidden bg-[#FAF7F0] text-[#222222]">
      {showSuccess && <WholesaleSuccessToast onClose={() => setShowSuccess(false)} />}

      <WholesaleHero />
      <WholesaleProcess />
      <WholesaleProductRange />
      <WholesaleInquirySection key={formResetKey} onSubmit={handleSubmit} />
    </main>
  )
}