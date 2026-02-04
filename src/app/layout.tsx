import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { BackgroundShapes } from '@/components/layout/background-shapes';

export const metadata: Metadata = {
  title: 'ClipCut Membership',
  description: 'Pașaportul tău pentru îngrijire premium. Accesează o rețea de frizerii de top cu un singur abonament.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <BackgroundShapes />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
