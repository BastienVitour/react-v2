import CheckboxProps from './checkboxProps';
import './checkbox.css';

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked = false,
    onChange,
    disabled = false,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked);
    };

    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                className="checkbox-input"
                id={`checkbox-${label?.replace(/\s+/g, '-').toLowerCase()}`}
            />
            {label && (
                <label
                    htmlFor={`checkbox-${label?.replace(/\s+/g, '-').toLowerCase()}`}
                    className="checkbox-label"
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox;