import { AbsoluteImg } from "@/components/common";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { FC } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MyPay",
  description: "Generated by Baitul Hikmah",
};

const RootLayout: FC<Readonly<IChildren>> = ({ children }) => (
  <html lang="en">
    <body className={poppins.className}>
      <div className="w-full h-full bg-[#00020D] text-white min-h-screen relative overflow-hidden">
        <AbsoluteImg
          img="/main-bg.png"
          imgClass="w-full h-[850px]"
          className="top-0 left-0"
        />
        <div className="max-w-[1435px] mx-auto px-3.5 md:px-6 lg:px-7 relative z-50">
          {children}
        </div>
      </div>
    </body>
  </html>
);

export default RootLayout;
