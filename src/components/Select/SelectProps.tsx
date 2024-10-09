import { ReactNode } from "react";

export default interface SelectProps {
  children?: ReactNode;
  name?: string;
  id?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  multiple?: boolean;
  form?: string;
}
