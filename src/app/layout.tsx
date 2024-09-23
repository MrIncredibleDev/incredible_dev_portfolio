import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import '@/styles/globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Incredible Dev',
  description: 'Personal Portfolio of IncredibleDev'
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
        </ThemeProvider>
      </body>
    </html>
  );
}
