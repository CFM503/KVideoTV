/**
 * PopularFeatures - Main component for popular movies section
 * Displays Douban movie recommendations with tag filtering and infinite scroll
 */

'use client';

import { TagManager } from './TagManager';
import { MovieGrid } from './MovieGrid';
import { useTagManager } from './hooks/useTagManager';
import { usePopularMovies } from './hooks/usePopularMovies';

interface PopularFeaturesProps {
  onSearch?: (query: string) => void;
}

export function PopularFeatures({ onSearch }: PopularFeaturesProps) {
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
  } = useTagManager();

  const {
    movies,
    loading,
    hasMore,
    prefetchRef,
    loadMoreRef,
  } = usePopularMovies(selectedTag, tags);

  const handleMovieClick = (movie: any) => {
    if (onSearch) {
      onSearch(movie.title);
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
          if (tagId === 'custom_色情' || tags.find(t => t.id === tagId)?.label === '色情') {
            window.location.href = '/secret';
            return;
          }
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

      <MovieGrid
        movies={movies}
        loading={loading}
        hasMore={hasMore}
        onMovieClick={handleMovieClick}
        prefetchRef={prefetchRef}
        loadMoreRef={loadMoreRef}
      />
    </div>
  );
}
