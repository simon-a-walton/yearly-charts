"use client";

import PopulationChart from "./_components/PopulationChart";
import { dataset } from "@/lib/data/dataTypes";

export default function Home() {
  const yearData = dataset[0];

  return (
    <main className="p-10">
      <h1 className="text-6xl font-bold mb-4 text-center">
        World Population by Year
      </h1>
      <PopulationChart data={yearData.Countries} />
    </main>
  );
}
