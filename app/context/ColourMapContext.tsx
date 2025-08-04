"use client";

import { createContext, useContext, useMemo } from "react";
import { getColourByIndex } from "@/lib/colours";

type iColourMap = Record<string, string>;

const ColourMapContext = createContext<iColourMap>({});

export const useColourMap = () => useContext(ColourMapContext);

interface Props {
  children: React.ReactNode;
  countries: string[];
}

export const ColourMapProvider = ({ children, countries }: Props) => {
  const colourMap = useMemo(() => {
    const map: iColourMap = {};
    countries.forEach((name, index) => {
      map[name] = getColourByIndex(index);
    });
    return map;
  }, [countries]);

  return (
    <ColourMapContext.Provider value={colourMap}>
      {children}
    </ColourMapContext.Provider>
  );
};
