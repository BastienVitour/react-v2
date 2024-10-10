import React from 'react';
import { LoaderProps } from './loaderProps';
import './loader.css';

const Loader: React.FC<LoaderProps> = ({
    type = 'spinner',
    color = '#007bff',
    size = 'md',
    progress,
    label,
    progressLabel = false,
}) => {
    const progressBar = (
        <div
            className={`loader-progress loader-${size}`}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <div
                className="loader-progress-bar"
                style={{
                    width: `${progress}%`,
                    backgroundColor: color,
                }}
            >
                {progressLabel && (
                    <span className="loader-progress-label">
                        {`${progress}%`}
                    </span>
                )}
            </div>
        </div>
    );

    return (
        <div className={`loader-container loader-${size}`}>
            {label && <div className="loader-external-label">{label}</div>}
            {type === 'progress' ? progressBar : (
                <div className={`loader-spinner loader-${size}`} role="status" aria-label={label || 'Loading'}>
                    <div
                        className={`spinner-circle loader-${size}`}
                        style={{
                            borderColor: `${color} transparent ${color} transparent`,
                        }}
                    ></div>
                </div>
            )}
        </div>
    );
};

export default Loader;