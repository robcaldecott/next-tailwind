import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { Paper } from ".";

export default {
  title: "Components/Paper",
  component: Paper,
} as Meta<typeof Paper>;

type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  render: (args) => (
    <Paper className="p-4" {...args}>
      <Text variant="h1">Paper</Text>
    </Paper>
  ),
};

export const Section: Story = {
  render: (args) => (
    <Paper component="section" className="p-4" {...args}>
      <Text variant="h1">Section</Text>
    </Paper>
  ),
};
