import { useChartRecord } from '@/services/record';
import { useState } from 'react';

type Period = '日' | '週' | '月' | '年';



const periodMap = {
    '日': 'day',
    '週': 'week',
    '月': 'month',
    '年': 'year',
} as const;

const useBodyRecords = () => {
    const { data } = useChartRecord();
    const [activePeriod, setActivePeriod] = useState<Period>('日');
    const periods = ['日', '週', '月', '年'] as const;

    const chartDatas = data?.data[periodMap[activePeriod]];

    return {
        activePeriod,
        setActivePeriod,
        chartData: chartDatas ?? [],
        periods,
    }
}

export default useBodyRecords;