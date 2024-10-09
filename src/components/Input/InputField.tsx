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

    // Générer un id unique pour l'input si un label est fourni
    const inputId = label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;
    
    return (
        <div className="input-field-container">
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
                aria-invalid={!!error}
                required={required}
                minLength={minLength ?? undefined}  // Valeur numérique ou undefined si minLength n'est pas défini
                maxLength={maxLength ?? undefined}  // Valeur numérique ou undefined si maxLength n'est pas défini
            />
            {error && <span className="error-message">{error}</span>}
        </div>
    );
};

export default InputField;
