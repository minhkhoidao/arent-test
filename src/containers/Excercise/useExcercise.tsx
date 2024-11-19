const EXERCISE_DATE = '2021.05.21';


export const useExercises = () => {
    const exercises = Array(8).fill(null).map(() => ({
        title: '家事全般（立位・軽い）',
        duration: '10 min',
        calories: 26,
    }));

    return {
        exercises,
        date: EXERCISE_DATE,
    };
};