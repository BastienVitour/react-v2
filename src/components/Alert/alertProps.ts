import { ReactNode } from "react";

export default interface AlertProps {
    text?: string;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info";
    verticalAlign?: "top" | "middle" | "bottom";
    horizontalAlign?: "start" | "center" | "end";
    children?: string | ReactNode[];
    autoClose?: boolean;
}