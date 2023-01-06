import { StarIcon } from "@heroicons/react/24/solid";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "next/link";
import { ResponsiveFab } from ".";

export default {
  title: "Components/ResponsiveFab",
  component: ResponsiveFab,
  args: {
    icon: StarIcon,
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof ResponsiveFab>;

const Template: ComponentStory<typeof ResponsiveFab> = (args) => (
  <Link href="/" passHref legacyBehavior>
    <ResponsiveFab {...args} />
  </Link>
);

export const Star = Template.bind({});
Star.args = {
  label: "Responsive",
};
