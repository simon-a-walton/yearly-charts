"use client";

interface PaginationProps {
  pages: number[];
  currentIndex: number;
  onChange: (index: number) => void;
}

export const Pagination = ({
    pages,
    currentIndex,
    onChange,
  }: PaginationProps) => {
  return (
    <div className="flex items-center justify-between mt-8">
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-30"
        onClick={() => onChange(currentIndex - 1)}
        disabled={currentIndex === 0}
      >
        Previous
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded disabled:opacity-30"
        onClick={() => onChange(currentIndex + 1)}
        disabled={currentIndex === pages.length - 1}
      >
        Next
      </button>
    </div>
  );
};
