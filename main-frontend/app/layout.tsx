import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sergio Jáuregui | Desarrollo de Soluciones Tecnológicas',
  description: 'Desarrollo de soluciones tecnológicas que combinan ingeniería, automatización y estrategia para generar valor real.',
  keywords: ['desarrollo web', 'automatización', 'arquitectura escalable', 'integración de sistemas', 'full stack'],
  authors: [{ name: 'Sergio Jáuregui' }],
  openGraph: {
    title: 'Sergio Jáuregui | Desarrollo de Soluciones Tecnológicas',
    description: 'Desarrollo de soluciones tecnológicas que combinan ingeniería, automatización y estrategia.',
    url: 'https://sergioja.com',
    siteName: 'Sergio Jáuregui',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
