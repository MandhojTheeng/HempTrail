import product3DOne from '../../assets/3D/1.png'
import product3DTwo from '../../assets/3D/2.png'
import product3DThree from '../../assets/3D/3.png'
import product3DFour from '../../assets/3D/4.png'
import product3DFive from '../../assets/3D/5.png'
import product3DSix from '../../assets/3D/6.png'
import product3DSeven from '../../assets/3D/7.png'
import product3DEight from '../../assets/3D/8.png'
import product3DNine from '../../assets/3D/9.png'
import product3DEleven from '../../assets/3D/11.png'
import product3DTwelve from '../../assets/3D/12.png'
import product3DThirteen from '../../assets/3D/13.png'
import product3DFourteen from '../../assets/3D/14.png'
import product3DFifteen from '../../assets/3D/15.png'
import product3DSixteen from '../../assets/3D/16.png'

import type { PriceRange, Product } from './shopTypes'

export const categories = [
  'All',
  'Backpack',
  'Small Bag',
  'Hat',
  'Fanny Pack',
  'Crossbody Bag',
]

export const priceRanges: PriceRange[] = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $ 2,000', min: 0, max: 1999 },
  { label: '$ 2,000 - $ 3,000', min: 2000, max: 3000 },
  { label: '$ 3,000 - $ 5,000', min: 3001, max: 5000 },
  { label: 'Above $ 5,000', min: 5001, max: Infinity },
]

export const products: Product[] = [
  {
    id: 'woven-hemp-crossbody-bag',
    name: 'Woven Hemp Crossbody Bag',
    category: 'Crossbody Bag',
    price: '$ 2,900',
    priceValue: 2900,
    image: product3DOne,
    alt: 'Woven hemp crossbody bag',
    tag: 'Featured',
  },
  {
    id: 'red-hemp-fanny-pack',
    name: 'Red Hemp Fanny Pack',
    category: 'Fanny Pack',
    price: '$ 2,400',
    priceValue: 2400,
    image: product3DTwo,
    alt: 'Red hemp fanny pack',
  },
  {
    id: 'classic-cream-hemp-backpack',
    name: 'Classic Cream Hemp Backpack',
    category: 'Backpack',
    price: '$ 4,800',
    priceValue: 4800,
    image: product3DThree,
    alt: 'Classic cream hemp backpack',
    tag: 'New',
  },
  {
    id: 'striped-daily-hemp-bag',
    name: 'Striped Daily Hemp Bag',
    category: 'Small Bag',
    price: '$ 2,200',
    priceValue: 2200,
    image: product3DFour,
    alt: 'Striped daily hemp bag',
  },
  {
    id: 'green-travel-fanny-pack',
    name: 'Green Travel Fanny Pack',
    category: 'Fanny Pack',
    price: '$ 2,600',
    priceValue: 2600,
    image: product3DFive,
    alt: 'Green travel hemp fanny pack',
  },
  {
    id: 'minimal-hemp-side-bag',
    name: 'Minimal Hemp Side Bag',
    category: 'Small Bag',
    price: '$ 2,100',
    priceValue: 2100,
    image: product3DSix,
    alt: 'Minimal hemp side bag',
  },
  {
    id: 'blue-handmade-hemp-hat',
    name: 'Blue Handmade Hemp Hat',
    category: 'Hat',
    price: '$ 1,600',
    priceValue: 1600,
    image: product3DSeven,
    alt: 'Blue handmade hemp hat',
  },
  {
    id: 'natural-canvas-hemp-backpack',
    name: 'Natural Canvas Hemp Backpack',
    category: 'Backpack',
    price: '$ 5,200',
    priceValue: 5200,
    image: product3DEight,
    alt: 'Natural canvas hemp backpack',
  },
  {
    id: 'patchwork-hemp-small-bag',
    name: 'Patchwork Hemp Small Bag',
    category: 'Small Bag',
    price: '$ 2,750',
    priceValue: 2750,
    image: product3DNine,
    alt: 'Patchwork hemp small bag',
  },
  {
    id: 'charcoal-everyday-backpack',
    name: 'Charcoal Everyday Backpack',
    category: 'Backpack',
    price: '$ 4,600',
    priceValue: 4600,
    image: product3DEleven,
    alt: 'Charcoal everyday hemp backpack',
  },
  {
    id: 'black-hemp-backpack',
    name: 'Black Hemp Backpack',
    category: 'Backpack',
    price: '$ 5,400',
    priceValue: 5400,
    image: product3DTwelve,
    alt: 'Black hemp backpack',
  },
  {
    id: 'cream-pocket-hemp-backpack',
    name: 'Cream Pocket Hemp Backpack',
    category: 'Backpack',
    price: '$ 4,950',
    priceValue: 4950,
    image: product3DThirteen,
    alt: 'Cream pocket hemp backpack',
  },
  {
    id: 'compact-cream-hemp-backpack',
    name: 'Compact Cream Hemp Backpack',
    category: 'Backpack',
    price: '$ 4,400',
    priceValue: 4400,
    image: product3DFourteen,
    alt: 'Compact cream hemp backpack',
  },
  {
    id: 'indigo-hemp-hat',
    name: 'Indigo Hemp Hat',
    category: 'Hat',
    price: '$ 1,700',
    priceValue: 1700,
    image: product3DFifteen,
    alt: 'Indigo hemp hat',
  },
  {
    id: 'woven-stripe-hemp-hat',
    name: 'Woven Stripe Hemp Hat',
    category: 'Hat',
    price: '$ 1,850',
    priceValue: 1850,
    image: product3DSixteen,
    alt: 'Woven stripe hemp hat',
  },
]