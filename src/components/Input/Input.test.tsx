import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from "./InputField";
import InputFieldProps from "./inputProps";

const testInputProps: InputFieldProps = {
    type: "text",
    label: "Username",
    placeholder: "Enter your username",
    required: true,
    minLength: 3,
    maxLength: 15,
};

describe("InputField Component", () => {
    test("Renders the input field with correct attributes", () => {
        const { container, getByLabelText } = render(
            <InputField {...testInputProps} />
        );

        const input = getByLabelText("Username");

        expect(container.firstChild).toHaveTextContent('Username');
        expect(container.firstChild).toHaveClass("input-field-container");
        expect(input).toHaveAttribute("required");
        expect(input).toHaveAttribute("minLength", '3');
        expect(input).toHaveAttribute("maxLength", '15');
        expect(input).toHaveAttribute("placeholder", 'Enter your username');
        expect(input).toHaveAttribute("type", 'text');
        expect(input).toHaveClass("input-field");
    });

    test("Shows error message for minLength validation", () => {
        const { getByLabelText, getByText } = render(
            <InputField {...testInputProps} />
        );
        const input = getByLabelText("Username");
        fireEvent.change(input, { target: { value: "a" } });
        fireEvent.blur(input);
        expect(getByText("Minimum length is 3 characters.")).toBeInTheDocument();
        expect(input).toHaveAttribute("aria-invalid", "true");
    });

    test("Removes error message when input meets minLength", () => {
        const { getByLabelText, queryByText } = render(
            <InputField {...testInputProps} />
        );
        const input = getByLabelText("Username");

        // Simulate an invalid input
        fireEvent.change(input, { target: { value: "a" } });
        fireEvent.blur(input);
        expect(queryByText("Minimum length is 3 characters.")).toBeInTheDocument();

        // Simulate a valid input
        fireEvent.change(input, { target: { value: "validUsername" } });
        expect(queryByText("Minimum length is 3 characters.")).not.toBeInTheDocument();
        expect(input).toHaveAttribute("aria-invalid", "false");
    });

    test("Shows error message when required field is empty", () => {
        const { getByLabelText, getByText } = render(
            <InputField {...testInputProps} />
        );
        const input = getByLabelText("Username");
        fireEvent.change(input, { target: { value: "" } });
        fireEvent.blur(input);

        expect(getByText("This field is required.")).toBeInTheDocument();
        expect(input).toHaveAttribute("aria-invalid", "true");
    });

    test("Displays error when input exceeds maxLength", () => {
        const { getByLabelText, getByText } = render(
            <InputField {...testInputProps} />
        );
        const input = getByLabelText("Username");
        fireEvent.change(input, { target: { value: "a".repeat(16) } });
        fireEvent.blur(input);
        expect(getByText("Maximum length is 15 characters.")).toBeInTheDocument();
        expect(input).toHaveAttribute("aria-invalid", "true");
    });

    test('displays pattern validation error when input does not match the pattern', () => {
        const mockOnChange = jest.fn();
        render(
            <InputField
                label="Email"
                type="text"
                value=""
                pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
                onChange={mockOnChange}
            />
        );
        const inputElement = screen.getByLabelText(/email/i);
        fireEvent.change(inputElement, { target: { value: 'invalidemail' } });
        fireEvent.blur(inputElement);
        expect(screen.getByText('The input format is incorrect.')).toBeInTheDocument();
    });

});
