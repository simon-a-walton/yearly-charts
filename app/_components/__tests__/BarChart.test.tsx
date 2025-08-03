import { render, screen } from "@testing-library/react";
import { BarChart } from "../BarChart";

const mockData = [
  { Country: "China", Population: 100, _id: "1" },
  { Country: "India", Population: 50, _id: "2" },
];

const mockColourMap = {
  "China": "#1e3a8a",
  "India": "#2563eb",
  "United States": "#3b82f6",
}

test("renders bars with correct widths and labels", () => {
  render(<BarChart data={mockData} colours={mockColourMap} />);
  expect(screen.getByText("China")).toBeInTheDocument();
  expect(screen.getByText("India")).toBeInTheDocument();
  expect(screen.getByText("100")).toBeInTheDocument();
  expect(screen.getByText("50")).toBeInTheDocument();
});
