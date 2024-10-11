import { useState } from "react";
import { TabsProps } from "./TabProps";
import Button from "../Button/Button";
import "./Tab.scss";

function TabPanel({ ...props }: TabsProps) {
  return (
    <div className={`tabPanel ${props.enabled ? "active" : ""}`}>
      {props.children}
    </div>
  );
}

function TabList({ ...props }: TabsProps) {
  return <div>{props.children}</div>;
}

function TabButton({ ...props }: TabsProps) {
  return <Button onClick={setSelectedTab(props.id)}>{props.label}</Button>;
}

function TabContext({ ...props }: TabsProps) {
  return <>{props.children}</>;
}

export { TabContext, TabList, TabPanel, TabButton };
