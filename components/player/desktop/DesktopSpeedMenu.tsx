import React from 'react';

interface DesktopSpeedMenuProps {
    showSpeedMenu: boolean;
    playbackRate: number;
    speeds: number[];
    onSpeedChange: (speed: number) => void;
    onToggleSpeedMenu: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export function DesktopSpeedMenu({
    showSpeedMenu,
    playbackRate,
    speeds,
    onSpeedChange,
    onToggleSpeedMenu,
    onMouseEnter,
    onMouseLeave
}: DesktopSpeedMenuProps) {
    return (
        <div className="relative">
            <button
                onClick={onToggleSpeedMenu}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className="btn-icon text-xs font-semibold min-w-[2.5rem]"
                aria-label="Playback speed"
            >
                {playbackRate}x
            </button>

            {/* Speed Menu */}
            {showSpeedMenu && (
                <div
                    className="absolute bottom-full right-0 mb-2 bg-[var(--glass-bg)] backdrop-blur-[25px] saturate-[180%] rounded-[var(--radius-2xl)] border border-[var(--glass-border)] shadow-[var(--shadow-md)] p-2 min-w-[5rem]"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {speeds.map((speed) => (
                        <button
                            key={speed}
                            onClick={() => onSpeedChange(speed)}
                            className={`w-full px-3 py-2 rounded-[var(--radius-2xl)] text-sm font-medium transition-colors ${playbackRate === speed
                                    ? 'bg-[var(--accent-color)] text-white'
                                    : 'text-[var(--text-color)] hover:bg-[color-mix(in_srgb,var(--accent-color)_15%,transparent)]'
                                }`}
                        >
                            {speed}x
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
