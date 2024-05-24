import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/main.scss';
import Navbar from './Navbar/page';
import { cn } from './lib/utils';
import Wrap from './Wrap';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Baby Anyanwu',
  description: 'Baby Anyanwu Wish-list',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headers = new Headers();
  if (typeof window === 'undefined') {
    const headersFromRequest = headers; 
    const showNavbar = headersFromRequest.get('x-show-navbar') === 'true';

    return (
      <html lang="en">
        <body className={cn(inter.className)}>
          <Wrap>
            {showNavbar && <Navbar />}
            {children}
          </Wrap>
        </body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <body className={cn(inter.className)}>
          <Wrap>
            <Navbar />
            {children}
          </Wrap>
        </body>
      </html>
    );
  }
}
