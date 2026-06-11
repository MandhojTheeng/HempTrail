export function HeaderTopBar() {
  return (
    <div className="border-b border-[#1F3D2B]/10 bg-[#1F3D2B] text-[#FAF7F0]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] sm:px-6 lg:px-10">
        <span>Handmade in Nepal</span>
        <span className="hidden md:inline">Natural hemp bags and everyday accessories</span>
        <span className="hidden sm:inline">Kathmandu, Nepal</span>
      </div>
    </div>
  )
}