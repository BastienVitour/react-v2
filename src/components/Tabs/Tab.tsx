import { useState } from "react";
import { TabsProps, TabsContextProps } from "./TabProps";
import Button from "../Button/Button";
import "./Tab.scss";

function TabPanel({ ...props }: TabsProps) {
  return (
    <div
      className={`tabPanel ${props?.activeTab === props.id ? "active" : ""}`}
    >
      {props.children}
    </div>
  );
}

function TabContext({ ...props }: TabsContextProps) {
  const [activeTab, setActiveTab] = useState<string | undefined>(
    props?.defaultId
  );

  return (
    <div className="tabContext">
      <div className="tabList">
        {props?.list?.map((element: string) => {
          return (
            <Button
              class="custom-button"
              text={element}
              onClick={() => {
                setActiveTab(element);
              }}
            ></Button>
          );
        })}
      </div>
      {props.children ? props.children(activeTab, setActiveTab) : null}
    </div>
  );
}

export { TabContext, TabPanel };
