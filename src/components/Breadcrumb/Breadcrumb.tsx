import { Children } from "react";
import BreadcrumbProps from "./BreadcrumbProps";
import "./Breadcrumb.scss";

export default function Breadcrumb({ ...props }: BreadcrumbProps) {
  return (
    <div
      className={`breadcrumb ${
        props.underlined ? "breadcrumb-underlined" : ""
      }`}
    >
      {Children.map(props?.children, (child) => {
        return (
          <>
            <span className="breadcrumb-element">
              {props?.separator ? props?.separator : "/"}
            </span>
            <div className="breadcrumb-element">{child}</div>
          </>
        );
      })}
    </div>
  );
}
