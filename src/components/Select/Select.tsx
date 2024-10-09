import "./Select.css";
import SelectProps from "./SelectProps";

export default function Select({ ...props }: SelectProps) {
  return (
    <select
      name={props.name ? props.name : undefined}
      id={props.id ? props.id : undefined}
      size={props.size ? props.size : undefined}
      autoComplete={props.autoComplete ? props.autoComplete : undefined}
      form={props.form ? props.form : undefined}
      disabled={props.disabled ? props.disabled : false}
      required={props.required ? props.required : false}
      autoFocus={props.autoFocus ? props.autoFocus : false}
      multiple={props.multiple ? props.multiple : false}
    >
      {props?.children}
    </select>
  );
}
