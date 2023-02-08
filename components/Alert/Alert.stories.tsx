import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Alert } from ".";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

export const NoAction: Story = {
  args: {
    label: "This is an alert without an action.",
  },
};

export const WithAction: Story = {
  args: {
    label: "This is an alert with an action button.",
    action: <Button variant="secondary">Action</Button>,
  },
};
