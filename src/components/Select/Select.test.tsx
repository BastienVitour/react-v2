import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Select from "./Select";
import SelectProps from "./SelectProps";

test("Renders Button", () => {
  const selectProps: SelectProps = {
    name: "Options",
    required: false,
    disabled: true,
    autoFocus: true,
    size: "lg",
    multiple: true,
    id: "test",
  };

  const { container } = render(
    <Select
      name={selectProps.name}
      size={selectProps.size}
      disabled={selectProps.disabled}
      multiple={selectProps.multiple}
      id={selectProps.id}
    >
      <option>option1</option>
    </Select>
  );

  expect(container.firstChild).toHaveClass("select-lg");
  expect(container.firstChild).toHaveAttribute("disabled");
  expect(container.firstChild).toHaveAttribute("multiple");
});
