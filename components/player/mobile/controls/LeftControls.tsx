import React from 'react';
import { Icons } from '@/components/ui/Icon';
import { MobileVolumeMenu } from '../MobileVolumeMenu';

interface LeftControlsProps {
    isPlaying: boolean;
    onTogglePlay: () => void;
    onSkipVideo: (seconds: number, side: 'left' | 'right') => void;
    isMuted: boolean;
    volume: number;
    showVolumeMenu: boolean;
    onToggleVolumeMenu: () => void;
    onToggleMute: () => void;
    onVolumeChange: (volume: number) => void;
    currentTime: number;
    duration: number;
    formatTime: (seconds: number) => string;
    iconSize: number;
    buttonPadding: string;
    textSize: string;
    controlsGap: string;
}

export function LeftControls({
    isPlaying,
    onTogglePlay,
    onSkipVideo,
    isMuted,
    volume,
    showVolumeMenu,
    onToggleVolumeMenu,
    onToggleMute,
    onVolumeChange,
    currentTime,
    duration,
    formatTime,
    iconSize,
    buttonPadding,
    textSize,
    controlsGap,
}: LeftControlsProps) {
    return (
        <div className={`flex items-center ${controlsGap}`}>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onTogglePlay();
                }}
                className={`btn-icon ${buttonPadding} flex-shrink-0 touch-manipulation relative z-[60]`}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                style={{ WebkitTapHighlightColor: 'transparent' }}
            >
                {isPlaying ? <Icons.Pause size={iconSize} /> : <Icons.Play size={iconSize} />}
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onSkipVideo(10, 'left');
                }}
                className={`btn-icon ${buttonPadding} flex-shrink-0 touch-manipulation`}
                aria-label="后退 10 秒"
                style={{ WebkitTapHighlightColor: 'transparent' }}
            >
                <Icons.SkipBack size={iconSize} />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onSkipVideo(10, 'right');
                }}
                className={`btn-icon ${buttonPadding} flex-shrink-0 touch-manipulation`}
                aria-label="前进 10 秒"
                style={{ WebkitTapHighlightColor: 'transparent' }}
            >
                <Icons.SkipForward size={iconSize} />
            </button>

            <div className="relative">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleVolumeMenu();
                    }}
                    className={`btn-icon ${buttonPadding} flex-shrink-0 touch-manipulation`}
                    aria-label="音量"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                    {isMuted || volume === 0 ? <Icons.VolumeX size={iconSize} /> : <Icons.Volume2 size={iconSize} />}
                </button>

                <MobileVolumeMenu
                    showVolumeMenu={showVolumeMenu}
                    isCompactLayout={false}
                    isMuted={isMuted}
                    volume={volume}
                    onToggleMute={onToggleMute}
                    onVolumeChange={onVolumeChange}
                    onClose={onToggleVolumeMenu}
                />
            </div>

            <span className={`text-white ${textSize} font-medium tabular-nums whitespace-nowrap`}>
                {formatTime(currentTime)} / {formatTime(duration)}
            </span>
        </div>
    );
}
