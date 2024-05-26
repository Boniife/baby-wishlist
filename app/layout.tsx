import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/main.scss';
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
    return (
      <html lang="en">
        <body className={cn(inter.className)}>
          <Wrap>
            {children}
          </Wrap>
        </body>
      </html>
    );
  }
