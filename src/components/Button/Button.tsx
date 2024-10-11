import ButtonProps from "./buttonProps";
import "./button.scss";

export default function Button({ ...props }: Readonly<ButtonProps>) {

    return(
        <button 
            onClick={props.onClick ? props.onClick : undefined} 
            className={`btn btn-${props.variant ? props.variant : "primary"} btn-${props.size ? props.size : "md"} ` + (props.class ? props.class : "")}
            disabled={props.disabled ? props.disabled : false}
            style={props.style ? props.style : {}}
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