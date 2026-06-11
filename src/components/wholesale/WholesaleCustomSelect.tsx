import { useState } from 'react'

type CustomSelectProps = {
  label: string
  placeholder: string
  options: string[]
  name: string
}

export function WholesaleCustomSelect({
  label,
  placeholder,
  options,
  name,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState('')

  return (
    <div className="relative">
      <label className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#1F3D2B]">
        {label}
      </label>

      <input type="hidden" name={name} value={selected} />

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={[
          'flex w-full items-center justify-between border bg-[#FAF7F0] px-4 py-4 text-left text-sm outline-none transition',
          open
            ? 'border-[#1F3D2B] ring-2 ring-[#1F3D2B]/12'
            : 'border-[#1F3D2B]/12 hover:border-[#1F3D2B]/35',
          selected ? 'text-[#222222]' : 'text-[#222222]/45',
        ].join(' ')}
      >
        <span>{selected || placeholder}</span>

        <span
          className={[
            'text-[#1F3D2B] transition duration-300',
            open ? 'rotate-180' : '',
          ].join(' ')}
        >
          ↓
        </span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden border border-[#1F3D2B]/15 bg-[#FAF7F0] shadow-[0_18px_55px_rgba(34,34,34,0.14)]">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option)
                setOpen(false)
              }}
              className={[
                'block w-full px-4 py-3 text-left text-sm transition duration-200',
                selected === option
                  ? 'bg-[#1F3D2B] text-[#FAF7F0]'
                  : 'text-[#222222] hover:bg-[#1F3D2B] hover:text-[#FAF7F0]',
              ].join(' ')}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}