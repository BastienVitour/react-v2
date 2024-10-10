import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
    label: { control: 'text' },
    required: { control: 'boolean' },
    minLength: { control: 'number' },
    maxLength: { control: 'number' },
    pattern: {
      control: 'text',
      description: 'Regex pattern for input validation',
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    onChange: { action: 'changed' },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    width: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Input',
    type: 'text',
    placeholder: 'Enter your text here',
    color: '#333',
    backgroundColor: '#fff',
    size: 'medium',
    width: '100%',
  },
};

export const CustomizedInput: Story = {
  args: {
    label: 'Custom Input',
    type: 'text',
    placeholder: 'Enter your custom text',
    color: '#4a90e2',
    backgroundColor: '#f0f8ff',
    size: 'large',
    width: '50%',
  },
};

export const RequiredField: Story = {
  args: {
    label: 'Required Input',
    type: 'text',
    required: true,
    placeholder: 'This field is required',
    color: '#333',
    backgroundColor: '#fff',
    size: 'medium',
    width: '100%',
  },
};

export const EmailField: Story = {
  args: {
    label: 'Email Input',
    type: 'email',
    placeholder: 'Enter your email',
    color: '#333',
    backgroundColor: '#fff',
    size: 'medium',
    width: '100%',
  },
};

export const WithMinMaxLength: Story = {
  args: {
    label: 'Input with min/max length',
    type: 'text',
    minLength: 5,
    maxLength: 10,
    placeholder: 'Min 5, Max 10 characters',
    color: '#333',
    backgroundColor: '#fff',
    size: 'medium',
    width: '100%',
  },
};

export const DisabledField: Story = {
  args: {
    label: 'Disabled Input',
    type: 'text',
    disabled: true,
    placeholder: 'Cannot type here',
    color: '#333',
    backgroundColor: '#f5f5f5',
    size: 'medium',
    width: '100%',
  },
};