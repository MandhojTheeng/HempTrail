type WholesaleSuccessToastProps = {
  onClose: () => void
}

export function WholesaleSuccessToast({ onClose }: WholesaleSuccessToastProps) {
  return (
    <div className="fixed right-5 top-5 z-[120] w-[calc(100%-40px)] max-w-[420px] sm:right-8 sm:top-8">
      <div className="overflow-hidden rounded-[22px] bg-[#FFFCF7] shadow-[0_24px_80px_rgba(34,34,34,0.16)]">
        <div className="flex items-stretch">
          <div className="w-1.5 bg-[#1F3D2B]" />

          <div className="flex flex-1 items-start gap-4 p-5">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1E7D7] text-[#1F3D2B]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12.5L9.2 16.7L19 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A6B4F]">
                    Sent Successfully
                  </p>

                  <h3 className="mt-1.5 font-serif text-[25px] font-bold leading-[0.95] tracking-[-0.045em] text-[#1F3D2B]">
                    Inquiry received.
                  </h3>
                </div>

                <button
                  type="button"
                  aria-label="Close notification"
                  onClick={onClose}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[18px] leading-none text-[#1F3D2B]/50 transition hover:bg-[#F1E7D7] hover:text-[#1F3D2B]"
                >
                  ×
                </button>
              </div>

              <p className="mt-3 text-[14px] leading-6 text-[#222222]/58">
                Thank you. Hemp will review your wholesale request and contact you
                shortly.
              </p>

              <div className="mt-4 h-px w-full bg-[#1F3D2B]/8" />

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1F3D2B]/45">
                Hemp Wholesale
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}