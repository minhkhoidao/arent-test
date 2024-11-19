import Typography from '@/components/typography'
import { cn } from '@/lib/utils/cn'
import { FC } from 'react'
import { TimeOfDay } from '.'

type MealCardProps = {
    imageUrl: string
    date: string
    timeOfDay: TimeOfDay
    className?: string
}

const MealCard: FC<MealCardProps> = ({ imageUrl, date, timeOfDay, className }) => {
    return (
        <div
            className={cn(
                'relative aspect-square w-full overflow-hidden',
                'group cursor-pointer transition-transform duration-200 hover:scale-[1.02]',
                className
            )}
        >
            <img
                src={imageUrl}
                alt={`${date} ${timeOfDay} meal`}
                className="w-full h-full object-cover"
            />

            <div className="absolute left-0 bottom-0 bg-primary-300 px-4 py-2">
                <Typography
                    as="span"
                    variant="body1"
                    className="font-medium text-neutral-white"
                >
                    {date}.{timeOfDay}
                </Typography>
            </div>
        </div>
    )
}

export default MealCard