import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-albert',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'dBA – DB & Associados | Consultoria em Moçambique',
  description: 'Consultoria fiscal, contabilidade, avaliação de empresas e ESG em Moçambique. Legado de Big 4, excelência local.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={albertSans.variable}>
      <body>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
