import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['rectangular', 'rounded'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    label: 'Rounded Toggle',
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    label: 'Rectangular Toggle',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'rounded',
    label: 'Disabled Toggle',
    disabled: true
  },
};

export const Colored: Story = {
  args: {
    variant: 'rounded',
    label: 'Colored Toggle',
    uncheckedBackgroundColor: "red",
    uncheckedForegroundColor: "yellow",
    checkedBackgroundColor: "green",
    checkedForegroundColor: "blue"
  },
};