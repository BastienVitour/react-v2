import React, { useState, ChangeEvent, FocusEvent } from 'react';
import './input.css';
import InputFieldProps from './inputProps';

const InputField: React.FC<InputFieldProps> = ({
    type,
    label,
    value,
    required = false,
    minLength,
    maxLength,
    pattern,
    placeholder,
    disabled = false,
    readOnly = false,
    onChange,
    color = '#333',
    backgroundColor = '#fff',
    size = 'medium',
    width = '100%',
}) => {
    const [error, setError] = useState<string | null>(null);

    const validate = (value: string) => {
        if (required && !value) {
            return 'This field is required.';
        }
        if (minLength && value.length < minLength) {
            return `Minimum length is ${minLength} characters.`;
        }
        if (maxLength && value.length > maxLength) {
            return `Maximum length is ${maxLength} characters.`;
        }
        if (pattern && !pattern.test(value)) {
            return 'The input format is incorrect.';
        }
        return null;
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setError(validate(newValue));
        onChange?.(newValue);
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        setError(validate(event.target.value));
    };

    const inputId = label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

    const inputStyles = {
        color,
        backgroundColor,
        width,
        fontSize: size === 'small' ? '0.875rem' : size === 'large' ? '1.25rem' : '1rem',
        padding: size === 'small' ? '6px' : size === 'large' ? '12px' : '8px',
    };

    return (
        <div className="input-field-container" style={{ width }}>
            {label && <label htmlFor={inputId} className="input-label">{label}</label>}
            <input
                id={inputId}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
                readOnly={readOnly}
                className={`input-field ${error ? 'error' : ''}`}
                style={inputStyles}
                aria-invalid={!!error}
                aria-describedby={error ? `${inputId}-error` : undefined}
                required={required}
                minLength={minLength ?? undefined}
                maxLength={maxLength ?? undefined}
            />
            {error && <span id={`${inputId}-error`} className="error-message" role="alert">{error}</span>}
        </div>
    );
};

export default InputField;
