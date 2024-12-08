import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { Header } from '@/widgets';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Car dealer',
  description: 'Car dealer app description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main>{children}</main>
      </body>
    </html>
  );
}
