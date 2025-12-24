import React from 'react';
import { DesktopOverlay } from './DesktopOverlay';
import { useDesktopPlayerState } from '../hooks/useDesktopPlayerState';

interface DesktopOverlayWrapperProps {
    state: ReturnType<typeof useDesktopPlayerState>['state'];
    onTogglePlay: () => void;
}

export function DesktopOverlayWrapper({ state, onTogglePlay }: DesktopOverlayWrapperProps) {
    const {
        isLoading,
        isPlaying,
        showSkipForwardIndicator,
        showSkipBackwardIndicator,
        skipForwardAmount,
        skipBackwardAmount,
        isSkipForwardAnimatingOut,
        isSkipBackwardAnimatingOut,
        showToast,
        toastMessage,
    } = state;

    return (
        <DesktopOverlay
            isLoading={isLoading}
            isPlaying={isPlaying}
            showSkipForwardIndicator={showSkipForwardIndicator}
            showSkipBackwardIndicator={showSkipBackwardIndicator}
            skipForwardAmount={skipForwardAmount}
            skipBackwardAmount={skipBackwardAmount}
            isSkipForwardAnimatingOut={isSkipForwardAnimatingOut}
            isSkipBackwardAnimatingOut={isSkipBackwardAnimatingOut}
            showToast={showToast}
            toastMessage={toastMessage}
            onTogglePlay={onTogglePlay}
        />
    );
}
