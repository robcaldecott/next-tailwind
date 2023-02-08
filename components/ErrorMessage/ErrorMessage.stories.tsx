import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { ErrorMessage } from ".";

export default {
  title: "Components/ErrorMessage",
  component: ErrorMessage,
  args: {
    error: new Error("An error occurred"),
  },
} as Meta<typeof ErrorMessage>;

type Story = StoryObj<typeof ErrorMessage>;

export const WithoutAction: Story = {};

export const WithAction: Story = {
  args: {
    action: <Button onClick={action("onClick")}>Action</Button>,
  },
};
