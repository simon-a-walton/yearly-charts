'use client';

import { iPopulationByCountry } from '@/lib/data/dataTypes';
import { useEffect, useRef } from 'react';

export interface iColourMap {
  [key: string]: string;
}

interface BarChartProps {
  data: Array<iPopulationByCountry>;
  colours: iColourMap;
}

export function BarChart({ data, colours }: BarChartProps) {
  const maxPopulation = Math.max(...data.map((d) => d.Population));
  const sorted = [...data].sort((a, b) => b.Population - a.Population);
  const top15Countries = sorted.slice(0, 15);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const nodes = containerRef.current.querySelectorAll('[data-country]');
    const newPosition: Record<string, number> = {};

    nodes.forEach((node) => {
      const domRect = (node as HTMLElement).getBoundingClientRect();
      const country = (node as HTMLElement).dataset.country!;
      newPosition[country] = domRect.top;
    });
  }, [data]);

  return (
    <div className="relative h-[500px]" ref={containerRef}>
      {top15Countries.map((dataPoint, index) => {
        const barHeight = 35;
        const yTranslate = index * barHeight;
        const colour = colours[dataPoint.Country] || '#000';
        const widthPercent = (dataPoint.Population / maxPopulation) * 100;

        return (
          <div
            key={dataPoint.Country}
            data-country={dataPoint.Country}
            className="absolute left-0 w-full flex items-center gap-4 transition-transform duration-800"
            style={{
              transform: `translateY(${yTranslate}px)`,
              height: `${barHeight - 6}px`,
            }}
          >
            <span className="w-32 truncate text-sm">{dataPoint.Country}</span>
            <div className="w-full h-full overflow-hidden">
              <div
                className="h-full rounded transition-all duration-500 ease-in-out"
                style={{
                  width: `${widthPercent}%`,
                  backgroundColor: colour,
                }}
              />
            </div>
            <span className="w-32 text-xs h-full flex items-center text-gray-700">
              {dataPoint.Population.toLocaleString()}
            </span>
          </div>
        );
      })}
    </div>
  );
}
