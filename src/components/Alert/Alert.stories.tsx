import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';
import Button from '../Button/Button';
import { useState } from 'react';

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'The Alert component displays important messages to users, with different styles based on the type of alert (success, error, warning, info). It can be closed manually or automatically.',
            },
        },
    },
    argTypes: {
        text: {
            control: 'text',
            description: 'The main text displayed in the alert.',
            defaultValue: 'This is an alert message!',
        },
        type: {
            control: 'select',
            options: ['success', 'error', 'warning', 'info'],
            description: 'The style of the alert, adjustable based on the message type.',
            defaultValue: 'success',
        },
        autoClose: {
            control: 'boolean',
            description: 'If true, the alert will automatically close after a certain duration.',
            defaultValue: false,
        },
        duration: {
            control: 'number',
            description: 'Duration in milliseconds for the auto-close feature.',
            defaultValue: 3000,
        },
        children: {
            control: 'text',
            description: 'Additional content to display within the alert.',
        },
        onClose: {
            action: 'closed',
            description: 'Callback fired when the alert is closed.',
        },
    },
    args: {
        type: 'success',
        autoClose: false,
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessAlert: Story = {
    args: {
        text: 'This is a success alert message.',
        type: 'success',
    },
};

export const ErrorAlert: Story = {
    args: {
        text: 'This is an error alert message.',
        type: 'error',
    },
};

export const WarningAlert: Story = {
    args: {
        text: 'This is a warning alert message.',
        type: 'warning',
    },
};

export const InfoAlert: Story = {
    args: {
        text: 'This is an info alert message.',
        type: 'info',
    },
};

export const AutoCloseAlert: Story = {
    args: {
        text: 'This alert will auto-close after 3 seconds.',
        autoClose: true,
        duration: 3000,
    },
};

export const AlertWithChildren: Story = {
    args: {
        children: 'This alert has additional content!',
    },
};

export const AlertDemoWithAutoClose: Story = {
    args: {
        text: 'This alert will show automatically.',
        autoClose: true,
        duration: 3000,
    },
    render: () => {
        const [alertVisible, setAlertVisible] = useState(true);

        return (
            <div style={{ textAlign: 'center' }}>
                {alertVisible && (
                    <Alert type="success" text="This is a demo alert! This will autoclose in 3 seconds." autoClose={true} onClose={() => setAlertVisible(false)} />
                )}
                <div style={{ margin: '1rem' }}>
                    <Button click={() => setAlertVisible(true)}>Show Alert</Button>
                </div>
            </div>
        );
    },
};