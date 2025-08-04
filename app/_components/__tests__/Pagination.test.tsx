import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "../Pagination";

const years = [2005, 2006];

test("disables Previous button at the start of pagination and Next at the end", () => {
  const fn = jest.fn();

  const { rerender } = render(
    <Pagination pages={years} currentIndex={0} onChange={fn} />
  );

  expect(screen.getByText("Previous")).toBeDisabled();
  expect(screen.getByText("Next")).not.toBeDisabled();

  rerender(
    <Pagination pages={years} currentIndex={1} onChange={fn} />
  );

  expect(screen.getByText("Previous")).not.toBeDisabled();
  expect(screen.getByText("Next")).toBeDisabled();
});

test("calls onChange when buttons clicked", () => {
  const fn = jest.fn();

  render(<Pagination pages={years} currentIndex={0} onChange={fn} />);
  fireEvent.click(screen.getByText("Next"));
  expect(fn).toHaveBeenCalledWith(1);
});
