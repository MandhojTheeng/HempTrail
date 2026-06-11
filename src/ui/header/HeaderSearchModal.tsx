import { Link } from 'react-router-dom'
import type { SearchItem } from './HeaderData'

type HeaderSearchModalProps = {
  searchQuery: string
  filteredSearchItems: SearchItem[]
  onQueryChange: (value: string) => void
  onClose: () => void
}

type ProductSearchItem = SearchItem & {
  image?: string
  alt?: string
  price?: string
}

export function HeaderSearchModal({
  searchQuery,
  filteredSearchItems,
  onQueryChange,
  onClose,
}: HeaderSearchModalProps) {
  const hasSearchQuery = searchQuery.trim().length > 0
  const searchItems = filteredSearchItems as ProductSearchItem[]

  return (
    <div className="fixed inset-0 z-[100] bg-[#1F3D2B]/45 backdrop-blur-md">
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default"
      />

      <div className="relative w-full border-b border-[#1F3D2B]/10 bg-white shadow-[0_24px_80px_rgba(31,61,43,0.22)]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-4 sm:px-6 lg:px-10 lg:py-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#1F3D2B]/70">
              Search Products
            </p>

            <button
              type="button"
              aria-label="Close search"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3D2B]/8 text-[20px] leading-none text-[#1F3D2B] transition hover:bg-[#1F3D2B] hover:text-white"
            >
              ×
            </button>
          </div>

          <div className="flex w-full items-center gap-3 rounded-full border border-[#1F3D2B]/12 bg-white px-4 py-3 shadow-[0_14px_50px_rgba(31,61,43,0.08)] sm:gap-4 sm:px-6 sm:py-4">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="shrink-0 text-[#1F3D2B]"
            >
              <path
                d="M10.8 18.1C14.8317 18.1 18.1 14.8317 18.1 10.8C18.1 6.76832 14.8317 3.5 10.8 3.5C6.76832 3.5 3.5 6.76832 3.5 10.8C3.5 14.8317 6.76832 18.1 10.8 18.1Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M20.5 20.5L16.3 16.3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <input
              autoFocus
              value={searchQuery}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search product name..."
              className="min-w-0 flex-1 bg-transparent text-[17px] font-semibold text-[#1F3D2B] outline-none placeholder:text-[#1F3D2B]/35 sm:text-[22px] lg:text-[28px]"
            />

            {hasSearchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => onQueryChange('')}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F3D2B]/8 text-[18px] leading-none text-[#1F3D2B] transition hover:bg-[#1F3D2B] hover:text-white"
              >
                ×
              </button>
            )}
          </div>

          <div className="mt-5 max-h-[68vh] overflow-y-auto pb-2 [scrollbar-color:#1F3D2B_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#1F3D2B]">
            {!hasSearchQuery ? (
              <div className="rounded-[24px] border border-[#1F3D2B]/10 bg-white px-5 py-8 text-center sm:py-10">
                <p className="font-serif text-[30px] font-bold leading-none tracking-[-0.05em] text-[#1F3D2B] sm:text-[42px]">
                  Search for a product.
                </p>

                <p className="mx-auto mt-3 max-w-md text-[14px] leading-6 text-[#1F3D2B]/58">
                  Type the product name and matching items will appear here.
                </p>
              </div>
            ) : searchItems.length > 0 ? (
              <div className="grid gap-3 sm:gap-4">
                {searchItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={onClose}
                    className="group grid grid-cols-[82px_1fr_auto] items-center gap-4 rounded-[24px] border border-[#1F3D2B]/10 bg-white p-3 transition duration-300 hover:border-[#1F3D2B]/25 hover:shadow-[0_18px_60px_rgba(31,61,43,0.12)] sm:grid-cols-[110px_1fr_auto] sm:gap-5 sm:rounded-[30px] sm:p-4"
                  >
                    <span className="flex h-[82px] w-[82px] items-center justify-center rounded-[20px] bg-[#1F3D2B]/5 sm:h-[110px] sm:w-[110px] sm:rounded-[26px]">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.alt || item.label}
                          className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-110"
                        />
                      )}
                    </span>

                    <span className="min-w-0">
                      <span className="block truncate font-serif text-[24px] font-bold leading-none tracking-[-0.05em] text-[#1F3D2B] sm:text-[34px] lg:text-[40px]">
                        {item.label}
                      </span>

                      {item.price && (
                        <span className="mt-2 block text-[12px] font-bold uppercase tracking-[0.08em] text-[#1F3D2B]/55">
                          {item.price}
                        </span>
                      )}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3D2B] text-white transition group-hover:scale-105 sm:h-12 sm:w-12">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-[24px] border border-[#1F3D2B]/10 bg-white px-5 py-10 text-center">
                <p className="font-serif text-[30px] font-bold leading-none tracking-[-0.05em] text-[#1F3D2B] sm:text-[42px]">
                  Sorry, no product found.
                </p>

                <p className="mx-auto mt-3 max-w-md text-[14px] leading-6 text-[#1F3D2B]/58">
                  Try another product name or browse the full collection.
                </p>

                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-6 inline-flex rounded-full bg-[#1F3D2B] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#173020]"
                >
                  View Shop
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}