import { render, screen } from "@testing-library/react";
import { describe, expect,it } from "vitest";
import { SearchField } from ".";

describe("SearchField", () => {
  it("renders", () => {
    render(<SearchField placeholder="Search" />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "Search"
    );
  });
});
