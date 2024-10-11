import { ReactNode } from 'react';

export default interface CardProps {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  imagePosition?: 'top' | 'bottom' | 'left' | 'right';
  actions?: ReactNode;
  classes?: string;
  layout?: 'vertical' | 'horizontal';
  variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "default";
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}