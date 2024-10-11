import "./Select.scss";
import SelectProps from "./SelectProps";

export default function Select({ ...props }: SelectProps) {
  return (
    <div className="select-container">
      <div className="select">
        <select
          className={`standard-select select-${props.size ? props.size : "md"}`}
          name={props.name ? props.name : undefined}
          id={props.id ? props.id : undefined}
          autoComplete={props.autoComplete ? props.autoComplete : undefined}
          form={props.form ? props.form : undefined}
          disabled={props.disabled ? props.disabled : false}
          required={props.required ? props.required : false}
          autoFocus={props.autoFocus ? props.autoFocus : false}
          multiple={props.multiple ? props.multiple : false}
        >
          {props?.children}
        </select>
      </div>
      {props.required ? <p className="required">*</p> : undefined}
    </div>
  );
}
