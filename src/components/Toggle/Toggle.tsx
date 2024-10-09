import { useRef, useState } from "react";
import "./toggle.scss";
import ToggleProps from "./toggleProps";

export default function Toggle({ ...props }: ToggleProps) {

    const [checked, setChecked] = useState<boolean>();

    const input = useRef(null);

    const handleValueChange = (e: any) => {
        setChecked(e.target.checked);
        props.onChange ? props.onChange(e) : undefined;
    }

    return(

        <label className={`toggle-main ${props.disabled !== undefined ? props.disabled ? "disabled" : "": ""}`}>
            <span>{props.label ? props.label : "Toggle"}</span>
            <input
                ref={input}
                className="input"
                type="checkbox"
                onChange={handleValueChange}
                disabled={props.disabled ? props.disabled : false}
            />
            <div 
                className={`toggle-div ${props.variant ? props.variant : "rounded"}`}
                style={{ backgroundColor: checked ? (props.checkedBackgroundColor ? props.checkedBackgroundColor : "#2196F3") : (props.uncheckedBackgroundColor ? props.uncheckedBackgroundColor : "lightgray") }}
            >
                <span
                    className={`moving-part ${props.variant ? props.variant : "rounded"}`}
                    style={{ backgroundColor: checked ? (props.checkedForegroundColor ? props.checkedForegroundColor : "white") : (props.uncheckedForegroundColor ? props.uncheckedForegroundColor : "white") }}
                ></span>
            </div>
        </label>

    );

}