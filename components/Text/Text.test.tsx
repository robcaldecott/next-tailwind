import { render, screen } from "@testing-library/react";
import { describe, expect,it } from "vitest";
import { Text } from ".";

describe("Text", () => {
  it("renders", () => {
    render(<Text>Text</Text>);
    expect(screen.getByText(/text/i)).toBeDefined();
  });

  it("renders as a custom component", () => {
    render(<Text component="h1">Text</Text>);
    expect(
      screen.getByRole("heading", { name: /text/i, level: 1 })
    ).toBeDefined();
  });
});
