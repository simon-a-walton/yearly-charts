import type { Metadata } from 'next';
import { Anton } from 'next/font/google';
import './globals.css';
import rawData from './../lib/data/generated.json';
import { ColourMapProvider } from './context/ColourMapContext';
import { iPopulationByCountry, iYearlyData } from '@/lib/data/dataTypes';

const allCountries = Array.from(
  new Set(
    rawData.flatMap((year: iYearlyData) =>
      year.Countries.map((c: iPopulationByCountry) => c.Country)
    )
  )
);

const anton = Anton({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'World population by year',
  description: 'See the population changes over the years',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.className} antialiased`}>
        <ColourMapProvider countries={allCountries}>{children}</ColourMapProvider>
      </body>
    </html>
  );
}
