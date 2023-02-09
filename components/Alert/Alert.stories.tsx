import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Alert } from ".";

const meta = {
  title: "Components/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

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
