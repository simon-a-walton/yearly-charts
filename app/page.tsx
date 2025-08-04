'use client';

import { dataset } from '@/lib/data/dataTypes';
import { BarChart } from './_components/BarChart';
import { Pagination } from './_components/Pagination';
import { useColourMap } from './context/ColourMapContext';
import usePagination from './hooks/usePagination';

export default function Home() {
  const { index, setIndex } = usePagination({ datasetLength: dataset.length });
  const yearData = dataset[index];

  const getYears = () => dataset.map((item) => item.Year);
  const colourMap = useColourMap();

  return (
    <main className="p-6">
      <h1 className="text-2xl lg:text-6xl font-bold lg:mb-4 text-center">
        World Population by Year
      </h1>
      <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-center text-gray-500">
        {yearData.Year}
      </h2>
      <div className="lg:mx-24">
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
