import { ColumnCategory } from "@/lib/types/column";

export const COLUMN_CATEGORIES: ColumnCategory[] = [
    {
        id: 'recommended',
        title: 'RECOMMENDED COLUMN',
        subtitle: 'オススメ',
        backgroundColor: '#2E2E2E',
    },
    {
        id: 'diet',
        title: 'RECOMMENDED DIET',
        subtitle: 'ダイエット',
        backgroundColor: '#2E2E2E',
    },
    {
        id: 'beauty',
        title: 'RECOMMENDED BEAUTY',
        subtitle: '美容',
        backgroundColor: '#2E2E2E',
    },
    {
        id: 'health',
        title: 'RECOMMENDED HEALTH',
        subtitle: '健康',
        backgroundColor: '#2E2E2E',
    },
];

export const useColumnCategories = () => {
    return {
        categories: COLUMN_CATEGORIES,
    };
}; 