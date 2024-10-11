import { ReactNode } from "react";

export default interface AlertProps {
    text?: string;
    type?: "success" | "error" | "warning" | "info";
    children?: ReactNode;
    autoClose?: boolean;
    duration?: number;
    onClose?: () => void;
}