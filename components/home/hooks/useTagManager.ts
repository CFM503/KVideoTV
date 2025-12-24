import { useState, useEffect } from 'react';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

const DEFAULT_TAGS = [
    { id: 'popular', label: '热门', value: '热门' },
    { id: 'latest', label: '最新', value: '最新' },
    { id: 'classic', label: '经典', value: '经典' },
    { id: 'highscore', label: '豆瓣高分', value: '豆瓣高分' },
    { id: 'underrated', label: '冷门佳片', value: '冷门佳片' },
    { id: 'chinese', label: '华语', value: '华语' },
    { id: 'western', label: '欧美', value: '欧美' },
    { id: 'korean', label: '韩国', value: '韩国' },
    { id: 'japanese', label: '日本', value: '日本' },
    { id: 'action', label: '动作', value: '动作' },
    { id: 'comedy', label: '喜剧', value: '喜剧' },
    { id: 'variety', label: '综艺', value: '综艺' },
    { id: 'romance', label: '爱情', value: '爱情' },
    { id: 'scifi', label: '科幻', value: '科幻' },
    { id: 'thriller', label: '悬疑', value: '悬疑' },
    { id: 'horror', label: '恐怖', value: '恐怖' },
    { id: 'healing', label: '治愈', value: '治愈' },
];

const STORAGE_KEY = 'kvideo_custom_tags';

export function useTagManager() {
    const [selectedTag, setSelectedTag] = useState('popular');
    const [tags, setTags] = useState(DEFAULT_TAGS);
    const [newTagInput, setNewTagInput] = useState('');
    const [showTagManager, setShowTagManager] = useState(false);
    const [justAddedTag, setJustAddedTag] = useState(false);

    // Load custom tags from localStorage
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setTags(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse saved tags', e);
            }
        }
    }, []);

    const saveTags = (newTags: typeof DEFAULT_TAGS) => {
        setTags(newTags);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTags));
    };

    const handleAddTag = () => {
        if (!newTagInput.trim()) return;
        const newTag = {
            id: `custom_${Date.now()}`,
            label: newTagInput.trim(),
            value: newTagInput.trim(),
        };
        saveTags([...tags, newTag]);
        setNewTagInput('');
        setJustAddedTag(true);
    };

    const handleDeleteTag = (tagId: string) => {
        saveTags(tags.filter(t => t.id !== tagId));
        if (selectedTag === tagId) {
            setSelectedTag('popular');
        }
    };

    const handleRestoreDefaults = () => {
        saveTags(DEFAULT_TAGS);
        setSelectedTag('popular');
        setShowTagManager(false);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = tags.findIndex((tag) => tag.id === active.id);
            const newIndex = tags.findIndex((tag) => tag.id === over.id);
            saveTags(arrayMove(tags, oldIndex, newIndex));
        }
    };

    return {
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
    };
}
