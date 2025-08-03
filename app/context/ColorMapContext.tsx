"use client";

import { createContext, useContext, useMemo } from "react";
import { getColourByIndex } from "@/lib/colours";

type iColorMap = Record<string, string>;

const ColorMapContext = createContext<iColorMap>({});

export const useColorMap = () => useContext(ColorMapContext);

interface Props {
  children: React.ReactNode;
  countries: string[];
}

export const ColorMapProvider = ({ children, countries }: Props) => {
  const colorMap = useMemo(() => {
    const map: iColorMap = {};
    countries.forEach((name, index) => {
      map[name] = getColourByIndex(index);
    });
    return map;
  }, [countries]);

  return (
    <ColorMapContext.Provider value={colorMap}>
      {children}
    </ColorMapContext.Provider>
  );
};
