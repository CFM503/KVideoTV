'use client';

import { TagManager } from '@/components/home/TagManager';
import { AdultContentGrid } from './AdultContentGrid';
import { useAdultTagManager } from '@/lib/hooks/useAdultTagManager';
import { useAdultContent } from '@/lib/hooks/useAdultContent';

interface AdultContentProps {
    onSearch?: (query: string) => void;
}

export function AdultContent({ onSearch }: AdultContentProps) {
    const {
        tags,
        selectedTag,
        newTagInput,
        showTagManager,
        justAddedTag,
        setSelectedTag,
        setNewTagInput,
        setShowTagManager,
        setJustAddedTag,
        handleAddTag,
        handleDeleteTag,
        handleRestoreDefaults,
        handleDragEnd,
    } = useAdultTagManager();

    // Get the category value from selected tag
    const categoryValue = tags.find(t => t.id === selectedTag)?.value || '';

    const {
        videos,
        loading,
        hasMore,
        prefetchRef,
        loadMoreRef,
    } = useAdultContent(categoryValue);

    const handleVideoClick = (video: any) => {
        if (onSearch) {
            onSearch(video.vod_name);
        }
    };

    return (
        <div className="animate-fade-in">
            <TagManager
                tags={tags}
                selectedTag={selectedTag}
                showTagManager={showTagManager}
                newTagInput={newTagInput}
                justAddedTag={justAddedTag}
                onTagSelect={(tagId) => {
                    setSelectedTag(tagId);
                }}
                onTagDelete={handleDeleteTag}
                onToggleManager={() => setShowTagManager(!showTagManager)}
                onRestoreDefaults={handleRestoreDefaults}
                onNewTagInputChange={setNewTagInput}
                onAddTag={handleAddTag}
                onDragEnd={handleDragEnd}
                onJustAddedTagHandled={() => setJustAddedTag(false)}
            />

            <AdultContentGrid
                videos={videos}
                loading={loading}
                hasMore={hasMore}
                onVideoClick={handleVideoClick}
                prefetchRef={prefetchRef}
                loadMoreRef={loadMoreRef}
            />
        </div>
    );
}
