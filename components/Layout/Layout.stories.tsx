import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Layout } from ".";

export default {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<typeof Layout>;

export const WithContent: StoryObj<typeof Layout> = {
  render: (args) => (
    <Layout {...args}>
      <div className="w-full rounded-md border border-slate-300 bg-white p-8 text-slate-900 shadow-md dark:border-slate-600 dark:bg-slate-800 dark:text-white">
        Content
      </div>
    </Layout>
  ),
};
