import Thumbnail1 from '@/assets/images/column-1.jpg';
import Thumbnail2 from '@/assets/images/column-2.jpg';
import Thumbnail3 from '@/assets/images/column-3.jpg';
import Thumbnail4 from '@/assets/images/column-4.jpg';
import Thumbnail5 from '@/assets/images/column-5.jpg';
import Thumbnail6 from '@/assets/images/column-6.jpg';
import Thumbnail7 from '@/assets/images/column-7.jpg';
import Thumbnail8 from '@/assets/images/column-8.jpg';
import { ColumnArticle } from '@/lib/types/column';
import { useCallback, useState } from 'react';

const ITEMS_PER_PAGE = 8;

const THUMBNAILS = [
    Thumbnail1,
    Thumbnail2,
    Thumbnail3,
    Thumbnail4,
    Thumbnail5,
    Thumbnail6,
    Thumbnail7,
    Thumbnail8,
];

export const useColumnArticles = () => {
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [articles, setArticles] = useState<ColumnArticle[]>(() =>
        Array(ITEMS_PER_PAGE).fill(null).map((_, index) => ({
            id: `article-${index}`,
            date: '2021.05.17',
            time: '23:25',
            title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA'],
            thumbnail: THUMBNAILS[index % THUMBNAILS.length],
        }))
    );

    const loadMore = useCallback(() => {
        const nextPage = page + 1;
        if (nextPage > 3) {
            setHasMore(false);
            return;
        }

        const newArticles = Array(ITEMS_PER_PAGE).fill(null).map((_, index) => ({
            id: `article-${articles.length + index}`,
            date: '2021.05.17',
            time: '23:25',
            title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
            tags: ['#魚料理', '#和食', '#DHA'],
            thumbnail: THUMBNAILS[(articles.length + index) % THUMBNAILS.length],
        }));

        setArticles(prev => [...prev, ...newArticles]);
        setPage(nextPage);
    }, [page, articles.length]);

    return {
        articles,
        loadMore,
        hasMore,
    };
}; 