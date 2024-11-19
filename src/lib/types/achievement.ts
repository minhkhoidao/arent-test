export interface MetricDataPoint {
    name: string
    value: number
}

export interface AchievementMetrics {
    achievementRate: number
    bodyFatPercentage: MetricDataPoint[]
    weightTrends: MetricDataPoint[]
} 