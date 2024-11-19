import { FC } from 'react';
import Typography from '@/components/typography';
import ExerciseInfo from '../ExcerciseInfo';
import { useExercises } from './useExcercise';


const ExerciseSection: FC = () => {
    const { exercises, date } = useExercises();

    return (
        <div className="bg-background-dark p-4 md:p-6 rounded">
            <div className="flex items-center gap-6 mb-4">
                <Typography
                    as="h4"
                    variant="body2"
                    className="tracking-wider text-neutral-white"
                >
                    <span>MY</span> <br />
                    <span>EXERCISE</span>
                </Typography>
                <Typography as="h4" variant="h4" className="text-neutral-white">
                    {date}
                </Typography>
            </div>

            <ExerciseInfo
                entries={exercises}
                maxHeight="192px"
            />
        </div>
    );
};

export default ExerciseSection;