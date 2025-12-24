import React from 'react';

interface MobileSkipIndicatorProps {
    showSkipIndicator: boolean;
    skipSide: 'left' | 'right' | null;
    skipAmount: number;
}

export function MobileSkipIndicator({
    showSkipIndicator,
    skipSide,
    skipAmount
}: MobileSkipIndicatorProps) {
    if (!showSkipIndicator || !skipSide) return null;

    return (
        <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${skipSide === 'left' ? 'left-8' : 'right-8'}`}>
            <div className="text-white text-3xl font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] animate-scale-in">
                {skipSide === 'left' ? '-' : '+'}{skipAmount}
            </div>
        </div>
    );
}
