import data from './generated.json';

export interface iPopulationByCountry {
  _id: string;
  Country: string;
  Population: number;
}

export interface iYearlyData {
  Year: number;
  Countries: iPopulationByCountry[];
}

export const dataset: iYearlyData[] = data as iYearlyData[];