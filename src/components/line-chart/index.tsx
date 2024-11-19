import { ChartDataPoint } from '@/lib/types/charts';
import { FC } from 'react';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart as RechartsLineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

export interface LineChartProps {
    data: ChartDataPoint[];
    className?: string;
    lines?: string[];
    xAxisKey?: string;
    showGrid?: boolean;
    showTooltip?: boolean;
    showLegend?: boolean;
}


const CHART_CONFIG = {
    colors: ['#FFCC21', '#8FE9D0'],
    margins: {
        left: 8,
        right: 8,
        top: 0,
        bottom: 0
    },
    grid: {
        stroke: '#777777',
        strokeDasharray: '0',
        vertical: true,
        horizontal: false
    },
    axis: {
        fill: '#FFFFFF',
        fontSize: 10,
        dy: 14
    },
    tooltip: {
        style: {
            backgroundColor: '#FFFFFF',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 12px',
        },
        textColor: '#2E2E2E'
    },
    line: {
        strokeWidth: 3,
        dot: {
            radius: 4,
            strokeWidth: 0
        },
        activeDot: {
            radius: 8,
            strokeWidth: 0
        }
    }
} as const

const LineChart: FC<LineChartProps> = ({
    data,
    className,
    lines = ['value'],
    xAxisKey = 'name',
    showGrid = true,
    showTooltip = true,
    showLegend = true,
}) => {
    return (
        <div className={`w-full h-full bg-background-darker ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart
                    data={data}
                    margin={CHART_CONFIG.margins}
                >
                    {showGrid && (
                        <CartesianGrid
                            vertical={CHART_CONFIG.grid.vertical}
                            horizontal={CHART_CONFIG.grid.horizontal}
                            stroke={CHART_CONFIG.grid.stroke}
                            strokeDasharray={CHART_CONFIG.grid.strokeDasharray}
                        />
                    )}
                    <XAxis
                        dataKey={xAxisKey}
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: CHART_CONFIG.axis.fill,
                            fontSize: CHART_CONFIG.axis.fontSize
                        }}
                        interval={'preserveStartEnd'}
                        dy={CHART_CONFIG.axis.dy}
                    />
                    <YAxis hide={true} />
                    {showTooltip && (
                        <Tooltip
                            contentStyle={CHART_CONFIG.tooltip.style}
                            itemStyle={{ color: CHART_CONFIG.tooltip.textColor }}
                            labelStyle={{
                                color: CHART_CONFIG.tooltip.textColor,
                                marginBottom: '4px'
                            }}
                        />
                    )}
                    {showLegend && (
                        <Legend
                            wrapperStyle={{ color: CHART_CONFIG.axis.fill }}
                            iconType="circle"
                        />
                    )}
                    {lines.map((line: string, index: number) => (
                        <Line
                            key={line}
                            type="monotone"
                            dataKey={line}
                            stroke={CHART_CONFIG.colors[index % CHART_CONFIG.colors.length]}
                            strokeWidth={CHART_CONFIG.line.strokeWidth}
                            dot={{
                                r: CHART_CONFIG.line.dot.radius,
                                fill: CHART_CONFIG.colors[index % CHART_CONFIG.colors.length],
                                strokeWidth: CHART_CONFIG.line.dot.strokeWidth
                            }}
                            activeDot={{
                                r: CHART_CONFIG.line.activeDot.radius,
                                fill: CHART_CONFIG.colors[index % CHART_CONFIG.colors.length],
                                strokeWidth: CHART_CONFIG.line.activeDot.strokeWidth
                            }}
                        />
                    ))}
                </RechartsLineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineChart