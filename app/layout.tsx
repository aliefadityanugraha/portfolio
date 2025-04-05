import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import {Poppins} from "next/font/google"

const FontPoppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500"]
})

export const metadata: Metadata = {
  title: "Portfolio | Alief Aditya Nugraha",
  description: "Portfolio | Alief Aditya Nugraha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FontPoppins.variable} antialiased`}>
          <div className="min-h-screen overflow-x-hidden bg-[#071C21] text-white">
              <div className="fixed top-0 left-0 z-10 w-full">
                  <Navbar></Navbar>
              </div>
              {children}
          </div>
      </body>
    </html>
  );
}
