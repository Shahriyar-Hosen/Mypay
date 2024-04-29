import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyPay",
  description: "Generated by Baitul Hikmah",
};

const RootLayout: FC<Readonly<IChildren>> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <div className="w-full h-full bg-[#00020D] text-white min-h-screen">
        <div className="max-w-[1435px] mx-auto px-2.5 md:px-6 lg:px-7 relative overflow-hidden">
          {children}
          <Footer />
        </div>
      </div>
    </body>
  </html>
);

export default RootLayout;
