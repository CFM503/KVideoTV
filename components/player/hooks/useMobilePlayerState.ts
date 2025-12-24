import { useState, useRef } from 'react';

export function useMobilePlayerState() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    // Refs for timeouts and tracking
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const skipTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isDraggingProgressRef = useRef(false);
    const menuIdleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const submenuIdleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isTogglingRef = useRef(false);
    const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // State
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [showSpeedMenu, setShowSpeedMenu] = useState(false);
    const [showVolumeMenu, setShowVolumeMenu] = useState(false);
    const [showMoreMenu, setShowMoreMenu] = useState(false);
    const [isPiPSupported, setIsPiPSupported] = useState(false);
    const [skipAmount, setSkipAmount] = useState(0);
    const [skipSide, setSkipSide] = useState<'left' | 'right' | null>(null);
    const [showSkipIndicator, setShowSkipIndicator] = useState(false);
    const [wasPlayingBeforeMenu, setWasPlayingBeforeMenu] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [showToast, setShowToast] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0);

    return {
        refs: {
            videoRef,
            containerRef,
            progressBarRef,
            controlsTimeoutRef,
            skipTimeoutRef,
            isDraggingProgressRef,
            menuIdleTimeoutRef,
            submenuIdleTimeoutRef,
            isTogglingRef,
            toastTimeoutRef
        },
        state: {
            isPlaying, setIsPlaying,
            currentTime, setCurrentTime,
            duration, setDuration,
            volume, setVolume,
            isMuted, setIsMuted,
            isFullscreen, setIsFullscreen,
            showControls, setShowControls,
            isLoading, setIsLoading,
            playbackRate, setPlaybackRate,
            showSpeedMenu, setShowSpeedMenu,
            showVolumeMenu, setShowVolumeMenu,
            showMoreMenu, setShowMoreMenu,
            isPiPSupported, setIsPiPSupported,
            skipAmount, setSkipAmount,
            skipSide, setSkipSide,
            showSkipIndicator, setShowSkipIndicator,
            wasPlayingBeforeMenu, setWasPlayingBeforeMenu,
            toastMessage, setToastMessage,
            showToast, setShowToast,
            viewportWidth, setViewportWidth
        }
    };
}
