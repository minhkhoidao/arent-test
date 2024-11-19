import Button from '@/components/button';
import { FC } from 'react';
import ColumnCategories from '../ColumnCategories';
import { ArticleCard } from './ArticleCard';
import { useColumnArticles } from './useArticle';

const Articles: FC = () => {
    const { articles, loadMore, hasMore } = useColumnArticles();

    return (
        <div className="container mx-auto px-4 py-8 space-y-12">
            <ColumnCategories />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center">
                    <Button
                        variant="default"
                        size="lg"
                        className="text-white !rounded w-full max-w-[296px]"
                        onClick={loadMore}
                    >
                        コラムをもっと見る
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Articles;
