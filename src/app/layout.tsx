import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';

import '@/styles/globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const generalFont = Quicksand({ subsets: ['latin'] });

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
      <body className={generalFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
