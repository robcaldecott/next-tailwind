import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Fab } from "./Fab";

export default {
  title: "Components/Fab",
  component: Fab,
  args: {
    href: "/",
  },
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => <Fab {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  icon: PlusIcon,
};

export const Label = Template.bind({});
Label.args = {
  icon: PlusIcon,
  label: "Create Vehicle",
};

export const Fixed = Template.bind({});
Fixed.args = {
  className: "fixed bottom-8 right-8",
  icon: PlusIcon,
};
