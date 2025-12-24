import { HistoryItem } from './HistoryItem';
import { HistoryEmptyState } from './HistoryEmptyState';
import type { VideoHistoryItem } from '@/lib/types';

interface HistoryListProps {
    history: VideoHistoryItem[];
    onRemove: (videoId: string | number, source: string) => void;
}

export function HistoryList({ history, onRemove }: HistoryListProps) {
    return (
        <div className="flex-1 overflow-y-auto -mx-2 px-2" style={{
            transform: 'translate3d(0, 0, 0)',
            WebkitOverflowScrolling: 'touch'
        }}>
            {history.length === 0 ? (
                <HistoryEmptyState />
            ) : (
                <div className="space-y-3">
                    {history.map((item) => (
                        <HistoryItem
                            key={`${item.videoId}-${item.source}-${item.timestamp}`}
                            videoId={item.videoId}
                            source={item.source}
                            title={item.title}
                            poster={item.poster}
                            episodeIndex={item.episodeIndex}
                            episodes={item.episodes}
                            playbackPosition={item.playbackPosition}
                            duration={item.duration}
                            timestamp={item.timestamp}
                            onRemove={() => onRemove(item.videoId, item.source)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
