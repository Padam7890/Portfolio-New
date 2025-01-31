// app/layout.tsx (Root Layout)
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";
import React from "react";
import Sidebar from "@/components/__Server/Sidebar";
import NavbarComponent from "@/components/HomePage/Navbar";
// Apply global font
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

//meta tag
export const metadata: Metadata = {
  title: "Padam Thapa",
  description:
    "Empowering developers with cutting-edge web development solutions, tutorials, and resources.",
  keywords: "web development, tutorials, resources, Padam Thapa, Portfolio",
  authors: {
    name: "Padam Thapa",
    url: "https://padamthapa.com",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} bg-black  `}>
        <main>
          <Sidebar />
          <div className="main-content">
            <NavbarComponent />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
