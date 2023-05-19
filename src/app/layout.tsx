import { outfitGeneric } from '@/lib/fonts';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pom Pom E-Commerce',
  description: 'An E-Commerce Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfitGeneric.className}>{children}</body>
    </html>
  );
}
