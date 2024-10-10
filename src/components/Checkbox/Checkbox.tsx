import React, { useEffect, useRef, useState } from 'react';
import CheckboxProps from './checkboxProps';
import './checkbox.css';

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked,
    classes = '',
    variant = 'primary',
    size = 'md',
    defaultChecked = false,
    disabled = false,
    id,
    indeterminate = false,
    onChange,
    value,
    required = false,
}) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (checkboxRef.current && checkboxRef.current.indeterminate !== indeterminate) {
            checkboxRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    useEffect(() => {
        if (checked !== undefined && checked !== isChecked) {
            setIsChecked(checked);
        }
    }, [checked, isChecked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;
        setIsChecked(newChecked);
        onChange?.(newChecked);
    };

    const handleClick = () => {
        if (!disabled && checkboxRef.current) {
            checkboxRef.current.click();
        }
    };

    return (
        <div
            className={`checkbox ${classes} checkbox-${variant} checkbox-${size} ${disabled ? 'checkbox-disabled' : ''}`}
            onClick={handleClick}
        >
            <input
                id={id}
                type="checkbox"
                ref={checkboxRef}
                checked={isChecked}
                onChange={handleChange}
                disabled={disabled}
                className="checkbox-input"
                value={value}
                data-indeterminate={indeterminate}
                required={required}
                aria-checked={indeterminate ? 'mixed' : isChecked}
            />
            {label && <label htmlFor={id} className="checkbox-label">{label}</label>}
        </div>
    );
};

export default Checkbox;