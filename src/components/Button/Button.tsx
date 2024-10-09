import ButtonProps from "./buttonProps";
import "./button.scss";

export default function Button({ ...props }: Readonly<ButtonProps>) {

    return(
        <button 
            onClick={props.click ? props.click : undefined} 
            className={`btn btn-${props.variant ? props.variant : "primary"} btn-${props.size ? props.size : "md"}`}
            disabled={props.disabled ? props.disabled : false}
        >
            {
                props.children
                ? 
                props.children
                :
                props.text ? props.text : "Button"
            }
        </button>
    );

}