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
    color?: string;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    width?: string;
};

export default InputFieldProps;
