import type { Metadata } from 'next';
import './globals.css';
import { interFont, Aeonik } from '@/utils/fonts';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'DeventiaTech Limited',
  description: 'DeventiaTech Pvt Limited - Scripting Future Technologies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logoImg.ico" sizes="any" />
      </Head>
      <body className={`tracking-wider ${Aeonik.className}`}>{children}</body>
    </html>
  );
}
