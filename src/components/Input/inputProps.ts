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

export default InputFieldProps;