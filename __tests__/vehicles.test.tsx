import { ComponentProps } from "react";
import { IntlProvider } from "react-intl";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Vehicles from "pages";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { FilterProvider } from "@/providers/FilterProvider";

const replace = vi.fn();

vi.mock("next/router", () => ({
  useRouter: () => ({ replace }),
}));

describe("Vehicles", () => {
  const vehicles = [
    {
      id: "5e0562c5-a50b-42ff-83e5-4c004c5b639a",
      manufacturer: "Volkswagen",
      model: "Explorer",
      type: "Cargo Van",
      fuel: "Gasoline",
      vin: "1USTAN9Z5MNT86399",
      color: "teal",
      mileage: 70609,
      registrationDate: "2005-07-08T16:58:36.380Z",
      registrationNumber: "TE52 HWW",
    },
  ];

  beforeEach(() => {
    replace.mockReset();
  });

  const Wrapper = (props: ComponentProps<typeof Vehicles>) => {
    return (
      <IntlProvider locale="en">
        <FilterProvider>
          <Vehicles {...props} />
        </FilterProvider>
      </IntlProvider>
    );
  };

  it("loads vehicles", () => {
    render(<Wrapper vehicles={vehicles} />);
    // Wait for the list to load
    const card = within(screen.getByLabelText(/vehicle list/i));
    const list = within(card.getByRole("list"));
    expect(
      list.getByRole("link", {
        name: /volkswagen explorer cargo van gasoline te52 hww/i,
      })
    ).toBeInTheDocument();
  });

  it("handles no search results", async () => {
    render(<Wrapper vehicles={vehicles} />);
    await userEvent.type(await screen.findByPlaceholderText(/search/i), "test");
    expect(
      screen.getByRole("heading", { name: /no matching vehicles found\./i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/please try a different filter./i)
    ).toBeInTheDocument();
  });
});
