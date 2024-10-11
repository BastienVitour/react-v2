import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta = {
  title: "Components/Atoms/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
  argTypes: {
    checkedBackgroundColor: {
      control: "color",
      description: "The color of the background of the toggle when it is checked",
      table: {
        defaultValue: {
          summary: "#2196F3"
        }
      }
    },
    checkedForegroundColor: {
      control: "color",
      description: "The color of the foreground of the toggle when it is checked",
      table: {
        defaultValue: {
          summary: "white"
        }
      }
    },
    class: {
      control: "text",
      description: "Custom classes to add to the toggle",
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
    label: {
      control: "text",
      description: "The label that describes the toggle",
      table: {
        defaultValue: {
          summary: "Toggle"
        }
      }
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the toggle is changed",
      table: {
        defaultValue: {
          summary: "(e) => {}"
        }
      }
    },
    style: {
      control: "object",
      description: "Custom styles to add to the toggle",
      table: {
        defaultValue: {
          summary: "{}"
        }
      }
    },
    uncheckedBackgroundColor: {
      control: "color",
      description: "The color of the background of the toggle when it is unchecked",
      table: {
        defaultValue: {
          summary: "lightgrey"
        }
      }
    },
    uncheckedForegroundColor: {
      control: "color",
      description: "The color of the foreground of the toggle when it is unchecked",
      table: {
        defaultValue: {
          summary: "white"
        }
      }
    },
    variant: {
      control: 'radio',
      options: ['rectangular', 'rounded'],
      description: "The shape of the toggle",
      table: {
        defaultValue: {
          summary: "rounded"
        }
      }
    },
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