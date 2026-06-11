const features = [
  {
    label: 'Made in Nepal',
    title: 'Artisan crafted',
  },
  {
    label: 'Natural Fiber',
    title: 'Hemp material',
  },
  {
    label: 'Everyday Carry',
    title: 'Bags and accessories',
  },
]

export function HomeFeatureStrip() {
  return (
    <section className="border-y border-[#1F3D2B]/10 bg-[#FAF7F0]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-[#1F3D2B]/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-10">
        {features.map((feature) => (
          <div key={feature.label} className="py-6 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#9A6B4F]">
              {feature.label}
            </p>

            <p className="mt-2 font-serif text-2xl font-bold text-[#1F3D2B]">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}