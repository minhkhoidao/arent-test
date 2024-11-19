import { useState, useMemo, useCallback } from 'react'
import meal1 from '@/assets/images/d01.jpg'
import meal2 from '@/assets/images/d02.jpg'
import meal3 from '@/assets/images/l01.jpg'
import meal4 from '@/assets/images/l02.jpg'
import meal5 from '@/assets/images/l03.jpg'
import meal7 from '@/assets/images/m01.jpg'
import meal8 from '@/assets/images/m02.jpg'
import meal9 from '@/assets/images/m03.jpg'
import meal6 from '@/assets/images/s01.jpg'

export type TimeOfDay = 'Morning' | 'Lunch' | 'Dinner' | 'Snack'

export interface Meal {
    imageUrl: string
    date: string
    timeOfDay: TimeOfDay
}

const MEALS_CONFIG = {
    ITEMS_PER_PAGE: 8,
    INITIAL_TYPE: null as TimeOfDay | null,
    MAX_ITEMS: 12,
} as const

const MEAL_HISTORY_DATA: Meal[] = [
    { imageUrl: meal1, date: '05.21', timeOfDay: 'Morning' },
    { imageUrl: meal2, date: '05.21', timeOfDay: 'Lunch' },
    { imageUrl: meal3, date: '05.21', timeOfDay: 'Dinner' },
    { imageUrl: meal4, date: '05.21', timeOfDay: 'Snack' },
    { imageUrl: meal5, date: '05.20', timeOfDay: 'Morning' },
    { imageUrl: meal6, date: '05.20', timeOfDay: 'Lunch' },
    { imageUrl: meal7, date: '05.20', timeOfDay: 'Dinner' },
    { imageUrl: meal8, date: '05.20', timeOfDay: 'Snack' },
    { imageUrl: meal9, date: '05.19', timeOfDay: 'Snack' },
    { imageUrl: meal8, date: '05.19', timeOfDay: 'Snack' },
    { imageUrl: meal7, date: '05.19', timeOfDay: 'Dinner' },
    { imageUrl: meal6, date: '05.19', timeOfDay: 'Lunch' },
    { imageUrl: meal5, date: '05.19', timeOfDay: 'Morning' },
]

interface UseMealHistoryReturn {
    meals: Meal[]
    selectedType: TimeOfDay | null
    hasMoreMeals: boolean
    toggleMealType: (type: TimeOfDay) => void
    loadMoreMeals: () => void
}

export const useMealHistory = (): UseMealHistoryReturn => {
    const [selectedType, setSelectedType] = useState<TimeOfDay | null>(MEALS_CONFIG.INITIAL_TYPE)
    const [isExpanded, setIsExpanded] = useState(false)

    const filteredMeals = useMemo(() => {
        const typeFiltered = selectedType
            ? MEAL_HISTORY_DATA.filter((meal) => meal.timeOfDay === selectedType)
            : MEAL_HISTORY_DATA;

        const uniqueMeals = typeFiltered.reduce((acc, current) => {
            const key = `${current.date}-${current.timeOfDay}`;
            if (!acc.some(meal => `${meal.date}-${meal.timeOfDay}` === key)) {
                acc.push(current);
            }
            return acc;
        }, [] as Meal[]);
        return uniqueMeals;
    }, [selectedType])


    const meals = useMemo(() =>
        isExpanded
            ? filteredMeals
            : filteredMeals.slice(0, MEALS_CONFIG.ITEMS_PER_PAGE),
        [filteredMeals, isExpanded]
    )

    const hasMoreMeals = useMemo(() => {
        if (isExpanded) return false
        return meals.length < filteredMeals.length
    }, [meals.length, filteredMeals.length, isExpanded])

    const toggleMealType = useCallback((type: TimeOfDay) => {
        setSelectedType(prev => prev === type ? null : type);
        setIsExpanded(false);
    }, [])

    const loadMoreMeals = useCallback(() => {
        setIsExpanded(true)
    }, [])

    return {
        meals,
        selectedType,
        hasMoreMeals,
        toggleMealType,
        loadMoreMeals,
    }
} 