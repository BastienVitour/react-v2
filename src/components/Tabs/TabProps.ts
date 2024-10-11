import { ReactNode } from "react";

export interface TabsProps {
  onClick?: (...args: any[]) => void;
  id?: string;
  label?: string;
  children?: ReactNode;
  color?: string;
  enabled?: boolean;
  defaultId?: string;
}
