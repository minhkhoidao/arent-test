import { FC } from 'react';
import Button from '@/components/button';
import { useDiaries } from './useDiary';
import DiaryCard from './DiaryCard';



const DiarySection: FC = () => {
    const { diaries, loadMore, hasMore } = useDiaries();

    return (
        <div className="space-y-4">
            <h2 className="text-xl">MY DIARY</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {diaries.map((diary) => (
                    <DiaryCard key={diary.id} entry={diary} />
                ))}
            </div>

            {hasMore && (<div className="flex justify-center mt-6 mb-8">
                <Button
                    variant="default"
                    size="lg"
                    className="text-white !rounded w-full max-w-full md:max-w-[296px]"
                    onClick={loadMore}
                >
                    自分の日記をもっと見る
                </Button>
            </div>)}
        </div>
    );
};

export default DiarySection;