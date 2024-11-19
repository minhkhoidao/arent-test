import bodyRecordImage from '@/assets/images/MyRecommend-1.jpg';
import exerciseImage from '@/assets/images/MyRecommend-2.jpg';
import diaryImage from '@/assets/images/MyRecommend-3.jpg';
import { RecordCategory } from '@/lib/types/records';

export interface RecordData {
    categories: RecordCategory[];
}

export const recordKeys = {
    all: ['records'] as const,
    categories: () => [...recordKeys.all, 'categories'] as const,
} as const;

class RecordAdapter {
    private static instance: RecordAdapter;

    private constructor() { }

    public static getInstance(): RecordAdapter {
        if (!RecordAdapter.instance) {
            RecordAdapter.instance = new RecordAdapter();
        }
        return RecordAdapter.instance;
    }

    async getRecordCategories(): Promise<RecordData> {
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            return {
                categories: [
                    {
                        id: 'body-record',
                        title: 'BODY RECORD',
                        subtitle: '自分のカラダの記録',
                        image: bodyRecordImage,
                        targetId: 'body-record-section'
                    },
                    {
                        id: 'exercise',
                        title: 'MY EXERCISE',
                        subtitle: '自分の運動の記録',
                        image: exerciseImage,
                        targetId: 'exercise-section'
                    },
                    {
                        id: 'diary',
                        title: 'MY DIARY',
                        subtitle: '自分の日記',
                        image: diaryImage,
                        targetId: 'diary-section'
                    }
                ]
            };
        } catch (error) {
            console.error('Error fetching record categories:', error);
            throw error;
        }
    }
}

export const recordAdapter = RecordAdapter.getInstance();