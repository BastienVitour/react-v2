import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { useModal } from './useModal';
import Button from '../Button/Button';
import './modal.css';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        docs: {
            description: {
                component: 'A customizable modal component with an overlay and dynamic open/close control.',
            },
        },
    },
    argTypes: {
        overlayColor: { control: 'color', description: 'Background color of the overlay.' },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: false,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
    },
    render: (args) => {
        const { isOpen, openModal, closeModal } = useModal();
        return (
            <div className="modal-story-container">
                <Button onClick={openModal} text="Open Modal" variant="primary" size="md" />
                {isOpen && (
                    <Modal isOpen={isOpen} onClose={closeModal} overlayColor={args.overlayColor}>
                        <h2>Default Modal</h2>
                        <p>This is a default modal with customizable overlay color.</p>
                        <Button onClick={closeModal} text="Close Modal" variant="secondary" size="sm" />
                    </Modal>
                )}
            </div>
        );
    },
};

export const Interactive: Story = {
    render: (args) => {
        const { isOpen, openModal, closeModal } = useModal();
        return (
            <div className="modal-story-container">
                <Button onClick={openModal} text="Open Modal" variant="primary" size="md" />
                {isOpen && (
                    <Modal isOpen={isOpen} onClose={closeModal} overlayColor={args.overlayColor}>
                        <h2>Interactive Modal</h2>
                        <p>This modal can be opened and closed using the button.</p>
                        <Button onClick={closeModal} text="Close Modal" variant="secondary" size="sm" />
                    </Modal>
                )}
            </div>
        );
    },
};

export const NoCloseButtons: Story = {
    render: (args) => {
        const { isOpen, openModal, closeModal } = useModal();
        return (
            <div className="modal-story-container">
                <Button onClick={openModal} text="Open Modal Without Close Buttons" variant="primary" size="md" />
                {isOpen && (
                    <Modal
                        isOpen={isOpen}
                        onClose={closeModal}
                        overlayColor={args.overlayColor}
                        showCloseButton={false}
                    >
                        <h2>Modal Without Close Buttons</h2>
                        <p>This modal closes only when clicking outside of the modal content.</p>
                    </Modal>
                )}
            </div>
        );
    },
};

