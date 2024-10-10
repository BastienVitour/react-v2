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
    pagination: { control: "boolean" }
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
		]
  }
};

export const Pagination: Story = {
	args: {
		children: [
			<b>Slide 1</b>, 
			<p>Slide 2</p>, 
			<em>Slide 3</em>
		],
		pagination: true
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
		autoplay: true
	  }
};