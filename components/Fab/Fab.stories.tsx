import { PlusIcon } from "@heroicons/react/24/solid";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "next/link";
import { Fab } from "./Fab";

export default {
  title: "Components/Fab",
  component: Fab,
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => (
  <Link href="/" passHref legacyBehavior>
    <Fab {...args} />
  </Link>
);

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
