import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "World population by year",
  description: "See the population changes over the years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
