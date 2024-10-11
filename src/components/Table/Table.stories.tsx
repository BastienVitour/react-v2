import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
  argTypes: {
    class: {
      control: "text",
      description: "Custom classes to add to the table",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    columns: {
      control: "multi-select",
      options: ["id", "firstname", "lastname", "email", "number", "birthdate"],
      description: "The list of the columns to display in the table",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    data: {
      control: "object",
      description: "The list of the columns to display in the table",
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    elementsPerPage: {
      control: "number",
      description: "The number of rows to display on each page of the table",
      table: {
        defaultValue: {
          summary: "10"
        }
      }
    },
    style: {
      control: "object",
      description: "Custom styles to add to the table",
      table: {
        defaultValue: {
            summary: "{}"
          }
        }
      }
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: ["id", "firstname", "lastname", "email", "number", "birthdate"],
    data: [
      { id: 1, firstname: "John", lastname: "Doe", email: "john.doe@gmail.com", number: "0606060606", birthdate: "01/01/1970" },
      { id: 2, firstname: "John", lastname: "Smith", email: "john.smith@gmail.com", number: "0706060606", birthdate: "02/01/1970" },
      { id: 3, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 4, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 5, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 6, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 7, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 8, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 9, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 10, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 11, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 12, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 13, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 14, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 15, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
      { id: 16, firstname: "John", lastname: "Man", email: "john.man@gmail.com", number: "0806060606", birthdate: "03/01/1970" },
    ],
    elementsPerPage: 7
  }
};