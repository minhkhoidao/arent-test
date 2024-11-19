export interface ChartDataPoint {
    name: string;
    [key: string]: string | number;
}

export type BarChartProps = {
    data: ChartDataPoint[]
    width?: number
    height?: number
    className?: string
    bars?: string[]
    xAxisKey?: string
    showGrid?: boolean
    showTooltip?: boolean
    showLegend?: boolean
}

export type PieChartProps = {
    data: ChartDataPoint[]
    width?: number
    height?: number
    className?: string
    innerRadius?: number
    outerRadius?: number
    showTooltip?: boolean
    showLegend?: boolean
}

export interface ChartDataRecord {
    [key: string]: number | string;
    name: string;
    value: number;
    value2: number;
}

export interface ChartData {
    day: ChartDataRecord[];
    week: ChartDataRecord[];
    month: ChartDataRecord[];
    year: ChartDataRecord[];
}