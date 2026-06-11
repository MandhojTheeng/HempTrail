import { IconButton } from './IconButton'

type HeaderActionsProps = {
  cartCount: number
  onSearchOpen: () => void
}

export function HeaderActions({ cartCount, onSearchOpen }: HeaderActionsProps) {
  return (
    <div className="ml-0 flex items-center gap-1 sm:ml-4">
      <IconButton label="Search" onClick={onSearchOpen}>
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M10.8 18.1C14.8317 18.1 18.1 14.8317 18.1 10.8C18.1 6.76832 14.8317 3.5 10.8 3.5C6.76832 3.5 3.5 6.76832 3.5 10.8C3.5 14.8317 6.76832 18.1 10.8 18.1Z"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M20.5 20.5L16.3 16.3"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </IconButton>

      <IconButton label="Account" to="/account" className="hidden sm:inline-flex">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 21C20 17.134 16.4183 14 12 14C7.58172 14 4 17.134 4 21"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="currentColor"
            strokeWidth="1.75"
          />
        </svg>
      </IconButton>

      <IconButton label={`Cart with ${cartCount} items`} to="/cart">
        <div className="relative inline-flex items-center justify-center">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 7H21L19.5 14.5H8.5L6 7Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
            <path
              d="M6 7L5 3H2"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <path d="M9 20H9.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M17 20H17.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>

          {cartCount > 0 && (
            <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#9A6B4F] px-1.5 text-[11px] font-black leading-none text-white ring-2 ring-[#FAF7F0]">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </div>
      </IconButton>
    </div>
  )
}