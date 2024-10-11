export default interface CheckboxProps {
    label?: string;
    checked?: boolean;
    classes?: string;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "default";
    defaultChecked?: boolean;
    disabled?: boolean;
    id?: string;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    value?: any;
    required?: boolean;
}