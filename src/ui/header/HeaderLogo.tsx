import { Link } from 'react-router-dom'

export function HeaderLogo() {
  return (
    <Link to="/" aria-label="HempTrail home" className="text-center">
      <span className="block font-serif text-[34px] font-bold leading-none tracking-[-0.055em] text-[#1F3D2B] sm:text-[40px]">
        HempTrail
      </span>
      <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.32em] text-[#9A6B4F] sm:block">
        Handmade Hemp Goods
      </span>
    </Link>
  )
}