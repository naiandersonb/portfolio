import type { Metadata } from 'next';
import { Inter, Bebas_Neue, Manrope } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/molecules';
import { AppTranslateProvider } from '@/contexts/AppTranslateContext';
import { ReactNode } from 'react';
import { Header } from '@/components/organisms/Header';

const inter = Inter({
  variable: '--inter',
  subsets: ['latin']
});

const bebasNeue = Bebas_Neue({
  variable: '--bebas-neue',
  subsets: ['latin'],
  weight: '400'
});

const manrope = Manrope({
  variable: '--manrope',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Naianderson Bruno',
  description: 'Desenvolvedor front-end pleno'
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${manrope.variable} ${inter.variable} ${bebasNeue.variable}`}
      >
        <AppTranslateProvider>
          <Header />
          {children}
          <Footer />
        </AppTranslateProvider>
      </body>
    </html>
  );
}
