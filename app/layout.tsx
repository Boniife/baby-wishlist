import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";
import { cn } from "./lib/utils";
import "./styles/main.scss"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Wishlist",
  description: "Baby list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
