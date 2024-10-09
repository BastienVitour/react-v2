export default interface ToggleProps {
    label?: string;
    variant?: "rectangular" | "rounded";
    uncheckedBackgroundColor?: string;
    uncheckedForegroundColor?: string;
    checkedBackgroundColor?: string;
    checkedForegroundColor?: string;
    disabled?: boolean;
    onChange?: (...args: any[]) => void;
}