'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { getColourByIndex } from '@/lib/colours/index';
import { iPopulationByCountry } from '@/lib/data/dataTypes';

interface IProps {
  data: Array<iPopulationByCountry>;
}

export default function PopulationChart({ data }: IProps) {
  const sorted = [...data].sort((a, b) => b.Population - a.Population);
  // Ensure max of 15 countries shown
  const top15Countries = sorted.slice(0, 15);

  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart layout="vertical" data={top15Countries} dataKey="Population">
        <XAxis type="number" hide />
        <YAxis dataKey="Country" type="category" width={100} />
        <Tooltip
          formatter={(value: number) => value.toLocaleString()}
          labelStyle={{ fontWeight: 'bold' }}
        />
        <Bar
          animationEasing="ease-in-out"
          animationDuration={1000}
          name="Population"
          dataKey="Population"
        >
          {top15Countries.map((country, index) => (
            <Cell key={country._id} fill={getColourByIndex(index)} />
          ))}
          <LabelList
            dataKey="Population"
            position="right"
            formatter={(value) => value?.toLocaleString()}
            style={{ fill: '#444', fontSize: 12 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
