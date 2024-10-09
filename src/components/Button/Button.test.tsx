import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import Button from "./Button";
import ButtonProps from './buttonProps';

test("Renders Button", () => {
    const buttonProps: ButtonProps = {
        text: "Submit",
        variant: "danger",
        disabled: true,
        size: "lg"
    };

    const { container } =  render(
        <Button 
            text={buttonProps.text} 
            variant={buttonProps.variant} 
            disabled={buttonProps.disabled} 
            size={buttonProps.size}
        />
    );

    expect(container.firstChild).toHaveTextContent(RegExp("^Submit$"));
    expect(container.firstChild).toHaveClass("btn-danger");
    expect(container.firstChild).toHaveAttribute("disabled");
    expect(container.firstChild).toHaveClass("btn-lg");
    
});