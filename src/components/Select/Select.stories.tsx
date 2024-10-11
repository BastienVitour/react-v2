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
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    id: {
      description: "Id of the select for DOM access.",
      control: "text",
    },
    children: {
      description: "Children of the select. Usually <option/> or <optgroup/>.",
      control: "text",
    },
    name: {
      description: "Name of the select.",
      control: "text",
    },
    disabled: {
      description: "Disable or enable the element.",
      control: "boolean",
    },
    required: {
      description: "Set the required attribute. Mainly for forms.",
      control: "boolean",
    },
    autoComplete: {
      description: "Sets the autocomplete attribute.",
      control: "text",
    },
    autoFocus: {
      description: "Sets the autofocus attribute.",
      control: "boolean",
    },
    multiple: {
      description: "Allows to select multiple options at once.",
      control: "boolean",
    },
    form: {
      description: "Reference to the form (id) the element is linked to.",
      control: "text",
    },
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

export const SmallSize: Story = {
  args: {
    size: "xs",
  },
};

export const MediumSizeMultipleRequired: Story = {
  args: {
    size: "md",
    multiple: true,
    required: true,
  },
};

export const LargeSizeDisabled: Story = {
  args: {
    size: "lg",
    disabled: true,
  },
};
