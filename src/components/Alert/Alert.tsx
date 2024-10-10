import AlertProps from "./alertProps";
import "./alert.scss";

const verticalAlignMapping = {
    "top": "5%",
    "middle": "50%",
    "bottom": "95%"
}

const horizontalAlignMapping = {
    "start": "5%",
    "center": "50%",
    "end": "95%"
}

export default function Alert({ ...props }: AlertProps) {

    return(

        <div 
            className={`alert alert-${props.variant ? props.variant : "primary"}`}
            style={{ top: props.verticalAlign ? verticalAlignMapping[props.verticalAlign] : "95%", left: props.horizontalAlign ? horizontalAlignMapping[props.horizontalAlign] : "95%" }}
        >
            {
                props.children
                ? 
                props.children
                :
                props.text ? props.text : "Alert"
            }
        </div>

    );

}