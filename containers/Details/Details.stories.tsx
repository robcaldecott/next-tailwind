import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import { Details } from ".";

export default {
  title: "Containers/Details",
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-3xl">
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Loading = () => <Details.Loading />;

export const Data = () => (
  <Details.Data
    data={{
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
    }}
  />
);

export const LoadError = () => (
  <Details.Error
    error={new Error("An error occurred")}
    refetch={action("refetch")}
  />
);
