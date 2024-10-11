import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from './Loader';
import { LoaderProps } from './loaderProps';

describe('Loader Component', () => {
    const defaultProps: LoaderProps = {
        type: 'spinner',
        color: '#007bff',
        size: 'md',
    };

    it('renders a spinner loader by default', () => {
        render(<Loader {...defaultProps} />);
        
        const spinner = screen.getByRole('status', { name: /loading/i });
        
        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveClass('loader-spinner');
    });

    it('renders a progress loader when type is set to "progress"', () => {
        render(<Loader {...defaultProps} type="progress" progress={50} />);
        
        const progressBar = screen.getByRole('progressbar');
        
        expect(progressBar).toBeInTheDocument();
        expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    });

    it('displays progress percentage label when progressLabel is true', () => {
        render(<Loader {...defaultProps} type="progress" progress={75} progressLabel />);
        
        const label = screen.getByText('75%');
        
        expect(label).toBeInTheDocument();
        expect(label).toHaveClass('loader-progress-label');
    });

    it('applies custom color to spinner', () => {
        render(<Loader {...defaultProps} color="#ff5733" />);
        
        const spinnerCircle = screen.getByRole('status').querySelector('.spinner-circle');
        
        expect(spinnerCircle).toHaveStyle('border-color: #ff5733 transparent #ff5733 transparent');
    });

    it('applies custom color to progress bar', () => {
        render(<Loader {...defaultProps} type="progress" progress={60} color="#ff5733" />);
        
        const progressBar = screen.getByRole('progressbar').querySelector('.loader-progress-bar');
        
        expect(progressBar).toHaveStyle('background-color: #ff5733');
    });

    it('renders label if provided', () => {
        render(<Loader {...defaultProps} label="Loading data" />);
        
        const label = screen.getByText('Loading data');
        
        expect(label).toBeInTheDocument();
        expect(label).toHaveClass('loader-external-label');
    });

    it('applies size classes correctly', () => {
        render(<Loader {...defaultProps} size="lg" />);
        
        const loaderContainer = screen.getByRole('status', { name: /loading/i }).closest('.loader-container');
        
        expect(loaderContainer).toHaveClass('loader-lg');
    });

    it('sets aria attributes correctly for progress loader', () => {
        render(<Loader {...defaultProps} type="progress" progress={40} />);
        
        const progressBar = screen.getByRole('progressbar');
        
        expect(progressBar).toHaveAttribute('aria-valuemin', '0');
        expect(progressBar).toHaveAttribute('aria-valuemax', '100');
        expect(progressBar).toHaveAttribute('aria-valuenow', '40');
    });
});
