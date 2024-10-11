import React, { useState } from 'react';
import RadioProps  from './radioProps';
import { RadioGroupProps } from './radiogroupProps';
import Radio from './Radio';

const RadioGroup: React.FC<RadioGroupProps> = ({ children, name, value, onChange }) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(value || null);

    const handleChange = (newValue: string) => {
        setSelectedValue(newValue);
        onChange?.(newValue);
    };

    return (
        <div role="radiogroup" aria-labelledby={name}>
            <label id={name} className="radio-group-label">{name}</label>
            {React.Children.map(children, (child) =>
                React.isValidElement<RadioProps>(child) && child.type === Radio
                    ? React.cloneElement(child, {
                        checked: child.props.value === selectedValue,
                        onChange: () => handleChange(child.props.value || ''),
                    })
                    : child
            )}
        </div>
    );
};

export default RadioGroup;