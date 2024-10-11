import { useState } from "react";
import { TabsProps, TabListProps, TabPanelProps } from "./TabProps";
import Button from "../Button/Button";

function TabPanel({ ...props }: TabPanelProps) {
  return <>{props.children}</>;
}

function TabList({ ...props }: TabsProps) {
  return <div>{props.children}</div>;
}

function TabButton({ ...props }: TabListProps) {
  return <Button onClick={props.onClick}>{props.label}</Button>;
}

function TabContext({ ...props }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState<string>();

  return <>{props.children}</>;
}

export { TabContext, TabList, TabPanel, TabButton };
