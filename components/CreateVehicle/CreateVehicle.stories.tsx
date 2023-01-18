import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CreateVehicle } from ".";

export default {
  title: "Components/CreateVehicle",
  component: CreateVehicle,
} as ComponentMeta<typeof CreateVehicle>;

const Template: ComponentStory<typeof CreateVehicle> = (args) => (
  <CreateVehicle {...args} />
);

export const Submit = Template.bind({});
Submit.args = {
  onSubmit: () => {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  },
};
