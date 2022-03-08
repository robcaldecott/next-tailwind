import { describe, it, expect } from "vitest";
import { screen, render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntlProvider } from "react-intl";
import { FilterProvider } from "@/providers";
import { Vehicles } from "./Vehicles";

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

  const Wrapper = () => {
    return (
      <IntlProvider locale="en">
        <FilterProvider>
          <Vehicles vehicles={vehicles} />
        </FilterProvider>
      </IntlProvider>
    );
  };

  it("loads vehicles", () => {
    render(<Wrapper />);
    // Wait for the list to load
    const card = within(screen.getByLabelText(/vehicle list/i));
    const list = within(card.getByRole("list"));
    expect(
      list.getByRole("link", {
        name: /volkswagen explorer cargo van gasoline te52 hww/i,
      })
    ).toBeInTheDocument();
  });

  it("handles no search results", () => {
    render(<Wrapper />);
    userEvent.type(screen.getByPlaceholderText(/search/i), "test");
    expect(
      screen.getByRole("heading", { name: /no matching vehicles found\./i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/please try a different filter./i)
    ).toBeInTheDocument();
  });
});
