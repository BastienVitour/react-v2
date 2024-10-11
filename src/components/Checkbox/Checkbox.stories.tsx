import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text', description: 'Label text associated with the checkbox for accessibility.' },
    required: { control: 'boolean', description: 'If true, the component is required.' },
    checked: { control: 'boolean', description: 'If true, the component is checked.' },
    classes: { control: 'text', description: 'Custom classes to apply to the component.' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'default'],
      description: 'The color variant of the component.',
      defaultValue: 'primary',
    },
    defaultChecked: { control: 'boolean', description: 'The default checked state for uncontrolled components.' },
    disabled: { control: 'boolean', description: 'If true, the component is disabled.', defaultValue: false },
    id: { control: 'text', description: 'The id of the input element.' },
    indeterminate: { control: 'boolean', description: 'If true, the component appears indeterminate.', defaultValue: false },
    onChange: { action: 'changed', description: 'Callback fired when the state is changed.' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the component.',
      defaultValue: 'md',
    },
    value: { control: 'text', description: 'The value of the component.' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

export const PrimaryChecked: Story = {
  args: {
    label: 'Primary Checked',
    checked: true,
    variant: 'primary',
    size: 'md',
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate Checkbox',
    indeterminate: true,
    variant: 'warning',
    size: 'sm',
  },
};

export const DisabledCheckbox: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    variant: 'secondary',
    size: 'md',
  },
};

export const CustomStyledCheckbox: Story = {
  args: {
    label: 'Custom Styled Checkbox',
    variant: 'info',
    size: 'sm',
    classes: 'custom-checkbox-class',
  },
};