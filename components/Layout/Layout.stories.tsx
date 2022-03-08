import { ComponentMeta, Story } from "@storybook/react";
import { Layout } from ".";

export default {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Layout>;

export const WithContent: Story = () => (
  <Layout>
    <div className="w-full bg-white border border-slate-300 shadow-md rounded-md p-8">
      Content
    </div>
  </Layout>
);
