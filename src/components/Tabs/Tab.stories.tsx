import type { Meta, StoryObj } from "@storybook/react";
import { TabContext, TabPanel } from "./Tab";

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
    list: ["tab1", "tab2"],
    defaultId: "tab1",
    children: (activeTab) => {
      return (
        <>
          <TabPanel id="tab1" activeTab={activeTab}>
            tab1
          </TabPanel>
          <TabPanel id="tab2" activeTab={activeTab}>
            <img src="//www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg" />
          </TabPanel>
        </>
      );
    },
  },
} satisfies Meta<typeof TabContext>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeTabs: Story = {
  args: {
    list: ["tab1", "tab2", "tab3"],
    defaultId: "tab1",
    children: (activeTab) => {
      return (
        <>
          <TabPanel id="tab1" activeTab={activeTab}>
            tab1
          </TabPanel>
          <TabPanel id="tab2" activeTab={activeTab}>
            <img src="//www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg" />
          </TabPanel>
          <TabPanel id="tab3" activeTab={activeTab}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            pharetra aliquet ultricies. In nec ante tellus. Vivamus interdum
            risus dolor, sed blandit justo porttitor et. Fusce et risus
            facilisis, facilisis diam ac, cursus nisl. Vestibulum eget suscipit
            urna, id euismod purus. Nam ex velit, iaculis at felis non, mattis
            dictum elit. Quisque scelerisque ex at feugiat efficitur. Nam
            facilisis blandit turpis ut sollicitudin. Nulla vehicula est vitae
            metus consectetur viverra. Maecenas tempor convallis tortor vel
            scelerisque.
          </TabPanel>
        </>
      );
    },
  },
};
