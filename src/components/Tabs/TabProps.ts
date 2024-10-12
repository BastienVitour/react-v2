import { ReactNode } from "react";

export interface TabsProps {
  onClick?: (...args: any[]) => void;
  id?: string;
  label?: string;
  children?: ReactNode;
  color?: string;
  activeTab: string | undefined;
  defaultId?: string;
}

export interface TabsContextProps {
  onClick?: (...args: any[]) => void;
  id?: string;
  label?: string;
  list: string[];
  children: (
    activeTab: string | undefined,
    setActiveTab: (tab: string) => void
  ) => ReactNode;
  color?: string;
  enabled?: boolean;
  defaultId: string;
}
