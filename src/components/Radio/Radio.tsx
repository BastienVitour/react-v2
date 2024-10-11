import React, { ChangeEvent } from 'react';
import { RadioProps } from './radioProps';
import './radio.css';

const Radio: React.FC<RadioProps> = ({
    label,
    checked = false,
    classes = '',
    variant = 'primary',
    size = 'md',
    disabled = false,
    id,
    value,
    required = false,
    onChange,
    color,
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            onChange?.(event);
        }
    };

    const handleClick = () => {
        if (!disabled) {
            onChange?.({ target: { value } } as ChangeEvent<HTMLInputElement>);
        }
    };

    return (
        <div
            className={`radio-container ${classes} radio-${variant} radio-${size} ${disabled ? 'radio-disabled' : ''}`}
            onClick={handleClick}
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
            <input
                id={id}
                type="radio"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                className="radio-input"
                value={value}
                required={required}
                aria-checked={checked}
                style={{
                    color: color || 'inherit',
                    borderColor: color || 'inherit',
                }}
            />
            {label && <label htmlFor={id} className="radio-label" style={{ color: color || 'inherit' }}>{label}</label>}
        </div>
    );
};

export default Radio;