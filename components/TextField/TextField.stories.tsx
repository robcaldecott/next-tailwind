import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextField } from ".";

export default {
  title: "Components/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <TextField
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  disabled: false,
  isRequired: false,
};

export const Error = Template.bind({});
Error.args = {
  type: "email",
  label: "Email address",
  placeholder: "you@company.com",
  value: "george@krugerindustrial.",
  isRequired: false,
  error: "Please enter a valid email address",
};
