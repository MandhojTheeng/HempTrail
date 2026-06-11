export type ProductSection = {
  title: string
  content: string[]
}

export const categoryDescriptions: Record<string, string> = {
  Backpack:
    'A handmade hemp backpack designed for daily movement, travel, study, and everyday carry with natural texture and practical storage.',
  'Small Bag':
    'A compact handmade hemp bag made for carrying daily essentials with a light, easy, and natural everyday shape.',
  Hat:
    'A breathable handmade hemp hat made for casual styling, outdoor comfort, and everyday use.',
  'Fanny Pack':
    'A practical handmade hemp fanny pack designed for travel, festivals, walks, and hands-free daily carry.',
  'Crossbody Bag':
    'A woven handmade hemp crossbody bag designed for comfortable daily carry with a natural, textured finish.',
}

export const categoryDetails: Record<string, string[]> = {
  Backpack: [
    'Handmade hemp construction',
    'Spacious daily carry shape',
    'Useful front and main storage',
    'Comfortable shoulder carry',
    'Made for travel, work, study, and everyday use',
  ],
  'Small Bag': [
    'Compact everyday size',
    'Handmade hemp texture',
    'Easy lightweight carry',
    'Designed for phone, wallet, keys, and small essentials',
    'Simple practical silhouette',
  ],
  Hat: [
    'Soft handmade hemp finish',
    'Lightweight casual structure',
    'Comfortable everyday fit',
    'Easy to style with natural outfits',
    'Made for daily wear and outdoor use',
  ],
  'Fanny Pack': [
    'Hands-free carry design',
    'Adjustable waist or crossbody style',
    'Compact travel-friendly shape',
    'Secure daily storage',
    'Ideal for walking, travel, markets, and festivals',
  ],
  'Crossbody Bag': [
    'Comfortable crossbody carry',
    'Woven hemp texture',
    'Secure everyday compartment',
    'Minimal and functional shape',
    'Made for daily essentials',
  ],
}

export const careInstructions = [
  'Spot clean gently with mild soap',
  'Do not bleach',
  'Avoid machine washing',
  'Dry naturally in shade',
  'Store in a clean dry place',
]

export function getProductDescription(category: string) {
  return (
    categoryDescriptions[category] ||
    'A handmade hemp product designed with natural texture, daily function, and Nepali character.'
  )
}

export function getProductDetails(category: string) {
  return (
    categoryDetails[category] || [
      'Handmade hemp product',
      'Natural textured finish',
      'Practical everyday design',
      'Lightweight and functional',
      'Made for daily use',
    ]
  )
}

export function getProductSections(category: string): ProductSection[] {
  return [
    {
      title: 'Details',
      content: getProductDetails(category),
    },
    {
      title: 'Care',
      content: careInstructions,
    },
    {
      title: 'Shipping',
      content: [
        'Orders are prepared after confirmation',
        'Delivery time may depend on location',
        'Product availability may vary by stock',
        'For wholesale or bulk orders, contact HempTrail directly',
      ],
    },
  ]
}