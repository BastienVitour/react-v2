import { ReactNode } from 'react';

export interface RadioGroupProps {
  children: ReactNode;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  classes?: string;
}