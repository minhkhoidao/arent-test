import { useState, useCallback } from 'react';

interface Diary {
    id: string;
    date: string;
    content: string;
}

const ITEMS_PER_PAGE = 8;
const MOCK_DIARY_CONTENT = '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…';

export const useDiaries = () => {
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [diaries, setDiaries] = useState<Diary[]>(() =>
        Array(ITEMS_PER_PAGE).fill(null).map((_, index) => ({
            id: `diary-${index}`,
            date: '2021.05.21 23:25',
            content: MOCK_DIARY_CONTENT,
        }))
    );

    const loadMore = useCallback(() => {
        const nextPage = page + 1;
        const startIndex = diaries.length;

        // For demo purposes, limit to 3 pages
        if (nextPage > 3) {
            setHasMore(false);
            return;
        }

        const newDiaries = Array(ITEMS_PER_PAGE).fill(null).map((_, index) => ({
            id: `diary-${startIndex + index}`,
            date: '2021.05.21 23:25',
            content: MOCK_DIARY_CONTENT,
        }));

        setDiaries(prev => [...prev, ...newDiaries]);
        setPage(nextPage);
    }, [page, diaries.length]);

    return {
        diaries,
        loadMore,
        hasMore,
    };
}; 