import { ChangeEvent } from 'react';

export default interface RadioProps {
  id?: string;
  label?: string;
  required?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  value?: string;
  color?: string;
}