
import React from 'react';

export const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 14l-4 4 2.293 2.293a1 1 0 010 1.414L8 22m11-11l2.293 2.293a1 1 0 010 1.414L16 18l-4 4 2.293 2.293a1 1 0 010 1.414L12 22" />
    </svg>
);
