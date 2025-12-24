import React, { RefObject } from 'react';

interface MobileProgressBarProps {
    progressBarRef: RefObject<HTMLDivElement | null>;

    currentTime: number;
    duration: number;
    onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    onProgressTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
    onProgressTouchMove: (e: React.TouchEvent<HTMLDivElement>) => void;
    onProgressTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => void;
}

export function MobileProgressBar({
    progressBarRef,
    currentTime,
    duration,
    onProgressClick,
    onProgressTouchStart,
    onProgressTouchMove,
    onProgressTouchEnd
}: MobileProgressBarProps) {
    return (
        <div className="px-4 pb-2">
            <div
                ref={progressBarRef}
                className="h-1 bg-white/30 rounded-full cursor-pointer"
                onClick={onProgressClick}
                onTouchStart={onProgressTouchStart}
                onTouchMove={onProgressTouchMove}
                onTouchEnd={onProgressTouchEnd}
            >
                <div
                    className="h-full bg-[var(--accent-color)] rounded-full relative"
                    style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                </div>
            </div>
        </div>
    );
}
