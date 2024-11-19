import { useQuery } from '@tanstack/react-query';
import { recordAdapter, recordKeys } from '@/adapters/records';
import type { RecordData } from '@/adapters/records';
import { chartAdapter, chartKeys } from '@/adapters/charts-record';

export const useRecords = () => {
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery<RecordData>({
        queryKey: recordKeys.categories(),
        queryFn: () => recordAdapter.getRecordCategories(),
    });


    return {
        records: data?.categories ?? [],
        isLoading,
        isError,
        error,
    };
};

export const useChartRecord = () => {
    return useQuery({
        queryKey: chartKeys.statistics(),
        queryFn: () => chartAdapter.getChartData(),
    });
};