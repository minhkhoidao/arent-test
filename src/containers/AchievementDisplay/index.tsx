import CircularProgress from '@/components/circular-progress'
import achievementBg from '@/assets/images/d01.jpg'
import LineChart from '@/components/line-chart'
import { useAchievementMetrics } from '@/services/achievement'

const AchievementDisplay = () => {
    const { data: metrics } = useAchievementMetrics()
    const combinedChartData = metrics?.bodyFatPercentage.map((item, index) => ({
        name: item.name,
        bodyFat: item.value,
        weight: metrics.weightTrends[index].value
    }))

    console.log(metrics, "metrics")

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full bg-background-darker">
            <div className="relative h-[250px] md:h-[312px] overflow-hidden">
                <img
                    src={achievementBg}
                    alt="Achievement Background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <CircularProgress
                        value={metrics?.achievementRate ?? 0}
                        date="05/21"
                        width={150}
                        height={150}
                        color="#FFCC21"
                    />
                </div>
            </div>

            <div className="h-[250px] md:h-[312px] px-6 py-3">
                <LineChart
                    data={combinedChartData ?? []}
                    lines={['bodyFat', 'weight']}
                    showLegend={false}
                />
            </div>
        </div>
    )
}

export default AchievementDisplay