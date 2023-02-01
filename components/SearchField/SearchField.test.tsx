import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { SearchField } from ".";

it("renders", () => {
  render(<SearchField placeholder="Search" />);
  expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "Search");
});
