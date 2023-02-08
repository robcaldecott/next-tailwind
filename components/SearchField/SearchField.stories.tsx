import { ComponentProps, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SearchField } from ".";

function Controlled(args: ComponentProps<typeof SearchField>) {
  const [value, setValue] = useState("");
  return (
    <SearchField
      value={value}
      onChange={(event) => setValue(event.target.value)}
      {...args}
    />
  );
}

export default {
  title: "Components/SearchField",
  component: SearchField,
  render: (args) => <Controlled {...args} />,
} as Meta<typeof SearchField>;

export const Default: StoryObj<typeof SearchField> = {
  args: {
    placeholder: "Filter vehicles",
    disabled: false,
  },
};
