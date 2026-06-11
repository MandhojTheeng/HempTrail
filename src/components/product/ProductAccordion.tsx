import type { ProductSection } from './productContent'

type ProductAccordionProps = {
  sections: ProductSection[]
  openSection: string
  onOpenSectionChange: (section: string) => void
}

export function ProductAccordion({
  sections,
  openSection,
  onOpenSectionChange,
}: ProductAccordionProps) {
  return (
    <div className="mt-10">
      {sections.map((section) => {
        const isOpen = openSection === section.title

        return (
          <div key={section.title} className="border-t border-[#1F3D2B]/10">
            <button
              type="button"
              onClick={() => onOpenSectionChange(isOpen ? '' : section.title)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B]">
                {section.title}
              </span>

              <span className="text-xl leading-none text-[#1F3D2B]">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen && (
              <ul className="pb-6 text-[14px] leading-8 text-[#222222]/62">
                {section.content.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[13px] h-1 w-1 rounded-full bg-[#9A6B4F]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}

      <div className="border-t border-[#1F3D2B]/10 pt-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9A6B4F]">
          Origin
        </p>

        <p className="mt-2 text-[14px] leading-7 text-[#222222]/58">
          Handmade in Nepal using natural hemp material and practical everyday
          construction.
        </p>
      </div>
    </div>
  )
}