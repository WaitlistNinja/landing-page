"use client";

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Lines from "@/src/components/Lines";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines/>
          <Header/>
          <ToasterContext />
          {children}
          <Footer/>
          <ScrollToTop/>
        </ThemeProvider>
      </body>
    </html>
  );
}
