import React from "react";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";
import Contexts from "@/context/context";

const kumbh_Sans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Product Page",
  description: "E-commerce Product Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body className={kumbh_Sans.className}>
        <Contexts>
          <Navbar />
          {children}
        </Contexts>
      </body>
    </html>
  );
}
