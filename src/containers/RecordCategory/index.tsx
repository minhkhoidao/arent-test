import { FC } from 'react';
import { RecordCard } from './RecordCard';
import { useRecords } from '@/services/record';


const RecordCategory: FC = () => {
    const { records } = useRecords()

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
            {records.map((category) => (
                <RecordCard
                    key={category.id}
                    {...category}
                />
            ))}
        </section>
    );
};

export default RecordCategory;
