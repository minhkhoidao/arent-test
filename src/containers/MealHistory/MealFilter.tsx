import HexagonButton from '@/components/hexagon-button'
import { CupIcon, KnifeIcon } from '@/lib/icons/icon'
import { FC, memo } from 'react'
import { TimeOfDay } from '.'

interface MealFilterProps {
    selectedType?: TimeOfDay | null
    onTypeSelect?: (type: TimeOfDay) => void
}

const MealFilter: FC<MealFilterProps> = memo(({ selectedType }) => {
    const filterButtons: Array<{ type: TimeOfDay; icon: JSX.Element; label: string }> = [
        { type: 'Morning', icon: <KnifeIcon className="text-2xl sm:text-3xl" />, label: 'Morning' },
        { type: 'Lunch', icon: <KnifeIcon className="text-2xl sm:text-3xl" />, label: 'Lunch' },
        { type: 'Dinner', icon: <KnifeIcon className="text-2xl sm:text-3xl" />, label: 'Dinner' },
        { type: 'Snack', icon: <CupIcon className="text-2xl sm:text-3xl" />, label: 'Snack' },
    ]

    return (
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-4 px-2 max-w-[90%] mx-auto">
            {filterButtons.map(({ type, icon, label }) => (
                <HexagonButton
                    key={type}
                    icon={icon}
                    label={label}
                    className={`scale-90 sm:scale-100 ${selectedType === type ? 'active' : ''}`}
                // onClick={() => onTypeSelect?.(type)}
                />
            ))}
        </div>
    )
})


export default MealFilter
