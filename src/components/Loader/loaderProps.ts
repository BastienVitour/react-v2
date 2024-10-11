export interface LoaderProps {
    type?: 'spinner' | 'progress';
    color?: string;
    size?: 'sm' | 'md' | 'lg';
    progress?: number;
    label?: string;
    progressLabel?: boolean;
}