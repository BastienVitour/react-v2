export default interface ButtonProps {
    text?: string;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info";
    click?: (...args: any[]) => void;
    disabled?: boolean;
}