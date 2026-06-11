import { NavLink } from 'react-router-dom'
import { collectionLinks } from './HeaderData'

export function HeaderCollectionsNav() {
  return (
    <div className="hidden border-b border-[#1F3D2B]/10 bg-[#FAF7F0] lg:block">
      <nav
        aria-label="Collection navigation"
        className="mx-auto flex max-w-[1440px] items-center justify-center gap-10 px-4 py-3 sm:px-6 lg:px-10"
      >
        {collectionLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                'text-[12px] font-bold uppercase tracking-[0.18em] transition hover:text-[#1F3D2B]',
                isActive ? 'text-[#1F3D2B]' : 'text-[#222222]/58',
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}