import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { PageError } from ".";

export default {
  title: "Components/PageError",
  component: PageError,
} as Meta<typeof PageError>;

export const Default: StoryObj<typeof PageError> = {
  args: {
    error: new Error("An error occurred"),
    refetch: action("refetch"),
  },
};
