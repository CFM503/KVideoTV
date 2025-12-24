import React from 'react';
import { LeftControls } from './controls/LeftControls';
import { RightControls } from './controls/RightControls';

interface FullControlsProps {
    isPlaying: boolean;
    isFullscreen: boolean;
    showVolumeMenu: boolean;
    showSpeedMenu: boolean;
    showMoreMenu: boolean;
    isMuted: boolean;
    volume: number;
    playbackRate: number;
    isPiPSupported: boolean;
    isProxied?: boolean;
    currentTime: number;
    duration: number;
    speeds: number[];
    formatTime: (seconds: number) => string;
    onTogglePlay: () => void;
    onSkipVideo: (seconds: number, side: 'left' | 'right') => void;
    onToggleFullscreen: () => void;
    onToggleVolumeMenu: () => void;
    onToggleSpeedMenu: () => void;
    onTogglePiP: () => void;
    onToggleMoreMenu: () => void;
    onToggleMute: () => void;
    onVolumeChange: (volume: number) => void;
    onSpeedChange: (speed: number) => void;
    onCopyLink: (type?: 'original' | 'proxy') => void;
    iconSize: number;
    buttonPadding: string;
    controlsGap: string;
    textSize: string;
}

export function FullControls({
    isPlaying,
    isFullscreen,
    showVolumeMenu,
    showSpeedMenu,
    showMoreMenu,
    isMuted,
    volume,
    playbackRate,
    isPiPSupported,
    isProxied,
    currentTime,
    duration,
    speeds,
    formatTime,
    onTogglePlay,
    onSkipVideo,
    onToggleFullscreen,
    onToggleVolumeMenu,
    onToggleSpeedMenu,
    onTogglePiP,
    onToggleMoreMenu,
    onToggleMute,
    onVolumeChange,
    onSpeedChange,
    onCopyLink,
    iconSize,
    buttonPadding,
    controlsGap,
    textSize
}: FullControlsProps) {
    return (
        <div className={`flex items-center ${controlsGap}`}>
            <LeftControls
                isPlaying={isPlaying}
                onTogglePlay={onTogglePlay}
                onSkipVideo={onSkipVideo}
                isMuted={isMuted}
                volume={volume}
                showVolumeMenu={showVolumeMenu}
                onToggleVolumeMenu={onToggleVolumeMenu}
                onToggleMute={onToggleMute}
                onVolumeChange={onVolumeChange}
                currentTime={currentTime}
                duration={duration}
                formatTime={formatTime}
                iconSize={iconSize}
                buttonPadding={buttonPadding}
                textSize={textSize}
                controlsGap={controlsGap}
            />

            <div className="flex-1" />

            <RightControls
                playbackRate={playbackRate}
                showSpeedMenu={showSpeedMenu}
                showMoreMenu={showMoreMenu}
                onToggleSpeedMenu={onToggleSpeedMenu}
                speeds={speeds}
                onSpeedChange={onSpeedChange}
                isPiPSupported={isPiPSupported}
                isProxied={isProxied}
                onTogglePiP={onTogglePiP}
                onToggleMoreMenu={onToggleMoreMenu}
                onToggleVolumeMenu={onToggleVolumeMenu}
                onCopyLink={onCopyLink}
                isMuted={isMuted}
                volume={volume}
                isFullscreen={isFullscreen}
                onToggleFullscreen={onToggleFullscreen}
                iconSize={iconSize}
                buttonPadding={buttonPadding}
                textSize={textSize}
                controlsGap={controlsGap}
            />
        </div>
    );
}
