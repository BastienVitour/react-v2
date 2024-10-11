import { createContext, useContext } from "react";
import { TabsProps } from "./TabProps";
import Button from "../Button/Button";
import "./Tab.scss";

function TabPanel({ ...props }: TabsProps) {
  const active = useContext(TabsContext);
  return (
    <div className={`tabPanel ${props.enabled ? "active" : ""}`}>
      {props.children}
    </div>
  );
}

function TabList({ ...props }: TabsProps) {
  return <div className="tabList">{props.children}</div>;
}

function TabButton({ ...props }: TabsProps) {
  return <Button onClick={props.onClick}>{props.label}</Button>;
}

function TabContext({ ...props }: TabsProps) {
  const TabsContext = createContext(props?.defaultId);

  return (
    <TabsContext.Provider value={props?.defaultId}>
      <div className="tabContext">{props.children}</div>
    </TabsContext.Provider>
  );
}

export { TabContext, TabList, TabPanel, TabButton };
