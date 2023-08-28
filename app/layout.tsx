"use client";
import React, {useEffect} from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Design from "./components/Design";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check if running in a browser environment before initializing AOS
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        once: false,
      });
    }
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header />
        {children}
        
        {/* <Design /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
