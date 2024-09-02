import type { Metadata } from 'next';
import './globals.css';
import { interFont, Aeonik } from '@/utils/fonts';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'DeventiaTech Limited',
  description: 'DeventiaTech Pvt Limited - Scripting Future Technologies',
  icons: {
    icon: '../public/favicon.ico',
    apple: 'apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="../public/favicon.ico" sizes="any" />
        <title>DevEntia Tech</title>
      </Head> */}
      <body className={`tracking-wider ${Aeonik.className}`}>{children}</body>
    </html>
  );
}
