'use client';

import { iPopulationByCountry } from '@/lib/data/dataTypes';
import { iColourMap } from '@/app/page';

interface BarChartProps {
  data: Array<iPopulationByCountry>;
  colours: iColourMap;
}

export function BarChart({ data, colours }: BarChartProps) {
  const maxPopulation = Math.max(...data.map((d) => d.Population));
  const sorted = [...data].sort((a, b) => b.Population - a.Population);
  // Ensure max of 15 countries shown
  const top15Countries = sorted.slice(0, 15);

  return (
    <div className="flex flex-col gap-2 w-full mt-6 transition-all duration-700">
      {top15Countries.map((country) => {
        const widthPercent = (country.Population / maxPopulation) * 100;
        const colour = colours[country.Country];

        return (
          <div
            key={country.Country}
            className="relative flex items-center gap-4 transition-all duration-700 ease-in-out"
          >
            <span className="w-32 truncate text-sm">{country.Country}</span>
            <div className=" w-full h-6 bg-gray-100 rounded overflow-hidden">
              <div
                className="h-6 rounded"
                style={{
                  width: `${widthPercent}%`,
                  backgroundColor: colour,
                }}
              />
            </div>
            <span className="w-32  text-xs h-6 flex items-center text-gray-700">
              {country.Population.toLocaleString()}
            </span>
          </div>
        );
      })}
    </div>
  );
}
