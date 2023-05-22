import { Outfit } from 'next/font/google'

export const outfitGeneric = Outfit({
  subsets: ['latin-ext', 'latin']
})

export const outfitBold = Outfit({
  subsets: ['latin-ext', 'latin'],
  weight: ['700']
})

export const outfitSemiBold = Outfit({
  subsets: ['latin-ext', 'latin'],
  weight: ['600']
})

export const outfitMedium = Outfit({
  subsets: ['latin-ext', 'latin'],
  weight: ['500']
})

export const outfitNormal = Outfit({
  subsets: ['latin-ext', 'latin'],
  weight: ['400']
})

export const outfitLight = Outfit({
  subsets: ['latin-ext', 'latin'],
  weight: ['300']
})
