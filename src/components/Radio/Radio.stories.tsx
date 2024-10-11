import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Radio and RadioGroup components allow users to select a single option from a group. Use labels and variants to customize appearance and enhance accessibility. Additionally, you can apply colors to individual radios for unique styling.',
      },
    },
  },
  argTypes: {
    name: { 
      control: 'text', 
      description: 'The name attribute for the RadioGroup, ensuring only one radio button can be selected within the group.' 
    },
    value: { 
      control: 'text', 
      description: 'Currently selected value within the RadioGroup.' 
    },
    onChange: { 
      action: 'changed', 
      description: 'Callback fired when a radio button is selected.' 
    },
    classes: { 
      control: 'text', 
      description: 'Custom classes applied to the RadioGroup container.' 
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'defaultGroup',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio label="Option 1" value="option1" />
      <Radio label="Option 2" value="option2" />
      <Radio label="Option 3" value="option3" />
    </RadioGroup>
  ),
};

export const PreselectedOption: Story = {
  args: {
    name: 'preselectedGroup',
    value: 'option2',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio label="Option 1" value="option1" />
      <Radio label="Option 2" value="option2" />
      <Radio label="Option 3" value="option3" />
    </RadioGroup>
  ),
};

export const DisabledOptions: Story = {
  args: {
    name: 'disabledGroup',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio label="Option 1" value="option1" />
      <Radio label="Option 2 (Disabled)" value="option2" disabled />
      <Radio label="Option 3" value="option3" />
    </RadioGroup>
  ),
};

export const CustomStyledOptions: Story = {
  args: {
    name: 'customStyledGroup',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio label="Primary Option" value="option1" variant="primary" size="md" />
      <Radio label="Secondary Option" value="option2" variant="secondary" size="lg" />
      <Radio label="Danger Option" value="option3" variant="danger" size="sm" />
    </RadioGroup>
  ),
};

export const ColorOnly: Story = {
  args: {
    name: 'colorOnlyGroup',
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="blue" color="#1E90FF" label="Blue" />
      <Radio value="green" color="#32CD32" label="Green" />
      <Radio value="red" color="#FF4500" label="Red" />
      <Radio value="purple" color="#800080" label="Purple" />
      <Radio value="orange" color="#FFA500" label="Orange" />
    </RadioGroup>
  ),
};