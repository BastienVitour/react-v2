import { ReactNode } from "react";

export default interface SelectProps {
  children?: ReactNode;
  name?: string;
  id?: string;
  size?: number;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  multiple?: boolean;
}
