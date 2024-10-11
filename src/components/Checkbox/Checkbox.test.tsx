import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from './Checkbox';
import CheckboxProps from './checkboxProps';

describe('Checkbox Component', () => {
    const defaultProps: CheckboxProps = {
        label: 'Test Checkbox',
        id: 'test-checkbox',
        onChange: jest.fn(),
    };

    it('renders with default props', () => {
        render(<Checkbox {...defaultProps} />);
        
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
        expect(checkbox).not.toBeDisabled();
    });

    it('renders with label', () => {
        render(<Checkbox {...defaultProps} label="Test Label" />);
        
        const label = screen.getByText('Test Label');
        expect(label).toBeInTheDocument();
    });

    it('handles defaultChecked prop', () => {
        render(<Checkbox {...defaultProps} defaultChecked={true} />);
        
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    it('handles checked prop correctly', () => {
        render(<Checkbox {...defaultProps} checked={true} />);
        
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    it('calls onChange when clicked', () => {
        render(<Checkbox {...defaultProps} />);
        
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        
        expect(defaultProps.onChange).toHaveBeenCalledWith(true);
    });

    it('disables the checkbox when disabled prop is true', () => {
        render(<Checkbox {...defaultProps} disabled={true} />);
        
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });

    it('renders indeterminate state correctly', () => {
        render(<Checkbox {...defaultProps} indeterminate={true} />);
        
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveAttribute('data-indeterminate', 'true');
        expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
    });

    it('applies custom class names', () => {
        render(<Checkbox {...defaultProps} classes="custom-class" />);
        
        const checkboxContainer = screen.getByText('Test Checkbox').closest('div');
        expect(checkboxContainer).toHaveClass('custom-class');
    });

    it('handles size and variant props', () => {
        render(<Checkbox {...defaultProps} size="lg" variant="secondary" />);
        
        const checkboxContainer = screen.getByText('Test Checkbox').closest('div');
        expect(checkboxContainer).toHaveClass('checkbox-lg');
        expect(checkboxContainer).toHaveClass('checkbox-secondary');
    });
});