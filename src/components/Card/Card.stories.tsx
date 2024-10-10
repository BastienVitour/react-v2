import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'The Card component is used to display encapsulated information with a title, description, image, and actions. Use different variants, sizes, and layout options to adapt the Card to your application.',
      },
    },
  },
  argTypes: {
    id: { table: { disable: true } },
    title: { 
      control: 'text', 
      description: 'The title displayed at the top of the card.',
      default: 'Card Title',
    },
    description: { 
      control: 'text', 
      description: 'The descriptive text displayed within the card.' 
    },
    image: { 
      control: 'text', 
      description: 'URL of the image displayed within the card.' 
    },
    actions: { 
      control: 'object', 
      description: 'Interactive elements, like buttons, displayed at the bottom of the card.' 
    },
    classes: { 
      control: 'text', 
      description: 'Custom classes applied to the card.' 
    },
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The layout of the card content (vertical or horizontal).',
      defaultValue: 'vertical',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'danger', 'success', 'warning', 'info'],
      description: 'The style of the card, adjustable based on visual priority.',
      defaultValue: 'default',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the card.',
      defaultValue: 'md',
    },
    imagePosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'The position of the image relative to the card content.',
      defaultValue: 'top',
    },
    onClick: { 
      action: 'clicked', 
      description: 'Callback fired when the card is clicked.' 
    },
  },
  args: {
    variant: 'default',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    description: 'This is a default card example.',
    variant: 'default',
    size: 'md',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    description: 'This card contains an image.',
    image: 'https://placehold.co/150',
    variant: 'default',
    size: 'lg',
    layout: 'horizontal',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    description: 'This card contains action buttons.',
    actions: (
      <>
        <button>Accept</button>
        <button>Decline</button>
      </>
    ),
    variant: 'default',
    size: 'md',
  },
};