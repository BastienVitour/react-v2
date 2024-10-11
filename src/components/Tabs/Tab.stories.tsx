import type { Meta, StoryObj } from "@storybook/react";
import { TabButton, TabContext, TabList, TabPanel } from "./Tab";

const meta = {
  title: "Components/Tabs",
  component: TabContext,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Label of the tab",
      control: { type: "text" },
    },
    children: {
      description: "Children of the tab",
      control: { type: "text" },
    },
    color: {
      description: "Color of the tabs names",
      control: { type: "color" },
    },
    onClick: {
      description: "Callback function when the elements is pressed.",
      control: { type: "text" },
    },
  },
  args: {
    children: [
      <TabList>
        <TabButton id="1" label="Tab1" />
        <TabButton id="2" label="Tab2" />
      </TabList>,
      ,
      <TabPanel id="1">test</TabPanel>,
      <TabPanel id="2">test</TabPanel>,
    ],
  },
} satisfies Meta<typeof TabContext>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
