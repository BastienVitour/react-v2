import AlertProps from "./alertProps";
import "./alert.scss";

export default function Alert({ ...props }: AlertProps) {

    return(

        <div 
            className={`alert alert-${props.variant ? props.variant : "primary"} horizontal-${props.horizontalAlign ? props.horizontalAlign : "middle"} vertical-${props.verticalAlign ? props.verticalAlign : "center"}`}
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