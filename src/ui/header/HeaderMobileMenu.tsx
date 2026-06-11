import { NavLink } from 'react-router-dom'
import { collectionLinks, nav } from './HeaderData'

type HeaderMobileMenuProps = {
  cartCount: number
  onClose: () => void
}

export function HeaderMobileMenu({ cartCount, onClose }: HeaderMobileMenuProps) {
  return (
    <div className="border-b border-[#1F3D2B]/10 bg-[#FAF7F0] px-4 py-5 lg:hidden">
      <nav className="grid gap-1" aria-label="Mobile navigation">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={onClose}
            className={({ isActive }) =>
              [
                'flex items-center justify-between border-b border-[#1F3D2B]/10 py-3 text-[13px] font-bold uppercase tracking-[0.16em] transition',
                isActive ? 'text-[#1F3D2B]' : 'text-[#222222]/75 hover:text-[#1F3D2B]',
              ].join(' ')
            }
          >
            <span>{item.label}</span>
            <span>→</span>
          </NavLink>
        ))}

        <div className="mt-6">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
            Shop collection
          </p>

          <div className="grid gap-2">
            {collectionLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={({ isActive }) =>
                  [
                    'border border-[#1F3D2B]/10 bg-[#F1E7D7]/70 px-4 py-3 text-sm font-bold text-[#1F3D2B] transition hover:bg-[#E7D7C1]',
                    isActive ? 'border-[#1F3D2B]/30 bg-[#E7D7C1]' : '',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <NavLink
          to="/cart"
          onClick={onClose}
          className={({ isActive }) =>
            [
              'mt-5 flex items-center justify-between border border-[#1F3D2B]/15 px-4 py-3 text-[13px] font-bold uppercase tracking-[0.16em] transition',
              isActive
                ? 'bg-[#1F3D2B] text-[#FAF7F0]'
                : 'text-[#1F3D2B] hover:border-[#1F3D2B]',
            ].join(' ')
          }
        >
          <span>Cart</span>
          <span>
            {cartCount} item{cartCount === 1 ? '' : 's'}
          </span>
        </NavLink>
      </nav>
    </div>
  )
}