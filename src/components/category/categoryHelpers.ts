import { categories } from '../shop/shopData'

export const categoryDescriptions: Record<string, string> = {
  Backpack:
    'Handmade hemp backpacks crafted for travel, study, work, and everyday movement.',
  'Small Bag':
    'Compact hemp bags made for daily essentials, light carry, and simple everyday use.',
  Hat: 'Natural hemp hats with earthy handmade texture and relaxed everyday comfort.',
  'Fanny Pack':
    'Hands-free hemp waist bags designed for travel, walking, festivals, and daily movement.',
  'Crossbody Bag':
    'Easy-carry hemp crossbody bags with practical size, secure storage, and natural texture.',
}

export function createCategorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, '-')
}

export function normalizeSlug(value: string | undefined) {
  return value?.trim().toLowerCase() || 'backpack'
}

export function getCategoryFromSlug(slug: string) {
  return (
    categories.find((category) => createCategorySlug(category) === slug && category !== 'All') ||
    categories.find((category) => category !== 'All') ||
    'Backpack'
  )
}