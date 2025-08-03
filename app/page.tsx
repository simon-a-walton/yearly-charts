'use client';

import { useCallback, useEffect, useState } from 'react';
import { dataset } from '@/lib/data/dataTypes';
import { BarChart } from './_components/BarChart';
import { getColourByIndex } from '@/lib/colours';
import { Pagination } from './_components/Pagination';

export interface iColourMap {
  [key: string]: string;
}

export default function Home() {
  const [index, setIndex] = useState(0);
  const yearData = dataset[index];

  const nextYear = useCallback(() => {
    setIndex((i) => (i + 1 < dataset.length ? i + 1 : i));
  }, []);

  const prevYear = useCallback(() => {
    setIndex((i) => (i - 1 >= 0 ? i - 1 : i));
  }, []);

  // Allow keys to change year
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextYear();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevYear();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextYear, prevYear]);

  // Assign each country to a colour
  const colourMap = {} as iColourMap;
  yearData.Countries.forEach(
    (country, i) => (colourMap[country.Country] = getColourByIndex(i))
  );

  const getYears = () => dataset.map((item) => item.Year);

  return (
    <main className="p-6">
      <h1 className="text-6xl font-bold mb-4 text-center font-impact">
        World Population by Year
      </h1>
      <h2 className="text-5xl font-bold mb-4 text-center text-gray-500">
        {yearData.Year}
      </h2>
      <div className="mx-24">
        <BarChart data={yearData.Countries} colours={colourMap} />
        <Pagination
          pages={getYears()}
          currentIndex={index}
          onChange={setIndex}
        />
      </div>
    </main>
  );
}
