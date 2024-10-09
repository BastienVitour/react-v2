import ButtonProps from "./buttonProps";
import "./button.scss";

export default function Button({ ...props }: ButtonProps) {

    return(
        <button 
            onClick={props.click ? props.click : undefined} 
            className={`btn btn-${props.variant ? props.variant : "primary"}`}
            disabled={props.disabled ? props.disabled : false}
        >
            {props.text ? props.text : "Button"}
        </button>
    );

}