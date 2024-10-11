import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';
import Button from '../Button/Button';

const meta: Meta<typeof Loader> = {
    title: 'Components/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'The Loader component is used to indicate loading status. Supports different types (spinner, progress bar) and allows customization of color, size, and labels.',
            },
        },
    },
    argTypes: {
        type: {
            control: 'select',
            options: ['spinner', 'progress'],
            description: 'The type of loader to display, either a spinner or progress bar.',
        },
        color: {
            control: 'color',
            description: 'The color of the loader element.',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The size of the loader.',
        },
        progress: {
            control: 'number',
            description: 'Progress percentage for the progress bar (only applicable if type is "progress").',
        },
        label: {
            control: 'text',
            description: 'Accessible label for the loader, describing the loading status.',
        },
    },
    args: {
        type: 'spinner',
        color: '#007bff',
        size: 'md',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SpinnerDefault: Story = {
    args: {
        type: 'spinner',
        color: '#007bff',
        size: 'md',
        label: 'Loading...',
    },
};

export const ProgressBar50Percent: Story = {
    args: {
        type: 'progress',
        color: '#007bff',
        size: 'md',
        progress: 50,
        label: 'Loading 50%',
    },
};

export const SmallProgressBar: Story = {
    args: {
        type: 'progress',
        color: '#ffc107',
        size: 'sm',
        progress: 25,
        label: 'Loading 25%',
    },
};

export const LargeSpinner: Story = {
    args: {
        type: 'spinner',
        color: '#28a745',
        size: 'lg',
        label: 'Large spinner loading...',
    },
};

export const AnimatedProgressBarWithLabels: Story = {
    render: () => {
        const [progress, setProgress] = useState(0);
        const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            let interval: NodeJS.Timeout;

            if (isLoading) {
                interval = setInterval(() => {
                    setProgress(prevProgress => {
                        if (prevProgress >= 100) {
                            clearInterval(interval);
                            setTimeout(() => {
                                setProgress(0);
                                setIsLoading(false);
                            }, 1000);
                            return prevProgress;
                        }
                        return prevProgress + 2;
                    });
                }, 200);
            }

            return () => clearInterval(interval);
        }, [isLoading]);

        const startLoading = () => {
            setIsLoading(true);
            setProgress(0);
        };

        const resetProgress = () => {
            setProgress(0);
            setIsLoading(false);
        };

        return (
            <div style={{ textAlign: 'center' }}>
                <Loader
                    type="progress"
                    color="#007bff"
                    size="lg"
                    progress={progress}
                    progressLabel={true}
                />
                <div style={{ marginTop: '1rem' }}>
                    <Button onClick={startLoading} style={{ marginRight: '1rem' }}>
                        Start Loading
                    </Button>
                    <Button onClick={resetProgress}>
                        Reset Progress
                    </Button>
                </div>
            </div>
        );
    },
};