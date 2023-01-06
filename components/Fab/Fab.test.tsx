import { StarIcon } from "@heroicons/react/24/solid";
import { render, screen } from "@testing-library/react";
import { describe, expect,test } from "vitest";
import { Fab } from ".";

describe("Fab", () => {
  test("icon", () => {
    render(<Fab href="/" aria-label="fab" icon={StarIcon} />);
    expect(screen.getByRole("link", { name: /fab/i })).toBeInTheDocument();
  });

  test("label", () => {
    render(<Fab href="/" aria-label="fab" icon={StarIcon} label="Label" />);
    expect(screen.getByRole("link", { name: /fab/i })).toBeInTheDocument();
    expect(screen.getByText(/label/i)).toBeInTheDocument();
  });
});
