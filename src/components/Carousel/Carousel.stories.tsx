import type { Meta, StoryObj } from '@storybook/react';

import Carousel from './Carousel';

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
  argTypes: {
	autoplay: {
		control: "boolean",
		description: "If true, automatically goes to the next slide after some time",
		table: {
			defaultValue: {
				summary: "false"
			}
		}
	},
	autoplayTimer: {
		control: "number",
		description: "The amount of time (in ms) before the carousel goes to the next slide",
		table: {
			defaultValue: {
				summary: "3000"
			}
		}
	},
	children: {
		control: "object",
		description: "The elements that are passed inside the carousel. Each element represents one slide."
	},
	class: {
		control: "text",
		description: "Custom classes to add to the carousel",
		table: {
		  defaultValue: {
			summary: ""
		  }
		}
	},
    pagination: {
		control: "boolean",
		description: "If true, adds a pagination at the bottom of the carousel",
		table: {
			defaultValue: {
				summary: "false"
			}
		}
	},
	style: {
		control: "object",
		description: "Custom styles to add to the carousel",
		table: {
		  defaultValue: {
			summary: "{}"
		  }
		}
	  },
	width: {
		control: "text",
		description: "Controls the width of the carousel (min-width: 8rem / 128px)",
		table: {
		  defaultValue: {
			summary: "max-content"
		  }
		}
	  },
  },
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
			<b>YO</b>, 
            <p>Helo</p>, 
			<img src="/vite.svg" />
		],
	width: "250px"
  }
};

export const Pagination: Story = {
	args: {
		children: [
			<b>Slide 1</b>, 
			<p>Slide 2</p>, 
			<em>Slide 3</em>
		],
		pagination: true,
		width: "250px"
	  }
};

export const Autoplay: Story = {
	args: {
		children: [
			<b>Slide 1</b>, 
			<p>Slide 2</p>, 
			<em>Slide 3</em>
		],
		pagination: true,
		autoplay: true,
		width: "250px"
	  }
};