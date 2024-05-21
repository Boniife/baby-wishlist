import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/main.scss"
import Cart from "./Cart";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Wishlist",
  description: "Baby list",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <div className= 'layout-bg'>
        <div className='layout-head'>
            Baby Anyanwu Check out List
        </div>
            {children}
        </div>   
    </main>
  );
}
