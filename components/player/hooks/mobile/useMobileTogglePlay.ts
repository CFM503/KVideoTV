import { useCallback } from 'react';

interface UseMobileTogglePlayProps {
    videoRef: React.RefObject<HTMLVideoElement>;
    isPlaying: boolean;
    isTogglingRef: React.MutableRefObject<boolean>;
    setShowMoreMenu: (show: boolean) => void;
    setShowVolumeMenu: (show: boolean) => void;
    setShowSpeedMenu: (show: boolean) => void;
}

export function useMobileTogglePlay({
    videoRef,
    isPlaying,
    isTogglingRef,
    setShowMoreMenu,
    setShowVolumeMenu,
    setShowSpeedMenu
}: UseMobileTogglePlayProps) {
    return useCallback(async () => {
        if (!videoRef.current || isTogglingRef.current) return;
        isTogglingRef.current = true;

        try {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                setShowMoreMenu(false);
                setShowVolumeMenu(false);
                setShowSpeedMenu(false);
                await videoRef.current.play();
            }
        } catch (error) {
            console.warn('Play/pause error:', error);
        } finally {
            isTogglingRef.current = false;
        }
    }, [isPlaying, videoRef, isTogglingRef, setShowMoreMenu, setShowVolumeMenu, setShowSpeedMenu]);
}
