'use client';

import { useCallback, useEffect, useState } from 'react';

export interface PaginationProps {
  datasetLength: number;
}

export default function usePagination({ datasetLength }: PaginationProps) {
  const [index, setIndex] = useState(0);

  const nextPage = useCallback(() => {
    setIndex((i) => (i + 1 < datasetLength ? i + 1 : i));
  }, [datasetLength]);

  const previousPage = useCallback(() => {
    setIndex((i) => (i - 1 >= 0 ? i - 1 : i));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextPage();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') previousPage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextPage, previousPage]);

  return { nextPage, previousPage, index, setIndex };
}
