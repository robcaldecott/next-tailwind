import { HeartIcon } from "@heroicons/react/24/solid";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconButton } from ".";

export default {
  title: "Components/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} icon={HeartIcon} />
);

export const Default = Template.bind({});
Default.args = {
  color: "primary",
};
