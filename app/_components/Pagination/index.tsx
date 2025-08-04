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

  const buttonStyle = "text-xs cursor-pointer px-4 py-2 bg-gray-500 text-white hover:bg-gray-700 rounded disabled:opacity-30";

  return (
    <div className="flex items-center justify-between mt-8">
      <button
        className={buttonStyle}
        onClick={() => onChange(currentIndex - 1)}
        disabled={currentIndex === 0}
      >
        Previous
      </button>
      <button
        className={buttonStyle}
        onClick={() => onChange(currentIndex + 1)}
        disabled={currentIndex === pages.length - 1}
      >
        Next
      </button>
    </div>
  );
};
