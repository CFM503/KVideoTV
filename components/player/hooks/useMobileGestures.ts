import { MutableRefObject } from 'react';
import { useDoubleTap } from '@/lib/hooks/useMobilePlayer';

interface UseMobileGesturesProps {
    skipVideo: (seconds: number, side: 'left' | 'right') => void;
    showSkipIndicator: boolean;
    showControls: boolean;
    setShowControls: (show: boolean) => void;
    controlsTimeoutRef: MutableRefObject<NodeJS.Timeout | null>;
    isPlaying: boolean;
    togglePlay: () => void;
}

export function useMobileGestures({
    skipVideo,
    showSkipIndicator,
    showControls,
    setShowControls,
    controlsTimeoutRef,
    isPlaying,
    togglePlay,
}: UseMobileGesturesProps) {
    const { handleTap } = useDoubleTap({
        onDoubleTapLeft: () => skipVideo(10, 'left'),
        onDoubleTapRight: () => skipVideo(10, 'right'),
        onSkipContinueLeft: () => skipVideo(10, 'left'),
        onSkipContinueRight: () => skipVideo(10, 'right'),
        isSkipModeActive: showSkipIndicator,
        onSingleTap: () => {
            if (!showControls) {
                setShowControls(true);
                if (controlsTimeoutRef.current) {
                    clearTimeout(controlsTimeoutRef.current);
                }
                if (isPlaying) {
                    controlsTimeoutRef.current = setTimeout(() => {
                        setShowControls(false);
                    }, 3000);
                }
            } else {
                togglePlay();
                if (controlsTimeoutRef.current) {
                    clearTimeout(controlsTimeoutRef.current);
                }
                if (isPlaying) {
                    controlsTimeoutRef.current = setTimeout(() => {
                        setShowControls(false);
                    }, 3000);
                }
            }
        },
    });

    return { handleTap };
}
