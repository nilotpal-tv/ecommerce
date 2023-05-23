import Navbar from '@/components/Navbar';
import SessionProvider from '@/components/SessionProvider';
import { outfitGeneric } from '@/lib/fonts';
import { type Metadata } from 'next';
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
   
    
      <body className={outfitGeneric.className}>
        <SessionProvider>
        <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
