import { ReactNode } from "react";

export default interface BreadcrumbProps {
  children?: ReactNode;
  underlined?: boolean;
  separator?: string;
}
