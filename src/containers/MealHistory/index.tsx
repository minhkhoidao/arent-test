import Button from '@/components/button'
import { memo } from 'react'
import MealCard from './MealCard'
import MealFilter from './MealFilter'
import { useMealHistory } from './useMealHistory'

export type TimeOfDay = 'Morning' | 'Lunch' | 'Dinner' | 'Snack'

const MealHistory = () => {
    const {
        meals,
        selectedType,
        hasMoreMeals,
        toggleMealType,
        loadMoreMeals,
    } = useMealHistory()

    return (
        <section className="meal-history">
            <MealFilter
                selectedType={selectedType}
                onTypeSelect={toggleMealType}
            />

            <div className="container mx-auto main-container mt-6 sm:mt-8 px-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
                    {meals.map((meal) => (
                        <MealCard
                            key={`${meal.date}-${meal.timeOfDay}`}
                            {...meal}
                        />
                    ))}
                </div>

                {hasMoreMeals && (
                    <div className="flex justify-center mt-6 mb-8 px-4">
                        <Button
                            variant="default"
                            size="lg"
                            className="text-white !rounded w-full max-w-[296px]"
                            onClick={loadMoreMeals}
                        >
                            記録をもっと見る
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default memo(MealHistory)