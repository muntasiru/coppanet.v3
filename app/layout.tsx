import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./(static)/(components)/ui/footer";
import { Header } from "./(static)/(components)/ui/header";
import "./globals.css";
// import { Footer, Header } from "./(static)/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coppanet Ltd",
  description:
    "Creative To Plan Your Business Company. We develop mobile application platforms across different sectors including Healthcare, Travel and Tourism, Fintech and E-commerce solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// import Image from "next/image";
// import React from "react";

// import PrimaryBtn from "./(components)/ui/primary-btn";
// import Link from "next/link";

// components/Footer.js

// function Layout({ children }: any) {
//   return (
//     <div>
//       <Header />
//       {children}
//       <Footer />
//     </div>
//   );
// }

// export default Layout;
