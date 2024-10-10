import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";
import { Link, MemoryRouter } from "react-router-dom";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    separator: { control: { type: "text" } },
  },
  args: {
    separator: ">",
    children: [
      <a href="/">Home</a>,
      <a href="/?path=/docs/components-breadcrumb--docs">button</a>,
    ],
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomSeparator: Story = {
  args: {
    separator: ">",
  },
};
