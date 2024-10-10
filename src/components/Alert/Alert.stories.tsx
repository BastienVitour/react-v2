import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Primary Alert',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Secondary Alert',
  },
};