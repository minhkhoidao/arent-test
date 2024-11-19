import { ChartDataPoint } from '@/lib/types/charts';

export interface AchievementMetrics {
    achievementRate: number;
    bodyFatPercentage: ChartDataPoint[];
    weightTrends: ChartDataPoint[];
}

export const achievementKeys = {
    all: ['achievements'] as const,
    metrics: () => [...achievementKeys.all, 'metrics'] as const,
} as const;

class AchievementAdapter {
    private static instance: AchievementAdapter;

    private constructor() { }

    public static getInstance(): AchievementAdapter {
        if (!AchievementAdapter.instance) {
            AchievementAdapter.instance = new AchievementAdapter();
        }
        return AchievementAdapter.instance;
    }

    async getAchievementMetrics(): Promise<AchievementMetrics> {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return {
                achievementRate: 75,
                bodyFatPercentage: [
                    { name: '6月', value: 85 },
                    { name: '7月', value: 75 },
                    { name: '8月', value: 55 },
                    { name: '9月', value: 45 },
                    { name: '10月', value: 40 },
                    { name: '11月', value: 35 },
                    { name: '12月', value: 30 },
                    { name: '1月', value: 25 },
                    { name: '2月', value: 20 },
                    { name: '3月', value: 15 },
                    { name: '4月', value: 12 },
                    { name: '5月', value: 10 },
                ],
                weightTrends: [
                    { name: '6月', value: 82 },
                    { name: '7月', value: 70 },
                    { name: '8月', value: 65 },
                    { name: '9月', value: 55 },
                    { name: '10月', value: 45 },
                    { name: '11月', value: 52 },
                    { name: '12月', value: 48 },
                    { name: '1月', value: 45 },
                    { name: '2月', value: 42 },
                    { name: '3月', value: 38 },
                    { name: '4月', value: 35 },
                    { name: '5月', value: 32 },
                ]
            };
        } catch (error) {
            console.error('Error fetching achievement metrics:', error);
            throw error;
        }
    }
}

export const achievementAdapter = AchievementAdapter.getInstance();