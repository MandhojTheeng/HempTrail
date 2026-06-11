import { products } from '../../components/shop/shopData'

export type HeaderNavItem = {
  to: string
  label: string
}

export type SearchItem = {
  label: string
  category: string
  to: string
  image: string
  alt: string
  price: string
}

export const nav: HeaderNavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/our-story', label: 'Our Story' },
  { to: '/wholesale', label: 'Wholesale' },
  { to: '/contact', label: 'Contact' },
]

export const collectionLinks: HeaderNavItem[] = [
  { to: '/category/backpack', label: 'Backpack' },
  { to: '/category/small-bag', label: 'Small Bag' },
  { to: '/category/hat', label: 'Hat' },
  { to: '/category/fanny-pack', label: 'Fanny Pack' },
  { to: '/category/crossbody-bag', label: 'Crossbody Bag' },
]

export const searchItems: SearchItem[] = products.map((product) => ({
  label: product.name,
  category: product.category,
  to: `/product/${product.id}`,
  image: product.image,
  alt: product.alt,
  price: product.price,
}))