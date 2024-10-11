import React, { useEffect, useState } from 'react';
import AlertProps from './alertProps';
import './alert.scss';
import Button from '../Button/Button';

const Alert: React.FC<AlertProps> = ({
    text,
    type = 'success',
    children,
    autoClose = false,
    duration = 3000,
    onClose,
}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (autoClose) {
            const timer = setTimeout(() => {
                setVisible(false);
                if (onClose) onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [autoClose, duration, onClose]);

    if (!visible) return null;

    return (
        <div className={`alert alert-${type}`}>
            <span className="alert-text">{text}</span>
            {children && <div className="alert-children">{children}</div>}
            <Button className="alert-close-button" click={() => {
                setVisible(false);
                if (onClose) onClose();
            }}>
                &times;
            </Button>
        </div>
    );
};

export default Alert;