import { ReactNode } from "react";

export interface TabListProps {
  label?: string;
  onClick?: (...args: any[]) => void;
  children?: ReactNode;
}

export interface TabPanelProps {
  children?: ReactNode;
}

export interface TabsProps {
  children?: ReactNode;
  color?: string;
}
