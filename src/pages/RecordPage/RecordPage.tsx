import BodyRecord from '@/containers/BodyRecord';
import DiarySection from '@/containers/Diary';
import ExerciseSection from '@/containers/Excercise';
import RecordCategory from '@/containers/RecordCategory';
import { FC } from 'react';


const RecordPage: FC = () => {
    return (
        <div className="container mx-auto main-container px-4 py-8 space-y-12">
            <RecordCategory />

            <section
                id="body-record-section"
                className="scroll-mt-16"
            >
                <BodyRecord />
            </section>

            <section
                id="exercise-section"
                className="scroll-mt-16"
            >
                <ExerciseSection />
            </section>

            <section
                id="diary-section"
                className="scroll-mt-16"
            >
                <DiarySection />
            </section>
        </div>
    );
};

export default RecordPage;