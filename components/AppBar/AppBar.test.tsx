import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { AppBar } from ".";

it("renders", () => {
  render(<AppBar>Content</AppBar>);
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByText(/content/i)).toBeInTheDocument();
});
