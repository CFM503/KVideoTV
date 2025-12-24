import { MobileControls } from './MobileControls';
import { useMobilePlayerState } from '../hooks/useMobilePlayerState';
import { useMobilePlayerLogic } from '../hooks/useMobilePlayerLogic';

interface MobileControlsWrapperProps {
    src: string;
    state: ReturnType<typeof useMobilePlayerState>['state'];
    logic: ReturnType<typeof useMobilePlayerLogic>;
    refs: ReturnType<typeof useMobilePlayerState>['refs'];
}

export function MobileControlsWrapper({ src, state, logic, refs }: MobileControlsWrapperProps) {
    const {
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        isFullscreen,
        showControls,
        playbackRate,
        showSpeedMenu,
        showVolumeMenu,
        showMoreMenu,
        isPiPSupported,
        viewportWidth,
        setShowMoreMenu,
        setShowVolumeMenu,
        setShowSpeedMenu,
    } = state;

    const {
        progressBarRef,
        videoRef,
    } = refs;

    const {
        togglePlay,
        skipVideo,
        toggleMute,
        toggleFullscreen,
        togglePictureInPicture,
        changePlaybackSpeed,
        handleCopyLink,
        handleProgressClick,
        handleProgressTouchStart,
        handleProgressTouchMove,
        handleProgressTouchEnd,
        formatTime,
    } = logic;

    const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const isCompactLayout = viewportWidth < 640;
    const isProxied = src.includes('/api/proxy'); // Calculated isProxied

    return (
        <MobileControls
            showControls={showControls}
            isCompactLayout={isCompactLayout}
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            volume={volume}
            isMuted={isMuted}
            isFullscreen={isFullscreen}
            playbackRate={playbackRate}
            showMoreMenu={showMoreMenu}
            showVolumeMenu={showVolumeMenu}
            showSpeedMenu={showSpeedMenu}
            isPiPSupported={isPiPSupported}
            isProxied={isProxied} // Passed isProxied
            progressBarRef={progressBarRef}
            onTogglePlay={togglePlay}
            onSkipVideo={skipVideo}
            onToggleMute={toggleMute}
            onToggleFullscreen={toggleFullscreen}
            onToggleMoreMenu={() => setShowMoreMenu(!showMoreMenu)} // Updated to use destructured setter
            onToggleVolumeMenu={() => setShowVolumeMenu(!showVolumeMenu)} // Updated to use destructured setter
            onToggleSpeedMenu={() => setShowSpeedMenu(!showSpeedMenu)} // Updated to use destructured setter
            onTogglePiP={togglePictureInPicture}
            onVolumeChange={(newVolume) => {
                // Volume change logic
            }} // Updated onVolumeChange
            onSpeedChange={changePlaybackSpeed}
            onCopyLink={handleCopyLink}
            onProgressClick={handleProgressClick}
            onProgressTouchStart={handleProgressTouchStart}
            onProgressTouchMove={handleProgressTouchMove}
            onProgressTouchEnd={handleProgressTouchEnd}
            formatTime={formatTime}
            speeds={speeds}
        />
    );
}
