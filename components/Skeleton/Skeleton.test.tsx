import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Skeleton } from ".";

it("renders", () => {
  render(<Skeleton aria-label="loading" />);
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
});

it("renders with a custom height", () => {
  render(<Skeleton aria-label="loading" height="64px" />);
  expect(screen.getByLabelText(/loading/i)).toHaveStyle("height: 64px");
});
