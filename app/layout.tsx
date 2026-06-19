import type { Metadata } from "next";
import { Geist, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  preload: true,
  display: "swap",
  weight: ["100", "300", "500", "800"],
});

export const metadata: Metadata = {
  title: "Universo de Naruto",
  description: "Tudo do universo Marvel",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground font-barlow flex min-h-screen flex-col">
        {children}
      </body>
    </html>
  );
}
