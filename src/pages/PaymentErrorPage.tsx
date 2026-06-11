import { Link } from 'react-router-dom'

export default function PaymentErrorPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#222222]">
      <section className="mx-auto flex min-h-[calc(100vh-220px)] max-w-[1100px] items-center justify-center px-5 py-20 sm:px-6 lg:px-10">
        <div className="w-full max-w-2xl border border-[#1F3D2B]/10 bg-white/60 p-8 text-center shadow-[0_30px_90px_rgba(34,34,34,0.06)] sm:p-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.34em] text-[#9A6B4F]">
            Payment Error
          </p>

          <h1 className="mt-5 font-serif text-[46px] font-bold leading-[0.95] tracking-[-0.055em] text-[#1F3D2B] sm:text-[64px]">
            Payment could not be completed.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-8 text-[#222222]/65">
            We could not process your online payment at the moment. This may be due to
            a temporary network issue, slow connection, or payment gateway timeout.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/checkout"
              className="inline-flex items-center justify-center bg-[#1F3D2B] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.22em] text-[#FAF7F0] transition hover:bg-[#173020]"
            >
              Try Again
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
    </main>
  )
}