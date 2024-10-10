import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      id: undefined,
      children: undefined,
      name: undefined,
      disabled: { control: "boolean" },
      required: false,
      autoComplete: undefined,
      autoFocus: undefined,
      multiple: { control: "boolean" },
      form: undefined,
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    disabled: { control: "boolean" },
  },
  args: {
    size: "md",
    children: (
      <optgroup label="Please choose an option.">
        <option>option1</option>
        <option>option2</option>
        <option>option3</option>
      </optgroup>
    ),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "xs",
  },
};
