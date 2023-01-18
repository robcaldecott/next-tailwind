import { ComponentMeta, ComponentStory } from "@storybook/react";
import { vehicles } from "@/mocks/vehicles";
import { FilterProvider } from "@/providers/FilterProvider";
import { VehiclesList, VehiclesLoading } from ".";

export default {
  title: "Components/VehiclesList",
  component: VehiclesList,
  args: {
    vehicles,
  },
  decorators: [
    (Story) => (
      <FilterProvider>
        <Story />
      </FilterProvider>
    ),
  ],
} as ComponentMeta<typeof VehiclesList>;

const Template: ComponentStory<typeof VehiclesList> = (args) => (
  <VehiclesList {...args} />
);

export const Data = Template.bind({});

export const Empty = Template.bind({});
Empty.args = {
  vehicles: [],
};

export const Loading = () => <VehiclesLoading />;
