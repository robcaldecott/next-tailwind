import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import { vehicles } from "@/mocks";
import { FilterProvider } from "@/providers";
import { Vehicles } from ".";

export default {
  title: "Containers/Vehicles",
  decorators: [
    (Story) => (
      <FilterProvider>
        <Story />
      </FilterProvider>
    ),
  ],
} as Meta;

export const Loading: Story = () => <Vehicles.Loading />;

export const Empty: Story = () => <Vehicles.Data data={[]} />;

export const Data: Story = () => <Vehicles.Data data={vehicles} />;

export const Error: Story = () => (
  <Vehicles.Error
    error={{ status: 500, statusText: "An error occurred" } as Response}
    refetch={action("refetch")}
  />
);
