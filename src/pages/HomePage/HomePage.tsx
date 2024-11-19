import AchievementDisplay from "@/containers/AchievementDisplay"
import MealHistory from "@/containers/MealHistory"

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <AchievementDisplay />
            <MealHistory />
        </div>
    )
}

export default HomePage