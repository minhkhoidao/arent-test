import { useQuery } from '@tanstack/react-query';
import { achievementAdapter, achievementKeys } from '@/adapters/achievement';
import type { AchievementMetrics } from '@/adapters/achievement';

export const useAchievementMetrics = () => {
    return useQuery<AchievementMetrics>({
        queryKey: achievementKeys.metrics(),
        queryFn: () => achievementAdapter.getAchievementMetrics(),
    });
};