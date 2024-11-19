import { ColumnArticle } from '@/lib/types/column';
import { FC } from 'react';

interface ArticleCardProps {
    article: ColumnArticle;
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    return (
        <a
            href="/coming-soon"
            className="block space-y-2 transition-opacity hover:opacity-80"
        >
            <div className="relative aspect-[240/144]">
                <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
                <time className="absolute bottom-0 left-0 bg-primary-300 text-neutral-white px-2 py-1 text-[15px]">
                    {article.date} {article.time}
                </time>
            </div>
            <h3 className="text-[15px] line-clamp-2 text-neutral-dark">
                {article.title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                    <span key={tag} className="text-primary-300 text-[12px]">
                        {tag}
                    </span>
                ))}
            </div>
        </a>
    );
}; 