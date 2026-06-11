import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type IconButtonProps = {
  label: string
  children: ReactNode
  onClick?: () => void
  to?: string
  className?: string
}

export function IconButton({ label, children, onClick, to, className = '' }: IconButtonProps) {
  const baseClass =
    'relative inline-flex h-10 w-10 items-center justify-center rounded-full text-[#1F3D2B] transition duration-200 hover:bg-[#1F3D2B]/8'

  if (to) {
    return (
      <NavLink aria-label={label} to={to} className={`${baseClass} ${className}`}>
        {children}
      </NavLink>
    )
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`${baseClass} ${className}`}
    >
      {children}
    </button>
  )
}