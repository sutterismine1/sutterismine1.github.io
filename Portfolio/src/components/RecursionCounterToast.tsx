import React from 'react';
import './RecursionCounterToast.css';

interface RecursionCounterToastProps {
    count: number;
}

export const RecursionCounterToast: React.FC<RecursionCounterToastProps> = ({ count }) => {

    return (
        <div id="rec" className="recursion-counter-toast">
            Recursion detected. This page has referenced itself {count} times.
        </div>
    );
};