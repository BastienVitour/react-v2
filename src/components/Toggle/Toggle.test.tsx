import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import Toggle from "./Toggle";
import ToggleProps from './toggleProps';

describe("Toggle component", () => {
    test("Renders Toggle with corect props", () => {
        const toggleProps: ToggleProps = {
            label: "Switch",
            variant: "rectangular",
            disabled: true
        };
    
        const { container, getByLabelText } = render(<Toggle {...toggleProps} />);
    
        const input = getByLabelText("Switch");
        const toggleDiv = container.getElementsByClassName("toggle-div")[0];
    
        expect(container.firstChild).toHaveTextContent(RegExp("^Switch$"));
        expect(container.firstChild).toHaveClass("disabled");
        expect(input).toHaveAttribute("disabled");
        expect(toggleDiv).toHaveClass("rectangular");
        expect(toggleDiv.firstChild).toHaveClass("rectangular");
        
    });
})
