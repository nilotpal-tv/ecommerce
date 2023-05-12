import { Outfit, Open_Sans } from 'next/font/google';

export const outfitBold = Outfit({
  subsets: ['latin-ext', 'latin'],
  weight: ['700'],
});

export const outfitSemiBold = Outfit({
  subsets: ['latin-ext', 'latin'],
  weight: ['600'],
});

export const outfitMedium = Outfit({
  subsets: ['latin-ext', 'latin'],
  weight: ['500'],
});

export const outfitNormal = Outfit({
  subsets: ['latin-ext', 'latin'],
  weight: ['400'],
});

export const outfitLight = Outfit({
  subsets: ['latin-ext', 'latin'],
  weight: ['300'],
});

export const openSansBold = Open_Sans({
  subsets: ['cyrillic', 'cyrillic-ext', 'vietnamese'],
  weight: '700',
});

export const openSansSemiBold = Open_Sans({
  subsets: ['cyrillic', 'cyrillic-ext', 'vietnamese'],
  weight: '600',
});

export const openSansMedium = Open_Sans({
  subsets: ['cyrillic', 'cyrillic-ext', 'vietnamese'],
  weight: '500',
});

export const openSansNormal = Open_Sans({
  subsets: ['cyrillic', 'cyrillic-ext', 'vietnamese'],
  weight: '400',
});

export const openSansLight = Open_Sans({
  subsets: ['cyrillic', 'cyrillic-ext', 'vietnamese'],
  weight: '300',
});
