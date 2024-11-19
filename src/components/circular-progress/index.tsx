import { FC } from 'react'
import {
    PieChart as RechartsPieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts'

type CircularProgressProps = {
    value: number
    date: string
    width?: number
    height?: number
    color?: string
}

const DEFAULT_PROPS = {
    width: 1200,
    height: 600,
    color: '#FFCC21',
} as const

const CHART_CONFIG = {
    innerRadius: '75%',
    outerRadius: '80%',
    startAngle: 90,
    endAngle: -270,
    backgroundFill: '#ffffff15',
    dropShadow: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.2))',
} as const

const CircularProgress: FC<CircularProgressProps> = ({
    value,
    date,
    width = DEFAULT_PROPS.width,
    height = DEFAULT_PROPS.height,
    color = DEFAULT_PROPS.color,
}) => {
    const chartData = [
        { value },
        { value: 100 - value },
    ]

    return (
        <div style={{ width, height, position: 'relative' }}>
            <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={CHART_CONFIG.innerRadius}
                        outerRadius={CHART_CONFIG.outerRadius}
                        startAngle={CHART_CONFIG.startAngle}
                        endAngle={CHART_CONFIG.endAngle}
                        strokeWidth={0}
                        style={{ filter: CHART_CONFIG.dropShadow }}
                    >
                        <Cell fill={color} strokeWidth={0} />
                        <Cell fill={CHART_CONFIG.backgroundFill} strokeWidth={0} />
                    </Pie>
                </RechartsPieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center gap-2">
                <time className="text-white text-lg">{date}</time>
                <div className="text-white">
                    <span className="text-2xl font-bold">{value}</span>
                    <span className="text-lg">%</span>
                </div>
            </div>
        </div>
    )
}

export default CircularProgress