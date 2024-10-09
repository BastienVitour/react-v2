import React, { useState, ChangeEvent, FocusEvent } from 'react';
import './input.css';

type InputFieldProps = {
    type: 'text' | 'email' | 'password' | 'number' | 'date';
    label?: string;
    value?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (value: string) => void;
};

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
        if (onChange) {
            onChange(newValue);
        }
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
        setError(validate(event.target.value));
    };

    return (
        <div className="input-field-container">
            {label && <label className="input-label">{label}</label>}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={disabled}
                readOnly={readOnly}
                className={`input-field ${error ? 'error' : ''}`}
                aria-invalid={!!error}
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default InputField;
