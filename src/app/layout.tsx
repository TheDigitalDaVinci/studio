import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Background3D } from '@/components/layout/background-3d';
import { CustomCursor } from '@/components/layout/custom-cursor';
import { SiteLoader } from '@/components/layout/loader';


export const metadata: Metadata = {
  title: 'The Digital Da Vinci',
  description: 'Portfolio of a Digital Artisan',
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Poppins:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col bg-background')}>
        <SiteLoader />
        <CustomCursor />
        <Background3D />
        <Header />
        <main className="flex-grow z-10">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
