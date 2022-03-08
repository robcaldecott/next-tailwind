import { Meta, Story } from "@storybook/react";
import { FilterProvider } from "@/providers";
import { Vehicles } from ".";
import { vehicles } from "@/mocks";

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

export const Empty: Story = () => <Vehicles vehicles={[]} />;

export const Data: Story = () => <Vehicles vehicles={vehicles} />;
