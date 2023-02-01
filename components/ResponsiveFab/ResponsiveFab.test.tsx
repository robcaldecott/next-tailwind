import StarIcon from "@heroicons/react/24/solid/StarIcon";
import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { ResponsiveFab } from ".";

it("renders", () => {
  render(
    <ResponsiveFab
      icon={StarIcon}
      label="Caption"
      href="/"
      aria-label="Label"
    />
  );
  expect(screen.getAllByRole("link", { name: /label/i })).toHaveLength(2);
  expect(screen.getByText(/caption/i)).toBeInTheDocument();
});
