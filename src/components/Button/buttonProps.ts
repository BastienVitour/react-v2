import { ReactNode } from "react";

export default interface ButtonProps {
    text?: string;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info";
    onClick?: (...args: any[]) => void;
    disabled?: boolean;
    children?: string | ReactNode[],
    size?: "xs" | "sm" | "md" | "lg" | "xl",
    class?: string;
    style?: Record<string, string>
}