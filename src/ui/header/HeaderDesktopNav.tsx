import { NavLink } from 'react-router-dom'
import type { HeaderNavItem } from './HeaderData'

type HeaderDesktopNavProps = {
  items: HeaderNavItem[]
  ariaLabel: string
}

export function HeaderDesktopNav({ items, ariaLabel }: HeaderDesktopNavProps) {
  return (
    <nav className="hidden items-center gap-7 lg:flex" aria-label={ariaLabel}>
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            [
              'relative py-2 text-[13px] font-bold uppercase tracking-[0.16em] transition hover:text-[#1F3D2B]',
              isActive ? 'text-[#1F3D2B]' : 'text-[#222222]/70',
            ].join(' ')
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}