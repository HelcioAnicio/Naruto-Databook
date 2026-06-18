import type { Metadata } from 'next';
import { Geist, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
  weight: ['100', '300', '500', '800'],
});

export const metadata: Metadata = {
  title: 'Universo Marvel',
  description: 'Tudo do universo Marvel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='pt-BR'
      className={`${geistSans.variable} ${barlowCondensed.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col bg-background text-foreground uppercase font-barlow text-4xl font-bold'>
        {children}
      </body>
    </html>
  );
}
