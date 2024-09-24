import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import '@/styles/globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lachlan Pelletier',
  description: 'Personal Portfolio of Lachlan Pelletier'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
