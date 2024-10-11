import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";
import { Link, MemoryRouter } from "react-router-dom";

const meta = {
  title: "Components/Molecules/Breadcrumb",
  component: Breadcrumb,

  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    separator: {
      description: "Separator between elements. ASCII characters supported.",
      control: { type: "text" },
    },
    children: {
      description:
        "Children of the Breadcrumb element. `<a/>` tags are supported, not custom React Router configurations.",
      control: { type: "text" },
    },
    underlined: {
      description: "Allow underlined links when mouse is hovers over.",
      control: { type: "boolean" },
    },
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
