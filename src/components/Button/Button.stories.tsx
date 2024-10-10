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
    class: {
      control: "text",
      description: "Custom classes to add to the button",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    disabled: { 
      control: 'boolean', 
      description: "If true, the component is disabled.", 
      table: {
        defaultValue: {
          summary: "false"
        }
      }
    },
    onClick: {
      action: "clicked",
      description: "Callback fired when the button is clicked",
      table: {
        defaultValue: {
          summary: "() => {}"
        }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: "The size of the button",
      table: {
        defaultValue: {
          summary: "md"
        }
      }
    },
    style: {
      control: "object",
      description: "Custom styles to add to the button",
      table: {
        defaultValue: {
          summary: "{}"
        }
      }
    },
    text: {
      control: "text",
      description: "Text written on the button",
      table: {
        defaultValue: {
          summary: "Button"
        }
      }
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'],
      description: "The color variant of the button",
      table: {
        defaultValue: {
          summary: "primary"
        }
      }
    },
  },
  args: { onClick: () => console.log("Button clicked!") },
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