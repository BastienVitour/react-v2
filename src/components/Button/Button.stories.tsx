import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
  },
  args: { click: () => console.log("Button clicked!") },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Primary Button',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Secondary Button',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    text: 'Large Button',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    text: 'Small Button',
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    text: 'Disabled Button',
    size: 'md',
    disabled: true,
  },
};