import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './modalProps';
import './modal.css';

interface ExtendedModalProps extends ModalProps {
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
}

const Modal: React.FC<ExtendedModalProps> = ({
    isOpen,
    onClose,
    children,
    overlayColor = 'rgba(0, 0, 0, 0.5)',
    modalStyle = {},
    overlayStyle = {},
    showCloseButton = true,
    closeOnOverlayClick = true,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleEscape = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
            onClose();
        }
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            modalRef.current?.focus();
        } else {
            document.removeEventListener('keydown', handleEscape);
        }
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, handleEscape]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <div
            className="modal-overlay"
            style={{ backgroundColor: overlayColor, ...overlayStyle }}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            ref={modalRef}
            tabIndex={-1}
        >
            <div className="modal-content" style={modalStyle}>
                {children}
                {showCloseButton && (
                    <button className="modal-close-button" onClick={onClose} aria-label="Close modal">
                        &times;
                    </button>
                )}
            </div>
        </div>,
        document.body
    );
};

export default Modal;