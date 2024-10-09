import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import Button from "./Button";
import ButtonProps from './buttonProps';

test("Renders the main page", () => {
    const buttonProps: ButtonProps = {
        text: "Submit",
        variant: "danger",
        disabled: true
    };

    const { container } =  render(<Button text={buttonProps.text} variant={buttonProps.variant} disabled={buttonProps.disabled} />);

    expect(container.firstChild).toHaveTextContent(RegExp("^Submit$"));
    expect(container.firstChild).toHaveClass("btn-danger");
    expect(container.firstChild).toHaveAttribute("disabled");
    
});